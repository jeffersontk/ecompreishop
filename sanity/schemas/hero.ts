import { defineField, defineType } from "sanity";

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields:[
    {
      name: 'hero',
      title: 'Hero',
      type: 'image'
    },
    {
      name: 'isMobile',
      title: 'is Mobile',
      type: 'boolean'
    },

  ]
})