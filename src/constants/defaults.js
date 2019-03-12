import * as Storage from './storage'
import * as Routes from './route'
//
// defaults not default
// bause default is a reserve word
//
export const activeProvider = {
    'ACTIVE_PROVIDER_ID': '_server_ropsten',
    'ACTIVE_PROVIDER_NAME': 'Ropsten Testnet'
}

// default when logout
export const appDefault = {
    [Storage.IS_LOGGED]: false,
    [Storage.IS_SET_MNEMONIC]: false,
    [Storage.ACTIVE_PROVIDER_ID]: activeProvider.ACTIVE_PROVIDER_ID,
    [Storage.ACTIVE_PROVIDER_NAME]: activeProvider.ACTIVE_PROVIDER_NAME,
}

// will be use by splash screen ini
export const defaultRouteName = Routes.GET_STARTED

// will be use intead of default route
export const forceDefaultRouteName = false
// export const forceDefaultRouteName = Routes.DASHBOARD