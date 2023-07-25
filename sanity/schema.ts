import { SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import categories from './schemas/categories'
import hero from './schemas/hero'
import heroProducts from './schemas/heroProducts'
import post from './schemas/post'
import product from './schemas/product'

export const schemaTypes = [post, hero, heroProducts, categories, product, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, hero, heroProducts, categories, product, blockContent],
}
