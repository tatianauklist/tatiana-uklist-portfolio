import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const STRIPE_VARIANTS = ['a', 'b', 'c'];
const WORDS_PER_MINUTE = 200;

function getSlug(filename) {
  return filename.replace(/\.md$/, '');
}

function estimateReadtime(content) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min`;
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));

  const posts = files
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(postsDirectory, file), 'utf-8');
      const { data, content } = matter(fileContent);
      return {
        slug: getSlug(file),
        title: data.title,
        published_date: data.published_date,
        category: data.category,
        description: data.description,
        readtime: data.readtime || estimateReadtime(content),
        draft: data.draft === true,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .map((post, index) => ({ ...post, stripe: STRIPE_VARIANTS[index % STRIPE_VARIANTS.length] }));

  return posts;
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const allSlugs = getAllPosts().map((post) => post.slug);
  const index = allSlugs.indexOf(slug);

  return {
    slug,
    title: data.title,
    published_date: data.published_date,
    category: data.category,
    description: data.description,
    readtime: data.readtime || estimateReadtime(content),
    stripe: STRIPE_VARIANTS[Math.max(0, index) % STRIPE_VARIANTS.length],
    contentHtml: sanitizeHtml(marked(content), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
      allowedAttributes: {
        ...sanitizeHtml.defaults.allowedAttributes,
        img: ['src', 'alt', 'title'],
      },
    }),
  };
}
