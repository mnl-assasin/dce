const STORAGE_DRIVER = process.env.NODE_ENV !== 'production'
  ? 'localStorage'
  : 'chrome';

export default {
  DRIVER: STORAGE_DRIVER, // 'chrome', 'localStorage'
}