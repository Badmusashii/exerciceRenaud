function sayHi() {
  return "hello";
}

// Je laisse mes logs en commentaires

/* J'ai voulu tester ma fonction avec tous les types possible
d'ou la longeur de la fonction, desolé :)
Si à la base tu avait interdit les boucle, c'est (je pense)
que tu voulais un reduce(), pas tres habitué au reduce donc galère */
function categorize(values) {
  let newObject = {};
  console.log(
    values.reduce((acc, value) => {
      //   console.log(value);
      //   console.log(typeof value);
      const type = typeof value;

      if (!acc[type]) {
        acc[type] = [];
      }
      //   console.log(acc[type]);
      if (type === "function") {
        // console.log("Fonction trouvé !");
        value.name
          ? acc[type].push(value.name)
          : acc[type].push("Fonction anonyme");
      } else if (type === "object") {
        // console.log("Objet Trouvé !");
        // null sera mis dans les objets
        acc[type].push(value);
      } else if (type === "undefined") {
        acc[type].push("undefined");
      } else {
        acc[type].push(value);
      }
      return acc;
    }, newObject)
  );
}

/* J'ai voulu essayer avec une boucle,
mais je repete un peu le meme code qu'avec le reduce() */
function categorize2(values) {
  let newObject = {};
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    // console.log(values[i]);
    console.log(typeof values[i]);
    let type = typeof values[i];
    if (!newObject[type]) {
      newObject[type] = [];
    }
    if (type === "function") {
      console.log("fonction trouvé !");
      console.log(values[i]);
      console.log(values[i].name);
      values[i].name
        ? newObject[type].push(values[i].name)
        : newObject[type].push("Fonction anonyme");
    } else {
      newObject[type].push(values[i]);
    }
  }
  return newObject;
}

/* J'ai voulu essayer avec tous les type possible et le plus de cas
ex... fonction anonyme */
console.log(
  categorize2([
    1,
    "hello",
    sayHi,
    "world",
    true,
    0n,
    1000,
    undefined,
    null,
    function () {},
    { obj: "coucou" },
  ])
);

// Test pour toucher le prototype de Array
Array.prototype.coucou = function () {
  console.log("coucou passé par le tableau");
};
const newArray = [1, 2, 3, 3, 3];
console.log(newArray.coucou());
//------------------------------------------

Array.prototype.dedup = function () {
  return this.filter((item, index) => this.indexOf(item) === index);
};

console.log(newArray.dedup());

/* Voila ce que je peut rendre en 1h30
Mais j'ai un besoin de tester plusieurs solution
pour bien les integrer */
