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

          color: var(--morelet-title-color, #fff);
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          padding: 3px 0px;
        }

        #morelet {
          display: none;

          width: 100%;
          height: 100%;

          padding: 5px;

          background-color: var(--morelet-background-color, #fff);
          color: var(--morelet-color, #333);
        }

        #morelet[opened] {
          display: block;
        }

        mwc-icon {
        }
      `
    ]
  }

  render() {
    return html`
      <div @click=${e => this._onTitleClick()}>
        <mwc-icon>share</mwc-icon>
        ${this.morenda.name}
      </div>
      <slot id="morelet">${this.morenda.template ? this.morenda.template : html``}</slot>
    `
  }

  _onTitleClick() {
    if (this.morenda.template) {
      var target = this.shadowRoot.querySelector('#morelet')

      target.toggleAttribute('opened')
    } else if (this.morenda.action) {
      this.morenda.action()
    }
  }
}

customElements.define('more-let', MoreLet)
