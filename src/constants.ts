import { ChainId } from '@defolym3/do3-sdk-core'

export const FACTORY_ADDRESS = '0x1C929B974B48204DB9A385670F3029A4717D4e7A' //soneium

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0x887b3658c638203604a7c4149d6d115a5b218a492501a970c32ac67b8f276223' 
const POOL_HASH_MODE = ''

export const POOL_INIT_CODE_HASH_MAP: { [chainId in ChainId]?: string } = {
  [ChainId.AMOY]:'',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_SEPOLIA]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BASE]: '',
  [ChainId.BASE_SEPOLIA]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.FRAX_TESTNET]: '',
  [ChainId.FUJI]: '',
  [ChainId.HEDERA]: '',
  [ChainId.HEDERA_TESTNET]: '',
  [ChainId.HOLESKY]: '',
  [ChainId.KAIA]: '',
  [ChainId.KAIROS]: '',
  [ChainId.METIS_TESTNET]:'',
  [ChainId.MODE]: POOL_HASH_MODE,
  [ChainId.MODE_TESTNET]: '',
  [ChainId.OKX]:'',
  [ChainId.OPBNB_TESTNET]: '',
  [ChainId.OPTIMISM]: '',
  [ChainId.SCROLL]: '',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SEPOLIA]: '',
  [ChainId.SHAPE]: '',
  [ChainId.SHAPE_TESTNET]: '',
  [ChainId.SONEIUM_TESTNET]: POOL_INIT_CODE_HASH,
  [ChainId.UNICHAIN_TESTNET]:'',
}

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  EXTRA_LOWEST = 1,
  LOWEST = 80,
  LOWER = 350,
  LOW = 450,
  MEDIUM = 2500,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.EXTRA_LOWEST]: 1,
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOWER]: 10,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
