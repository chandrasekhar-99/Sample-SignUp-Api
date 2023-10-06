const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/user_post_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

const postSchema = new mongoose.Schema({
  userId: mongoose.Types.ObjectId,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

app.post("/api/signup", async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });
    await newUser.save();

    res.status(200).json({ message: "Successful user sign-up" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const { userId, content } = req.body;

    const newPost = new Post({ userId, content });
    await newPost.save();

    res.status(200).json({ message: "Successfully created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete("/api/deletepost/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;

    await Post.findByIdAndRemove(postId);

    res.status(200).json({ message: "Successful post deletion" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/posts/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const userPosts = await Post.find({ userId });

    res.status(200).json(userPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
