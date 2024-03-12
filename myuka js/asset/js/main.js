const codeB = document.getElementById("codeBarre");
const bouton = document.getElementById("bouton");
const photo = document.getElementById("Photos");
const ingredients = document.getElementById("Ingerdients");
const allergenes = document.getElementById("allergenes");
const nutriscores = document.getElementById("NUTRISCORE");
const nova = document.getElementById("NOVA");
const info = document.getElementById("info");
const palm = document.getElementById("HUILE");
const titre = document.getElementById("titre");
const marque = document.getElementById("marque");
const cbarre = document.getElementById("cbarre");
const nutriments = document.getElementById("valnutri");

bouton.addEventListener("click", recherche);
function recherche() {
  axios
    .get("https://world.openfoodfacts.org/api/v2/product/" + codeB.value)
    .then(function (response) {
      console.log(response);
      let nom = response.data.product.product_name;
      titre.innerHTML = "<strong>NOM " + "<br>" + nom + "</strong>";
      let codebarre = response.data.product.code;
      cbarre.innerHTML =
        "<strong>CODE BARRE" + "<br>" + codebarre + "</strong>";
      let marqu = response.data.product.brands;
      marque.innerHTML =
        "<strong>INFORMATION MARQUE" + "<br>" + marqu + "</strong>";

      let ingre = response.data.product.ingredients_text;
      ingredients.innerHTML =
        "<strong>INGREDIENTS" + "<br>" + "<li>" + ingre + "</li>" + "</strong>";
     
      let nutrim = [response.data.product.image_nutrition_small_url];

      nutriments.innerHTML =
        "<strong> NUTRIMENTS </strong>" + "<img src=" + nutrim + ">";

      let pho = response.data.product.image_front_small_url;
      photo.innerHTML = "<strong> PHOTOS </strong>" + "<img src=" + pho + ">";

      let allerg = response.data.product.allergens;
      allergenes.innerHTML =
        "<strong>ALLERGENES" + "<br>" + allerg + "</strong>";

      let nutri = response.data.product.nutriscore_grade;
      nutriscores.innerHTML =
        "<strong>NUTRISCORE" + "<br>" + nutri + "</strong>";

      let nov = response.data.product.nova_group;
      nova.innerHTML = "<strong>NOVA" + "<br>" + nov + "</strong>";

      let huile = response.data.product.ingredients.find(
        (element) => element.id === "en:palm-oil"
      );
      palm.innerHTML =
        "<strong>HUILE DE PALME" +
        "<br>" +
        (huile ? "Présente" : "Non présente") +
        "</strong>";
      let condi = response.data.product.packaging;
      let pays = response.data.product.countries_imported;
      let fabric = response.data.product.brands;
      let inf = response.data.product.stores;
      info.innerHTML =
        "<strong>INFO DISTRIBUTEUR" +
        "<br>" +
        inf +
        "<br>" +
        " FABRICANT" +
        "<br>" +
        fabric +
        "<br>" +
        "PAYS" +
        "<br>" +
        pays +
        "<br>" +
        "CONDITIONEMENT" +
        "<br>" +
        condi;
      ("</strong>");
    })
    .catch(function (error) {
      console.log(error);
    });
}
