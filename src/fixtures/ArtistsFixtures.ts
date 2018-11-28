import * as model from "../model";

export const getArtistFixture: model.GetArtistResponse = {
  external_urls: {
    spotify: "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF"
  },
  followers: {
    href: null,
    total: 664165
  },
  genres: [
    "folk-pop",
    "indie folk",
    "indie pop",
    "indie rock",
    "modern rock",
    "stomp and holler"
  ],
  href: "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
  id: "0OdUWJ0sBjDrqHygGUXeCF",
  images: [
    {
      height: 640,
      url: "https://i.scdn.co/image/0f9a5013134de288af7d49a962417f4200539b47",
      width: 640
    },
    {
      height: 320,
      url: "https://i.scdn.co/image/8ae35be1043f330173de198c35a49161337e829c",
      width: 320
    },
    {
      height: 160,
      url: "https://i.scdn.co/image/602dd7b3a2ee3f3fd86c6c4f50ab9b5a82e23c59",
      width: 160
    }
  ],
  name: "Band of Horses",
  popularity: 65,
  type: "artist",
  uri: "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF"
};

export const getArtistAlbumsFixture: model.GetArtistAlbumsResponse = {
  href:
    "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=0&limit=2&include_groups=album,single,compilation,appears_on&market=ES",
  items: [
    {
      album_group: "album",
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
          },
          href: "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
          id: "1vCWHaC5f2uS3yhpwWbIA6",
          name: "Avicii",
          type: "artist",
          uri: "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
        }
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/7dqftJ3kas6D0VAdmt3k3V"
      },
      href: "https://api.spotify.com/v1/albums/7dqftJ3kas6D0VAdmt3k3V",
      id: "7dqftJ3kas6D0VAdmt3k3V",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/a76f75493d039938b5dcfabbd5a6c1081f270a6c",
          width: 640
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/1685a59f97e828e423a20ba080754c8d58466756",
          width: 300
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/95191136789abd43fc7ad7b4ea5526eca2986c26",
          width: 64
        }
      ],
      name: "Stories",
      release_date: "2015-10-02",
      release_date_precision: "day",
      total_tracks: 14,
      type: "album",
      uri: "spotify:album:7dqftJ3kas6D0VAdmt3k3V"
    },
    {
      album_group: "album",
      album_type: "album",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6"
          },
          href: "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6",
          id: "1vCWHaC5f2uS3yhpwWbIA6",
          name: "Avicii",
          type: "artist",
          uri: "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6"
        }
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/0h2knr6qpiAq0tV5ri5JMF"
      },
      href: "https://api.spotify.com/v1/albums/0h2knr6qpiAq0tV5ri5JMF",
      id: "0h2knr6qpiAq0tV5ri5JMF",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/1da50cf44c25f8aad1b39ab640dff5137ee72dbb",
          width: 640
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/baca6767c796817bded72c60f4a1b67f28cc75da",
          width: 300
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/f8dc9e20bf7dd876bd646ce472c345a0fa9dfae3",
          width: 64
        }
      ],
      name: "The Days / Nights",
      release_date: "2014-01-01",
      release_date_precision: "day",
      total_tracks: 4,
      type: "album",
      uri: "spotify:album:0h2knr6qpiAq0tV5ri5JMF"
    }
  ],
  limit: 2,
  next:
    "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?offset=2&limit=2&include_groups=album,single,compilation,appears_on&market=ES",
  offset: 0,
  previous: null,
  total: 344
};

