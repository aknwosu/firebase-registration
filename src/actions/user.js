import axios from 'axios'
import {GlobalStore} from './constants'
import { LOGIN_USER } from './actionTypes'
import firebase from '../firebase.js'; // <--- add this line


// export const loginUser = async => {
  export const loginUser = (email, password) => async (dispatch, getState) => {
    const itemsRef = firebase.database().ref('users');
    const u = {
      email, password
    }
  try { 
    // const user = await axios.post("")
    itemsRef.push(u);

    console.log(email, password)
let user = {}
    // const user = GlobalStore.getItem("User")
    dispatch ({
      type: LOGIN_USER,
      payload: {
        user,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchUser = (email, password) => async (dispatch, getState) => {
  console.log("started from teh buttsnlkf", email, password)
  const itemsRef = firebase.database().ref('items');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
        id: item,
        title: items[item].title,
        user: items[item].user
      });
    }
  })
}

export const registerUser = (email, password) => async (dispatch, getState) => {
  console.log("started from teh buttsnlkf", email, password)
return
}
function removeItem(itemId) {
  const itemRef = firebase.database().ref(`/items/${itemId}`);
  itemRef.remove();
}