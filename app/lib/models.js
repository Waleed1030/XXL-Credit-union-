import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: false,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: false,
      unique: true,
      min: 3,
      max: 20,
    },
    sex: {
      type: String,
    },
    dob: {
      type: Date,
    },
    password: {
      type: String,
      required: false,
      min: 3,
      max: 20,
    },
    img: {
      type: String,
    },
    canTransfer: {
      type: String
    },
    account_number: {
      type: Number,
    },
    account_type: {
      type: String,
    },
    routing_no: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    currency: {
      type: String,
    },
    withdraw_method: {
      type: String,
    },
    cot: {
      type: String,
    },
    tax: {
      type: String,
    },
    imf: {
      type: String,
    },
    pin: {
      type: String,
    },
    t_balance: {
      type: Number,
    },
    a_balance: {
      type: Number,
    },
    role: {
      type: String,
      default: "client",
    },
    isActive: {
      type: String,
      default: "false",
    },
    isVerified: {
      type: String,
      default: "false",
    },
  },
  { timestamps: true }
);

const settingsSchema = new mongoose.Schema(
  {
    site_name: {
      type: String,
    },
    about: {
      type: String,
    },
    logo: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    site_url: {
      type: String,
    },
    wallet: {
      type: String,
    },
    cot: {
      type: String,
    },
    bank_name: {
      type: String,
    },
    swift: {
      type: String,
    },
    routing_number: {
      type: String,
    },
    account_number: {
      type: String,
    },
  },
  { timestamps: true }
);

const walletSchema = new mongoose.Schema(
  {
    currency: {
      type: String,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
    },
    network: {
      type: String,
    },
  },
  { timestamps: true }
);
const transactionSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    currency: {
      type: String,
    },
    address: {
      type: String,
    },
    type: {
      type: String,
    },
    depositType: {
      type: String,
    },
    network: {
      type: String,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
    },
    email: {
      type: String,
    },
    account_name: {
      type: String,
    },
    account_number: {
      type: String,
    },
    swift: {
      type: String,
    },
    routing_number: {
      type: String,
    },
    remarks: {
      type: String,
    },
    bank_name: {
      type: String,
    },
  },
  { timestamps: true }
);

const cardsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    number: {
      type: Number,
    },
    expiry: {
      type: String,
    },
    cvc: {
      type: String,
    },
    status: {
      type: String,
      default: "active",
    },
  },
  { timestamps: true }
);

export const User =        mongoose.models.User || mongoose.model("User", userSchema);
export const Settings =    mongoose.models.Settings || mongoose.model("Settings", settingsSchema);
export const Wallet =      mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
export const Cards =       mongoose.models.Cards || mongoose.model("Cards", cardsSchema);
