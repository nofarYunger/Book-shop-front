import axios from "axios";

const BASE_URL = "http://localhost:3030/api";

export const userService = {
  login,
  signup,
  updCart,
};

async function login(user) {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, {
      email: user.email,
      password: user.password,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

async function signup(user) {
  try {
    const res = await axios.post(`${BASE_URL}/auth/register`, user);
    console.log(res);
    return res;
  } catch (err) {
    console.log("couldnt find user", err);
  }
}
// const { orderId, itemId, bookId, diff } = req.body;
//The diff parameter is if the uesr want to change the quantity of the item in their cart
async function updCart(orderId, bookId, diff) {
  try {
    await axios.post(`${BASE_URL}/order/${bookId}`, {
      diff,
      bookId,
      orderId,
    });
  } catch (err) {
    console.log(err);
  }
}




async function _getUser(id) {
  const res = await axios.get(`${BASE_URL}/auth/users/${id}`);
  return res;
}
