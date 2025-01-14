import CONFIG from '../../globals/config';


const createUIItemResto = (resto) => `
    <div id="catalog">
    <img 
      class="lazyload catalog-item" 
      src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
      alt="${resto.name}"
      title="${resto.name}"
      crossorigin="anonymous" 
    >
    <div tabindex="0" class="rate" aria-label="result">
      <i class="rate-star"></i>
        ${resto.rating}
    </div>
    <div class="list-catalog">
      <p class="resto-city">
        <a href="#" class="catalog-value" aria-label="Alamat">
          <i class="reveal-star"></i>
          ${resto.city}
        </a>
      </p>
      <h1 class="title-catalog">
        <a href="${`/#/detail/${resto.id}`}" aria-label="${resto.name}">
          ${resto.name}
        </a>
      </h1>
      <div tabindex="0" class="desc-catalog">
        ${resto.description.slice(0, 180)}...
      </div>
    </div>
</div>
`;


const createUIDetailItemResto = (resto) => `
<div class="detail-list">
  <div>
    <img 
      class="pic-detail" 
      src="${CONFIG.BASE_IMAGE_URL + resto.restaurant.pictureId}" 
      alt="${resto.restaurant}"
      crossorigin="anonymous"
      >
  </div>
  <div class="info-detail">
      <h2 tabindex="0" class="info-name">${resto.restaurant.name}</h2>
      <p>${resto.restaurant.address}</p>
        <div class="city-rating">
          <div tabindex="0" class="city-exp">
            <p class="exp-city"><i class="to-city">${resto.restaurant.city}</i></p>
          </div>
          <div tabindex="0" class="score-detail">
            <p class="exp-detail"><i class="to-score">${resto.restaurant.rating}</i></p>
          </div>
        </div>
  
      <div class="category">
        <h4>Category:</h4>
          <div class="this.category">
            ${resto.restaurant.categories.map((categorie) => `
              <span tabindex="0" class="restaurant-categorie">${categorie.name}</span>
            `).join('')}
          </div>
      </div>

    <h3 tabindex="0" class="menu-title">Menu Makanan:</h3>
    <div class="menu-list">
        ${resto.restaurant.menus.foods.map((food) => `
          <li>${food.name}</li>`).join('')}
    </div>

    <h3 tabindex="0" class="menu-title">Menu Minuman:</h3>
    <div class="menu-list">
        ${resto.restaurant.menus.drinks.map((drink) => `
          <li>${drink.name}</li>`).join('')}
    </div>
  </div>
</div>

<div class="desc-part">
  <h2 tabindex="0" class="title-part">Description:</h2>
  <button tabindex="0" class="btn">Click Description</button>
  <p tabindex="0" class="pad-part">${resto.restaurant.description}</p>
  <h2 tabindex="0" class="judul-review">Review:</h2>
  <div class="review-resto">
    ${resto.restaurant.customerReviews.map((review) => `
      <div class="get-review">
        <div class="all-review">
          <p tabindex="0">${review.name}</p>
          <h5 tabindex="0" class="exp-city">${review.date}</h5>
        </div>
        <div class="all-review">
          <p tabindex="0" class="exp-review">${review.review}</p>
        </div>
      </div>
    `).join('')}
  </div>
</div>
`;

const createFavoriteButton = () => `
  <input aria-label="add favorite resto" type="checkbox" name="favorite-checkbox" value="favorite-button">
    <label for="favorite" class="container" id="favorite">
    <svg xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" stroke-width="2" 
         stroke-linecap="round" stroke-linejoin="round" 
         class="feather feather-heart">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
      <div class="action">
        <span class="option-1">Add to Favorites</span>
        <span class="option-2">Added to Favorites</span>
      </div>
    </label>
</div>
`;

const createFavoritedButton = () => `
  <input aria-label="added favorite resto" type="checkbox" checked="checked" name="favorite-checkbox" value="favorite-button">
    <label for="favorite" class="container" id="favorited">
    <svg xmlns="http://www.w3.org/2000/svg" 
         width="24" 
         height="24" 
         viewBox="0 0 24 24" fill="none" 
         stroke="currentColor" stroke-width="2" 
         stroke-linecap="round" stroke-linejoin="round" 
         class="feather feather-heart">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
      <div class="action">
        <span class="option-2">Added to Favorites</span>
        <span class="option-1">Add to Favorites</span>
      </div>
    </label>
</div>
`;

export {
  createUIItemResto,
  createUIDetailItemResto,
  createFavoriteButton,
  createFavoritedButton,
};