import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => redirect("/"));

const handleListening = () => console.log("✅ Server listening on port http://localhost:3000 🛩️");
app.listen(3000, handleListening);
