import { action, makeObservable, observable } from "mobx";
import DrinkProvider from "../providers/DrinkProvider";

class DrinkStore {

  alcohol = false;
  loading = false;
  data = [];
  error = null;

  constructor(props) {
    makeObservable(this, {
      alcohol: observable,
      loading: observable,
      data: observable.ref,
      error: observable,
      setLoading: action,
      setData: action,
      setError: action,
      toggleAction: action,
    });

    this.fetch();
  }

  fetch = async () => {
    console.log('fetch');
    this.setLoading(true);
    const { data, error, status } = await DrinkProvider.getAllDrinks({ alcohol: this.alcohol });
    if (data) {
      const drinks = data.map(d => ({ id: d.idDrink, name: d.strDrink, picture: d.strDrinkThumb }));
      this.setData(drinks);
    }
    this.setLoading(false);
  };

  toggleAction = () => {
    console.log('fetch');
    this.alcohol = this.alcohol ? false : true;
    this.fetch();
  }

  setLoading = (loading: boolean) => {
    this.loading = loading;
  };

  setData = (data) => {
    this.data = data;
  };

  setError = (error) => {
    this.error = error;
  };

}

const ObservableDrinkStore = props => new DrinkStore(props);
const drinkStore = new ObservableDrinkStore();

const getDrinkStore = () => drinkStore;

export default drinkStore;

export { drinkStore, getDrinkStore };
