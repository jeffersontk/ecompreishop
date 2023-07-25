import { Slug } from '@sanity/types';
import { defineType } from "sanity";

export default defineType({
  name: 'heroProducts',
  title: 'HeroProducts',
  type: 'document',
  fields:[
    {
      name: 'imageHero',
      title: 'hero Products images',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'productName',
      title: 'ProductName',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'productName',
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    },
    {
      title: 'Is Mobile',
      name: 'isMobile',
      type: 'boolean'
    }
  ]
})