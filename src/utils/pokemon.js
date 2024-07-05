export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      // 以下の処理について改めて調査
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
};
