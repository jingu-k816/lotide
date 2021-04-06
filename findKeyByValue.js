const findKeyByValue = function(objectOfMovies, nameOfTheMovie) {
  const genres = Object.keys(objectOfMovies);

  for (const keyName of genres) {
    if (nameOfTheMovie === objectOfMovies[keyName]) {
      return keyName;
    }
  }
};

module.exports = findKeyByValue;