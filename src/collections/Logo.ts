import type { CollectionConfig } from 'payload'

export const Logo: CollectionConfig = {
  slug: 'logos',
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'isActive', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}