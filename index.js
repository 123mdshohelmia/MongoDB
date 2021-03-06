const mongoDB = require('mongodb').MongoClient; //import mongodb and mongoClient

//----------------------------------------Database Link-------------------------

const url = "mongodb+srv://shohelDemo:sdBxupE1jTUHxxUM@cluster0.iwgwi.mongodb.net/UODA?retryWrites=true&w=majority"
const config = { useUnifiedTopology: true }

mongoDB.connect(url,config,function(error,result){
    if(error){
        console.log("Server run fail");
    }
    else{
        console.log("Server run success");
        insertDataMany(result)
        // insertOneData(result)
        // deleteOneData(result)
        // allDeleteData(result)
    }
});

//--------------------------------------------- Insert Many Data -------------------------

function insertDataMany(result){
    const myDatabase = result.db("UODA"); //Connection Database
    const myTableCollection = myDatabase.collection('CSE_Students'); //Connection Database Table


    const myData = [                      //Object
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

//-------------------------------- Insert One Data ----------------------------

function insertOneData(result){
    const myDatabase = result.db("UODA");
    const myTableCollection = myDatabase.collection('CSE_Students');
    const myData = {
            Id : "011193019",
            Name : "Md. Basir Mia",
            Batch: "53th",
            Semester: "5th",
            City : "Bajitpur"
    }

    myTableCollection.insertOne(myData,function(err){
        if(err){
            console.log("Insert One Data Fail")
        }
        else{
            console.log("Insert One Data Success")
        }
    })

}
    // ---------------------------------- Delete One Data----------------------

    function deleteOneData(result){
        const myDatabase = result.db("UODA");
        const myTableCollection = myDatabase.collection('CSE_Students');

        const deleteData = {Id:"011193019"};

        myTableCollection.deleteOne(deleteData,function(err){
            if(err){
                console.log("Data Delete Fail")
            }
            else{
                console.log("Data Delete Success");
            }
        })
 }


 //------------------------All Data Delete------------------

 function allDeleteData(result){
    const myDatabase = result.db("UODA");
    const myTableCollection = myDatabase.collection('CSE_Students');

    myTableCollection.deleteMany(function(err){
        if(err){
            console.log("All Data Delete Fail")
        }
        else{
            console.log("All Data Delete Success")
        }
    })

 }