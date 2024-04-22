const { Content } = require('./models'); // Import the Content model
const app = require('./app');
app.post("/api/content", async (req, res) => {
    const { title, description, content, contentType, authorId } = req.body;
    try {
        const newContent = new Content(null, title, description, authorId, content, contentType, null, null);
        res.status(200).json({ message: "Content inserted successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Failed to insert content" });
    }
});
