import { LitElement, html, css } from 'lit-element'

class MoreLet extends LitElement {
  static get properties() {
    return {
      _morenda: Object
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: flex;
          flex-direction: column;
        }

        #morelet {
          display: none;

          width: 100%;
          height: 100%;

          background-color: var(--morelet-background-color, #aaa);
        }

        #morelet[opened] {
          display: block;
        }
      `
    ]
  }

  render() {
    return html`
      <div @click=${e => this._onTitleClick()}>${this.morenda.name}</div>
      <slot id="morelet">${this.morenda.template ? this.morenda.template : html``}</slot>
    `
  }

  _onTitleClick() {
    if (!this.morenda.template) {
      return
    }

    var target = this.shadowRoot.querySelector('#morelet')

    target.toggleAttribute('opened')
  }
}

customElements.define('more-let', MoreLet)
