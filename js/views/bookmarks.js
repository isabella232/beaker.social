import { LitElement, html } from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import bookmarksViewCSS from '../../css/views/bookmarks.css.js'
import '../com/bookmarks/feed.js'
import '../com/bookmarks/tags.js'
import '../com/app-user-card.js'
import '../com/app-content-nav.js'

class AppViewBookmarks extends LitElement {
  static get properties () {
    return {
      user: {type: Object}
    }
  }

  constructor () {
    super()
    this.user = null
  }

  firstUpdated () {
    this.load()
  }

  async load () {
    document.title = 'Recent Bookmarks | Beaker.Social'

  }

  render () {
    return html`
      <nav>
        <app-user-card .user=${this.user}></app-user-card>
        <app-content-nav route="bookmarks"></app-content-nav>
      </nav>
      <main>
        <bookmarks-feed .user=${this.user}></bookmarks-feed>
      </main>
    `
    // TODO
    // finish the tags
    // -prf
    // <nav>
    //   <bookmarks-tags></bookmarks-tags>
    // </nav>
  }


}
AppViewBookmarks.styles = bookmarksViewCSS
customElements.define('app-view-bookmarks', AppViewBookmarks)