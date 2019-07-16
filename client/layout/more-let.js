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
          padding: 7px 5px 5px 7px;

          min-width: var(--morelet-min-width);
          color: var(--morelet-title-color);
          border-bottom: var(--morelet-border-bottom);
          font: var(--morelet-title-font);
        }

        #morelet {
          display: none;
          width: calc(100% - 18px);
          margin-top: 5px;
          padding: 5px 9px;
          border-bottom-right-radius: 7px;
          border-bottom-left-radius: 7px;

          border-top: var(--morelet-focus-border-top);
          background-color: var(--morelet-background-color);
          color: var(--morelet-color);
          font: var(--morelet-font);
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
