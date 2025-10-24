import { type RecentLink } from '../models/RecentLink';

export const addRecentLink = (newLink: RecentLink) => {
  let links = getRecentLinks();
  if (links.length >= 3) {
    links = links.slice(1, 3);
  }
  links.push(newLink);
  localStorage.setItem('recentLinks', JSON.stringify(links));
};

export const getRecentLinks = (): RecentLink[] => {
  const links = localStorage.getItem('recentLinks');
  if (!links) return [];
  console.log(JSON.parse(links));

  return JSON.parse(links);
};
