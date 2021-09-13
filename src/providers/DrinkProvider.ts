


const GET_ALL_ALCOHOLIC_DRINKS = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const GET_ALL_NON_ALCOHOLIC_DRINKS = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

const GET_DRINK_BY_ID = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=$ID";

export default class DrinkProvider {

  static getAllDrinks = async ({ alcohol = true }) => {
    let error = null;
    try {
      const URL = alcohol ? GET_ALL_ALCOHOLIC_DRINKS : GET_ALL_NON_ALCOHOLIC_DRINKS;
      const response = await fetch(URL);
      const responseData = await response.json();
      const data = responseData.drinks || [];
      return { status: response.status, error, data };
    }
    catch (e) {
      error = e;
    }
    return { error, data: null, status: null }
  }

  static getDrinkById = async ({ id }) => {
    let error = null;
    try {
      let url = GET_DRINK_BY_ID;
      url = url.replace("$ID", id);
      const response = await fetch(url);
      const responseData = await response.json();
      let data = null;
      if (responseData && responseData.drinks && responseData.drinks[0]) {
        data = responseData.drinks[0];
      }
      return { status: response.status, error, data };
    }
    catch (e) {
      error = e;
    }
    return { error, data: null, status: null }
  }

}

const getDrinkProvider = () => DrinkProvider;

export { DrinkProvider, getDrinkProvider };
