import { html } from 'lit-html'
import { store, APPEND_SIDEBAR_RIGHT, APPEND_APP_TOOL, TOOL_POSITION } from '@things-factory/shell'
import { TOGGLE_MORE_PANEL, ADD_MORENDA } from '@things-factory/more-base'

function toggleMore() {
  store.dispatch({
    type: TOGGLE_MORE_PANEL
  })
}

export default function bootstrap() {
  import('./layouts/more-panel')

  store.dispatch({
    type: APPEND_SIDEBAR_RIGHT,
    sidebarRight: {
      hovering: true,
      template: html`
        <more-panel></more-panel>
      `
    }
  })

  store.dispatch({
    type: APPEND_APP_TOOL,
    tool: {
      // template: html`<more-button></more-button>`,
      template: html`
        <button @click=${e => toggleMore()}>
          ...
        </button>
      `,
      position: TOOL_POSITION.RIGHT_END
    }
  })

  store.dispatch({
    type: ADD_MORENDA,
    morenda: {
      name: 'XXX',
      template: 'YYY'
    }
  })
}
