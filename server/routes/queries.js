const db = require('../../db/index');
async function createContent(newContent) {
  try {
    const insertedContent = await db.query.contents.insert({
      data: {
        title: newContent.title,
        description: newContent.description,
        authorId: newContent.authorId,
        passage: newContent.passage,
        contentType: newContent.contentType,
        createdAt: new Date(),
        updatedAt: null, 
      },
    });
    return insertedContent;
  } catch (error) {
    console.error("Error creating content:", error);
    throw new Error("Failed to create content");
  }
}
async function getAllIdeas() {
  try {
    const ideaContents = await db.query.contents.findMany({
      where: (model, { eq }) => eq(model.contentType, 'Idea'),
    });
    return ideaContents;
  } catch (error) {
    console.error('Error fetching idea contents:', error);
    throw new Error('Failed to fetch idea contents');
  }
}

async function getAllExperiences() {
  try {
    const ideaContents = await db.query.contents.findMany({
      where: (model, { eq }) => eq(model.contentType, 'Experience'),
    });
    return ideaContents;
  } catch (error) {
    console.error('Error fetching experience contents:', error);
    throw new Error('Failed to fetch experience contents');
  }
}

async function getMyIdeas(userId) {
  try {
    const userContentIds = await db.query.contentHistory.findMany({
      where: (model, { eq }) => eq(model.userId, userId),
    });
    const contentIds = userContentIds.map(history => history.contentId);
    const userIdeaContents = await db.query.contents.findMany({
      where: (model) => ({
        and: [
          { contentType: { eq: 'Idea' } },
          { id: { in: contentIds } },
        ],
      }),
    });
    return userIdeaContents;
  } catch (error) {
    console.error('Error fetching user idea contents:', error);
    throw new Error('Failed to fetch user idea contents');
  }
}

async function getMyExperiences(userId) {
  try {
    const userContentIds = await db.query.contentHistory.findMany({
      where: (model, { eq }) => eq(model.userId, userId),
    });
    const contentIds = userContentIds.map(history => history.contentId);
    const userExperienceContents = await db.query.contents.findMany({
      where: (model) => ({
        and: [
          { contentType: { eq: 'Experience' } },
          { id: { in: contentIds } },
        ],
      }),
    });
    return userExperienceContents;
  } catch (error) {
    console.error('Error fetching user experience contents:', error);
    throw new Error('Failed to fetch user experience contents');
  }
}
async function deleteMyIdea(userId, ideaId) {
  try {
    const userIdea = await db.query.contents.findFirst({
      where: {
        id: ideaId,
        authorId: userId,
        contentType: 'Idea',
      },
    });
    
    if (!userIdea) {
      throw new Error("Idea not found or does not belong to the user");
    }
    await db.query.contents.delete({
      where: {
        id: ideaId,
      },
    });
    return { message: "Idea deleted successfully" };
  } catch (error) {
    console.error('Error deleting idea:', error);
    throw new Error('Failed to delete idea');
  }
}

async function deleteMyExperience(userId, experienceId) {
  try {
    const userExperience = await db.query.contents.findFirst({
      where: {
        id: experienceId,
        authorId: userId,
        contentType: 'Experience',
      },
    });
    
    if (!userExperience) {
      throw new Error("Experience not found or does not belong to the user");
    }
    await db.query.contents.delete({
      where: {
        id: experienceId,
      },
    });
    return { message: "Experience deleted successfully" };
  } catch (error) {
    console.error('Error deleting experience:', error);
    throw new Error('Failed to delete experience');
  }
}
async function updateMyIdea(userId, ideaId, updatedContent) {
  try {
    const userIdea = await db.query.contents.findFirst({
      where: {
        id: ideaId,
        authorId: userId,
        contentType: 'Idea',
      },
    });

    if (!userIdea) {
      throw new Error("Idea not found or does not belong to the user");
    }
    const updatedIdea = await db.query.contents.update({
      where: {
        id: ideaId,
      },
      data: updatedContent,
    });
    return { message: "Idea updated successfully", updatedIdea };
  } catch (error) {
    console.error('Error updating idea:', error);
    throw new Error('Failed to update idea');
  }
}

async function updateMyExperience(userId, experienceId, updatedContent) {
  try {
    const userExperience = await db.query.contents.findFirst({
      where: {
        id: experienceId,
        authorId: userId,
        contentType: 'Experience',
      },
    });

    if (!userExperience) {
      throw new Error("Experience not found or does not belong to the user");
    }
    const updatedExperience = await db.query.contents.update({
      where: {
        id: experienceId,
      },
      data: updatedContent,
    });
    return { message: "Experience updated successfully", updatedExperience };
  } catch (error) {
    console.error('Error updating experience:', error);
    throw new Error('Failed to update experience');
  }
}

module.exports = {
  createContent,
  getAllIdeas,
  getAllExperiences,
  getMyIdeas,
  getMyExperiences,
  deleteMyIdea,
  deleteMyExperience,
  updateMyIdea,
  updateMyExperience
}