import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'youtubeVideo',
  title: 'Vidéo YouTube',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'youtubeId',
      title: 'ID YouTube',
      type: 'string',
      description: 'L\'ID de la vidéo YouTube (par exemple: dQw4w9WgXcQ pour https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Utilisé pour ordonner les vidéos dans le carrousel'
    }),
    defineField({
      name: 'sections',
      title: 'Sections d\'affichage',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Highlight', value: 'highlight'},
              {title: 'CHÔ!', value: 'cho'},
              {title: 'Music', value: 'music'}
            ]
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'featured',
      title: 'Vidéo mise en avant',
      type: 'boolean',
      description: 'Cocher pour mettre cette vidéo en avant'
    })
  ],
  preview: {
    select: {
      title: 'title',
      youtubeId: 'youtubeId',
      order: 'order',
      sections: 'sections'
    },
    prepare({title, youtubeId, order, sections}) {
      return {
        title: title,
        subtitle: `Sections: ${sections?.join(', ') || 'Aucune'} - ID: ${youtubeId} - Ordre: ${order || 'Non défini'}`,
        media: undefined
      }
    }
  },
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
})