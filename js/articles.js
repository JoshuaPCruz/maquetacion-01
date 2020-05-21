import { articlesMock } from "./articlesMock.js";

const render = () => {
  return articlesMock
    .map(
      ({ date, author, comments, article: { title, description } }) => `
      <div class="articles_item">
      <div>
        <ul class="articles_item_info">
          <li>${date}</li>
          <li>Por <a href="/">${author}</a></li>
          <li>${comments} comentarios</li>
        </ul>
      </div>
      <div>
        <h2 class="articles_item_title">${title}</h2>
        <p class="articles_item_description">
         ${description}
        </p>
        <a href="/">Leer más</a>
      </div>
    </div>
    `
    )
    .join("");
};

document.getElementById("articles").insertAdjacentHTML("beforeend", render());
