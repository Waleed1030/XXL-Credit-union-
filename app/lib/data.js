import { User, Transaction, Settings, Cards } from "./models"
import { connectDB } from "./utils";



//Fetch Users
export const fetchUsers = async (q, page) => {

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 10

    try {
        connectDB();
        const count = await User.find( {firstname: { $regex:regex }}).count();
        const users = await User.find( {firstname: { $regex:regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page -1));
        return {count, users};

    } catch (error) {
        console.log(error)
        throw new Error ("Failed to fetch Users")
    }
}

//Fetch User Data and History
export const fetchUserData = async (username) => {

    const regex = new RegExp(username, "i")
    const id = username

    try {
        connectDB();
        const user = await User.findOne({username: { $regex:regex }});
        const history = await Transaction.find({ username: id}).exec(); 
        const userCard = await Cards.findOne({ username: id});

        return {user, history, userCard}


        
    } catch (error) {
        console.log(error)
    }
}

//Fetch User Stats
export const fetchStats = async () => {


    try {
        connectDB();
        const user_count = await User.find().count();
        const transaction_count = await Transaction.find().count();
        const users = await User.find();

        const temp = users.map((item) => (item.a_balance))

        let total_balance = 0;
        for(let i = 0; i < temp.length; i++){
            total_balance += temp[i]
        }
        
        //console.log(users)
        //console.log(total_balance)
        
        return { user_count, transaction_count, total_balance};

    } catch (error) {
        console.log(error)
        throw new Error ("Failed to fetch user stats!")
    }

}







//Fetch Transactions
export const fetchTransactions = async (q, page) => {

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 10

    try {
        connectDB();
        const count = await Transaction.find( {username: { $regex:regex }}).count();
        const transactions = await Transaction.find( {username: { $regex:regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page -1));
        return {count, transactions};

    } catch (error) {
        console.log(error)
        return{
            error: "Failed to fetch Transaction!",
            }
    }

}

//Fetch Single Transaction
export const fetchTransactionData = async (id) => {

    try {
        connectDB();
        console.log(id)
        const transaction = await Transaction.findById(id);
        console.log(transaction)
        return { transaction }
        
        
    } catch (error) {
        console.log(error)
    }
}

//Fetch Cards
export const fetchCards = async (q, page) => {

    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 10

    try {
        connectDB();
        const count = await Cards.find( {username: { $regex:regex }}).count();
        const cards = await Cards.find( {username: { $regex:regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page -1));
        return {count, cards};

    } catch (error) {
        console.log(error)
        return{
            error: "Failed to fetch Cards!",
            }
    }

}
//Fetch Card Data
export const fetchCardData = async (id) => {

    try {
        connectDB();
        console.log(id)
        const card = await Cards.findById(id);
        //console.log(card)
        return { card }
        
        
    } catch (error) {
        console.log(error)
    }
}




//Fetch Settings
export const fetchSettings = async () => {

    try {
        connectDB();
        const settings = await Settings.findOne();
        return { settings }
        
        
    } catch (error) {
        console.log(error)
    }
}