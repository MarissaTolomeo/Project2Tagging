import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { RpgCharacter } from '@lrnwebcomponents/rpg-character/rpg-character.js';

export class tagging extends DDD {

  static get tag() {
    return 'tagging';

  }

  constructor() {
    super();
    this.answers = [" ", " ", " ", " "];
    this.reset = false;
    this.correct = false;
    this.incorrect = true;
  }

  static get styles() {
    return css`
     
      
    `;
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
        (module) => {
            setTimeout(() => {
            this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
}

  render() {
    return html`
<confetti-container id="confetti">
                <div class="questionContainer">
                    <div class="promptContainer">
                        <p class="questionText"> ?</p>
                        <div class="answerBox"><p class="answerText">answer is dragged here.</p></div>
                    </div>
                    <div class="tagContainer">
                        ${this.answers.map((item) => this.displayChips(item))}           
                    </div>

                    <button id="chipsReset" @click="${this.chipsReset}">Reset</button>
                    <button id="checkAnswer" @click="${this.solve}">check Answers</button>

                </div>
            </confetti-container>
    `
 }

  static get properties() {
    return {
      ...super.properties,
      answers: { type: Array, reflect: true },
      correct: { type: Boolean, reflect: true },
      incorrect: { type: Boolean, reflect: true },
      reset: { type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(tagging.tag, tagging);