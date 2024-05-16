// Importing the database connection
const db = require('../../db/index');

// Function to create new content
async function createContent(newContent) {
  try {
    // Inserting new content into the database
    const insertedContent = await db.query.contents.insert({
      data: {
        title: newContent.title,
        description: newContent.description,
        authorId: newContent.authorId,
        passage: newContent.passage,
        contentType: newContent.contentType,
        createdAt: new Date(), // Setting creation timestamp
        updatedAt: null, // Initially setting update timestamp to null
      },
    });
    return insertedContent; // Returning the inserted content
  } catch (error) {
    console.error("Error creating content:", error);
    throw new Error("Failed to create content");
  }
}

// Function to fetch all content
async function getAllContent() {
  try {
    // Finding all content in the database
    const ideaContents = await db.query.contents.findMany({
      where: (model, { eq }) => eq(model.contentType),
    });
    return ideaContents; // Returning all content
  } catch (error) {
    console.error('Error fetching contents:', error);
    throw new Error('Failed to fetch contents');
  }
}

// Function to fetch all ideas
async function getAllIdeas() {
  try {
    // Finding all idea contents in the database
    const ideaContents = await db.query.contents.findMany({
      where: (model, { eq }) => eq(model.contentType, 'Idea'),
    });
    return ideaContents; // Returning all idea contents
  } catch (error) {
    console.error('Error fetching idea contents:', error);
    throw new Error('Failed to fetch idea contents');
  }
}

// Function to fetch all experiences
async function getAllExperiences() {
  try {
    // Finding all experience contents in the database
    const ideaContents = await db.query.contents.findMany({
      where: (model, { eq }) => eq(model.contentType, 'Experience'),
    });
    return ideaContents; // Returning all experience contents
  } catch (error) {
    console.error('Error fetching experience contents:', error);
    throw new Error('Failed to fetch experience contents');
  }
}

// Function to fetch a user's ideas
async function getMyIdeas(userId) {
  try {
    // Finding content history for the user
    const userContentIds = await db.query.contentHistory.findMany({
      where: (model, { eq }) => eq(model.userId, userId),
    });
    const contentIds = userContentIds.map(history => history.contentId);
    // Finding the user's idea contents
    const userIdeaContents = await db.query.contents.findMany({
      where: (model) => ({
        and: [
          { contentType: { eq: 'Idea' } },
          { id: { in: contentIds } },
        ],
      }),
    });
    return userIdeaContents; // Returning the user's idea contents
  } catch (error) {
    console.error('Error fetching user idea contents:', error);
    throw new Error('Failed to fetch user idea contents');
  }
}

// Function to fetch a user's experiences
async function getMyExperiences(userId) {
  try {
    // Finding content history for the user
    const userContentIds = await db.query.contentHistory.findMany({
      where: (model, { eq }) => eq(model.userId, userId),
    });
    const contentIds = userContentIds.map(history => history.contentId);
    // Finding the user's experience contents
    const userExperienceContents = await db.query.contents.findMany({
      where: (model) => ({
        and: [
          { contentType: { eq: 'Experience' } },
          { id: { in: contentIds } },
        ],
      }),
    });
    return userExperienceContents; // Returning the user's experience contents
  } catch (error) {
    console.error('Error fetching user experience contents:', error);
    throw new Error('Failed to fetch user experience contents');
  }
}

/*
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
*/
module.exports = {
  createContent,
  getAllContent,
  getAllIdeas,
  getAllExperiences,
  getMyIdeas,
  getMyExperiences,
}

/*
In this code snippet, `ideaContents` is a variable that stores the result of an asynchronous operation. Here's what each part means:
- `const ideaContents`: This declares a variable named `ideaContents` using the `const` keyword. This variable will hold the result of the database query once it is retrieved.
- `await`: The `await` keyword is used to wait for the promise returned by `db.query.contents.findMany()` to be resolved. It allows asynchronous code to be written in a synchronous style, making it easier to read and understand.
- `db.query.contents.findMany({ ... })`: This is a database query operation using an ORM (Object-Relational Mapping) library or a similar database access mechanism. It's fetching multiple records from the `contents` table in the database. The specific conditions for fetching the records are defined inside the `where` clause.
- `where: (model, { eq }) => eq(model.contentType, 'Idea')`: This part specifies the condition for the database query. It's filtering records based on the `contentType` field, looking for records where the `contentType` is equal to `'Idea'`. The `eq` function (presumably provided by the ORM or database library) is used to perform the equality comparison.
So, when this code is executed, it will wait for the database query to fetch all records from the `contents` table where the `contentType` is `'Idea'`. Once the query is complete, the result will be stored in the `ideaContents` variable for further processing. Since `await` is used, the execution of the surrounding code will pause until the database operation completes and the result is available.
*/