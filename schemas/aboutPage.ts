
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'Page About',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'corpsDuTexte',
      title: 'Corps du Texte',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required(),
    }),
  ],
})
