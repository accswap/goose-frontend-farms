import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://app.gadexswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://app.gadexswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Listing',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x80c1d7d8458bf83f6c37bcc4cd8f28d1eb085ddb',
      },
      {
        label: 'CoinGecko',
        href: '#',
      },
      {
        label: 'CoinMarketCap',
        href: '#',
      },
      {
        label: 'AstroTools',
        href: '#',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Whitepaper',
        href: '#',
      },
      {
        label: 'Github',
        href: 'https://github.com/gadexswap/',
      },
      {
        label: 'Docs',
        href: '#',
      },
      {
        label: 'Blog',
        href: 'https://gadexswap.medium.com/',
      },
    ],
  },
  {
    label: 'Audit by Hacken',
    icon: 'AuditIcon',
    href: '#',
  },
  {
    label: 'Audit by CertiK',
    icon: 'AuditIcon',
    href: '#',
  },
]

export default config
