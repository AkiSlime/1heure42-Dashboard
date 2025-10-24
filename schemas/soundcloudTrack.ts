import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'soundcloudTrack',
  title: 'Piste SoundCloud',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'soundcloudUrl',
      title: 'URL SoundCloud',
      type: 'url',
      description:
        "L'URL complète de la piste SoundCloud (par exemple: https://soundcloud.com/artist/track)",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      description: 'Utilisé pour ordonner les pistes dans la section',
    }),
    defineField({
      name: 'featured',
      title: 'Piste mise en avant',
      type: 'boolean',
      description: 'Cocher pour mettre cette piste en avant',
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          {title: 'Mix', value: 'mix'},
          {title: 'Tracks', value: 'music'},
          {title: 'Tracks Album', value: 'album'},
          {title: 'Chô!', value: 'cho'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      soundcloudUrl: 'soundcloudUrl',
      order: 'order',
      section: 'section',
    },
    prepare({title, soundcloudUrl, order, section}) {
      return {
        title: title,
        subtitle: `Section: ${section?.toUpperCase() || 'Non définie'} - Ordre: ${order || 'Non défini'}`,
        media: undefined,
      }
    },
  },
  orderings: [
    {
      title: "Ordre d'affichage",
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Par section',
      name: 'sectionThenOrder',
      by: [
        {field: 'section', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})
