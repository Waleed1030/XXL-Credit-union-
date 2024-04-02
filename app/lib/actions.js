"use server";
import { User, Transaction, Settings, Cards } from "./models";

import { connectDB } from "./utils";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "@/app/api/auth/[...nextauth]/auth";
import bcrypt from "bcryptjs";


//Logout Function
export const logout = async () => {

  await signOut();
  
  redirect("/login");
}



/* ====   ADMIN ACTIONS   ==== */

//Add New User Action
export const addUser = async (formData) => {
  const {
    username,
    email,
    password,
    firstname,
    lastname,
    phone,
    sex,
    dob,
    country,
    currency,
    account_type,
    imf,
    cot,
    tax,
    address,
    pin,
    img,
    canTransfer,
    withdraw_method,
    t_balance,
    a_balance
  } = Object.fromEntries(formData);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const startingBalance = () => {
    return Math.floor(Math.random() * 0);
  };

  try {
    connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const account_number = randomNumber(7000000000, 9906459999);

    const newUser = new User({
      username,
      email,
      firstname,
      lastname,
      phone,
      sex,
      country,
      currency,
      password: hashedPassword,
      account_number,
      account_type,
      imf,
      cot,
      tax,
      address,
      pin,
      dob,
      img,
      withdraw_method,
      canTransfer,
      t_balance,
      a_balance
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//Delete User Function
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to delete User!",
    };
  }

  revalidatePath("/dashboard/users");
};

//Delete Transaction Function
export const deleteTransaction = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await Transaction.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to delete Transaction!",
    };
  }

  revalidatePath("/dashboard/transactions/");
};

//Delete Card Function
export const deleteCard = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await Cards.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to delete Card!",
    };
  }

  revalidatePath("/dashboard/cards");
};

