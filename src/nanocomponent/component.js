const Nanocomponent = require('nanocomponent');
const html = require('bel')

export class Button extends Nanocomponent {
  constructor () {
    super();
    this.color = null
  }

  handleClick () {
    console.log('choo choo!');
  }

  createElement ({color}) {
    this.color = color
    return html`
      <button onclick=${this.handleClick} style="background-color: ${color}">
        Click Me
      </button>
    `
  }

  update ({color}) {
    return color !== this.color
  }
}
