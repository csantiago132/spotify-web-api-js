import * as model from "../model";

export const getCategoryFixture: model.GetCategoryResponse = {
  href: "https://api.spotify.com/v1/browse/categories/dinner",
  icons: [
    {
      height: 274,
      url:
        "https://t.scdn.co/media/original/dinner_1b6506abba0ba52c54e6d695c8571078_274x274.jpg",
      width: 274
    }
  ],
  id: "dinner",
  name: "Dinner"
};

export const getCategoryPlaylistsFixture: model.GetCategoryPlaylistsResponse = {
  playlists: {
    href:
      "https://api.spotify.com/v1/browse/categories/party/playlists?offset=0&limit=20",
    items: [
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWZjqjZMudx9T"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWZjqjZMudx9T",
        id: "37i9dQZF1DWZjqjZMudx9T",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/057a70fbfdfc1bdb0c3c17f270e45aca561c0b2b",
            width: 300
          }
        ],
        name: "Carrete 2018",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg5MywwMDAwMDA3MjAwMDAwMTY2YzE2NzY4ODYwMDAwMDE2NTVjYTM3ZWQ3",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWZjqjZMudx9T/tracks",
          total: 50
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWZjqjZMudx9T"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWT1viuVscXm2"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWT1viuVscXm2",
        id: "37i9dQZF1DWT1viuVscXm2",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/0d4a10fd96d0a5b45651ac9b9527e6ee1fa2ffcb",
            width: 300
          }
        ],
        name: "Esto es Cumbia",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NSwwMDAwMDAzODAwMDAwMTY2YzAwZjQ2N2MwMDAwMDE2NDcwZGMwOTdk",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWT1viuVscXm2/tracks",
          total: 70
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWT1viuVscXm2"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWY7IeIP1cdjF",
        id: "37i9dQZF1DWY7IeIP1cdjF",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/9544a95a206b03cafe334368daf892164eb4de70",
            width: 300
          }
        ],
        name: "Baila Reggaeton",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NywwMDAwMDBiODAwMDAwMTY2ZDUxNGYzODkwMDAwMDE2NmFjZTIwNGEw",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWY7IeIP1cdjF/tracks",
          total: 52
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWY7IeIP1cdjF"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWZU4CGLgiKls"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWZU4CGLgiKls",
        id: "37i9dQZF1DWZU4CGLgiKls",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/06bb01c933b0808a61dc58ae27c6a216f3d1f854",
            width: 300
          }
        ],
        name: "La Previa",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NywwMDAwMDA0MjAwMDAwMTY2YTIxMmZjMDEwMDAwMDE2NjlkNGJlZGMw",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWZU4CGLgiKls/tracks",
          total: 60
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWZU4CGLgiKls"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdnGF35OawbN"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXdnGF35OawbN",
        id: "37i9dQZF1DXdnGF35OawbN",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/e1eaa6f28665799983e351be152d5cd4156e07a9",
            width: 300
          }
        ],
        name: "Verano Forever",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NSwwMDAwMDA4ZDAwMDAwMTY2YzA5YTY2YzUwMDAwMDE2NTQ1MjBjZmQ0",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DXdnGF35OawbN/tracks",
          total: 51
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DXdnGF35OawbN"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1fEeToKZ81B"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX1fEeToKZ81B",
        id: "37i9dQZF1DX1fEeToKZ81B",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/ef917367416635bdac5cc825b5ceb64388d9e705",
            width: 300
          }
        ],
        name: "Clásicos de Fogata",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg1OSwwMDAwMDAzNDAwMDAwMTY2YWQ4ZmRkNDIwMDAwMDE2MmYyYjBlOGQ4",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX1fEeToKZ81B/tracks",
          total: 50
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX1fEeToKZ81B"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX8FwnYE6PRvL"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX8FwnYE6PRvL",
        id: "37i9dQZF1DX8FwnYE6PRvL",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/956c45784537ebe8136dbc4c362305b383e54e8d",
            width: 300
          }
        ],
        name: "Rock Party",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NiwwMDAwMDAyYjAwMDAwMTY2MjBhNTQ1NDMwMDAwMDE2NGIyOTU2MDI0",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX8FwnYE6PRvL/tracks",
          total: 50
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX8FwnYE6PRvL"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DXaXB8fQg7xif"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXaXB8fQg7xif",
        id: "37i9dQZF1DXaXB8fQg7xif",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/948ab524d21a72b830265f8c0aa04d841a83e0bf",
            width: 300
          }
        ],
        name: "Dance Party",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NiwwMDAwMDBjODAwMDAwMTY2Y2FkYjQ2YTUwMDAwMDE2NjMwYzU1YTM0",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DXaXB8fQg7xif/tracks",
          total: 50
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DXaXB8fQg7xif"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWVcbzTgVpNRm"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWVcbzTgVpNRm",
        id: "37i9dQZF1DWVcbzTgVpNRm",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/73a76fd4c6f2b0caabe37b6e9bd6056220326c6b",
            width: 300
          }
        ],
        name: "Latin Party Anthems",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg2NCwwMDAwMDA0ZTAwMDAwMTY2NmY4ZjE4MjMwMDAwMDE2MzhlY2ZhMzgx",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWVcbzTgVpNRm/tracks",
          total: 60
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWVcbzTgVpNRm"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWVA4ETicgIky"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWVA4ETicgIky",
        id: "37i9dQZF1DWVA4ETicgIky",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/ba7d27728b5345626f676cff2e51608da604b1e6",
            width: 300
          }
        ],
        name: "Fiesta 80era",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NSwwMDAwMDAwYzAwMDAwMTY2YjYxODI3NDgwMDAwMDE2NTFjYWU0MDAx",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWVA4ETicgIky/tracks",
          total: 70
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWVA4ETicgIky"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX5463MYlHXHD"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX5463MYlHXHD",
        id: "37i9dQZF1DX5463MYlHXHD",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/996311aa4f6d4dce50f03eafc03a410f65a442cb",
            width: 300
          }
        ],
        name: "Vamo Lo Pibe",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NywwMDAwMDAyZjAwMDAwMTY2NjAzOWEyMjAwMDAwMDE2NjU5NGIzYjc3",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX5463MYlHXHD/tracks",
          total: 60
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX5463MYlHXHD"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/6eDC1vJfCmbKQwz3IuXiTp"
        },
        href: "https://api.spotify.com/v1/playlists/6eDC1vJfCmbKQwz3IuXiTp",
        id: "6eDC1vJfCmbKQwz3IuXiTp",
        images: [
          {
            height: null,
            url:
              "https://pl.scdn.co/images/pl/default/b52adb7b059949132057be572b0a55f89056e0b1",
            width: null
          }
        ],
        name: "¡Se armó el carrete!",
        owner: {
          display_name: "Topsify Chile",
          external_urls: {
            spotify: "https://open.spotify.com/user/lomejordespotifyenchile"
          },
          href: "https://api.spotify.com/v1/users/lomejordespotifyenchile",
          id: "lomejordespotifyenchile",
          type: "user",
          uri: "spotify:user:lomejordespotifyenchile"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTk4OCw2Y2ExMDcwNDU0Y2NlYzNkMmQ0N2E4YjY1OGVhODBiOGZhNDcwYTli",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/6eDC1vJfCmbKQwz3IuXiTp/tracks",
          total: 55
        },
        type: "playlist",
        uri:
          "spotify:user:lomejordespotifyenchile:playlist:6eDC1vJfCmbKQwz3IuXiTp"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7F6T2n2fegs"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX7F6T2n2fegs",
        id: "37i9dQZF1DX7F6T2n2fegs",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1bb02aa12ae80d5dce3d1d23c227f0b5e6cbb496",
            width: 300
          }
        ],
        name: "Throwback Party",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg2MywwMDAwMDA2ZTAwMDAwMTY2Nzk4OTkwMjUwMDAwMDE2MmYyYjBlOGQ4",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX7F6T2n2fegs/tracks",
          total: 70
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX7F6T2n2fegs"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DXan38dNVDdl4"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXan38dNVDdl4",
        id: "37i9dQZF1DXan38dNVDdl4",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/d1825f65d05d26cbccef7ab9feff1f9578ff55ac",
            width: 300
          }
        ],
        name: "Dancehall Official",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg2NCwwMDAwMDA1ZjAwMDAwMTY2ZDI5NzhmYjQwMDAwMDE2NjQxOTVkOTA5",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DXan38dNVDdl4/tracks",
          total: 100
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DXan38dNVDdl4"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWSXAHZTiX76o"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWSXAHZTiX76o",
        id: "37i9dQZF1DWSXAHZTiX76o",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/065998492780abd3ca2f27d3177853311a4b31bf",
            width: 300
          }
        ],
        name: "Fiesta Indie",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg2MywwMDAwMDAxOTAwMDAwMTY2YWUxNzM1YjEwMDAwMDE2MmYyYjBlOGQ4",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWSXAHZTiX76o/tracks",
          total: 62
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWSXAHZTiX76o"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX8a1tdzq5tbM"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX8a1tdzq5tbM",
        id: "37i9dQZF1DX8a1tdzq5tbM",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/52254e29d2c764f45be4d9e01cf58fa740590d8c",
            width: 300
          }
        ],
        name: "Dance Classics",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NSwwMDAwMDAxZDAwMDAwMTY1ZWFkMGE3ZDUwMDAwMDE2MmYyYjBlOGQ4",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX8a1tdzq5tbM/tracks",
          total: 50
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX8a1tdzq5tbM"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX1JKB9ugFP7X"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX1JKB9ugFP7X",
        id: "37i9dQZF1DX1JKB9ugFP7X",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/ddf525fc3289bf5aa583891e6b2230f6688894ab",
            width: 300
          }
        ],
        name: "POP a Fondo",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTE5MzI1NSwwMDAwMDAxNzAwMDAwMTY2ZDY0NmNhYjMwMDAwMDE2NjllYzk4M2U3",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX1JKB9ugFP7X/tracks",
          total: 55
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX1JKB9ugFP7X"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DXbNxO0uJPyJ9"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXbNxO0uJPyJ9",
        id: "37i9dQZF1DXbNxO0uJPyJ9",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/db9639098b5c131e004f6e55098116e798fc0cd6",
            width: 300
          }
        ],
        name: '12" Classics',
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3MCwwMDAwMDAxMjAwMDAwMTY0MWUzYWU0ZTkwMDAwMDE2MmYyYjBlOGQ4",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DXbNxO0uJPyJ9/tracks",
          total: 100
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DXbNxO0uJPyJ9"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX9vJ2U3sN7xj"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX9vJ2U3sN7xj",
        id: "37i9dQZF1DX9vJ2U3sN7xj",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/d74f470febe129dccc6f99f9ff8a22ac420a7a0e",
            width: 300
          }
        ],
        name: "¡Por Fin Viernes!",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTkxMywwMDAwMDA0NDAwMDAwMTYzYmUwNWU3YTMwMDAwMDE2MmYyYjBlOGQ4",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX9vJ2U3sN7xj/tracks",
          total: 50
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX9vJ2U3sN7xj"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWUq3wF0JVtEy"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWUq3wF0JVtEy",
        id: "37i9dQZF1DWUq3wF0JVtEy",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/6325b2cde49483d2b4295d65a0ab1f893c97cf84",
            width: 300
          }
        ],
        name: "Shuffle Syndrome",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTI2OTg3NiwwMDAwMDA0ZDAwMDAwMTY2ZDYzYWE3MTkwMDAwMDE2NTg3MDQ3MjEy",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWUq3wF0JVtEy/tracks",
          total: 61
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWUq3wF0JVtEy"
      }
    ],
    limit: 20,
    next:
      "https://api.spotify.com/v1/browse/categories/party/playlists?offset=20&limit=20",
    offset: 0,
    previous: null,
    total: 48
  }
};

