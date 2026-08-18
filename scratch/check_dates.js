const { STATIC_BLOG_POSTS } = require('../src/lib/blog-data');

console.log(`Total STATIC_BLOG_POSTS count: ${STATIC_BLOG_POSTS.length}`);
const futurePosts = STATIC_BLOG_POSTS.filter(p => new Date(p.publishedAt) > new Date('2026-08-08'));
console.log(`Future posts after 2026-08-08: ${futurePosts.length}`);
STATIC_BLOG_POSTS.slice(0, 10).forEach((p, i) => {
  console.log(`[${i+1}] ${p.publishedAt} - ${p.title} (${p.slug})`);
});
