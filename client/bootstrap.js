import { html } from 'lit-html'
import { store } from '@things-factory/shell'
import {
  APPEND_ASIDEBAR,
  APPEND_APP_TOOL,
  REGISTER_OVERLAY,
  TOOL_POSITION,
  toggleOverlay
} from '@things-factory/layout-base'

import '@material/mwc-icon'

export default function bootstrap() {
  import('./layout/more-panel')

  /* TODO REGISTER_OVERLAY 도 없앨 수 있을 것임. */
  store.dispatch({
    type: REGISTER_OVERLAY,
    name: 'more',
    overlay: {
      show: false
    }
  })

  store.dispatch({
    type: APPEND_ASIDEBAR,
    asidebar: {
      name: 'more',
      hovering: 'next',
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
