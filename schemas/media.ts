
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Média',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
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
              {title: 'Hero', value: 'hero'},
              {title: 'Galerie', value: 'gallery'},
              {title: 'About', value: 'about'}
            ]
          }
        }
      ],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Utilisé pour ordonner les images dans les sections'
    }),
    defineField({
      name: 'predefinedTags',
      title: 'Tags prédéfinis',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: '🎉 Événement', value: 'evenement'},
              {title: '👤 Portrait', value: 'portrait'},
              {title: '🎙️ Studio', value: 'studio'},
              {title: '🎵 Live', value: 'live'},
              {title: '🎤 Concert', value: 'concert'},
              {title: '🎪 Festival', value: 'festival'},
              {title: '🎧 DJ Set', value: 'dj-set'},
              {title: '🚪 Backstage', value: 'backstage'},
              {title: '🎛️ Équipement', value: 'equipement'},
              {title: '🏭 Production', value: 'production'},
              {title: '🤝 Collaboration', value: 'collaboration'},
              {title: '📢 Promo', value: 'promo'},
              {title: '✨ Lifestyle', value: 'lifestyle'},
              {title: '⚫ Noir et Blanc', value: 'noir-et-blanc'},
              {title: '🌈 Couleur', value: 'couleur'},
              {title: '🔥 CHÔ!', value: 'cho'}
            ]
          }
        }
      ],
      options: {
        layout: 'dropdown'
      },
      description: 'Sélectionnez un ou plusieurs tags prédéfinis'
    }),
    defineField({
      name: 'customTags',
      title: 'Tags personnalisés',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      },
      description: 'Ajoutez des tags personnalisés en tapant et en appuyant sur Entrée'
    })
  ],
  preview: {
    select: {
      title: 'description',
      media: 'image',
      sections: 'sections',
      order: 'order',
      predefinedTags: 'predefinedTags',
      customTags: 'customTags'
    },
    prepare({title, media, sections, order, predefinedTags, customTags}) {
      const allTags = [...(predefinedTags || []), ...(customTags || [])];
      return {
        title: title || 'Image sans description',
        subtitle: `Sections: ${sections?.join(', ') || 'Aucune'} - Ordre: ${order || 'Non défini'} ${allTags?.length ? `- Tags: ${allTags.join(', ')}` : ''}`,
        media: media
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
