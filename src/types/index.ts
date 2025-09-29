import {z} from 'zod'
import { CategoriesAPIResponseSchema, DrinksAPIResponse, searchFilterSchema } from '../utils/recipe-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilter= z.infer<typeof searchFilterSchema>
export type Drinks = z.infer <typeof DrinksAPIResponse>