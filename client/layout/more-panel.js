import { LitElement, html, css } from 'lit-element'

import { connect } from 'pwa-helpers/connect-mixin.js'

import { store } from '@things-factory/shell'

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
    return html`
      ${(this._morendas || []).map(
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
