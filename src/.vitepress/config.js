module.exports = {
  title: 'Amanda Gonsalves | Software Engineer',
  description: 'My name is Amanda, I\'m from Brazil and I\'m a software engineer :)',
  themeConfig: {
    nav: [
      { text: 'Home' },
      { text: 'About' },
      { text: 'Projects' },
      { text: 'Contact' },
    ],
  },
  head: [
    ['link', { rel: 'canonical', href: 'https://amandagonsalves.dev' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/icons/favicons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/icons/favicons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/icons/favicons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/icons/favicons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/icons/favicons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/icons/favicons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/icons/favicons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/icons/favicons/apple-icon-152x152.pn' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/icons/favicons/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/assets/icons/favicons/android-icon-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/icons/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/icons/favicons/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/icons/favicons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', type: '/manifest.json' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImag', content: '/assets/icons/favicons/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-YHCZ89BVCN',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-YHCZ89BVCN');",
      ],
    ],
    [
      'script',
      {
        src: '/embed.js',
      }
    ]
  ],
}