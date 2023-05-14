import { topics } from "./data.js";

const $cardContainer = document.getElementById("cards");

console.log({ $cardContainer });

const ratingElements = (language, rate) => {
  console.log({ rate });
  const partialNumber = Math.abs(Math.floor(rate) - rate);
  const intRating = Math.floor(rate);
  const $ratingContainer = document.getElementById(`${language}-${rate}`);
  const complementRating = 5 - partialNumber;

  console.log({ $ratingContainer });
  for (let i = 0; i < intRating; i++) {
    $ratingContainer.innerHTML += `<ion-icon name="star"></ion-icon>`;
  }
  if (partialNumber > 0) {
    $ratingContainer.innerHTML += `<ion-icon name="star-half-outline"></ion-icon>`;
  }
  if (complementRating > 0) {
    $ratingContainer.innerHTML += `<ion-icon name="star-outline"></ion-icon>`;
  }
};

const createCardTemplate = ({ title, img, language, rating, author }) => `
    <div class="card">
      <div class="card-header">
        <img src="${img}" alt="${language}" />
      </div>
      <div class="card-body flex-col p-3">
        <h3 class="title text-sm">${title}</h3>
        <h4 className="text-md ">${language}</h4>
        <div class="rating-containers" id="${language}-${rating}"></div>
        <address class="author text-sm">
          Author: <a rel="author" href="/author/john-doe">${author}</a>
        </address>
      </div>
    </div>`;

topics.forEach((elmt) => {
  const template = createCardTemplate(elmt);
  $cardContainer.innerHTML += template;
});

// console.log({ $ratingContainer });
topics.forEach(({ language, rating }) => {
  ratingElements(language, rating);
});

const $itemsCountElmt = document.getElementById("topics-count");
$itemsCountElmt.innerHTML = `"${topics.length}" Web Topic${
  topics.length === 0 ? "" : "s"
} Found`;