export const getCategoriesFixtures: model.GetCategoriesResponse = {
  categories: {
    href: "https://api.spotify.com/v1/browse/categories?offset=0&limit=2",
    items: [
      {
        href: "https://api.spotify.com/v1/browse/categories/toplists",
        icons: [
          {
            height: 275,
            url:
              "https://t.scdn.co/media/derived/toplists_11160599e6a04ac5d6f2757f5511778f_0_0_275_275.jpg",
            width: 275
          }
        ],
        id: "toplists",
        name: "Top Lists"
      },
      {
        href: "https://api.spotify.com/v1/browse/categories/pop",
        icons: [
          {
            height: 274,
            url:
              "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
            width: 274
          }
        ],
        id: "pop",
        name: "Pop"
      }
    ],
    limit: 2,
    next: "https://api.spotify.com/v1/browse/categories?offset=2&limit=2",
    offset: 0,
    previous: null,
    total: 41
  }
};

export const getFeaturedPlaylistsFixture: model.GetFeaturedPlaylistsResponse = {
  message: "Pillow tunes",
  playlists: {
    href:
      "https://api.spotify.com/v1/browse/featured-playlists?timestamp=2018-11-04T05%3A58%3A12&offset=0&limit=2",
    items: [
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO",
        id: "37i9dQZF1DX4sWSpwq3LiO",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/56228f9353b23405516a6ea8af1c22083f450b57",
            width: 300
          }
        ],
        name: "Peaceful Piano",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTMxMTAzNCwwMDAwMDA3ZjAwMDAwMTY2M2Y4MjBjM2IwMDAwMDE2MmYyYjBlOGQ4",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DX4sWSpwq3LiO/tracks",
          total: 165
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DX4sWSpwq3LiO"
      },
      {
        collaborative: false,
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DWSRc3WJklgBs"
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DWSRc3WJklgBs",
        id: "37i9dQZF1DWSRc3WJklgBs",
        images: [
          {
            height: 300,
            url:
              "https://i.scdn.co/image/e8f7fad30c09e48ffbc4e7a8f829f889b95cf6f1",
            width: 300
          }
        ],
        name: "Heart Beats",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify"
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify"
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTU0MTMxMTAzMywwMDAwMDA0YzAwMDAwMTY2ZDUyN2ZlOGYwMDAwMDE2NTFiODU5YWY5",
        tracks: {
          href:
            "https://api.spotify.com/v1/playlists/37i9dQZF1DWSRc3WJklgBs/tracks",
          total: 50
        },
        type: "playlist",
        uri: "spotify:user:spotify:playlist:37i9dQZF1DWSRc3WJklgBs"
      }
    ],
    limit: 2,
    next:
      "https://api.spotify.com/v1/browse/featured-playlists?timestamp=2018-11-04T05%3A58%3A12&offset=2&limit=2",
    offset: 0,
    previous: null,
    total: 15
  }
};

