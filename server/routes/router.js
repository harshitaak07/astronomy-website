const express = require('express'); // Importing the Express.js framework
const router = express.Router(); // Creating an Express router

// Importing functions for handling database queries
const {
  createContent,
  getAllIdeas,
  getAllExperiences,
  getMyIdeas,
  getMyExperiences,
  getAllContent
} = require('./queries');

// Route for creating new content
router.post("/create", async (req, res) => {
  // Extracting data from request body
  const { title, description, passage, contentType, authorId } = req.body;
  try {
    // Calling the function to create new content
    await createContent({ title, description, passage, contentType, authorId });
    res.status(200).json({ message: "Content inserted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to insert content" });
  }
});

// Route for fetching all content
router.get("/all", async (req, res) => {
  try {
    // Calling the function to fetch all content
    const allCon = await getAllContent();
    res.status(200).json(allCon);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch contents" });
  }
});

// Route for fetching all ideas
router.get("/ideas", async (req, res) => {
  try {
    // Calling the function to fetch all ideas
    const ideas = await getAllIdeas();
    res.status(200).json(ideas);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch ideas" });
  }
});

// Route for fetching all experiences
router.get("/experiences", async (req, res) => {
  try {
    // Calling the function to fetch all experiences
    const experiences = await getAllExperiences();
    res.status(200).json(experiences);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch experiences" });
  }
});

// Route for fetching a user's ideas
router.get("/my-ideas/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    // Calling the function to fetch a user's ideas
    const ideas = await getMyIdeas(userId);
    res.status(200).json(ideas);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch user ideas" });
  }
});

// Route for fetching a user's experiences
router.get("/my-experiences/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    // Calling the function to fetch a user's experiences
    const experiences = await getMyExperiences(userId);
    res.status(200).json(experiences);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to fetch user experiences" });
  }
});

  /*
  router.delete("/delete-idea/:userId/:ideaId", async (req, res) => {
    const { userId, ideaId } = req.params;
    try {
      const result = await deleteMyIdea(userId, ideaId);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to delete idea" });
    }
  });
  
  router.delete("/delete-experience/:userId/:experienceId", async (req, res) => {
    const { userId, experienceId } = req.params;
    try {
      const result = await deleteMyExperience(userId, experienceId);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to delete experience" });
    }
  });
  
  router.put("/update-idea/:userId/:ideaId", async (req, res) => {
    const { userId, ideaId } = req.params;
    const updatedContent = req.body;
    try {
      const result = await updateMyIdea(userId, ideaId, updatedContent);
      res.status(200).json(result);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to update idea" });
    }
  });
  
  router.put("/update-experience/:userId/:experienceId", async (req, res) => {
    const { userId, experienceId } = req.params;
    const updatedContent = req.body;
    try {
      const result = await updateMyExperience(
        userId,
        experienceId,
        updatedContent
      );
      res.status(200).json(result);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to update experience" });
    }
  });
  */

  // Exporting the router
  module.exports = router

  /*
  Synchronous Call:
  In synchronous programming, tasks are executed one after the other, in a sequential manner.
  When a function is invoked synchronously, the program waits for that function to complete before moving on to the next instruction.
  Synchronous calls are blocking, meaning that the program execution is paused until the operation completes.
  Synchronous code is straightforward and easier to understand since operations are executed in a predictable order.

  Asynchronous Call:
  In asynchronous programming, tasks are executed concurrently, allowing multiple operations to be performed simultaneously.
  When a function is invoked asynchronously, the program does not wait for that function to complete and continues to execute other instructions.
  Asynchronous calls are non-blocking, meaning that the program execution continues immediately after the asynchronous operation is initiated.
  Asynchronous code often uses callbacks, promises, or async/await syntax to handle the results of asynchronous operations.

  async (req, res) => { ... }: This is an asynchronous function that serves as the request handler for POST requests to the /create endpoint. 
  It takes two arguments: req (short for request) and res (short for response), which represent the incoming HTTP request and the outgoing HTTP response, respectively.
  The function is declared as asynchronous (async) to allow the use of await for asynchronous operations such as database queries.
  In the context of an asynchronous function declaration like async (req, res) => { ... }, req and res are not happening simultaneously. Instead, req and res represent two parameters passed to the asynchronous function, which are typically used to handle an HTTP request and response, respectively.
*/