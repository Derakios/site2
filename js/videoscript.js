var player = videojs('video');

    player.playlist([{
      name: 'Huble',
      description: 'vidéo 1',
      duration: 45,
      sources: [
        { src: 'http://cdn.spacetelescope.org/archives/videos/medium_podcast/heic2021a.mp4', type: 'video/mp4' },
      ],

      // you can use <picture> syntax to display responsive images
      thumbnail: [
        {
          srcset: 'test/example/oceans.jpg',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'test/example/oceans-low.jpg'
        }
      ]
    },
    {
      name: 'Explosion d\'une supernova',
      description: 'vidéo 2',
      duration: 45,
      sources: [
        { src: 'http://cdn.spacetelescope.org/archives/videos/dome_preview/supernova_explosion_fd.mp4?2', type: 'video/mp4' },
      ],

      // you can use <picture> syntax to display responsive images
      thumbnail: [
        {
          srcset: 'test/example/oceans.jpg',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'test/example/oceans-low.jpg'
        }
      ]
    },
    {
      name: 'Zoom sur ngc 4993',
      description: 'vidéo 3',
      duration: 45,
      sources: [
        { src: 'http://cdn.spacetelescope.org/archives/videos/medium_podcast/heic1717c.mp4?3', type: 'video/mp4' },
      ],

      // you can use <picture> syntax to display responsive images
      thumbnail: [
        {
          srcset: 'test/example/oceans.jpg',
          type: 'image/jpeg',
          media: '(min-width: 400px;)'
        },
        {
          src: 'test/example/oceans-low.jpg'
        }
      ]
    }]);

    // Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();