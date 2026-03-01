export default {
  name: 'portfolioProject',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', required: true },
    { name: 'images', type: 'array', of: [{ type: 'image' }] },
    { name: 'description', type: 'text' }
  ]
};
