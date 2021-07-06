const mongoDB = require('mongodb').MongoClient;
const url = "mongodb+srv://shohelDemo:sdBxupE1jTUHxxUM@cluster0.iwgwi.mongodb.net/UODA?retryWrites=true&w=majority"
const config = { useUnifiedTopology: true }

mongoDB.connect(url,config,function(error,result){
    if(error){
        console.log("Server run fail");
    }
    else{
        console.log("Server run success");
        insertDataMany(result)
    }
});

function insertDataMany(result){
    const myDatabase = result.db("UODA");
    const myTableCollection = myDatabase.collection('CSE_Students');

    const myData = [
        {
            Id : "011193002",
            Name : "Md. Shohel Mia",
            Batch: "53th",
            Semester: "5th",
            City : "Kishoreganj"
        },
        {
            Id : "011193003",
            Name : "Tanmoy Mondol",
            Batch: "53th",
            Semester: "5th",
            City : "Manikganj"
        },
        {
            Id : "011193004",
            Name : "Md. Arafat Hossain",
            Batch: "53th",
            Semester: "5th",
            City : "Manikganj"
        },
        {
            Id : "011193005",
            Name : "Md. Saiful Islam Babu",
            Batch: "53th",
            Semester: "5th",
            City : "Barisal"
        },
        {
            Id : "011193007",
            Name : "Mehereen Santara Proma",
            Batch: "53th",
            Semester: "5th",
            City : "Narayanganj"
        },
        {
            Id : "011193009",
            Name : "Md. Mehedi Hasan Koushick",
            Batch: "53th",
            Semester: "5th",
            City : "Barisal"
        },
        {
            Id : "011193014",
            Name : "Mahbub Gulam Hassan",
            Batch: "53th",
            Semester: "5th",
            City : "Dhaka"
        },
        {
            Id : "011193015",
            Name : "Md. SM Moshin",
            Batch: "53th",
            Semester: "5th",
            City : "Kishoreganj"
        },
        {
            Id : "011193016",
            Name : "Tanjila",
            Batch: "53th",
            Semester: "5th",
            City : "Monshiganj"
        },
        {
            Id : "011193018",
            Name : "Md. Shahin Mia",
            Batch: "53th",
            Semester: "5th",
            City : "Kishoreganj"
        }
    ]
    myTableCollection.insertMany(myData,function(err){
        if(err){
            console.log("Insert Data Fail");
        }
        else{
            console.log("Insert Data Success")
        }
    })
}