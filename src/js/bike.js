//business logic
export default class BikeService { 
  static async getBike(id) {
    try {
      let url = `http://bikeindex.org/api/v3/search/count?manufacturer${id}&stolenness=stolen`;
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let newResponse = response.json();
      console.log(newResponse);
      return newResponse;
    }
    catch(error) {
      return error.message;
    } 
  }
}
