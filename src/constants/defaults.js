import * as Storage from './storage'

//
// defaults not default
// bause default is a reserve word
//
export const activeProvider = {
    'ACTIVE_PROVIDER_ID': '_server_mainnet',
    'ACTIVE_PROVIDER_NAME': 'Mainnet'
}

// default when logout
export const appDefault = {
    [Storage.IS_LOGGED]: false,
    [Storage.IS_SET_MNEMONIC]: false,
    [Storage.ACTIVE_PROVIDER_ID]: activeProvider.ACTIVE_PROVIDER_ID,
    [Storage.ACTIVE_PROVIDER_NAME]: activeProvider.ACTIVE_PROVIDER_NAME,
}
