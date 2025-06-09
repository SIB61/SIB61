

import { JSDOM } from 'jsdom';
import { Article } from './portfolio-data';

function extractFirstImageSrc(html: string): string | null {
  const dom = new JSDOM(html);
  const img = dom.window.document.querySelector('img');
  return img ? img.src : null;
}


function extractDescription(html: string): string {
  const dom = new JSDOM(html);
  const text = dom.window.document.querySelector('p');
  return text?.textContent || '';
}

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  thumbnail: string;
  description: string;
  categories: string[];
};

type MediumFeed = {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumPost[];
};


export async function fetchMediumPosts(username: string): Promise<Article[]> {
  const url = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch Medium posts: ${response.statusText}`);
  }

  const data: MediumFeed = await response.json();
  if (data.status !== 'ok') {
    throw new Error('Failed to parse Medium RSS feed');
  }

  const postsWithThumbnails = data.items.map((post,i) => {
    let thumbnail = post.thumbnail;
    if (!thumbnail || thumbnail.trim() === '') {
      const extracted = extractFirstImageSrc(post.description);
      thumbnail = extracted || '';
    }
    const description = post.description && extractDescription(post.description)
    return { ...post, thumbnail, description,id: post.title };
  });

  return postsWithThumbnails;
}