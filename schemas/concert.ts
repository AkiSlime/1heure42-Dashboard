
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'concert',
  title: 'Concert',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'lieu',
      title: 'Nom de l\'événement',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ville',
      title: 'Adresse',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'lienBillet',
      title: 'Lien Billet',
      type: 'url',
    }),
  ],
  orderings: [
    {
      title: 'Date (plus récent en premier)',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
  ],
})
