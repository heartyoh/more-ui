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
          background-color: var(--more-panel-background-color, gray);
          display: none;

          min-width: var(--more-panel-min-width, 200px);
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
    this._show = state.more.show
  }

  updated(changedProps) {
    if (changedProps.has('_show')) {
      this.style.display = this._show ? 'block' : 'none'
    }
  }
}

customElements.define('more-panel', MorePanel)
