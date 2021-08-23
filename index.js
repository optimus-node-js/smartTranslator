const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const translate = require("@vitalets/google-translate-api");

const app = express();
// bodyparser used so we can parse the json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "hbs");

const PORT = process.env.PORT || 5000;

const mysql = require("mysql"); 

// initializing the connection for mysql database
// Here we have the MYSQL Database named as "translate" and we also used the table with same name "translate", to avoid complexity for better understanding for developer.
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "translate"

})

// here we are making sure that we are connected to the database
connection.connect(function (error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log("Database Connected...")
    }
})

app.get("/", (req, res) => {
  res.render("translate", {
    title: "Speech Translator Online to Multiple Languages - Free Media Tools",
    translated: "",
  });
});

`Here below is the major main code for the translation. Before going to the deep, let's understand the small logic.
First, when user puts their word for translation then first it will check if the user's searched word is already available in the database or not.
If the word is new and not stored with the specified language the user wanted, then without giving user delay, we will first make request to Google Translate API and will serve the user it's relevant result,
and then we will store the information like user searched word with, in which language user wanted to translate the word and with their relevant result.`


app.post("/", (req, res) => {

  // Querying to Database if the word is present in the DB or not. 
  connection.query(`SELECT * FROM translate WHERE word = ?`, [req.body.speech], (error, result) =>{
    if(error){
      console.log(error);
    } else if(result.length < 1){  // if there is no results, like user's searched word is not stored in our DB so we will serve them with API and then store in our DB.
      console.log("No Result so render via api")
      // Here now i will render the data to user about google translate api and also gonna store the data in database
      translate(req.body.speech, { to: req.body.language })
      .then((response) => {
        // Here We are rendering the 'translate.hbs' file as our front end
        res.render("translate", {
          title: "Speech Translator Online to Multiple Languages - Free Media Tools",
          
          // Below we are also passing the parameters, this is because when the results come, so user don't have to remember again what they searched to correct their words etcetera.
            // Also It will also help to enhance the realtime smooth results experience for the user. We also did the same and passed the same parameter while we are fetching data from DataBase.
          
          translated: response.text,
          translate: req.body.speech,
          select: req.body.language
        });

        var word = req.body.speech;
        var language_code = req.body.language;
        var result = response.text;
        
        // Here we are inserting the user's word and their relevant results in DB after serving the results to user via api
        connection.query('INSERT INTO translate SET ?', {word:word, language: language_code, answer: result}, (error, results) => {
          if(error){
            console.log(error);
          } else{
            console.log("Data Saved in Database.")
          }
        })
      })
      .catch((err) => {
        console.error(err);
      });
      
      // Here if we have the data stored in DB as per the user's searched keyword then we will serve the content to the user from the DB.
    } else {
        var word = req.body.speech;
        console.log("Fetched Data from database")
      connection.query(`SELECT * FROM translate WHERE word = ?`, [word], (error, result) => {
        if(error){
          console.log(error);
        } else{
          console.log(result[0].language)
          console.log(result[0].answer)
          
          // Here We are rendering the 'translate.hbs' file as our front end
          
          res.render("translate", {
            title: "Speech Translator Online to Multiple Languages - Free Media Tools",
            
            // Passed the Parameters for realtime smooth content delivery experience for user, and user don't get offend to again and again remember what content they wrote or selected.
            
            translate: result[0].word,
            select: result[0].language,
            translated: result[0].answer
          });
        }
      })
    }

  })


  
});

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});