export const getNewReleasesFixture: model.GetNewReleasesResponse = {
  albums: {
    href: "https://api.spotify.com/v1/browse/new-releases?offset=0&limit=2",
    items: [
      {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp"
            },
            href: "https://api.spotify.com/v1/artists/0iEtIxbK0KxaSlF7G42ZOp",
            id: "0iEtIxbK0KxaSlF7G42ZOp",
            name: "Metro Boomin",
            type: "artist",
            uri: "spotify:artist:0iEtIxbK0KxaSlF7G42ZOp"
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY"
            },
            href: "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY",
            id: "0Y5tJX1MQlPlqiwlOH1tJY",
            name: "Travis Scott",
            type: "artist",
            uri: "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY"
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1URnnhqYAYcrqrcwql10ft"
            },
            href: "https://api.spotify.com/v1/artists/1URnnhqYAYcrqrcwql10ft",
            id: "1URnnhqYAYcrqrcwql10ft",
            name: "21 Savage",
            type: "artist",
            uri: "spotify:artist:1URnnhqYAYcrqrcwql10ft"
          }
        ],
        available_markets: [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "RO",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/1zNr37qd3iZJ899byrTkcj"
        },
        href: "https://api.spotify.com/v1/albums/1zNr37qd3iZJ899byrTkcj",
        id: "1zNr37qd3iZJ899byrTkcj",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/cbeb99770353e401e6696fc9461293febbeebf50",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/13520a8164400c8e556aa1c365b4381b56a9f421",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/338e6da44b7a61afac4bd4acee3f87a9afd4e2c0",
            width: 64
          }
        ],
        name: "NOT ALL HEROES WEAR CAPES",
        release_date: "2018-11-02",
        release_date_precision: "day",
        total_tracks: 13,
        type: "album",
        uri: "spotify:album:1zNr37qd3iZJ899byrTkcj"
      },
      {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3Y7RZ31TRPVadSFVy1o8os"
            },
            href: "https://api.spotify.com/v1/artists/3Y7RZ31TRPVadSFVy1o8os",
            id: "3Y7RZ31TRPVadSFVy1o8os",
            name: "H.E.R.",
            type: "artist",
            uri: "spotify:artist:3Y7RZ31TRPVadSFVy1o8os"
          }
        ],
        available_markets: [
          "AD",
          "AR",
          "AT",
          "AU",
          "BE",
          "BG",
          "BO",
          "BR",
          "CA",
          "CH",
          "CL",
          "CO",
          "CR",
          "CY",
          "CZ",
          "DE",
          "DK",
          "DO",
          "EC",
          "EE",
          "ES",
          "FI",
          "FR",
          "GB",
          "GR",
          "GT",
          "HK",
          "HN",
          "HU",
          "ID",
          "IE",
          "IL",
          "IS",
          "IT",
          "JP",
          "LI",
          "LT",
          "LU",
          "LV",
          "MC",
          "MT",
          "MX",
          "MY",
          "NI",
          "NL",
          "NO",
          "NZ",
          "PA",
          "PE",
          "PH",
          "PL",
          "PT",
          "PY",
          "RO",
          "SE",
          "SG",
          "SK",
          "SV",
          "TH",
          "TR",
          "TW",
          "US",
          "UY",
          "VN",
          "ZA"
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/46imFLgb9fR1Io6EoPYeQh"
        },
        href: "https://api.spotify.com/v1/albums/46imFLgb9fR1Io6EoPYeQh",
        id: "46imFLgb9fR1Io6EoPYeQh",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/2f00406917acd4e96b9f2ca3d99e93847237e6f1",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/8bc951f520b76fff4b9aaae40885d0d6bce99ad6",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/40183786e61e5ef402cfc24e762217be5f3bf8c6",
            width: 64
          }
        ],
        name: "I Used To Know Her - Part 2 - EP",
        release_date: "2018-11-02",
        release_date_precision: "day",
        total_tracks: 8,
        type: "album",
        uri: "spotify:album:46imFLgb9fR1Io6EoPYeQh"
      }
    ],
    limit: 2,
    next: "https://api.spotify.com/v1/browse/new-releases?offset=2&limit=2",
    offset: 0,
    previous: null,
    total: 500
  }
};
