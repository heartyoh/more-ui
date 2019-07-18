import { LitElement, html, css } from 'lit-element'

import { connect } from 'pwa-helpers/connect-mixin.js'

import { store } from '@things-factory/shell'

import './more-let'

class MorePanel extends connect(store)(LitElement) {
  static get properties() {
    return {
      _morendas: Array,
      _show: Boolean
    }
  }

  static get styles() {
    return [
      css`
        :host {
          background-color: var(--more-panel-background-color);
          display: none;
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
    this.style.display = this._show ? 'block' : 'none'

    return html`
      ${(this._morendas || []).map(
        morenda => html`
          <more-let .morenda=${morenda}></more-let>
        `
      )}
    `
  }

  stateChanged(state) {
    var overlay = state.layout.overlays['more']

    this._morendas = state.more.morendas
    this._show = overlay && overlay.show
  }
}

customElements.define('more-panel', MorePanel)
