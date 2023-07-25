import { defineType } from "sanity";

export default defineType({
  name: 'categoriesProducts',
  title: 'Categories',
  type: 'document',
  fields:[
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Category Icon',
      type: 'image',
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'string', 
    }
  ]
})
