const fs = require('fs');
const path = require('path');
// You may need to import a Markdown parser like 'gray-matter' if you want to parse front matter
// const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'posts');

// Function to get all posts from the posts directory
const getAllPosts = () => {
    // Get all file names in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);

    // Filter out non-Markdown files
    const postFileNames = fileNames.filter(fileName => fileName.endsWith('.md'));

    // Read content of each Markdown file and return as an array of objects
    const posts = postFileNames.map(fileName => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        return {
            id: fileName.replace(/\.md$/, ''), // Assuming your file names are unique identifiers
            // Add other properties as needed (e.g., title, content, date)
            // title: data.title,
            // content: content,
            // date: data.date,
        };
    });

    return posts;
};

module.exports = { getAllPosts };
