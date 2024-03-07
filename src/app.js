/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adjective = ["tasty", "marvelous"];
  let noun = ["skynet", "ashes"];
  let extension = [".com", ".net", ".es"];

  const showArrayVertical = array => array.map(item => item + "<br>").join("");

  document.getElementById("pronoun").innerHTML = showArrayVertical(pronoun);
  document.getElementById("adjective").innerHTML = showArrayVertical(adjective);
  document.getElementById("noun").innerHTML = showArrayVertical(noun);
  document.getElementById("extension").innerHTML = showArrayVertical(extension);

  const removeDot = domainExtension => {
    let newDomainExtension = domainExtension.slice(1); // quito el punto de la extension
    return newDomainExtension;
  };

  const generateDomainHacks = (domainNoun, domainExtension) => {
    let domainExtensionWithoutDot = removeDot(domainExtension);
    if (domainNoun.endsWith(domainExtensionWithoutDot) == true) {
      // compruebo si coincide el final del nombre con la extension sin el punto
      let newdomainNoun = domainNoun.slice(
        0,
        -domainExtensionWithoutDot.length
      ); // si coincide creo nuevo nombre sin las ultimas letras de la extension
      return newdomainNoun; // devuelvo el nuevo nombre
    } else return domainNoun; // sino coincide, devuelvo el nombre tal cual sin cambiar
  };

  // genera todos los posibles dominios

  const createDomains = () => {
    let domains = "";
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adjective.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let m = 0; m < extension.length; m++) {
            let newNoun = generateDomainHacks(noun[k], extension[m]);
            if (newNoun == noun[k]) {
              domains += `${pronoun[i]}${adjective[j]}${newNoun}${extension[m]}<br>`;
            } else if (newNoun != noun[k]) {
              domains += `<b>${pronoun[i]}${adjective[j]}${newNoun}${extension[m]}</b><br>`; // si son domain hacks, ponerlo en negrita
            }
          }
        }
      }
    }
    return domains;
  };

  // Obtén una referencia al botón por su ID
  let button = document.getElementById("generatorButton");

  // Obtén una referencia al elemento donde mostrarás los resultados
  let resultingDomains = document.getElementById("generatedDomains");

  // Asigna un manejador de eventos al botón
  button.addEventListener("click", function() {
    // Llama a la función createDomains y muestra los resultados
    resultingDomains.innerHTML = createDomains();
  });
};
