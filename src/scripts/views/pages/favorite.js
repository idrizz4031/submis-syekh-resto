import FavorRestoIdb from '../../data/fav-resto-idb';
import { createUIItemResto } from '../templates/template-creator';



const Favorite = {
  async render() {
    return `
            <section class="galery">
                <div class="rec-resto">
                    <h3><u><b tabindex="0">Disini penelusuran favorit anda</b></u></h3>
                    <div class="catalog" id="RestoData">
                    </div>
                </div>
            </section>
        `;
  },


  async afterRender() {
    const restos = await FavorRestoIdb.getAllRestaurants();
    const restaurContainer = document.querySelector('#RestoData');

    restos.forEach((catalog) => {
      restaurContainer.innerHTML += createUIItemResto(catalog);
    });
  },
};

export default Favorite;