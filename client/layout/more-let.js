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

          min-width: 40vw;

          color: var(--morelet-title-color, #fff);
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          padding: 3px;
          font-size: 1em;
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

        [icon] {
          --mdc-icon-size: 1em;
          vertical-align: middle;
        }
      `
    ]
  }

  render() {
    return html`
      <div @click=${e => this._onTitleClick()} header>
        <span icon>
          ${this.morenda.icon ? this.morenda.icon : html``}
        </span>

        <span title>${this.morenda.name}</span>
      </div>

      ${this.morenda.template
        ? html`
            <div id="morelet">${this.morenda.template}</div>
          `
        : html``}
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
