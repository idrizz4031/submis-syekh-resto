import FavorButtonInitiator from "../src/scripts/utils/favor-button-init";
import FavorRestoIdb from "../src/scripts/data/fav-resto-idb";

describe('Unliking a restaurant', () => {
    const addFavorContainer = () => {
        document.body.innerHTML = '<div id="favorButtonContainer"></div>';
    };

    beforeEach(async() => {
        addFavorContainer();
        await FavorRestoIdb.putRestaur({ id: 1 });
    });

    afterEach(async () => {
        await FavorRestoIdb.deleteResto(1);
    });

    it('should display unfavorite widget when the restaurant has been favorited', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="added favorite resto"]')).toBeTruthy();
    });

    it('should not display favorite widget when the movie has been favorited', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="add favorite resto"]')).toBeFalsy();
    });

    it('should be able to remove favorited restaurant from the list', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        });

        document.querySelector('#favorited').dispatchEvent(new Event('click'));

        expect(await FavorRestoIdb.getAllRestaurants()).toEqual([]);
    });

    it('should not throw error when user click favorited widget if the unfavorited restaurant is not the list', async () => {
        await FavorButtonInitiator.init({
            FavorButtonContainer: document.querySelector('#favorButtonContainer'),
            resto: {
                id: 1,
            },
        });

        await FavorRestoIdb.deleteResto(1);

        document.querySelector('[aria-label="added favorite resto"]').dispatchEvent(new Event('click'));
        expect(await FavorRestoIdb.getAllRestaurants()).toEqual([]);
    });
});