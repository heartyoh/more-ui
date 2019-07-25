import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import { appendViewpart, VIEWPART_POSITION, TOOL_POSITION, toggleOverlay } from '@things-factory/layout-base'
import { APPEND_APP_TOOL } from '@things-factory/apptool-base'

import '@material/mwc-icon'

export default function bootstrap() {
  import('./layout/more-panel')

  appendViewpart({
    name: 'more',
    viewpart: {
      show: false,
      hovering: 'edge',
      template: html`
        <more-panel></more-panel>
      `
    },
    position: VIEWPART_POSITION.ASIDEBAR
  })

  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      template: html`
        <mwc-icon
          @click=${e =>
            toggleOverlay('more', {
              backdrop: true
            })}
          >more_vert</mwc-icon
        >
      `,
      position: TOOL_POSITION.REAR_END
    }
  })
}
