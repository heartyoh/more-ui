import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import { APPEND_ASIDEBAR, TOOL_POSITION, toggleOverlay } from '@things-factory/layout-base'
import { APPEND_APP_TOOL } from '@things-factory/apptool-base'

import '@material/mwc-icon'

export default function bootstrap() {
  import('./layout/more-panel')

  store.dispatch({
    type: APPEND_ASIDEBAR,
    name: 'more',
    asidebar: {
      show: false,
      hovering: 'edge',
      template: html`
        <more-panel></more-panel>
      `
    }
  })

  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <mwc-icon @click=${e => toggleOverlay('more')}>more_vert</mwc-icon>
      `,
      position: TOOL_POSITION.REAR_END
    }
  })
}
