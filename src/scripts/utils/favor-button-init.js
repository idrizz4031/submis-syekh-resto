import FavorRestoIdb from '../data/fav-resto-idb';
import { createFavoriteButton, createFavoritedButton } from '../views/templates/template-creator';


const FavorButtonInitiator = {
  async init({ FavorButtonContainer, resto }) {
    this._favorButtonContainer = FavorButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavorRestoIdb.getResto(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favorButtonContainer.innerHTML = createFavoriteButton();

    const favButton = document.querySelector('#favorite');
    favButton.addEventListener('click', async () => {
      await FavorRestoIdb.putRestaur(this._resto);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favorButtonContainer.innerHTML = createFavoritedButton();

    const favButton = document.querySelector('#favorited');
    favButton.addEventListener('click', async () => {
      await FavorRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

};

export default FavorButtonInitiator;