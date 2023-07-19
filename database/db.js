import mongoose from 'mongoose'


// const Connection = async()=>{
// after env file have to pass arguments
const Connection = async(URL)=>{
    // const URL=`mongodb+srv://${username}:${password}@blogapp.4ubpqaw.mongodb.net/?retryWrites=true&w=majority`;
    // const URL=`mongodb+srv://sophiyaabhi101:123$$abhi@blogapp.4ubpqaw.mongodb.net/?retryWrites=true&w=majority`;
    try{
        // useNewUrlParser:true ->it is saying that mongodb's old parser is deprecated and use the newUrlparser
        // mongoose.connect is a async function so it returns the promise we have to await for that
        // mongoose.connect(URL,{useNewUrlParser:true});
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log(`DB connected successfully!`);
    }
    catch(error){
        console.log(`Error while connecting!`,error);
    }
}

export default Connection;