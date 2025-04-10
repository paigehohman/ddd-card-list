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
          font-family: var(--ddd-font-primary);
          border: 1 px solid var(--ddd-theme-color, #ccc);
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-xs);
          flex-wrap: nowrap;
          position: static;
          overflow: hidden;
          box-sizing: border-box;
          margin: var(--ddd-spacing-4);
        }
        img {
          width: 100%;
          border-radius: var(--ddd-radius-sm);
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
          border-bottom-left-radius: var(--ddd-radius-0);
          border-bottom-right-radius: var(--ddd-radius-0);
          border-top-left-radius: var(--ddd-radius-sm);
          border-top-right-radius: var(--ddd-radius-sm);
          height: auto;
          overflow: hidden;
          max-width: 100%;
        }
        .details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
          padding: var(--ddd-spacing-3);
        }
        #card-bottom {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px 16px 20px 16px;
        }
        .wrapper {
          display: flex;
          border-top-width: var(--ddd-border-size-lg);
          border-bottom-width: var(--ddd-border-size-xs);
          box-sizing: content-box;
          border-style: solid;
          border-color: var(--ddd-theme-primary);
          border-radius: var(--ddd-radius-sm);
          height: 100%;
          width: 100%;
          height: 180px;
          flex-wrap: nowrap;
          flex-direction: column;
        }
        .title {
          font-size: var(--ddd-font-size-3xs);
          margin: var(--ddd-spacing-0);
          color: var(--ddd-theme-default-nittanyNavy);
          padding: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-2);
        }
        .card-text p {
          font-size: var(--ddd-font-size-3xs);
          line-height: normal;
          white-space: pre-line;
          font-weight: var(--ddd-font-weight-regular);
          line-height: var(--ddd-lh-150);
          letter-spacing: normal;
          color: var(--ddd-theme-default-coalyGray);
          margin-bottom: 0rem;
          margin-top: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-2);
          white-space: pre-line;
          margin: var(--ddd-spacing-0);
          font-family: var(--ddd-font-primary);
        }
        .card button {
          height: 100%;
          transition: all 0.2s ease-out;
          font-family: var(--ddd-font-primary);
          align-items: center;
          justify-content: center;
          margin-top: auto;
          padding: 12px 24px 12px 16px;
          height: fit-content;
          width: 100%;
          font-weight: var(--ddd-font-weight-medium);
          font-size: var(--ddd-font-size-4xs);
          border-radius: var(--ddd-radius-xs);
          color: var(--ddd-theme-default-white);
          background-color: rgb(0, 95, 169);
          border: var(--ddd-border-sm);
        }
        .button a {
          color: var(--ddd-theme-default-white);
        }
        a.button {
          display: block;
          text-align: center;
          text-decoration: none;
          padding: 12px 0;
          margin-top: auto;
          width: 100%;
          font-size: var(--ddd-font-size-4xs);
          border-radius: var(--ddd-radius-xs);
          color: var(--ddd-theme-default-white);
          background-color: rgb(0, 95, 169);
          border: var(--ddd-border-sm);
          font-family: var(--ddd-font-navigation);
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        a.button:hover {
          background-color: var(--ddd-theme-primary);
          border-color: var(--ddd-theme-primary);
          color: var(--ddd-theme-default-white);
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
          margin: var(--ddd-spacing-0);
          line-height: var(--ddd-lh-120);
          font-size: var(--ddd-card-label-font-size, var(--ddd-font-size-s));
          border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary);
        }
        a:link,
        a:visited {
          background-color: var(--ddd-theme-default-link);
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
        <div id="card-bottom">
          <div class="card-text">
            <h3 class="title" part="title">${this.title}</h3>
            <div class="details" part="details"><slot></slot></div>
            <a class="button" href="${this.link}" target="_blank">Explore ></a>
          </div>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);
