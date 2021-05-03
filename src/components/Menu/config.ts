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
        href: 'https://pancakeswap.info/token/0xd538142dca6d06c8807a008513fe08cc774a60da',
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
