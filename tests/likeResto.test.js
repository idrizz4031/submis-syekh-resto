import FavorButtonInitiator from "../src/scripts/utils/favor-button-init";
import FavorRestoIdb from "../src/scripts/data/fav-resto-idb";

describe('Liking a Restaurant', () => {
    const addFavorContainer = () => {
        document.body.innerHTML = '<div id="favorButtonContainer"></div>';
    };

    beforeEach(() => {
        addFavorContainer();
    });

    it('should show the favorite button when the restaurant has not been liked before', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        });
        expect(document.querySelector('[aria-label="add favorite resto"]')).toBeTruthy();
    });

    it('should not show the unfavor button when the restaurant has not been favorited before', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        }); 
        expect(document.querySelector('[aria-label="added favorite resto"]')).toBeFalsy();
    });

    it('should be able to favorite the restaurant', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        });
        document.querySelector('#favorite').dispatchEvent(new Event('click'));

        const resto = await FavorRestoIdb.getResto(1);
        expect(resto).toEqual({ id: 1 });

        await FavorRestoIdb.deleteResto(1);
    });

    it('should not add a resturant again when its already favorited', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        });

        await FavorRestoIdb.putRestaur({ id: 1 });

        document.querySelector('#favorite').dispatchEvent(new Event('click'));
        expect(await FavorRestoIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

        await FavorRestoIdb.deleteResto(1);
    });

    it('should mot add a restaurant when it has no id', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {},
        });

        document.querySelector('#favorite').dispatchEvent(new Event('click'));

        expect(await FavorRestoIdb.getAllRestaurants()).toEqual([]);
    });
});