export const getArtistTopTracksFixture: model.GetArtistTopTracksResponse = {
  tracks: [
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/7xe8VI48TxUpU1IIo0RfGi"
        },
        href: "https://api.spotify.com/v1/albums/7xe8VI48TxUpU1IIo0RfGi",
        id: "7xe8VI48TxUpU1IIo0RfGi",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/4295b5ff74d4f944367144acbe616b6f62d20b17",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/203104e5843248c700b078f391d4bc759c5d7f47",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/0c0a172373b0211c590b241270d05b70889075a1",
            width: 64
          }
        ],
        name: "Blue Hawaii",
        release_date: "1961",
        release_date_precision: "year",
        total_tracks: 14,
        type: "album",
        uri: "spotify:album:7xe8VI48TxUpU1IIo0RfGi"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 179773,
      explicit: false,
      external_ids: {
        isrc: "USRC16101350"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/44AyOl4qVkzS48vBsbNXaC"
      },
      href: "https://api.spotify.com/v1/tracks/44AyOl4qVkzS48vBsbNXaC",
      id: "44AyOl4qVkzS48vBsbNXaC",
      is_local: false,
      is_playable: true,
      name: "Can't Help Falling in Love",
      popularity: 77,
      preview_url:
        "https://p.scdn.co/mp3-preview/26e409b39a2da6dc18fab61020c90be2938dc0e9?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 5,
      type: "track",
      uri: "spotify:track:44AyOl4qVkzS48vBsbNXaC"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        href: "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        id: "0C3t1htEDTFKcg7F2rNbek",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            width: 64
          }
        ],
        name: "Elvis' Golden Records",
        release_date: "1958-03-21",
        release_date_precision: "day",
        total_tracks: 14,
        type: "album",
        uri: "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 146480,
      explicit: false,
      external_ids: {
        isrc: "USRC15705223"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE"
      },
      href: "https://api.spotify.com/v1/tracks/4gphxUgq0JSFv2BCLhNDiE",
      id: "4gphxUgq0JSFv2BCLhNDiE",
      is_local: false,
      is_playable: true,
      name: "Jailhouse Rock",
      popularity: 73,
      preview_url:
        "https://p.scdn.co/mp3-preview/29990f669b5328b6c40320596a2b14d8660cdb54?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 5,
      type: "track",
      uri: "spotify:track:4gphxUgq0JSFv2BCLhNDiE"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/3ekkFrfotMsEAKc5g71GHk"
        },
        href: "https://api.spotify.com/v1/albums/3ekkFrfotMsEAKc5g71GHk",
        id: "3ekkFrfotMsEAKc5g71GHk",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/67e6848dbf8e7e7d93120b19033d7639d7f92e34",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1ecdfce504d076b0853cfd83c31f06b5de7106b1",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/8f50e0a7c68c6c2afa47b166a708075d3be75c14",
            width: 64
          }
        ],
        name: "From Elvis in Memphis",
        release_date: "1969",
        release_date_precision: "year",
        total_tracks: 16,
        type: "album",
        uri: "spotify:album:3ekkFrfotMsEAKc5g71GHk"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 261279,
      explicit: false,
      external_ids: {
        isrc: "USRC16901355"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/1H5IfYyIIAlgDX8zguUzns"
      },
      href: "https://api.spotify.com/v1/tracks/1H5IfYyIIAlgDX8zguUzns",
      id: "1H5IfYyIIAlgDX8zguUzns",
      is_local: false,
      is_playable: true,
      name: "Suspicious Minds",
      popularity: 70,
      preview_url:
        "https://p.scdn.co/mp3-preview/7a298f247198d8736393e166cb9f9e32227f1886?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 13,
      type: "track",
      uri: "spotify:track:1H5IfYyIIAlgDX8zguUzns"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        href: "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        id: "0C3t1htEDTFKcg7F2rNbek",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            width: 64
          }
        ],
        name: "Elvis' Golden Records",
        release_date: "1958-03-21",
        release_date_precision: "day",
        total_tracks: 14,
        type: "album",
        uri: "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 136026,
      explicit: false,
      external_ids: {
        isrc: "USRC15602857"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/64Ny7djQ6rNJspquof2KoX"
      },
      href: "https://api.spotify.com/v1/tracks/64Ny7djQ6rNJspquof2KoX",
      id: "64Ny7djQ6rNJspquof2KoX",
      is_local: false,
      is_playable: true,
      name: "Hound Dog",
      popularity: 70,
      preview_url:
        "https://p.scdn.co/mp3-preview/f683997c027a50649aa3b6c627cd67bd1a9364f5?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:64Ny7djQ6rNJspquof2KoX"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/3gpHiNAmT5oXVxe6ewTGuN"
        },
        href: "https://api.spotify.com/v1/albums/3gpHiNAmT5oXVxe6ewTGuN",
        id: "3gpHiNAmT5oXVxe6ewTGuN",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/7e483c17a33600af2ceb9758642ff646f10d5028",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/508f655810da103b75402c2f9f8ae775fb44d077",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/592db6cb190e6162b992d7c90af8978b900a5b0a",
            width: 64
          }
        ],
        name: "Elvis (Fool)",
        release_date: "1973",
        release_date_precision: "year",
        total_tracks: 16,
        type: "album",
        uri: "spotify:album:3gpHiNAmT5oXVxe6ewTGuN"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 170293,
      explicit: false,
      external_ids: {
        isrc: "USRC18705934"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/7zMUCLm1TN9o9JlLISztxO"
      },
      href: "https://api.spotify.com/v1/tracks/7zMUCLm1TN9o9JlLISztxO",
      id: "7zMUCLm1TN9o9JlLISztxO",
      is_local: false,
      is_playable: true,
      name: "Burning Love",
      popularity: 68,
      preview_url:
        "https://p.scdn.co/mp3-preview/8120be95b750b8783840768f7d458ba8a4a972fb?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 13,
      type: "track",
      uri: "spotify:track:7zMUCLm1TN9o9JlLISztxO"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        href: "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        id: "0C3t1htEDTFKcg7F2rNbek",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            width: 64
          }
        ],
        name: "Elvis' Golden Records",
        release_date: "1958-03-21",
        release_date_precision: "day",
        total_tracks: 14,
        type: "album",
        uri: "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 127560,
      explicit: false,
      external_ids: {
        isrc: "USRC15602846"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/6xNwKNYZcvgV3XTIwsgNio"
      },
      href: "https://api.spotify.com/v1/tracks/6xNwKNYZcvgV3XTIwsgNio",
      id: "6xNwKNYZcvgV3XTIwsgNio",
      is_local: false,
      is_playable: true,
      name: "Heartbreak Hotel",
      popularity: 64,
      preview_url:
        "https://p.scdn.co/mp3-preview/f57b3ba45451dabdf48d825a21880525a1c06b30?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 4,
      type: "track",
      uri: "spotify:track:6xNwKNYZcvgV3XTIwsgNio"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/7GXP5OhYyPVLmcVfO9Iqin"
        },
        href: "https://api.spotify.com/v1/albums/7GXP5OhYyPVLmcVfO9Iqin",
        id: "7GXP5OhYyPVLmcVfO9Iqin",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/ba87521b259e34ed9a869d1b1bae5a3d5b25b335",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/ac1234af00fc89a121261457bec65403c09116b9",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/dba3db5a2021e8c092074fe0ac2c7f784da6726f",
            width: 64
          }
        ],
        name: "Elvis Presley",
        release_date: "1956",
        release_date_precision: "year",
        total_tracks: 12,
        type: "album",
        uri: "spotify:album:7GXP5OhYyPVLmcVfO9Iqin"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 119200,
      explicit: false,
      external_ids: {
        isrc: "USRC15602848"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/47gmoUrZV3w20JAnQOZMcO"
      },
      href: "https://api.spotify.com/v1/tracks/47gmoUrZV3w20JAnQOZMcO",
      id: "47gmoUrZV3w20JAnQOZMcO",
      is_local: false,
      is_playable: true,
      name: "Blue Suede Shoes",
      popularity: 64,
      preview_url:
        "https://p.scdn.co/mp3-preview/cd57814726943052ca66e279a3fe23cf9cbfbd93?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:47gmoUrZV3w20JAnQOZMcO"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        href: "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        id: "0C3t1htEDTFKcg7F2rNbek",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            width: 64
          }
        ],
        name: "Elvis' Golden Records",
        release_date: "1958-03-21",
        release_date_precision: "day",
        total_tracks: 14,
        type: "album",
        uri: "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 122893,
      explicit: false,
      external_ids: {
        isrc: "USRC15602859"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/01u6AEzGbGbQyYVdxajxqk"
      },
      href: "https://api.spotify.com/v1/tracks/01u6AEzGbGbQyYVdxajxqk",
      id: "01u6AEzGbGbQyYVdxajxqk",
      is_local: false,
      is_playable: true,
      name: "Don't Be Cruel",
      popularity: 63,
      preview_url:
        "https://p.scdn.co/mp3-preview/55f71e5caaccf649dd8c1ab9742cd0c09e1e65e7?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 8,
      type: "track",
      uri: "spotify:track:01u6AEzGbGbQyYVdxajxqk"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/0C3t1htEDTFKcg7F2rNbek"
        },
        href: "https://api.spotify.com/v1/albums/0C3t1htEDTFKcg7F2rNbek",
        id: "0C3t1htEDTFKcg7F2rNbek",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/31301ae33f6ec1ca0f86edec54a9a7be14c78310",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/1123a3ffb6d553b1770a2b51ad07d8113c205bf5",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/e0c1b855510a651821bcfcc6f20cd2424e493c93",
            width: 64
          }
        ],
        name: "Elvis' Golden Records",
        release_date: "1958-03-21",
        release_date_precision: "day",
        total_tracks: 14,
        type: "album",
        uri: "spotify:album:0C3t1htEDTFKcg7F2rNbek"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 117080,
      explicit: false,
      external_ids: {
        isrc: "USRC15705814"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/5ueyLj6e6oVaTY0KQ6yLaA"
      },
      href: "https://api.spotify.com/v1/tracks/5ueyLj6e6oVaTY0KQ6yLaA",
      id: "5ueyLj6e6oVaTY0KQ6yLaA",
      is_local: false,
      is_playable: true,
      name: "All Shook Up",
      popularity: 63,
      preview_url:
        "https://p.scdn.co/mp3-preview/8a379079e4bd03c72cc847ec1ea58f0a332d16ef?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 3,
      type: "track",
      uri: "spotify:track:5ueyLj6e6oVaTY0KQ6yLaA"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
            },
            href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
            id: "43ZHCT0cAZBISjO8DG9PnE",
            name: "Elvis Presley",
            type: "artist",
            uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
          }
        ],
        external_urls: {
          spotify: "https://open.spotify.com/album/6zk4RKl6JFlgLCV4Z7DQ7N"
        },
        href: "https://api.spotify.com/v1/albums/6zk4RKl6JFlgLCV4Z7DQ7N",
        id: "6zk4RKl6JFlgLCV4Z7DQ7N",
        images: [
          {
            height: 640,
            url:
              "https://i.scdn.co/image/d8ec333974abb5987719025a55a7395a22becb79",
            width: 640
          },
          {
            height: 300,
            url:
              "https://i.scdn.co/image/5d15ec46430ad0eea66e2d6150e6b5316f4602c8",
            width: 300
          },
          {
            height: 64,
            url:
              "https://i.scdn.co/image/6b46ba07004d2775975250f1c3e1f3b60b600e22",
            width: 64
          }
        ],
        name: "Elvis' Christmas Album",
        release_date: "1957",
        release_date_precision: "year",
        total_tracks: 12,
        type: "album",
        uri: "spotify:album:6zk4RKl6JFlgLCV4Z7DQ7N"
      },
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/43ZHCT0cAZBISjO8DG9PnE"
          },
          href: "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE",
          id: "43ZHCT0cAZBISjO8DG9PnE",
          name: "Elvis Presley",
          type: "artist",
          uri: "spotify:artist:43ZHCT0cAZBISjO8DG9PnE"
        }
      ],
      disc_number: 1,
      duration_ms: 129173,
      explicit: false,
      external_ids: {
        isrc: "USRC15701155"
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3QiAAp20rPC3dcAtKtMaqQ"
      },
      href: "https://api.spotify.com/v1/tracks/3QiAAp20rPC3dcAtKtMaqQ",
      id: "3QiAAp20rPC3dcAtKtMaqQ",
      is_local: false,
      is_playable: true,
      name: "Blue Christmas",
      popularity: 60,
      preview_url:
        "https://p.scdn.co/mp3-preview/ddcfe1df4783b2e41f494dec4b13917fb8e1465d?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 5,
      type: "track",
      uri: "spotify:track:3QiAAp20rPC3dcAtKtMaqQ"
    }
  ]
};

