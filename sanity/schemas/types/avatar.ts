import { sub } from 'date-fns'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'avatar',
  title: 'Avatar',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }),
  ],
})
