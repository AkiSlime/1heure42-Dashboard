import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {frFRLocale} from '@sanity/locale-fr-fr'
import {schemaTypes} from './schemaTypes'
import {myStructure} from './deskStructure'
import {CustomNavbar} from './components/CustomNavbar'

export default defineConfig({
  name: 'default',
  title: '1heure42',

  projectId: '4x1az7nc',
  dataset: 'production',
  studioHost: 'uneheure42',

  icon: () => '🎧',

  studio: {
    components: {
      navbar: CustomNavbar,
    }
  },

  plugins: [structureTool({structure: myStructure}), frFRLocale()],

  schema: {
    types: schemaTypes,
  },
})
