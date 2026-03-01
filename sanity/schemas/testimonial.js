export default {
  name: 'testimonial',
  type: 'document',
  fields: [
    { name: 'author', type: 'string', required: true },
    { name: 'content', type: 'text' },
    { name: 'image', type: 'image' }
  ]
};
