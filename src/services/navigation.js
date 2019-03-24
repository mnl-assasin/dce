import { goTo as rGoTo } from 'route-lite'
import Storage from './storage/storage'
import PAGES from '../route'

let goToFn
let goBackFn

const NAV_PAGES = 'nav_pages'

class Navigation {
  pages = []

  constructor() {
    goToFn = this.goTo.bind(this)
    goBackFn = this.goBack.bind(this)
  }

  async init(startPage, options = {}) {
    let pages = await Storage.getObject(NAV_PAGES)

    if (!Array.isArray(pages) || !pages) {
      Storage.clear()
      return this.goTo(startPage, options)
    }

    this.pages = pages
    let lastPage = this.pages[this.pages.length - 1]

    rGoTo(PAGES[lastPage.component], lastPage.options)
  }

  push(component, options = {}) {
    this.pages.push({
      component,
      options,
    })

    rGoTo(PAGES[component], options)
    this.save()
  }

  goTo(component, options = {}) {
    // console.log(component);
    this.push(component, options)
  }

  goBack() {
    // remove last element (current page)
    this.pages.pop()

    // get the last page from the array
    let lastPage = this.pages[this.pages.length - 1]

    // go to that page
    rGoTo(PAGES[lastPage.component], lastPage.options)

    this.save()
  }

  save() {
    Storage.setObject(NAV_PAGES, this.pages)
  }
}

export default new Navigation()

export function goTo(component, options) {
  goToFn(component, options)
}
export function goBack() {
  goBackFn()
}

export const navigate = goTo
