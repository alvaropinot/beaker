import {css} from 'beaker://app-stdlib/vendor/lit-element/lit-element.js'
import buttonsCSS from 'beaker://app-stdlib/css/buttons2.css.js'
import inputsCSS from 'beaker://app-stdlib/css/inputs.css.js'
import tooltipCSS from 'beaker://app-stdlib/css/tooltip.css.js'
import famodCSS from 'beaker://app-stdlib/css/fa-mod.css.js'

const cssStr = css`
${buttonsCSS}
${inputsCSS}
${tooltipCSS}
${famodCSS}

:host {
  --bg-color: #f1f1f6;
  --bg-color--light: #f8f8fc;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.link {
  color: var(--blue);
}

.menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  background: #fff;
  z-index: 1;
}

.layout {
}

main {
  margin: 30px 370px 100px 300px;
}

nav {
  position: fixed;
  top: 30px;
  width: 270px;
  height: calc(100vh - 10px);
  box-sizing: border-box;
  background: var(--bg-color);
  border-radius: 8px;
  padding: 10px;
  overflow-y: auto;
}

nav.left {
  left: 10px;
}

nav.right {
  right: 10px;
  width: 340px;
}

nav section {
  display: block;
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  box-shadow: none;
  font-size: 12px;
}

nav section > :first-child {
  margin-top: 0;
}

nav section > :last-child {
  margin-bottom: 0;
}

nav section.transparent {
  background: transparent;
}

nav file-display {
  max-height: 25vh;
  overflow: hidden;
}

nav selection-info[full-view] file-display {
  max-height: none;
}

nav section .bottom-ctrls {
  margin: 0 -8px -8px;
  border-top: 1px solid #eef;
  padding-top: 4px;
}

nav section.btn {
  padding: 10px;
  cursor: pointer;
  font-size: 11px;
  text-align: center;
  box-shadow: 0 2px 1px rgba(0,0,0,.1);
}

nav section.btn:hover {
  background: #f5f5f5;
}

nav section.btn.primary {
  border: 1px solid #b0c4ec;
  color: #3e74c7;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 1px;
}

nav section.btn .fa-fw:first-child {
  margin-left: -20px;
}

nav social-signals {
  padding: 0 2px;
  margin-bottom: 10px;
}

nav section h1,
nav section h2 {
  display: flex;
  align-items: center;
  margin: 0 0 10px;
}

nav section h1 {
  font-size: 1.5em;
}

nav section h2 {
  font-size: 1.35em;
}

nav section h3,
nav section h4,
nav section h5 {
  margin: 0;
}

nav h4 code {
  word-break: break-word;
}

nav img {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 2px, rgba(0, 0, 0, 0.15) 0px 2px 5px;
}

nav a {
  color: inherit;
}

nav p {
  margin: 10px 0;
}

nav section.selector {
  padding: 0;
}

nav section.selector h5 {
  padding: 12px 12px 10px;
}

nav section.selector > div {
  border-top: 1px solid #dde;
  padding: 10px 12px;
  cursor: pointer;
  font-size: 12px;
}

nav section.selector > div:hover {
  background: var(--bg-color--light);
}

nav section.selector > div span {
  visibility: hidden;
}

nav section.selector > div.active span {
  visibility: visible;
}

#files-picker {
  display: none;
}

@media (max-width: 1000px) {
  .layout {
    display: grid;
    grid-template-columns: 30px 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: "top top" "mid mid" "botleft botright";
    grid-gap: 10px;
    padding: 0 10px;
  }

  nav {
    position: relative;
    height: initial;
    width: initial;
    left: initial !important;
    right: initial !important;
  }

  nav.left {
    grid-area: botleft;
    width: initial;
  }

  nav.right {
    grid-area: botright;
    width: initial;
  }

  main {
    grid-area: mid;
    margin: 0;
  }

  .menubar {
    grid-area: top;
    padding: 0;
  }
}
`
export default cssStr