export const getRelatedArtistsFixture: model.GetRelatedArtistsResponse = {
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2zyz0VJqrDXeFDIyrfVXSo"
      },
      followers: {
        href: null,
        total: 284461
      },
      genres: [
        "brill building pop",
        "piano rock",
        "rock-and-roll",
        "rockabilly",
        "traditional country"
      ],
      href: "https://api.spotify.com/v1/artists/2zyz0VJqrDXeFDIyrfVXSo",
      id: "2zyz0VJqrDXeFDIyrfVXSo",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/ab675d08f38eb3fe894314c14b7f8701eede9837",
          width: 640
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/bd566d0cda936b3292b2406872832fd9c1e6c931",
          width: 320
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/8be22fcf31a07a475bb533db985bfa5322febfee",
          width: 160
        }
      ],
      name: "Jerry Lee Lewis",
      popularity: 58,
      type: "artist",
      uri: "spotify:artist:2zyz0VJqrDXeFDIyrfVXSo"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3wYyutjgII8LJVVOLrGI0D"
      },
      followers: {
        href: null,
        total: 404845
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "christmas",
        "folk rock",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/3wYyutjgII8LJVVOLrGI0D",
      id: "3wYyutjgII8LJVVOLrGI0D",
      images: [
        {
          height: 1266,
          url:
            "https://i.scdn.co/image/ff6c6ecd90618f5fb0f8fbf51bf8477586c8843b",
          width: 1000
        },
        {
          height: 810,
          url:
            "https://i.scdn.co/image/a6f9cbb13f743c1b397e73e77d564603ea8a7c1a",
          width: 640
        },
        {
          height: 253,
          url:
            "https://i.scdn.co/image/6291c6dce69ccc5bf017a2a348c8b7e507882e0c",
          width: 200
        },
        {
          height: 81,
          url:
            "https://i.scdn.co/image/b187258df5341858dbc1d4c09fc098a9a7aedbab",
          width: 64
        }
      ],
      name: "Buddy Holly",
      popularity: 59,
      type: "artist",
      uri: "spotify:artist:3wYyutjgII8LJVVOLrGI0D"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/293zczrfYafIItmnmM3coR"
      },
      followers: {
        href: null,
        total: 737521
      },
      genres: [
        "christmas",
        "classic rock",
        "folk rock",
        "rock",
        "rock-and-roll",
        "rockabilly",
        "soul"
      ],
      href: "https://api.spotify.com/v1/artists/293zczrfYafIItmnmM3coR",
      id: "293zczrfYafIItmnmM3coR",
      images: [
        {
          height: 1198,
          url:
            "https://i.scdn.co/image/d58323616d4f5d22b51e9dfe0ba53aedabe53cd4",
          width: 1000
        },
        {
          height: 766,
          url:
            "https://i.scdn.co/image/7cfff5d03c5f80539eebba8827e8569c71898ea4",
          width: 640
        },
        {
          height: 240,
          url:
            "https://i.scdn.co/image/dd7b763fb49c35b1ebaadf3695156aeb7d9f9ca3",
          width: 200
        },
        {
          height: 77,
          url:
            "https://i.scdn.co/image/127a6c846e601f5201e4e4bc19d43c388da97b99",
          width: 64
        }
      ],
      name: "Chuck Berry",
      popularity: 66,
      type: "artist",
      uri: "spotify:artist:293zczrfYafIItmnmM3coR"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1p0t3JtUTayV2wb1RGN9mO"
      },
      followers: {
        href: null,
        total: 100823
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "doo-wop",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/1p0t3JtUTayV2wb1RGN9mO",
      id: "1p0t3JtUTayV2wb1RGN9mO",
      images: [
        {
          height: 1000,
          url:
            "https://i.scdn.co/image/598642ecbc39004cdbb63dd018042db59b0385e5",
          width: 1000
        },
        {
          height: 743,
          url:
            "https://i.scdn.co/image/55b746de045ed8ef3383ed9aef4efcfdb8537645",
          width: 640
        },
        {
          height: 232,
          url:
            "https://i.scdn.co/image/8a6d73006026ed04e7cd4e942d0bc857cd4e629a",
          width: 200
        },
        {
          height: 74,
          url:
            "https://i.scdn.co/image/8f65907593700fe5ba7b1e479e359b7be73f2bff",
          width: 64
        }
      ],
      name: "Eddie Cochran",
      popularity: 54,
      type: "artist",
      uri: "spotify:artist:1p0t3JtUTayV2wb1RGN9mO"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0JDkhL4rjiPNEp92jAgJnS"
      },
      followers: {
        href: null,
        total: 512141
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "christmas",
        "folk rock",
        "mellow gold",
        "rock",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/0JDkhL4rjiPNEp92jAgJnS",
      id: "0JDkhL4rjiPNEp92jAgJnS",
      images: [
        {
          height: 1373,
          url:
            "https://i.scdn.co/image/684f6d45078b404e6b82e2c84f82859035dd3e3c",
          width: 1000
        },
        {
          height: 879,
          url:
            "https://i.scdn.co/image/d817b57cca6f60377284558faa363141a6295224",
          width: 640
        },
        {
          height: 275,
          url:
            "https://i.scdn.co/image/0fdbf19699a12526b3aff2d02a5034787a83a1a2",
          width: 200
        },
        {
          height: 88,
          url:
            "https://i.scdn.co/image/5c5233c83e4d88731df211814628a12bd837b366",
          width: 64
        }
      ],
      name: "Roy Orbison",
      popularity: 67,
      type: "artist",
      uri: "spotify:artist:0JDkhL4rjiPNEp92jAgJnS"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4ACplpEqD6JIVgKrafauzs"
      },
      followers: {
        href: null,
        total: 222377
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "christmas",
        "folk rock",
        "lounge",
        "mellow gold",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/4ACplpEqD6JIVgKrafauzs",
      id: "4ACplpEqD6JIVgKrafauzs",
      images: [
        {
          height: 1035,
          url:
            "https://i.scdn.co/image/143996e5147b6767719a60163488e342b3fc2efe",
          width: 1000
        },
        {
          height: 662,
          url:
            "https://i.scdn.co/image/ecd862317d93b07ff51218eee3fcb1e971ced621",
          width: 640
        },
        {
          height: 207,
          url:
            "https://i.scdn.co/image/8eee809edea1af0fc95620c95f8ecd6b7cdc6cc9",
          width: 200
        },
        {
          height: 66,
          url:
            "https://i.scdn.co/image/0d0e09e6e99dcbe60af88d03ff8f6ffe9bfe6d08",
          width: 64
        }
      ],
      name: "The Everly Brothers",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:4ACplpEqD6JIVgKrafauzs"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4xls23Ye9WR9yy3yYMpAMm"
      },
      followers: {
        href: null,
        total: 323372
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "motown",
        "rock-and-roll",
        "rockabilly",
        "soul"
      ],
      href: "https://api.spotify.com/v1/artists/4xls23Ye9WR9yy3yYMpAMm",
      id: "4xls23Ye9WR9yy3yYMpAMm",
      images: [
        {
          height: 596,
          url:
            "https://i.scdn.co/image/8482a715712ad99032f35870bd2430b9b71b7283",
          width: 477
        },
        {
          height: 250,
          url:
            "https://i.scdn.co/image/0d374a6e20f8bb052cbe2a73f90f2dadfd46c7bc",
          width: 200
        },
        {
          height: 80,
          url:
            "https://i.scdn.co/image/f399df3b8c85af0054b31a2118fa39f20fe77cde",
          width: 64
        }
      ],
      name: "Little Richard",
      popularity: 60,
      type: "artist",
      uri: "spotify:artist:4xls23Ye9WR9yy3yYMpAMm"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3MFp4cYuYtTZe3d3xkLLbr"
      },
      followers: {
        href: null,
        total: 87811
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "doo-wop",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/3MFp4cYuYtTZe3d3xkLLbr",
      id: "3MFp4cYuYtTZe3d3xkLLbr",
      images: [
        {
          height: 634,
          url:
            "https://i.scdn.co/image/d8c0d58a5bdde0e7d0b32d51fa95154fe0e2b11b",
          width: 640
        },
        {
          height: 297,
          url:
            "https://i.scdn.co/image/25284ede98edbd6693d56d87b3391970163286f5",
          width: 300
        },
        {
          height: 63,
          url:
            "https://i.scdn.co/image/9770605897b143b725a0b1e047ef827da5882346",
          width: 64
        }
      ],
      name: "Bill Haley & His Comets",
      popularity: 55,
      type: "artist",
      uri: "spotify:artist:3MFp4cYuYtTZe3d3xkLLbr"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/73sSFVlM6pkweLXE8qw1OS"
      },
      followers: {
        href: null,
        total: 116736
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "christmas",
        "doo-wop",
        "folk rock",
        "lounge",
        "merseybeat",
        "nashville sound",
        "rhythm and blues",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/73sSFVlM6pkweLXE8qw1OS",
      id: "73sSFVlM6pkweLXE8qw1OS",
      images: [
        {
          height: 1129,
          url:
            "https://i.scdn.co/image/99ee90438c46d52c9007866740f5504834d20f99",
          width: 1000
        },
        {
          height: 723,
          url:
            "https://i.scdn.co/image/3c0b0278e7cc5a8f062f7797993e099683b10e1e",
          width: 640
        },
        {
          height: 226,
          url:
            "https://i.scdn.co/image/53705a46b8496509b92c70268dabdc8a41899fb6",
          width: 200
        },
        {
          height: 72,
          url:
            "https://i.scdn.co/image/534d374e547c994f09b030f3921fca41f0e1750f",
          width: 64
        }
      ],
      name: "Ricky Nelson",
      popularity: 55,
      type: "artist",
      uri: "spotify:artist:73sSFVlM6pkweLXE8qw1OS"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/09C0xjtosNAIXP36wTnWxd"
      },
      followers: {
        href: null,
        total: 181990
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "louisiana blues",
        "lounge",
        "new orleans blues",
        "piano blues",
        "rhythm and blues",
        "rock-and-roll",
        "rockabilly",
        "soul"
      ],
      href: "https://api.spotify.com/v1/artists/09C0xjtosNAIXP36wTnWxd",
      id: "09C0xjtosNAIXP36wTnWxd",
      images: [
        {
          height: 1170,
          url:
            "https://i.scdn.co/image/795ae538a48341d36523c1644b0da31a542db7e5",
          width: 1000
        },
        {
          height: 749,
          url:
            "https://i.scdn.co/image/87c3cd1c4917dc6961fafa5b679fafc7c00cb1eb",
          width: 640
        },
        {
          height: 234,
          url:
            "https://i.scdn.co/image/e1ecb1edaf668afe7eb974bae90fd7bf00679108",
          width: 200
        },
        {
          height: 75,
          url:
            "https://i.scdn.co/image/aa497e48f8054c5a5838e9372bdceaa38237f8a3",
          width: 64
        }
      ],
      name: "Fats Domino",
      popularity: 57,
      type: "artist",
      uri: "spotify:artist:09C0xjtosNAIXP36wTnWxd"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5Y9xEAGW4GwGJgbiI6W85P"
      },
      followers: {
        href: null,
        total: 173626
      },
      genres: [
        "adult standards",
        "brill building pop",
        "doo-wop",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/5Y9xEAGW4GwGJgbiI6W85P",
      id: "5Y9xEAGW4GwGJgbiI6W85P",
      images: [
        {
          height: 1124,
          url:
            "https://i.scdn.co/image/c0797b7eeb72ffd9760fa5a026641d14b3fd547a",
          width: 1000
        },
        {
          height: 719,
          url:
            "https://i.scdn.co/image/bfa2d94ae1da800701ceb6fd4e2d4ed278ac1700",
          width: 640
        },
        {
          height: 225,
          url:
            "https://i.scdn.co/image/9e428b0f0a17c0d9ff108340f6f304919af7c435",
          width: 200
        },
        {
          height: 72,
          url:
            "https://i.scdn.co/image/47a1ce1e030d6f5487e988d7ab6899808fa6116a",
          width: 64
        }
      ],
      name: "Ritchie Valens",
      popularity: 58,
      type: "artist",
      uri: "spotify:artist:5Y9xEAGW4GwGJgbiI6W85P"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/6KWcxMWVNVIYbdOQyJtsSy"
      },
      followers: {
        href: null,
        total: 216175
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "doo-wop",
        "folk rock",
        "lounge",
        "rhythm and blues",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/6KWcxMWVNVIYbdOQyJtsSy",
      id: "6KWcxMWVNVIYbdOQyJtsSy",
      images: [
        {
          height: 640,
          url:
            "https://i.scdn.co/image/f552a8d33a7d422c6d75360b1b4ab744124769d6",
          width: 640
        },
        {
          height: 320,
          url:
            "https://i.scdn.co/image/5296ef4ecc171e4fa92c0bd6f22f3ee3474e6c8f",
          width: 320
        },
        {
          height: 160,
          url:
            "https://i.scdn.co/image/db3b8edf3d1594d8b5b34a69400af105dc5499d2",
          width: 160
        }
      ],
      name: "The Platters",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:6KWcxMWVNVIYbdOQyJtsSy"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/7qQJQ3YtcGlqaLg5tcypN2"
      },
      followers: {
        href: null,
        total: 97284
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "doo-wop",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/7qQJQ3YtcGlqaLg5tcypN2",
      id: "7qQJQ3YtcGlqaLg5tcypN2",
      images: [
        {
          height: 1250,
          url:
            "https://i.scdn.co/image/4b719e0ecea3eb92d294b838db79874318f35da1",
          width: 1000
        },
        {
          height: 800,
          url:
            "https://i.scdn.co/image/115419ce22f5572aadae7318cf4d1b9ece82397b",
          width: 640
        },
        {
          height: 250,
          url:
            "https://i.scdn.co/image/117a1d78e1aa00ebac7c8b2cad631d79be813b24",
          width: 200
        },
        {
          height: 80,
          url:
            "https://i.scdn.co/image/c16b2df508a1c6412444dcc99da6275b42269647",
          width: 64
        }
      ],
      name: "Chubby Checker",
      popularity: 54,
      type: "artist",
      uri: "spotify:artist:7qQJQ3YtcGlqaLg5tcypN2"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/5N6GwJzOcOY5kv8p0NjhYL"
      },
      followers: {
        href: null,
        total: 134817
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "christmas",
        "doo-wop",
        "folk rock",
        "lounge",
        "mellow gold",
        "merseybeat",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/5N6GwJzOcOY5kv8p0NjhYL",
      id: "5N6GwJzOcOY5kv8p0NjhYL",
      images: [
        {
          height: 1000,
          url:
            "https://i.scdn.co/image/131c254129758c4951b09c4ffc07e5c09a7dcbec",
          width: 1000
        },
        {
          height: 640,
          url:
            "https://i.scdn.co/image/c90b9a4e05771345c7ab6b85af6a7e4dd49302a1",
          width: 640
        },
        {
          height: 200,
          url:
            "https://i.scdn.co/image/21f3544ff17435fb877ecaf81904b3c0a8d4e7d8",
          width: 200
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/796c4145b78175343e650ca79325dec1d7771a60",
          width: 64
        }
      ],
      name: "Neil Sedaka",
      popularity: 57,
      type: "artist",
      uri: "spotify:artist:5N6GwJzOcOY5kv8p0NjhYL"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/15FyiY3ChN0QRspHIQYq0W"
      },
      followers: {
        href: null,
        total: 68673
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "doo-wop",
        "lounge",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/15FyiY3ChN0QRspHIQYq0W",
      id: "15FyiY3ChN0QRspHIQYq0W",
      images: [
        {
          height: 1263,
          url:
            "https://i.scdn.co/image/28bf7291b822222629d722d8fae7223d9193d597",
          width: 1000
        },
        {
          height: 808,
          url:
            "https://i.scdn.co/image/7a86dcb7c043db8c8c8a8e9e6737cc5ed1808032",
          width: 640
        },
        {
          height: 253,
          url:
            "https://i.scdn.co/image/489d4673dc61a8704f7e692ab41dca2255cbe048",
          width: 200
        },
        {
          height: 81,
          url:
            "https://i.scdn.co/image/e163e5d5861c5465e66292d1edd2a5eea70eaf7f",
          width: 64
        }
      ],
      name: "Dion",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:15FyiY3ChN0QRspHIQYq0W"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1FqqOl9itIUpXr4jZPIVoT"
      },
      followers: {
        href: null,
        total: 175665
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "christmas",
        "doo-wop",
        "folk rock",
        "lounge",
        "motown",
        "rhythm and blues",
        "rock-and-roll",
        "rockabilly",
        "soul"
      ],
      href: "https://api.spotify.com/v1/artists/1FqqOl9itIUpXr4jZPIVoT",
      id: "1FqqOl9itIUpXr4jZPIVoT",
      images: [
        {
          height: 1000,
          url:
            "https://i.scdn.co/image/9cebb08480116550d85b6268d9adb1c2aee718f7",
          width: 1000
        },
        {
          height: 640,
          url:
            "https://i.scdn.co/image/3361d8c88dc781f3a76657778454051db42e6d9e",
          width: 640
        },
        {
          height: 200,
          url:
            "https://i.scdn.co/image/ed6c740fd6ad7faa31964b7a7762009b4b7826bd",
          width: 200
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/686750d79b66f2658a84cda6d2e25de97aa85faa",
          width: 64
        }
      ],
      name: "The Drifters",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:1FqqOl9itIUpXr4jZPIVoT"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3EY5DxGdy7x4GelivOjS2Q"
      },
      followers: {
        href: null,
        total: 110294
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "doo-wop",
        "easy listening",
        "lounge",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/3EY5DxGdy7x4GelivOjS2Q",
      id: "3EY5DxGdy7x4GelivOjS2Q",
      images: [
        {
          height: 1196,
          url:
            "https://i.scdn.co/image/8bdcb1cc65a0ca1d54018e308bd2471e9c4820ce",
          width: 1000
        },
        {
          height: 765,
          url:
            "https://i.scdn.co/image/f21c10c96a065f438d1511fb493847c301f8ae9c",
          width: 640
        },
        {
          height: 239,
          url:
            "https://i.scdn.co/image/4a241bc89998f11920f10bd354374c4e8f3b90d3",
          width: 200
        },
        {
          height: 77,
          url:
            "https://i.scdn.co/image/bf2ff77d590d81b37682813dd8f7e3ac3928922f",
          width: 64
        }
      ],
      name: "Connie Francis",
      popularity: 54,
      type: "artist",
      uri: "spotify:artist:3EY5DxGdy7x4GelivOjS2Q"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/4b0WsB47XCa9F83BmwQ7WX"
      },
      followers: {
        href: null,
        total: 141722
      },
      genres: [
        "adult standards",
        "brill building pop",
        "bubblegum pop",
        "christmas",
        "folk rock",
        "mellow gold",
        "motown",
        "rock-and-roll",
        "rockabilly"
      ],
      href: "https://api.spotify.com/v1/artists/4b0WsB47XCa9F83BmwQ7WX",
      id: "4b0WsB47XCa9F83BmwQ7WX",
      images: [
        {
          height: 1292,
          url:
            "https://i.scdn.co/image/21584a935b760f20b4b08f7f9ddd012c12437798",
          width: 1000
        },
        {
          height: 827,
          url:
            "https://i.scdn.co/image/e97b7cd22945863ebc926c5c8e4e92bd2b8698d9",
          width: 640
        },
        {
          height: 258,
          url:
            "https://i.scdn.co/image/04ac9d38712494d9347ecc5115b22115c9f34717",
          width: 200
        },
        {
          height: 83,
          url:
            "https://i.scdn.co/image/b101249b1356e58639c151a4772258caea50197d",
          width: 64
        }
      ],
      name: "The Righteous Brothers",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:4b0WsB47XCa9F83BmwQ7WX"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0EodhzA6yW1bIdD5B4tcmJ"
      },
      followers: {
        href: null,
        total: 165294
      },
      genres: [
        "adult standards",
        "brill building pop",
        "christmas",
        "easy listening",
        "lounge",
        "rock-and-roll",
        "rockabilly",
        "soul",
        "swing",
        "vocal jazz"
      ],
      href: "https://api.spotify.com/v1/artists/0EodhzA6yW1bIdD5B4tcmJ",
      id: "0EodhzA6yW1bIdD5B4tcmJ",
      images: [
        {
          height: 1263,
          url:
            "https://i.scdn.co/image/ae8a8b9d9b6a35f00b87fdae31f46db6a13fcd0e",
          width: 1000
        },
        {
          height: 808,
          url:
            "https://i.scdn.co/image/0145d946866cb2205bba2f17ab445e290eb1ec4c",
          width: 640
        },
        {
          height: 253,
          url:
            "https://i.scdn.co/image/0ca3415278b5ae71a13f475bc4d00b568e73af21",
          width: 200
        },
        {
          height: 81,
          url:
            "https://i.scdn.co/image/99c37f6288d2933d59d2342e762beb5f640ab478",
          width: 64
        }
      ],
      name: "Bobby Darin",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:0EodhzA6yW1bIdD5B4tcmJ"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1T0wRBO0CK0vK8ouUMqEl5"
      },
      followers: {
        href: null,
        total: 256955
      },
      genres: [
        "adult standards",
        "british invasion",
        "christmas",
        "lounge",
        "mellow gold"
      ],
      href: "https://api.spotify.com/v1/artists/1T0wRBO0CK0vK8ouUMqEl5",
      id: "1T0wRBO0CK0vK8ouUMqEl5",
      images: [
        {
          height: 675,
          url:
            "https://i.scdn.co/image/d784c889de9dc88a2bcc71589233212beaaaf624",
          width: 450
        },
        {
          height: 300,
          url:
            "https://i.scdn.co/image/5ee0e0ba57f17341226d32d875d5687a7c045352",
          width: 200
        },
        {
          height: 96,
          url:
            "https://i.scdn.co/image/658aec5df2bb4908da939d13a231a00f9d27e9ee",
          width: 64
        }
      ],
      name: "Tom Jones",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:1T0wRBO0CK0vK8ouUMqEl5"
    }
  ]
};

