import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import {
  APPEND_ASIDEBAR,
  APPEND_APP_TOOL,
  REGISTER_OVERLAY,
  TOOL_POSITION,
  toggleOverlay
} from '@things-factory/layout-base'

import { openMorePanel, closeMorePanel } from '@things-factory/more-base'

import '@material/mwc-icon'

export default function bootstrap() {
  import('./layout/more-panel')

  store.dispatch({
    type: REGISTER_OVERLAY,
    overlay: {
      name: 'more',
      open: openMorePanel,
      close: closeMorePanel
    }
  })

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
        <mwc-icon @click=${e => toggleOverlay('more')}>more_vert</mwc-icon>
      `,
      position: TOOL_POSITION.REAR_END
    }
  })
}
