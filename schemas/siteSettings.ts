
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du Site',
  type: 'document',
  fields: [
    defineField({
      name: 'lienInstagram',
      title: 'Lien Instagram',
      type: 'url',
    }),
    defineField({
      name: 'lienSoundcloud',
      title: 'Lien Soundcloud',
      type: 'url',
    }),
    defineField({
      name: 'lienTiktok',
      title: 'Lien Tiktok',
      type: 'url',
    }),
  ],
})