//Update User Info Function
export const updateUser = async (formData) => {
  const {
    id,
    username,
    email,
    firstname,
    lastname,
    phone,
    sex,
    country,
    currency,
    password,
    account_number,
    account_type,
    imf,
    cot,
    tax,
    address,
    pin,
    dob,
    canTransfer,
    withdraw_method,
    t_balance,
    a_balance
  } = Object.fromEntries(formData);

  try {
    connectDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const updateFields = {
      username,
      email,
      firstname,
      lastname,
      phone,
      sex,
      country,
      currency,
      password: hashedPassword,
      account_number,
      account_type,
      imf,
      cot,
      tax,
      address,
      pin,
      dob,
      canTransfer,
      withdraw_method,
      t_balance,
      a_balance
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

//Update Transaction Info Function
export const updateTransaction = async (formData) => {
  const {
    id,
    username,
    email,
    currency,
    type,
    depositType,
    network,
    amount,
    status,
    newDate,
    remarks,
    bank_name,
    account_name,
    account_number,
    routing_number,
    swift,
  } = Object.fromEntries(formData);

  try {
    connectDB();

    const updateFields = {
      id,
      username,
      email,
      currency,
      type,
      depositType,
      network,
      amount,
      status,
      remarks,
      bank_name,
      swift,
      account_name,
      account_number,
      routing_number,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    const oldInfo = await Transaction.findById(id);
    if (newDate) {
      await Transaction.findOneAndReplace(
        { _id: oldInfo._id },
        { createdAt: new Date(`${newDate}`) },
        { new: true }
      );
      delete oldInfo._id;

      await Transaction.findByIdAndUpdate(id, updateFields);
      await Transaction.findByIdAndUpdate(id, oldInfo);
      await Transaction.findByIdAndUpdate(id, updateFields);
    } else {
      await Transaction.findByIdAndUpdate(id, updateFields);
    }
  } catch (error) {
    console.log(error);
    return { error: "Failed to Update Transaction" };
  }

  revalidatePath("/dashboard/transactions");
  redirect("/dashboard/transactions/");
};

//Update Website Settings
export const updateSettings = async (formData) => {
  const {
    site_name,
    about,
    site_url,
    email,
    address,
    phone,
    wallet,
    bank_name,
    swift,
    routing_number,
    account_number,
    withdraw_method,
  } = Object.fromEntries(formData);

  try {
    connectDB();
    const updateFields = {
      site_name,
      about,
      site_url,
      email,
      address,
      phone,
      wallet,
      bank_name,
      swift,
      routing_number,
      account_number,
      withdraw_method,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    await Settings.findOneAndUpdate(updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Update Settings");
  }

  revalidatePath("/dashboard/settings");
  redirect("/dashboard");
};

//Update Card Info
export const updateCard = async (formData) => {
  const { id, username, name, number, status, expiry, cvc } =
    Object.fromEntries(formData);

  try {
    connectDB();
    const updateFields = {
      id,
      username,
      name,
      number,
      status,
      expiry,
      cvc,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    //console.log("Logging card from actions:", updateFields)

    await Cards.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Update Card");
  }

  revalidatePath("/dashboard/cards");
  redirect("/dashboard/");
};

//Credit User
export const creditUser = async (prevState, formData) => {
  const { username, amount, type, remark } = Object.fromEntries(formData);
  //console.log("New amount:", amount);

  const regex = new RegExp(username, "i");

  try {
    connectDB();
    const user = await User.findOne({ username: { $regex: regex } });
    //console.log("user before:", user);
    const newBalance = Number(user.a_balance) + Number(amount);

    await User.findOneAndUpdate(
      { username: { $regex: regex } },
      { a_balance: Number(newBalance), t_balance: Number(newBalance) }
    );

    const updateduser = await User.findOne({ username: { $regex: regex } });
    return "successful"
    //console.log("user after:", updateduser);

  } catch (error) {
    throw new Error(error);
  } finally {
    const newTransaction = new Transaction({
      username,
      amount,
      type,
      remark,
    });

    //console.log("New Transaction:", newTransaction)

    await newTransaction.save();
  }

  revalidatePath("/dashboard");
  redirect("/dashboard/");
};

//Debit User
export const debitUser = async (prevState, formData) => {
  const { username, amount, type, remark } = Object.fromEntries(formData);
  //console.log("New amount:", amount);

  const regex = new RegExp(username, "i");

  try {
    connectDB();
    const user = await User.findOne({ username: { $regex: regex } });
    //console.log("user before:", user);
    const newBalance = Number(user.a_balance) - Number(amount);

    await User.findOneAndUpdate(
      { username: { $regex: regex } },
      { a_balance: Number(newBalance), t_balance: Number(newBalance) }
    );

    const updateduser = await User.findOne({ username: { $regex: regex } });
    return "successful"
   // console.log("user after:", updateduser);
  } catch (error) {
    throw new Error(error);
  } finally {
    const newTransaction = new Transaction({
      username,
      amount,
      type,
      remark,
    });

    //console.log("New Transaction:", newTransaction)

    await newTransaction.save();
  }

  revalidatePath("/dashboard");
  redirect("/dashboard/");
};



//Upload Images Function
export const uploadPhoto = async ({ id, img }) => {
  //console.log('logging id from actions:',id, img)

  try {
    connectDB();
    await User.findByIdAndUpdate(id, { img: img });
  } catch (error) {
    throw new Error(error);
  }

  revalidatePath("/dashboard/settings");
  redirect("/dashboard/");
};

/* ====   USER ACTIONS   ==== */

//Login Function
export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return "Password/Username Incorrect!";
    }
  }
  redirect("/dashboard");
};

//Deposit Function
export const deposit = async (formData) => {
  const {
    username,
    amount,
    depositType,
    type,
    status,
    network,
    address,
    currency,
    email,
  } = Object.fromEntries(formData);

  try {
    connectDB();
    const newTransaction = new Transaction({
      username,
      amount,
      depositType,
      type,
      status,
      network,
      address,
      currency,
      email,
    });

    await newTransaction.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/transactions/");
  revalidatePath("/dashboard/");
  redirect("/dashboard");
};

//Generate Card Function
export const createCard = async (formData) => {
  const { number, username, expiry, cvc, name } = Object.fromEntries(formData);

  try {
    connectDB();
    const newCard = new Cards({
      number,
      expiry,
      cvc,
      username,
      name,
    });
    // console.log(newCard)

    await newCard.save();
    console.log("Card generation successful");
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/cards/");
  revalidatePath("/dashboard/");
  redirect("/dashboard");
};

///Transfer Function
export const transfer = async (prevState, formData) => {
  const {
    username,
    pin,
    cot,
    amount,
    account_name,
    account_number,
    routing_number,
    bank_name,
    swift,
    remarks,
    type,
    status,
  } = Object.fromEntries(formData);

  const regex = new RegExp(username, "i");

  try {
    const newTransfer = new Transaction({
      username,
      amount,
      account_name,
      account_number,
      routing_number,
      bank_name,
      swift,
      remarks,
      type,
      status,
    });


    connectDB();
    const user = await User.findOne({ username: { $regex: regex } });
    const newBalance = Number(user.a_balance) - Number(amount);

    if( pin === user.pin || cot === user.cot){
      if(amount < user.a_balance){
        await User.findOneAndUpdate(
          { username: { $regex: regex } },
          { a_balance: Number(newBalance), t_balance: Number(newBalance) });
          
          if(user.canTransfer === "yes"){
            await newTransfer.save();
            return "success"
          } else {
            return "not-allowed"
          }
      } else {
        return "failed"
      }
    } else {
      return "The PIN/COT you entered was Incorrect!"
    }

  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/transactions");
  revalidatePath("/dashboard/");
};

//Update User Settings
export const updateUserSettings = async (formData) => {
  const {
    id,
    img,
    password,
    currency,
    firstname,
    lastname,
    username,
    phone,
    email,
    dob,
    sex,
    routing_number,
    imf,
    cot,
    tax,
    occupation,
    address,
    pin,
  } = Object.fromEntries(formData);

  try {
    connectDB();
    const updateFields = {
      id,
      img,
      password,
      currency,
      firstname,
      lastname,
      username,
      phone,
      email,
      dob,
      sex,
      routing_number,
      imf,
      cot,
      tax,
      occupation,
      address,
      pin,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );
    console.log(updateFields);

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }

  revalidatePath("/dashboard/settings");
  redirect("/dashboard/");
};
