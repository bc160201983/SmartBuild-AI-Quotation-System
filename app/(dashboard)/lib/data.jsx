import { Categories, Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

const TotalUsers = async () => {
  try {
    connectToDB();
    const count = await User.find().count();
    return count;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch total users!");
  }
};
const TotalProducts = async () => {
  try {
    connectToDB();
    const count = await Product.find().count();
    return count;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch total users!");
  }
};
const TotalCategories = async () => {
  try {
    connectToDB();
    const count = await Categories.find().count();
    return count;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch total users!");
  }
};
// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: TotalUsers(),
    change: 12,
  },
  {
    id: 2,
    title: "Products",
    number: TotalProducts(),
    change: -2,
  },
  {
    id: 3,
    title: "Categories",
    number: TotalCategories(),
    change: 18,
  },
];