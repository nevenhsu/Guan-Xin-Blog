import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fieldsets: [
    { name: 'banner', title: 'Banner', options: { collapsible: false, columns: 1 } },
    { name: 'news', title: 'News', options: { collapsible: false, columns: 1 } },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'bannerPages',
      title: 'Banners',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'page' } }],
      fieldset: 'banner',
    }),
    defineField({
      name: 'bannerDuration',
      title: 'Duration (seconds)',
      type: 'number',
      fieldset: 'banner',
    }),
    defineField({
      name: 'newsTitle',
      title: 'Title',
      type: 'string',
      fieldset: 'news',
    }),
    defineField({
      name: 'newsPages',
      title: 'Arrow Text',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'page' } }],
      fieldset: 'news',
    }),
  ],
})
