
import {StructureBuilder} from 'sanity/structure'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        .title('Page About')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Page CHÔ!')
        .child(S.document().schemaType('choPage').documentId('choPage')),
      S.listItem()
        .title('Paramètres du Site')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('concert').title('Concerts'),
      S.documentTypeListItem('media').title('Galerie Média'),
    ])
