import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResult() {
    const key = "e5b22c4562bddbdccdd33511a148d585";
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const res = await axios(
      `${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
    );
    this.result = res.data.recipes;
  }
}
