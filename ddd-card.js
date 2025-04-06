/**
 * Copyright 2025 paigehohman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { DDDDataAttributes } from "@haxtheweb/d-d-d/lib/DDDStyles";

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
    this.primary = "";
    this.accent = "";
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
      primary: { String, Reflect: true, DDDDataAttributes: "data-primary" },
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
          border: var(--ddd-border-xs);
          width: 400px;
          height: 600px;
          padding: 0px;
        }
        .wrapper {
          margin: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-4);
        }
        img {
          max-width: 100%;
          border-radius: var(--ddd-radius-sm);
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }
        .details {
          height: 120px;
          overflow: hidden;
          padding: var(--ddd-spacing-3);
          margin: 0px;
        }
        .title {
          font-size: var(
            --link-preview-card-label-font-size,
            var(--ddd-font-size-s)
          );
          color: var(--ddd-theme-default-nittanyNavy);
          padding: var(--ddd-spacing-3);
          margin: 10px 0px 10px 0px;
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
        .button a {
          color: var(--ddd-theme-default-white);
        }
        .button {
          background-color: var(--ddd-theme-default-link);
          padding: 0px 140px;
          margin: 0px 20px 50px 20px;
          font-size: 16px;
          font-weight: var(--ddd-font-weight-bold);
          color: var(--ddd-theme-default-white);
          border: none;
          border-radius: 5px;
          height: 50px;
        }
        button:hover {
          background-color: var(--ddd-theme-default-nittanyNavy);
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
      <div class="img-container" part="img-container">
        ${this.image ? html`<img src="${this.image}" alt=${this.label} />` : ""}
      </div>
      <div class="content" part="content">
        <h3 class="title" part="title">${this.title}</h3>
        <div class="details" part="details"><slot></slot></div>
        <button class="button">
          <a href="${this.link}" target="_blank">Explore ></a>
        </button>
      </div>
    `;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
