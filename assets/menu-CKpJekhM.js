import{a as e,c as t,n,o as r,r as i}from"./src-HEAU8biX.js";import{_ as a,a as o,b as s,c,d as l,f as u,h as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S}from"./main-B4FrYiZA.js";import{i as C,n as w,p as T}from"./src-BIcurEWx.js";import{n as E,t as D}from"./html-Bqv-zxzM.js";import{a as O,o as k,s as A,t as j}from"./overlays-CViWL3Nn.js";var M=e=>e.reduce((e,t)=>e+(i.find(e=>e.id===t)?.points??0),0),N=[{size:96,name:`Small (96)`},{size:128,name:`Medium (128)`},{size:192,name:`Large (192)`},{size:256,name:`Huge (256)`}],P=[{value:`easy`,name:`Computer: Easy`},{value:`medium`,name:`Computer: Medium`},{value:`hard`,name:`Computer: Hard`},{value:``,name:`Does nothing`}],F=[{value:null,name:`Standard`},{value:500,name:`Medium (500 each)`},{value:1e3,name:`High (1000 each)`},{value:5e3,name:`Very high (5000 each)`}],I=(e,t)=>e.map(e=>`<option value="${e.value}"${String(e.value)===String(t)?` selected`:``}>${E(e.name)}</option>`).join(``);function L(e,t){return o(e,t).map(t=>`<option value="${t.value}"${t.value===e?` selected`:``}${t.disabled?` disabled`:``} style="color:${D(b[t.value])}">${E(t.name)}</option>`).join(``)}function R(e){return`<span class="swatch" style="background:${D(b[e]??16777215)}" aria-hidden="true"></span>`}function z(e,t){let n=v(e,t);return I(h(t,n),n)}function B(){let e=document.getElementById(`menu`);e.hidden=!1;let t=new URLSearchParams(location.search).get(`skirmish`);t===null?V(e):W(e,`custom:${t}`)}function V(t){t.innerHTML=`
    <div class="screen menu-home">
      <header class="mast">
        <h1 class="logo">Kingdoms<br>Through Time</h1>
        <p class="ages">${e.map(e=>`<span>${E(e.name.replace(/ Age$/,``))}</span>`).join(``)}</p>
        <p class="tagline">Lead your people from the Stone Age to the Nano Age.</p>
      </header>
      <nav class="stack">
        <div class="menu-play">
          <button data-go="campaign">Campaign</button>
          <button data-go="skirmish">Skirmish</button>
          <button data-go="multiplayer">Multiplayer</button>
        </div>
        <div class="menu-more">
          <button data-go="load">Load game</button>
          <button data-go="replays">Replays</button>
          <button data-go="civ">Civ Builder</button>
          <button data-go="editor">Map Editor</button>
          <button data-go="options">Options</button>
          <button data-go="credits">Credits</button>
        </div>
      </nav>
    </div>`,t.querySelector(`nav`).addEventListener(`click`,e=>{let n=e.target.closest(`[data-go]`)?.getAttribute(`data-go`);n===`campaign`&&U(t),n===`skirmish`&&W(t),n===`multiplayer`&&J(t),n===`load`&&Y(t,`save`),n===`replays`&&Y(t,`replay`),n===`civ`&&G(t),n===`editor`&&location.assign(`${location.pathname}?editor`),n===`options`&&K(t),n===`credits`&&q(t)})}function H(e){return setTimeout(()=>e.querySelector(`[data-back]`)?.addEventListener(`click`,()=>V(e))),`<button class="back" data-back>← Back</button>`}function U(e){let t=k();e.innerHTML=`
    <div class="screen">
      ${H(e)}
      <h1>Campaign</h1>
      <p class="hint">Set games with their own goals. Win one to mark it done.</p>
      <ol class="missions">${n.map(e=>`<li class="mission">
            <h2>${E(e.name)}${t.includes(e.id)?` <span class="ready-yes">✓ done</span>`:``}</h2>
            <p>${E(e.intro)}</p>
            <ul>${e.objectives.map(t=>`<li>${E(A(t,e.enemies.map(e=>e.name)))}</li>`).join(``)}</ul>
            <button class="primary" data-mission="${E(e.id)}">Play ${E(e.name.replace(/^\d+\.\s*/,``))}</button>
          </li>`).join(``)}</ol>
    </div>`,e.querySelector(`.missions`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-mission]`)?.dataset.mission,r=n.find(e=>e.id===t);r&&(S(O(r,localStorage.getItem(`oe-name`)||`You`)),location.assign(`${location.pathname}?play`))})}function W(n,i){let a=g(),o=l();i&&o.some(e=>`custom:${e.name}`===i)&&(a.mapType=i),a.seed=Math.floor(Math.random()*1e6);let s=u(),c=()=>{let i=e.map(e=>({value:e.id,name:e.name}));n.innerHTML=`
      <div class="screen">
        ${H(n)}
        <h1>Skirmish</h1>

        <form class="setup">
          <div class="setup-cols">
            <fieldset><legend>Map</legend>
              <label>Type <select name="mapType">${I([...r.map(e=>({value:e.id,name:e.name})),...o.map(e=>({value:`custom:${e.name}`,name:`My map: ${e.name} (${e.starts.length} players)`}))],a.mapType)}</select></label>
              <label>Size <select name="mapSize">${I(N.map(e=>({value:e.size,name:e.name})),a.mapSize)}</select></label>
              <label>Seed <span class="pair"><input name="seed" type="number" value="${a.seed}"><button type="button" data-do="reseed" title="New random map">🎲</button></span></label>
              <label><input type="checkbox" name="revealMap"${a.revealMap?` checked`:``}> Reveal map (no fog of war)</label>
            </fieldset>
            <fieldset><legend>Rules</legend>
              <label>Starting resources <select name="startResources">${I(F.map(e=>({value:e.value??``,name:e.name})),a.startResources??``)}</select></label>
              <label>Start epoch <select name="startEpoch">${I(i,a.startEpoch)}</select></label>
              <label>End epoch <select name="endEpoch">${I(i,a.endEpoch)}</select></label>
              <label>Game speed <select name="speed">${I([.5,1,1.5,2,3].map(e=>({value:e,name:`×${e}`})),a.speed)}</select></label>
              <label>Time limit <select name="timeLimitMinutes">${I([0,15,30,60,90].map(e=>({value:e,name:e?`${e} minutes (highest score wins)`:`None`})),a.timeLimitMinutes)}</select></label>
              <label><input type="checkbox" name="wonder"${a.wonder?` checked`:``}> Wonder victory (a finished Wonder standing ${t.wonderSeconds/60} min wins)</label>
            </fieldset>
          </div>
          <fieldset class="players"><legend>Players</legend>
            <table class="skirmish-table">
              <colgroup><col class="col-name"><col class="col-who"><col class="col-civ"><col class="col-color"><col class="col-team"><col class="col-act"></colgroup>
              <tr><th>Name</th><th>Player</th><th>Civilization</th><th>Color</th><th>Team</th><th></th></tr>
              ${a.players.map((e,t)=>`<tr data-player="${t}">
                    <td><input name="name" value="${E(e.name)}" maxlength="20"></td>
                    <td>${t===0?`You`:`<select name="ai">${I(P,e.ai??``)}</select>`}</td>
                    <td><select name="civ">${z(e.civ,s)}</select></td>
                    <td><span class="color-pick">${R(e.color)}<select name="color">${L(e.color,a.players.map(e=>e.color))}</select></span></td>
                    <td><select name="team">${I([1,2,3,4,5,6,7,8].map(e=>({value:e-1,name:`Team ${e}`})),e.team)}</select></td>
                    <td>${t>1?`<button type="button" data-do="remove" data-i="${t}" aria-label="Remove player ${t+1}">✕</button>`:``}</td>
                  </tr>`).join(``)}
            </table>
            ${a.players.length<8?`<button type="button" data-do="add">+ Add computer player</button>`:``}
          </fieldset>
          <p class="error" hidden aria-live="polite"></p>
          <div class="form-actions"><button type="submit" class="primary">Start game</button></div>
        </form>
      </div>`;let l=n.querySelector(`form`);l.addEventListener(`change`,e=>{d(),e.target.getAttribute(`name`)===`color`&&c()}),l.addEventListener(`click`,e=>{let t=e.target.closest(`[data-do]`);t&&(d(),t.dataset.do===`reseed`&&(a.seed=Math.floor(Math.random()*1e6)),t.dataset.do===`add`&&a.players.push({name:`Computer ${a.players.length}`,color:p(a.players.map(e=>e.color)),team:a.players.length,civ:[],ai:`medium`}),t.dataset.do===`remove`&&a.players.splice(Number(t.dataset.i),1),c())}),l.addEventListener(`submit`,t=>{t.preventDefault(),d();let n=l.querySelector(`.error`),r=new Set(a.players.map(e=>e.team)).size<2?`Put at least two different teams in the game.`:a.customMap&&w(a.customMap,a.players.length)?`“${a.customMap.name}”: ${w(a.customMap,a.players.length)}.`:e.find(e=>e.id===a.startEpoch).order>e.find(e=>e.id===a.endEpoch).order?`The start epoch must not be after the end epoch.`:``;n.textContent=r,n.hidden=!r,!r&&(S(a),location.assign(`${location.pathname}?play`))})};function d(){let e=n.querySelector(`form`),t=t=>e.elements.namedItem(t).value,r=t=>e.elements.namedItem(t).checked;a.mapType=t(`mapType`),a.customMap=o.find(e=>`custom:${e.name}`===a.mapType),a.customMap||delete a.customMap,a.mapSize=Number(t(`mapSize`)),a.seed=Math.floor(Number(t(`seed`)))||0,a.revealMap=r(`revealMap`),a.startResources=t(`startResources`)===``?null:Number(t(`startResources`)),a.startEpoch=t(`startEpoch`),a.endEpoch=t(`endEpoch`),a.speed=Number(t(`speed`)),a.wonder=r(`wonder`),a.timeLimitMinutes=Number(t(`timeLimitMinutes`)),e.querySelectorAll(`[data-player]`).forEach(e=>{let t=a.players[Number(e.dataset.player)],n=t=>e.querySelector(`[name=${t}]`).value,r=Number(e.dataset.player);if(t.name=n(`name`).trim()||`Player ${r+1}`,t.civ=f(n(`civ`),s,t.civ),t.color=m(t.color,Number(n(`color`)),a.players.filter((e,t)=>t!==r).map(e=>e.color)),t.team=Number(n(`team`)),Number(e.dataset.player)>0){let e=n(`ai`);t.ai=e===`easy`||e===`medium`||e===`hard`?e:null}})}c()}function G(e){let n=[],r=``,o=()=>{let s=M(n),c=u();e.innerHTML=`
      <div class="screen">
        ${H(e)}
        <h1>Civ Builder</h1>
        <p>Spend up to <b>${t.civPoints}</b> points on bonuses. Points used: <b class="points">${s} / ${t.civPoints}</b></p>
        <div class="bonuses">
          ${i.map(e=>{let r=n.includes(e.id),i=!r&&s+e.points>t.civPoints;return`<label class="bonus${r?` on`:``}"><input type="checkbox" value="${e.id}"${r?` checked`:``}${i?` disabled`:``}>
                <b>${E(e.name)}</b> <span class="cost">${e.points} pt${e.points>1?`s`:``}</span><br><span class="hint">${E(e.description)}</span></label>`}).join(``)}
        </div>
        <p class="civ-save"><label>Civ name <input name="civName" value="${E(r)}" maxlength="24" placeholder="e.g. River Folk"></label>
        <button data-do="save" class="primary"${n.length&&r.trim()?``:` disabled`}>Save civ</button></p>
        <h2>Saved civs</h2>
        ${c.length?`<ul class="saved">${c.map((e,t)=>`<li><b>${E(e.name)}</b>: ${e.bonuses.map(e=>i.find(t=>t.id===e)?.name??e).join(`, `)} <button data-do="delete" data-i="${t}" aria-label="Delete ${E(e.name)}">✕</button></li>`).join(``)}</ul>`:`<p class="hint">None yet.</p>`}
      </div>`,e.querySelector(`.bonuses`).addEventListener(`change`,e=>{let t=e.target;n=t.checked?C([...n,t.value]):n.filter(e=>e!==t.value),o()});let l=e.querySelector(`[name=civName]`);l.addEventListener(`input`,()=>{r=l.value,e.querySelector(`[data-do=save]`).disabled=!(n.length&&r.trim())}),e.querySelector(`.screen`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-do]`);if(t?.dataset.do===`save`){let e=[...c.filter(e=>e.name!==r.trim()),{name:r.trim(),bonuses:n}];a(e),n=[],r=``,o()}t?.dataset.do===`delete`&&(c.splice(Number(t.dataset.i),1),a(c),o())})};o()}function K(e){e.innerHTML=`<div class="screen">${H(e)}<h1>Options</h1><div class="options"></div></div>`,j(e.querySelector(`.options`),_(),()=>{})}function q(e){e.innerHTML=`
    <div class="screen prose">
      ${H(e)}
      <h1>Credits</h1>
      <p>Kingdoms Through Time is a free, non-commercial hobby game. All game content (names, numbers, text) is original.</p>
      <p>All visuals are simple shapes made in code; no art assets are used yet (see CREDITS.md).</p>
      <p>Built with three.js (MIT), Vite (MIT), TypeScript (Apache-2.0), ws (MIT), Vitest (MIT) and Playwright (Apache-2.0).</p>
    </div>`}function J(e,t=``){e.innerHTML=`
      <div class="screen">
        ${H(e)}
        <h1>Multiplayer</h1>
        <p class="hint">This online copy is for playing alone: Campaign, Skirmish, Map Editor.</p>
        <p class="hint">To play with friends, one player hosts the game with <code>npm run host</code> and everyone opens that address (see HOSTING.md).</p>
      </div>`}function Y(e,t,n=``){let r=x(t),i=t===`save`?`Load`:`Watch`;e.innerHTML=`
    <div class="screen">
      ${H(e)}
      <h1>${t===`save`?`Load game`:`Replays`}</h1>
      <p class="hint">${t===`save`?`Save from the in-game menu (Esc → Save game).`:`Save a replay from the in-game menu or the end screen. A replay replays every order, so it shows the whole game exactly as it happened.`}</p>
      ${r.length?`<ul class="rooms">${r.map(({key:e,file:t},n)=>`<li><span class="row-main"><b>${E(new Date(t.savedAt).toLocaleString())}</b><span>${E(y(t))}${t.dataVersion===T?``:` <span class="warn">(made with older game data)</span>`}</span></span><span class="row-actions"><button data-open="${n}">${i}</button> <button data-download="${n}">Download</button> <button data-delete="${E(e)}" aria-label="Delete">✕</button></span></li>`).join(``)}</ul>`:`<p class="hint">Nothing saved yet.</p>`}
      <p class="file-open"><label>Open a file <input type="file" accept=".json,application/json"></label></p>
      <p class="error" aria-live="polite"${n?``:` hidden`}>${E(n)}</p>
    </div>`;let a=e=>{s(e),location.assign(`${location.pathname}?play&from=${t}`)};e.querySelector(`.screen`).addEventListener(`click`,n=>{let i=n.target,o=i.closest(`[data-open]`)?.dataset.open,s=i.closest(`[data-download]`)?.dataset.download,l=i.closest(`[data-delete]`)?.dataset.delete;o!==void 0&&a(r[Number(o)].file),s!==void 0&&c(r[Number(s)].file),l!==void 0&&(d(l),Y(e,t))}),e.querySelector(`input[type=file]`).addEventListener(`change`,async n=>{let r=n.target.files?.[0];if(r)try{let e=JSON.parse(await r.text());if(e.kind!==t||e.format!==1)throw Error();a(e)}catch{Y(e,t,`That isn't an Kingdoms Through Time ${t===`save`?`saved game`:`replay`} file.`)}})}export{B as showMenu};