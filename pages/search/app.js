import loadParks from "../../modules/loadSearchedParks.js";
import stateArray from "../../modules/statesData.js";


function App(){
  let userState = (function userStateObject(){
    const userStateString = localStorage.getItem('stateSearched');
    for(let state of stateArray){
      if(state.code === userStateString){
        return state
      }
    }
  })(); 
  let userPark;
  loadParks(userState, userPark);
}

App(); 