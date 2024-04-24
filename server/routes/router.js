const express = require('express')
const router = express.Router()
const {createContent, getAllIdeas, getAllExperiences, getMyIdeas, getMyExperiences, deleteMyIdea, deleteMyExperience, updateMyIdea, updateMyExperience, getAllContent} = require('./queries');
router.post("/create", async (req, res) => {
    const { title, description, passage, contentType, authorId } = req.body;
    try {
      await createContent({ title, description, passage, contentType, authorId });
      res.status(200).json({ message: "Content inserted successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to insert content" });
    }
  });

  router.get("/all", async (req, res) => {
    try {
      const allCon = await getAllContent();
      res.status(200).json(allCon);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to fetch contents" });
    }
  });
  
  router.get("/ideas", async (req, res) => {
    try {
      const ideas = await getAllIdeas();
      res.status(200).json(ideas);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to fetch ideas" });
    }
  });
  
  router.get("/experiences", async (req, res) => {
    try {
      const experiences = await getAllExperiences();
      res.status(200).json(experiences);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to fetch experiences" });
    }
  });
  
  router.get("/my-ideas/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      const ideas = await getMyIdeas(userId);
      res.status(200).json(ideas);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to fetch user ideas" });
    }
  });
  
  router.get("/my-experiences/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      const experiences = await getMyExperiences(userId);
      res.status(200).json(experiences);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Failed to fetch user experiences" });
    }
  });
  
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

  module.exports = router