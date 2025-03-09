// Importeer modules
const express = require("express"); // Framework voor het bouwen van webapplicaties
const mongoose = require("mongoose"); // Bibliotheek voor MongoDB interactie
const cors = require("cors"); // Middleware om CORS-beperkingen op te heffen

// Importeer Mongoose modellen
const Skill = require("./models/skill"); // Model voor Skill
const Project = require("./models/project"); // Model voor Project
const Contact = require("./models/contact"); // Model voor Contact

// Maak een Express-applicatie aan
const app = express();

// Cors en Express instellen
app.use(cors()); // Sta CORS-verzoeken toe
app.use(express.json()); // Parse inkomende JSON-requests

// Verbind met MongoDB-database via Mongoose
mongoose.connect("mongodb://mongo:27017/db1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// database-verbinding
const db = mongoose.connection;

// Event listener om comformatie te krijgen dat de database is verbonden
db.once("open", () => console.log("MongoDB verbonden!"));

// Test-API
app.get("/api", (req, res) => {
  console.log('testing'); // Log testbericht naar de console
  res.json({ message: "Hallo vanaf de backend!" }); // Stuur JSON-response terug
});

// API om alle skills op te halen
app.get("/skills", async (req, res) => {
  try {
    const skills = await Skill.find(); // Haal alle records uit de collectie(skills) op
    console.log(skills); // Log resultaten naar de console
    res.json(skills); // Stuur skills als JSON terug
  } catch (error) {
    res.status(500).json({ message: "Fout bij ophalen van skills", error }); // foutmelding bij error
  }
});

// API om alle projecten op te halen
app.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find(); // Haal alle data uit de collectie(projects) op
    console.log(projects); // Log resultaten naar de console
    res.json(projects); // Stuur projecten als JSON terug
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error }); // Foutmelding bij error
  }
});

// API om contactgegevens op te slaan
app.post("/contacts", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body; // Haal data uit de request body

    // Controleer of alle velden zijn ingevuld
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "Vul alle velden in." }); // Foutmelding 
    }

    // Maak een nieuw Contact-object aan en sla het op in de database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Bericht succesvol opgeslagen!" }); // Succesmelding 
  } catch (error) {
    res.status(500).json({ message: "Fout bij opslaan van bericht", error }); // Foutmelding bij error
  }
});

// Start de server op poort 5000
app.listen(5000, () => console.log("Server draait op poort 5000"));

