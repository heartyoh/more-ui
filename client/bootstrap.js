import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import { APPEND_ASIDEBAR, APPEND_APP_TOOL, TOOL_POSITION } from '@things-factory/layout-base'
import { TOGGLE_MORE_PANEL } from '@things-factory/more-base'

import '@material/mwc-icon'

function toggleMore() {
  store.dispatch({
    type: TOGGLE_MORE_PANEL
  })
}

export default function bootstrap() {
  import('./layout/more-panel')

  store.dispatch({
    type: APPEND_ASIDEBAR,
    asidebar: {
      hovering: true,
      template: html`
        <more-panel></more-panel>
      `
    }
  })

  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <mwc-icon @click=${e => toggleMore()}>more_horiz</mwc-icon>
      `,
      position: TOOL_POSITION.REAR_END
    }
  })
}
