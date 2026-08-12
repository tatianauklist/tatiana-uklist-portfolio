import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function getSlug(filename) {
  return filename.replace(/\.md$/, '');
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));

  const posts = files
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(postsDirectory, file), 'utf-8');
      const { data } = matter(fileContent);
      return {
        slug: getSlug(file),
        title: data.title,
        published_date: data.published_date,
        category: data.category,
        description: data.description,
        draft: data.draft === true,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date));

  return posts;
}

export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title,
    published_date: data.published_date,
    category: data.category,
    description: data.description,
    contentHtml: marked(content),
  };
}
