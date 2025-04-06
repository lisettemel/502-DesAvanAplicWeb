import { fetchData } from './api/api.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await fetchData('https://jsonplaceholder.typicode.com/posts');
        const container = document.getElementById('posts-container');
        data.forEach(({ title, body }) => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `<h2>${title}</h2><p>${body}</p>`;
            container.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
});
