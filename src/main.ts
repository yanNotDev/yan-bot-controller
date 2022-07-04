import './style.css'
import { Body, fetch } from '@tauri-apps/api/http'

import { people } from './people.js'

const app = document.querySelector<HTMLDivElement>('#app')!


app.innerHTML = `
<h1>Move a person</h1>
<button id="yan">Move yan</button>
<button id="fwello">Move fwello</button>
<button id="narv">Move narv</button>
<button id="sigma">Move sigma</button>
<button id="skitz">Move skitz</button>
<button id="pap">Move pap</button>
<button id="elmo">Move elmo</button>
`

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', async function () {
    const id: string = this.id
    await fetch(people.url, {
      method: 'POST',
      body: Body.json({ 'id': people[id as keyof Object] })
    });
  }
  )
}