import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import categories from './categories'
import hero from './hero'
import heroProducts from './heroProducts'
import post from './post'
import product from './product'

export const schemaTypes = [post, hero, heroProducts, categories, product, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, hero, heroProducts, categories, product, blockContent],
}
