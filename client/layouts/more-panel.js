import { LitElement, html, css } from 'lit-element'

import { connect } from 'pwa-helpers/connect-mixin.js'

import { store } from '@things-factory/shell'
import { TOGGLE_MORE_PANEL } from '@things-factory/more-base'

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
          height: 100%;

          min-width: var(--more-panel-min-width, 200px);
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

  firstUpdated() {
    this.setAttribute('tabIndex', -1)

    this.addEventListener('focusout', e => {
      store.dispatch({
        type: TOGGLE_MORE_PANEL
      })
    })
  }

  stateChanged(state) {
    this._morendas = state.more.morendas
    this._show = state.more.show
  }

  updated(changedProps) {
    if (changedProps.has('_show')) {
      this.style.display = this._show ? 'block' : 'none'
      if (this._show) {
        this.focus()
      }
    }
  }
}

customElements.define('more-panel', MorePanel)
