import { LitElement, html, css } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'
import { TOOL_POSITION } from '@things-factory/layout-base'

import './more-let'

class MorePanel extends connect(store)(LitElement) {
  static get properties() {
    return {
      _morendas: Array
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          background-color: var(--more-panel-background-color);

          height: 100%;
          min-width: var(--more-panel-min-width);
        }

        :host(:focus) {
          outline: none;
        }
      `
    ]
  }

  render() {
    var morendas = this._morendas

    morendas = [
      ...morendas.filter(morenda => morenda.position == TOOL_POSITION.FRONT_END),
      ...morendas.filter(morenda => morenda.position == TOOL_POSITION.FRONT),
      ...morendas.filter(morenda => !morenda.position || morenda.position == TOOL_POSITION.CENTER),
      ...morendas.filter(morenda => morenda.position == TOOL_POSITION.REAR),
      ...morendas.filter(morenda => morenda.position == TOOL_POSITION.REAR_END)
    ]

    return html`
      ${(morendas || []).map(
        morenda => html`
          <more-let .morenda=${morenda}></more-let>
        `
      )}
    `
  }

  stateChanged(state) {
    this._morendas = state.more.morendas
  }
}

customElements.define('more-panel', MorePanel)
