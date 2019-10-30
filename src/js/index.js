import Search from "./models/search";
import { elements } from "./views/base";
import * as searchView from "./views/searchView";

/*Global state of the app
 *-search object
 *-current recipe object
 *-shopping list object
 *-Liked recipes
 */

const state = {};

const controlSearch = async () => {
  //1 get query from view
  const query = searchView.getInput();
  console.log(query);

  if (query) {
    //2 New search object and add it to state
    state.search = new Search(query);

    //3 Prepare Ui for results
    searchView.clearInput();
    searchView.clearResults();
    //4 search for recipes
    await state.search.getResult();

    //5 render reseat on UI
    searchView.renderRecipes(state.search.result);
  }
};

elements.searchFrom.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

const search = new Search("pizza");
console.log(search);
