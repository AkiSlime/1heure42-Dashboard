import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'spotifyPlaylist',
  title: 'Playlist Spotify',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'URL Spotify',
      type: 'url',
      description: 'L\'URL complète de la playlist Spotify (par exemple: https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M)',
      validation: Rule => Rule.required().uri({
        scheme: ['https'],
        allowRelative: false
      })
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
      description: 'Utilisé pour ordonner les playlists dans la section'
    }),
    defineField({
      name: 'featured',
      title: 'Playlist mise en avant',
      type: 'boolean',
      description: 'Cocher pour mettre cette playlist en avant'
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          {title: 'CHÔ!', value: 'cho'}
        ]
      },
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      spotifyUrl: 'spotifyUrl',
      order: 'order',
      section: 'section'
    },
    prepare({title, spotifyUrl, order, section}) {
      return {
        title: title,
        subtitle: `Section: ${section?.toUpperCase() || 'Non définie'} - Ordre: ${order || 'Non défini'}`,
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
    },
    {
      title: 'Par section',
      name: 'sectionThenOrder',
      by: [
        {field: 'section', direction: 'asc'},
        {field: 'order', direction: 'asc'}
      ]
    }
  ]
})