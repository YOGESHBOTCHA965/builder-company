export default {
  name: 'community',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', required: true },
    { name: 'slug', type: 'slug', required: true },
    { name: 'description', type: 'text' },
    { name: 'location', type: 'string' },
    { name: 'heroImage', type: 'image' }
  ]
};
