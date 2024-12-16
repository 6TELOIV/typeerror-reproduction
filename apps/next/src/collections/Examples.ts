import type { CollectionConfig } from 'payload'

export const Examples: CollectionConfig = {
  slug: 'examples',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'richText',
      type: 'richText',
    },
  ],
}
