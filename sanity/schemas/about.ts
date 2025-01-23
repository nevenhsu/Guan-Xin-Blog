import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fieldsets: [{ name: 'member', title: 'Member', options: { collapsible: false, columns: 1 } }],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'memberTitle',
      title: 'Member Title',
      type: 'string',
      fieldset: 'member',
    }),
    defineField({
      name: 'memberDuration',
      title: 'Member Duration (seconds)',
      type: 'number',
      fieldset: 'member',
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'member' } }],
      fieldset: 'member',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'mainImage',
    },
  },
})
