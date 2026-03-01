export default {
  name: 'processStep',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', required: true },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' }
  ]
};
