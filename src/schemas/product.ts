import { defineField, defineType } from "sanity";

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields:[
   {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number'
      },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'productCategory',
      title: 'Product Category',
      type: 'object',
      fields: [
        {
          title: 'Category',
          name: 'category',
          type: 'reference',
          to: [{type: 'categoriesProducts'}]
        },
        {
          title: 'Subcategory',
          name: 'subcategory',
          type: 'string',
     
        }
      ]
    },
    {
      name: 'isDiscount',
      title: 'Is Discount',
      type: 'boolean',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number'
    },
    {
      name: 'idStripe',
      title: 'Id product in stripe api payment',
      type: 'string'
    },
    {
      name: 'productSupplier',
      title: 'product supplier link',
      type: 'string'
    },
    {
      name: 'productImages',
      title: 'Product images',
      type: 'array',
      of: [
        {
          title: 'Image',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }
          ]
        }
      ]
    },
    {
      name: 'paragraphsCopy',
      title: 'Paragraphs Copy',
      type: 'array',
      of: [
        {
          title: 'Paragraphs',
          type: 'object',
          fields: [
            {
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
              rows: 4,
            },
          ],
        },
      ],
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [
        {
          title: 'Sizes',
          type: 'object',
          fields: [
            {
              name: 'size',
              title: 'size',
              type: 'string',
              validation: (Rule) => Rule.max(4),
            },
          ],
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: input => input
                             .toLowerCase()
                             .replace(/\s+/g, '-')
                             .slice(0, 200)
      }
    }
  ]
})