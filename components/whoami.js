const template = document.createElement("template");

const css = /*css*/ `  
    div {
        background-color: var(--red);
        padding: 0rem;
        width: 60vw;
    }   

    h2 {
        font-family: Main-font;
        background-color: var(--red);
        color: var(--fg-white);
        width: 100%;
        text-align: center;
        font-size: 5rem;
    }
`
template.innerHTML = /*html*/ `
    <style>
        ${css}
    </style>

    <div>
        <img src="" alt="" />
        <p>caca</p>
    </div>
`

class Whoami extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("carmin-whoami", Whoami)