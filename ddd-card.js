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
          font-family: var(--ddd-font-navigation);
          border: 1 px solid var(--ddd-theme-color, #ccc);
          border-radius: var(--ddd-radius-sm);
          border: var(--ddd-border-xs);
          flex-wrap: nowrap;
          position: static;
          // width: 320px;
          // height: 500px;
          overflow: hidden;
          box-sizing: border-box;
          margin: 16px;
          // padding: 0px;
        }
        img {
          width: 100%;
          border-radius: var(--ddd-radius-sm);
          border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
          border-top-left-radius: var(--ddd-radius-sm);
          border-top-right-radius: var(--ddd-radius-sm);
          height: auto;
          overflow: hidden;
          max-width: 100%;
        }
        .details {
          height: 120px;
          overflow: hidden;
          padding: var(--ddd-spacing-3);
          margin: 0px;
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
          border-top-width: 12px;
          border-bottom-width: 0px;
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
          font-size: var(
            --link-preview-card-label-font-size,
            var(--ddd-font-size-s)
          );
          color: var(--ddd-theme-default-nittanyNavy);
          padding: var(--ddd-spacing-3);
          margin-bottom: 8px;
          /* border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-primary); */
        }
        .button a {
          color: var(--ddd-theme-default-white);
        }
        .button {
          height: 100%;
          font-family: var(--ddd-font-navigation);
          align-items: center;
          justify-content: center;
          margin-top: auto;
          padding: 12px 24px 12px 16px;
          //  height: fit-content;
          width: 100%;
          font-size: 16px;
          border-radius: 4px;
          color: white;
          background-color: rgb(0, 95, 169);
          border: 2px solid rgb(0, 95, 169);
        }
        button:hover {
          background-color: var(--ddd-theme-primary);
          border-color: var(--ddd-theme-primary);
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
        <div id="card-bottom"></div>
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