export const getArtistsFixture: model.GetArtistsResponse = {
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/0oSGxfWSnnOXhD2fKuz2Gy"
      },
      followers: {
        href: null,
        total: 3189004
      },
      genres: [
        "art rock",
        "dance rock",
        "glam rock",
        "new wave",
        "permanent wave",
        "protopunk",
        "rock"
      ],
      href: "https://api.spotify.com/v1/artists/0oSGxfWSnnOXhD2fKuz2Gy",
      id: "0oSGxfWSnnOXhD2fKuz2Gy",
      images: [
        {
          height: 1000,
          url:
            "https://i.scdn.co/image/6efa04809a6358a5da0e701d24449cfb8348ebf5",
          width: 1000
        },
        {
          height: 640,
          url:
            "https://i.scdn.co/image/76e50c6493a4173e5294374ae88be0ce42ed091e",
          width: 640
        },
        {
          height: 200,
          url:
            "https://i.scdn.co/image/c74188cfa692266ce5d61790d8b00880980bef20",
          width: 200
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/0fc6cc36af66813555cc969755a1a30488758e2a",
          width: 64
        }
      ],
      name: "David Bowie",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:0oSGxfWSnnOXhD2fKuz2Gy"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3dBVyJ7JuOMt4GE9607Qin"
      },
      followers: {
        href: null,
        total: 309279
      },
      genres: [
        "album rock",
        "art rock",
        "classic rock",
        "dance rock",
        "folk rock",
        "glam rock",
        "hard rock",
        "protopunk",
        "psychedelic rock",
        "rock"
      ],
      href: "https://api.spotify.com/v1/artists/3dBVyJ7JuOMt4GE9607Qin",
      id: "3dBVyJ7JuOMt4GE9607Qin",
      images: [
        {
          height: 956,
          url:
            "https://i.scdn.co/image/6c56fa4985bb53a08eaf25e56269104e0ee3bf9d",
          width: 960
        },
        {
          height: 637,
          url:
            "https://i.scdn.co/image/c07913e0eb7c569a47f0e53fa32b4fefaf22065f",
          width: 640
        },
        {
          height: 199,
          url:
            "https://i.scdn.co/image/26bc832729ae3f1a03b8af60809915c97226bcba",
          width: 200
        },
        {
          height: 64,
          url:
            "https://i.scdn.co/image/c43526ed5967a5788b6108f875a94b95d4adaa1b",
          width: 64
        }
      ],
      name: "T. Rex",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:3dBVyJ7JuOMt4GE9607Qin"
    }
  ]
};
