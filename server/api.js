const { createContent } = require('./queries/createContent');
const { getAllIdeas } = require('./queries/getAllIdeas');
const { getAllExperiences } = require('./queries/getAllExperiences');
const { getMyIdeas } = require('./queries/getMyIdeas');
const { getMyExperiences } = require('./queries/getMyExperiences'); 
const { deleteMyIdea } = require('./queries/deleteMyIdea'); 
const { deleteMyExperience } = require('./queries/deleteMyExperiences'); 
const { updateMyIdea } = require('./queries/updateMyIdea'); 
const { updateMyExperience } = require('./queries/updateMyExperiences'); 
const app = require('./App');
app.post("/create", async (req, res) => {
    const { title, description, passage, contentType, authorId } = req.body;
    try {
        await createContent({
            title,
            description,
            passage,
            contentType,
            authorId,
        });
        res.status(200).json({ message: "Content inserted successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to insert content" });
    }
});
app.get("/ideas", async (req, res) => {
    try {
        const ideas = await getAllIdeas();
        res.status(200).json(ideas);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to fetch ideas" });
    }
});
app.get("/experiences", async (req, res) => {
    try {
        const experiences = await getAllExperiences();
        res.status(200).json(experiences);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to fetch experiences" });
    }
});
app.get("/my-ideas/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const ideas = await getMyIdeas(userId);
        res.status(200).json(ideas);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to fetch user ideas" });
    }
});
app.get("/my-experiences/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const experiences = await getMyExperiences(userId);
        res.status(200).json(experiences);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to fetch user experiences" });
    }
});
app.delete("/delete-idea/:userId/:ideaId", async (req, res) => {
    const { userId, ideaId } = req.params;
    try {
        const result = await deleteMyIdea(userId, ideaId);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to delete idea" });
    }
});
app.delete("/delete-experience/:userId/:experienceId", async (req, res) => {
    const { userId, experienceId } = req.params;
    try {
        const result = await deleteMyExperience(userId, experienceId);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to delete experience" });
    }
});

app.put("/update-idea/:userId/:ideaId", async (req, res) => {
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
app.put("/update-experience/:userId/:experienceId", async (req, res) => {
    const { userId, experienceId } = req.params;
    const updatedContent = req.body;
    try {
        const result = await updateMyExperience(userId, experienceId, updatedContent);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to update experience" });
    }
});

module.exports = app;