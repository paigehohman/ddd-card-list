/**
 * Copyright 2025 paigehohman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-card`
 *
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDD {
  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.href = "";
    this.image = "";
    this.link = "";
    this.loading = false;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      data: { type: Object },
      label: { type: String },
      href: { type: String },
      image: { type: String },
      link: { type: String },
      loading: { type: Boolean, reflect: true },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary);
          background-color: var(--ddd-theme-accent);
          font-family: var(--ddd-font-navigation);
          border: 1 px solid var(--ddd-theme-color, #ccc);
          border-radius: var(--ddd-radius-sm);
          padding: var(--ddd-spacing-3);
          border: var(--ddd-border-xs);
          width: 400px;
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        img {
          max-width: 100%;
          border-radius: var(--ddd-radius-md);
        }
        .details {
          height: 200px;
          overflow: hidden;
        }
        .title {
          font-weight: bold;
          color: var(--ddd-primary-2);
        }
        button {
          padding: 15px;
          // color: var(--ddd-primary-1);
          border-radius: 10px;
          background-color: #200760;
          border-width: 3px;
          font-size: 20px;
          font-weight: bold;
        }
        button:hover {
          background-color: blue;
          color: #fff;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        h3 span {
          font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper" part="wrapper">
        ${this.loading
          ? html` <div class="loading-spinner" part="loading-spinner"></div> `
          : html`
              ${
                this.image
                  ? html` <img
                      src="${this.image}"
                      alt="Label"
                      alt=""
                      @error="${this.handleImageError}"
                      part="image"
                    />`
                  : ""
              }
              <div class="content" part="content">
                <h3 class="title" part="title">${this.title}</h3>

               <div class="details" part="details"><slot></slot></div> 
                <button class="details_button"><a href="${
                  this.link
                }" target="_blank">Explore ></a></button>
        
      </button>
                  
              </div>
            `}
      </div>
    `;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
