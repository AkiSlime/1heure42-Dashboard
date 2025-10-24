
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'choPage',
  title: 'Page CHÔ!',
  type: 'document',
  fields: [
    defineField({
      name: 'titre',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'descriptionConcept',
      title: 'Description du Concept',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rinseRadioUrl',
      title: 'Lien Rinse Radio',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['https']
      }),
    }),
  ],
})
