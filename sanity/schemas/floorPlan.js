export default {
  name: 'floorPlan',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', required: true },
    { name: 'slug', type: 'slug', required: true },
    { name: 'specs', type: 'object' },
    { name: 'description', type: 'text' },
    { name: 'heroImage', type: 'image' },
    { name: 'community', type: 'reference', to: [{ type: 'community' }] }
  ]
};
