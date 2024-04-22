class User {
    constructor(id, name, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

class Content {
    constructor(id, title, description, authorId, passage, contentType, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.authorId = authorId;
        this.passage = passage;
        this.contentType = contentType;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

class ContentHistory {
    constructor(id, userId, contentId) {
        this.id = id;
        this.userId = userId;
        this.contentId = contentId;
    }
}

module.exports = {
    User,
    Content,
    ContentHistory
};