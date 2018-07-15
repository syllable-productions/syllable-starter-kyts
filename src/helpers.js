import { META_TAGS, META_TAGS_DEFAULT, CANONICAL_DOMAIN } from './constants';

// There will be more soon and we can remove this exception
// eslint-disable-next-line import/prefer-default-export
export const getMetaTags = path => {
  const tags = META_TAGS[path] || META_TAGS_DEFAULT;

  tags.canonical = CANONICAL_DOMAIN + path;

  return tags;
};
