import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses:[{
      id: uuid(),
      firstName: "Krushna",
      lastName: "Kulkarni",
      street: "Ganesh Nagar, Paud Road",
      district: "Pune",
      state: "Maharashtra",
      pinCode: "411057",
      phone: "1256394870"
  }, {
      id: uuid(),
      firstName: "Adarsh",
      lastName: "Balika",
      street: "Tirupati Colony, Pangri Road",
      district: "Beed",
      state: "Maharashtra",
      pinCode: "431122",
      phone: "9420101718"
  }]
  },
  {
    _id: uuid(),
    firstName: "Tanmay",
    lastName: "Bhatt",
    email: "tanmaybhatt@gmail.com",
    password: "tanmay123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses:[{
      id: uuid(),
      firstName: "Tanmay",
      lastName: "Bhatt",
      street: "Khar station Road",
      district: "Mumbai",
      state: "Maharashtra",
      pinCode: "4110004",
      phone: "1256394870"
  }, {
      id: uuid(),
      firstName: "Samay",
      lastName: "Raina",
      street: "Karve Nagar, Paud Road",
      district: "Pune",
      state: "Maharashtra",
      pinCode: "411057",
      phone: "1256394870"
  }, {
      id: uuid(),
      firstName: "Rohan",
      lastName: "Joshi",
      street: "Colaba Causeway, Colaba",
      district: "Mumbai",
      state: "Maharashtra",
      pinCode: "4110002",
      phone: "78946123074"
  }]
  },
];
