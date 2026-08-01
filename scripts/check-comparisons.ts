import { comparisonPosts } from "../src/lib/blog/posts-comparisons";

console.log("Current comparison posts count:", comparisonPosts.length);
comparisonPosts.forEach((p, idx) => {
  console.log(`${idx + 1}. [${p.slug}] - ${p.title}`);
});
