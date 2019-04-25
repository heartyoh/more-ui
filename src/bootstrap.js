import { html } from 'lit-html'
import { store, APPEND_SIDEBAR_LEFT } from '@things-factory/shell'

export default function bootstrap() {
  import('./layouts/more-panel')

  store.dispatch({
    type: APPEND_SIDEBAR_LEFT,
    sidebarLeft: {
      template: html`
        <more-panel></more-panel>
      `
    }
  })
}
