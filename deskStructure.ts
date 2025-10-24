
import {StructureBuilder} from 'sanity/structure'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Tableau de bord')
    .items([
      // Pages principales
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages du site')
            .items([
              S.listItem()
                .title('À propos')
                .child(S.document().schemaType('aboutPage').documentId('aboutPage'))
                .icon(() => '👤'),
              S.listItem()
                .title('CHÔ!')
                .child(S.document().schemaType('choPage').documentId('choPage'))
                .icon(() => '🎵'),
            ])
        )
        .icon(() => '📄'),
      
      S.divider(),
      
      // Événements
      S.listItem()
        .title('Événements')
        .child(S.documentTypeList('concert').title('Gérer les concerts'))
        .icon(() => '🎪'),
      
      S.divider(),
      
      // Contenu Multimédia
      S.listItem()
        .title('Multimédia')
        .child(
          S.list()
            .title('Contenu multimédia')
            .items([
              S.listItem()
                .title('Galerie Photos')
                .child(S.documentTypeList('media').title('Gérer les photos'))
                .icon(() => '📸'),
              S.listItem()
                .title('Vidéos YouTube')
                .child(S.documentTypeList('youtubeVideo').title('Gérer les vidéos'))
                .icon(() => '🎬'),
              S.listItem()
                .title('Pistes SoundCloud')
                .child(S.documentTypeList('soundcloudTrack').title('Gérer les pistes SoundCloud'))
                .icon(() => '🎧'),
              S.listItem()
                .title('Playlists Spotify')
                .child(S.documentTypeList('spotifyPlaylist').title('Gérer les playlists Spotify'))
                .icon(() => '🎵'),
            ])
        )
        .icon(() => '🎭'),
      
      S.divider(),
      
      // Paramètres
      S.listItem()
        .title('Paramètres du site')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings'))
        .icon(() => '⚙️'),
    ])
