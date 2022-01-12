var player = videojs('video');

    player.playlist([{
      name: 'Huble',
      description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      duration: 45,
      sources: [
        { src: 'http://cdn.spacetelescope.org/archives/videos/medium_podcast/heic2021a.mp4', type: 'video/mp4' },
        { src: 'http://vjs.zencdn.net/v/oceans.webm', type: 'video/webm' },
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
      description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      duration: 45,
      sources: [
        { src: 'http://cdn.spacetelescope.org/archives/videos/dome_preview/supernova_explosion_fd.mp4?2', type: 'video/mp4' },
        { src: 'http://vjs.zencdn.net/v/oceans.webm?2', type: 'video/webm' },
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
      description: 'Explore the depths of our planet\'s oceans. ' +
        'Experience the stories that connect their world to ours. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
        'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ' +
        'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure ' +
        'dolor in reprehenderit in voluptate velit esse cillum dolore eu ' +
        'fugiat nulla pariatur. Excepteur sint occaecat cupidatat non ' +
        'proident, sunt in culpa qui officia deserunt mollit anim id est ' +
        'laborum.',
      duration: 45,
      sources: [
        { src: 'http://cdn.spacetelescope.org/archives/videos/medium_podcast/heic1717c.mp4?3', type: 'video/mp4' },
        { src: 'http://vjs.zencdn.net/v/oceans.webm?3', type: 'video/webm' },
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
    }, {
      name: 'Sintel (No Thumbnail)',
      description: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales.',
      sources: [
        { src: 'http://media.w3.org/2010/05/sintel/trailer.mp4', type: 'video/mp4' },
        { src: 'http://media.w3.org/2010/05/sintel/trailer.webm', type: 'video/webm' },
        { src: 'http://media.w3.org/2010/05/sintel/trailer.ogv', type: 'video/ogg' }
      ],
      thumbnail: false
    },

    // This is a really underspecified video to demonstrate the
    // behavior when optional parameters are missing. You'll get better
    // results with more video metadata!
    {
      name: 'Invalid Source',
      sources: [{
        src: 'Invalid'
      }]
    }]);

    // Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();