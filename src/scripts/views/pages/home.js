import databaseResto from '../../data/database-resto';
import { createUIItemResto } from '../templates/template-creator';



const Home = {
  async render() {
    return `
            <div class="main-base" id="MainBase"></div>
        
            <section class="galery">
                <div class="rec-resto">
                    <h3><u><b tabindex="0">Telusuri Restoran Favorit Anda</b></u></h3>
                    <div class="catalog" id="RestoData"></div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const RestoData = await databaseResto.homeResto();

    /* const MainBaseContainer = document.querySelector('#MainBase');
        MainBaseContainer.innerHTML += getJumbotron; */

    const ContainerResto = document.querySelector('#RestoData');

    RestoData.forEach((resto) => {
      ContainerResto.innerHTML += createUIItemResto(resto);
    });

  },
};

export default Home;