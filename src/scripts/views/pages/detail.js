import UrlParser from '../../routes/url-parser';
import databaseResto from '../../data/database-resto';
import { createUIDetailItemResto } from '../templates/template-creator';
import FavorButtonInitiator from '../../utils/favor-button-init';

function generateStarRating(rating) {
  const maxStars = 5;
  const fullStars = Math.floor(rating); // Jumlah bintang penuh
  const hasHalfStar = rating % 1 !== 0; // Ada setengah bintang
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Sisa bintang kosong

  let starsHtml = '';

  // Tambahkan bintang penuh
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fa fa-star full-star"></i>';
  }

  // Tambahkan setengah bintang
  if (hasHalfStar) {
    starsHtml += '<i class="fa fa-star-half-alt half-star"></i>';
  }

  // Tambahkan bintang kosong
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="fa fa-star empty-star"></i>';
  }

  return starsHtml;
}

const Detail = {
  async render() {
    return `
            <div class="resto-detail" id="DetailResto"></div>
            <div id="favorButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await databaseResto.detailResto(url.id);
    const ContainerResto = document.querySelector('#DetailResto');
    ContainerResto.innerHTML = createUIDetailItemResto(resto);

    FavorButtonInitiator.init({
      FavorButtonContainer: document.querySelector('#favorButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
        address: resto.restaurant.address,
        city: resto.restaurant.city,
      },
    });

    const btnDescription = document.querySelector('.desc-part .btn');
    const descriptionContent = document.querySelector('.pad-part');

    btnDescription.addEventListener('click', (event) => {
      event.preventDefault();

      // Toggle deskripsi
      if (descriptionContent.classList.contains('active')) {
        descriptionContent.classList.remove('active'); // Sembunyikan
      } else {
        descriptionContent.classList.add('active'); // Tampilkan
      }
    });

    const starRatingContainer = document.querySelector('.score-detail');
    const ratingHtml = generateStarRating(resto.restaurant.rating);
    starRatingContainer.insertAdjacentHTML('beforeend', `<div class="star-rating">${ratingHtml}</div>`);

  },
};


export default Detail;