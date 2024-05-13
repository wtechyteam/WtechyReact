const fs = require('fs');
const Sitemap = require('sitemap');
const { getAllPosts } = require('./allPosts');

const baseUrl = 'http://localhost:3000';

const generateSitemap = async () => {
    const posts = await getAllPosts(); // Implement this function to get all your posts/pages

    const urls = posts.map(post => ({
        url: `${baseUrl}/post/${post.id}`, // Assuming the posts have an 'id' property
        changefreq: 'weekly',
        priority: 0.7,
    }));

    const sitemap = Sitemap.createSitemap({
        hostname: baseUrl,
        cacheTime: 600000, // 600 sec - cache purge period
        urls,
    });

    fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
};

generateSitemap();
