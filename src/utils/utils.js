const getSlug = require('speakingurl');
const { generate } = require('voucher-code-generator');

const slugify = (data = '', length = 12, prefix = '', postfix = '') => {
  let slug = getSlug(data);
  if (!slug)
    slug = generate({
      length,
      prefix,
      postfix,
      charset: '0123456789abcdefghijklmnopqrstuvwxyz'
    }).toString();
  return slug;
};

const trimAllSpaces = text => {
  return text.replace(/\s+/g, ' ').trim();
};

module.exports = { slugify, trimAllSpaces };
