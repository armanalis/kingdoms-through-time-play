import{a as e,i as t,n,r,s as i}from"./src-BJv8vUZZ.js";import{a,c as o,f as s,h as c,i as l,l as u,n as d,o as f,p,r as m,s as h,t as g,u as _}from"./main-Dr3IRBLX.js";import{i as v,n as y,p as b}from"./src-B2aBoNI8.js";import{n as x,t as S}from"./html-Bqv-zxzM.js";import{a as C,o as w,s as T,t as E}from"./overlays-B6eagLE2.js";var D=e=>e.reduce((e,t)=>e+(r.find(e=>e.id===t)?.points??0),0),O=[{size:96,name:`Small (96)`},{size:128,name:`Medium (128)`},{size:192,name:`Large (192)`},{size:256,name:`Huge (256)`}],k=[{value:`easy`,name:`Computer: Easy`},{value:`medium`,name:`Computer: Medium`},{value:`hard`,name:`Computer: Hard`},{value:``,name:`Does nothing`}],A=[{value:null,name:`Standard`},{value:500,name:`Medium (500 each)`},{value:1e3,name:`High (1000 each)`},{value:5e3,name:`Very high (5000 each)`}],j=(e,t)=>e.map(e=>`<option value="${e.value}"${String(e.value)===String(t)?` selected`:``}>${x(e.name)}</option>`).join(``);function M(){let e=document.getElementById(`menu`);e.hidden=!1;let t=new URLSearchParams(location.search).get(`skirmish`);t===null?N(e):I(e,`custom:${t}`)}function N(e){e.innerHTML=`
    <div class="screen center">
      <h1 class="logo">Kingdoms Through Time</h1>
      <p class="tagline">Lead your people from the Stone Age to the Nano Age.</p>
      <nav class="stack">
        <button data-go="campaign">Campaign</button>
        <button data-go="skirmish">Skirmish</button>
        <button data-go="multiplayer">Multiplayer</button>
        <button data-go="load">Load game</button>
        <button data-go="replays">Replays</button>
        <button data-go="civ">Civ Builder</button>
        <button data-go="editor">Map Editor</button>
        <button data-go="options">Options</button>
        <button data-go="credits">Credits</button>
      </nav>
    </div>`,e.querySelector(`nav`).addEventListener(`click`,t=>{let n=t.target.closest(`[data-go]`)?.getAttribute(`data-go`);n===`campaign`&&F(e),n===`skirmish`&&I(e),n===`multiplayer`&&B(e),n===`load`&&V(e,`save`),n===`replays`&&V(e,`replay`),n===`civ`&&L(e),n===`editor`&&location.assign(`${location.pathname}?editor`),n===`options`&&R(e),n===`credits`&&z(e)})}function P(e){return setTimeout(()=>e.querySelector(`[data-back]`)?.addEventListener(`click`,()=>N(e))),`<button class="back" data-back>← Back</button>`}function F(e){let t=w();e.innerHTML=`
    <div class="screen">
      ${P(e)}
      <h1>Campaign</h1>
      <p class="hint">Set games with their own goals. Win one to mark it done.</p>
      <ol class="missions">${n.map(e=>`<li class="mission">
            <h2>${x(e.name)}${t.includes(e.id)?` <span class="ready-yes">✓ done</span>`:``}</h2>
            <p>${x(e.intro)}</p>
            <ul>${e.objectives.map(t=>`<li>${x(T(t,e.enemies.map(e=>e.name)))}</li>`).join(``)}</ul>
            <button class="primary" data-mission="${x(e.id)}">Play ${x(e.name.replace(/^\d+\.\s*/,``))}</button>
          </li>`).join(``)}</ol>
    </div>`,e.querySelector(`.missions`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-mission]`)?.dataset.mission,r=n.find(e=>e.id===t);r&&(p(C(r,localStorage.getItem(`oe-name`)||`You`)),location.assign(`${location.pathname}?play`))})}function I(n,r){let a=m(),s=h();r&&s.some(e=>`custom:${e.name}`===r)&&(a.mapType=r),a.seed=Math.floor(Math.random()*1e6);let c=o(),l=[{value:``,name:`No bonuses`},...c.map((e,t)=>({value:String(t),name:`${e.name} (${D(e.bonuses)} pts)`}))],u=e=>{let t=e.length?c.findIndex(t=>t.bonuses.join()===e.join()):-1;return t>=0?String(t):``},f=()=>{let r=t.map(e=>({value:e.id,name:e.name}));n.innerHTML=`
      <div class="screen">
        ${P(n)}
        <h1>Skirmish</h1>

        <form class="setup">
          <fieldset><legend>Map</legend>
            <label>Type <select name="mapType">${j([...e.map(e=>({value:e.id,name:e.name})),...s.map(e=>({value:`custom:${e.name}`,name:`My map: ${e.name} (${e.starts.length} players)`}))],a.mapType)}</select></label>
            <label>Size <select name="mapSize">${j(O.map(e=>({value:e.size,name:e.name})),a.mapSize)}</select></label>
            <label>Seed <input name="seed" type="number" value="${a.seed}"> <button type="button" data-do="reseed" title="New random map">🎲</button></label>
            <label><input type="checkbox" name="revealMap"${a.revealMap?` checked`:``}> Reveal map (no fog of war)</label>
          </fieldset>
          <fieldset><legend>Rules</legend>
            <label>Starting resources <select name="startResources">${j(A.map(e=>({value:e.value??``,name:e.name})),a.startResources??``)}</select></label>
            <label>Start epoch <select name="startEpoch">${j(r,a.startEpoch)}</select></label>
            <label>End epoch <select name="endEpoch">${j(r,a.endEpoch)}</select></label>
            <label>Game speed <select name="speed">${j([.5,1,1.5,2,3].map(e=>({value:e,name:`×${e}`})),a.speed)}</select></label>
            <label><input type="checkbox" name="wonder"${a.wonder?` checked`:``}> Wonder victory (a finished Wonder standing ${i.wonderSeconds/60} min wins)</label>
            <label>Time limit <select name="timeLimitMinutes">${j([0,15,30,60,90].map(e=>({value:e,name:e?`${e} minutes (highest score wins)`:`None`})),a.timeLimitMinutes)}</select></label>
          </fieldset>
          <fieldset class="players"><legend>Players</legend>
            <table>
              <tr><th>Name</th><th>Player</th><th>Civilization</th><th>Color</th><th>Team</th><th></th></tr>
              ${a.players.map((e,t)=>`<tr data-player="${t}">
                    <td><input name="name" value="${x(e.name)}" maxlength="20"></td>
                    <td>${t===0?`You`:`<select name="ai">${j(k,e.ai??``)}</select>`}</td>
                    <td><select name="civ">${j(l,u(e.civ))}</select></td>
                    <td><select name="color">${g.map((t,n)=>`<option value="${n}"${n===e.color?` selected`:``} style="color:${S(d[n])}">${t}</option>`).join(``)}</select></td>
                    <td><select name="team">${j([1,2,3,4,5,6,7,8].map(e=>({value:e-1,name:`Team ${e}`})),e.team)}</select></td>
                    <td>${t>1?`<button type="button" data-do="remove" data-i="${t}" aria-label="Remove player ${t+1}">✕</button>`:``}</td>
                  </tr>`).join(``)}
            </table>
            ${a.players.length<8?`<button type="button" data-do="add">+ Add computer player</button>`:``}
          </fieldset>
          <p class="error" hidden></p>
          <button type="submit" class="primary">Start game</button>
        </form>
      </div>`;let o=n.querySelector(`form`);o.addEventListener(`change`,_),o.addEventListener(`click`,e=>{let t=e.target.closest(`[data-do]`);if(t){if(_(),t.dataset.do===`reseed`&&(a.seed=Math.floor(Math.random()*1e6)),t.dataset.do===`add`){let e=new Set(a.players.map(e=>e.color));a.players.push({name:`Computer ${a.players.length}`,color:[...d.keys()].find(t=>!e.has(t))??0,team:a.players.length,civ:[],ai:`medium`})}t.dataset.do===`remove`&&a.players.splice(Number(t.dataset.i),1),f()}}),o.addEventListener(`submit`,e=>{e.preventDefault(),_();let n=o.querySelector(`.error`),r=new Set(a.players.map(e=>e.team)).size<2?`Put at least two different teams in the game.`:a.customMap&&y(a.customMap,a.players.length)?`“${a.customMap.name}”: ${y(a.customMap,a.players.length)}.`:t.find(e=>e.id===a.startEpoch).order>t.find(e=>e.id===a.endEpoch).order?`The start epoch must not be after the end epoch.`:``;n.textContent=r,n.hidden=!r,!r&&(p(a),location.assign(`${location.pathname}?play`))})};function _(){let e=n.querySelector(`form`),t=t=>e.elements.namedItem(t).value,r=t=>e.elements.namedItem(t).checked;a.mapType=t(`mapType`),a.customMap=s.find(e=>`custom:${e.name}`===a.mapType),a.customMap||delete a.customMap,a.mapSize=Number(t(`mapSize`)),a.seed=Math.floor(Number(t(`seed`)))||0,a.revealMap=r(`revealMap`),a.startResources=t(`startResources`)===``?null:Number(t(`startResources`)),a.startEpoch=t(`startEpoch`),a.endEpoch=t(`endEpoch`),a.speed=Number(t(`speed`)),a.wonder=r(`wonder`),a.timeLimitMinutes=Number(t(`timeLimitMinutes`)),e.querySelectorAll(`[data-player]`).forEach(e=>{let t=a.players[Number(e.dataset.player)],n=t=>e.querySelector(`[name=${t}]`).value;if(t.name=n(`name`).trim()||`Player ${Number(e.dataset.player)+1}`,t.civ=n(`civ`)===``?[]:c[Number(n(`civ`))]?.bonuses??[],t.color=Number(n(`color`)),t.team=Number(n(`team`)),Number(e.dataset.player)>0){let e=n(`ai`);t.ai=e===`easy`||e===`medium`||e===`hard`?e:null}})}f()}function L(e){let t=[],n=``,a=()=>{let c=D(t),l=o();e.innerHTML=`
      <div class="screen">
        ${P(e)}
        <h1>Civ Builder</h1>
        <p>Spend up to <b>${i.civPoints}</b> points on bonuses. Points used: <b class="points">${c} / ${i.civPoints}</b></p>
        <div class="bonuses">
          ${r.map(e=>{let n=t.includes(e.id),r=!n&&c+e.points>i.civPoints;return`<label class="bonus${n?` on`:``}"><input type="checkbox" value="${e.id}"${n?` checked`:``}${r?` disabled`:``}>
                <b>${x(e.name)}</b> <span class="cost">${e.points} pt${e.points>1?`s`:``}</span><br><span class="hint">${x(e.description)}</span></label>`}).join(``)}
        </div>
        <p><label>Civ name <input name="civName" value="${x(n)}" maxlength="24" placeholder="e.g. River Folk"></label>
        <button data-do="save" class="primary"${t.length&&n.trim()?``:` disabled`}>Save civ</button></p>
        <h2>Saved civs</h2>
        ${l.length?`<ul class="saved">${l.map((e,t)=>`<li><b>${x(e.name)}</b>: ${e.bonuses.map(e=>r.find(t=>t.id===e)?.name??e).join(`, `)} <button data-do="delete" data-i="${t}" aria-label="Delete ${x(e.name)}">✕</button></li>`).join(``)}</ul>`:`<p class="hint">None yet.</p>`}
      </div>`,e.querySelector(`.bonuses`).addEventListener(`change`,e=>{let n=e.target;t=n.checked?v([...t,n.value]):t.filter(e=>e!==n.value),a()});let u=e.querySelector(`[name=civName]`);u.addEventListener(`input`,()=>{n=u.value,e.querySelector(`[data-do=save]`).disabled=!(t.length&&n.trim())}),e.querySelector(`.screen`).addEventListener(`click`,e=>{let r=e.target.closest(`[data-do]`);if(r?.dataset.do===`save`){let e=[...l.filter(e=>e.name!==n.trim()),{name:n.trim(),bonuses:t}];s(e),t=[],n=``,a()}r?.dataset.do===`delete`&&(l.splice(Number(r.dataset.i),1),s(l),a())})};a()}function R(e){e.innerHTML=`<div class="screen">${P(e)}<h1>Options</h1><div class="options"></div></div>`,E(e.querySelector(`.options`),u(),()=>{})}function z(e){e.innerHTML=`
    <div class="screen">
      ${P(e)}
      <h1>Credits</h1>
      <p>Kingdoms Through Time is a free, non-commercial hobby game. All game content (names, numbers, text) is original.</p>
      <p>All visuals are simple shapes made in code; no art assets are used yet (see CREDITS.md).</p>
      <p>Built with three.js (MIT), Vite (MIT), TypeScript (Apache-2.0), ws (MIT), Vitest (MIT) and Playwright (Apache-2.0).</p>
    </div>`}function B(e,t=``){e.innerHTML=`
      <div class="screen">
        ${P(e)}
        <h1>Multiplayer</h1>
        <p class="hint">This online copy is for playing alone: Campaign, Skirmish, Map Editor.</p>
        <p class="hint">To play with friends, one player hosts the game with <code>npm run host</code> and everyone opens that address (see HOSTING.md).</p>
      </div>`}function V(e,t,n=``){let r=f(t),i=t===`save`?`Load`:`Watch`;e.innerHTML=`
    <div class="screen">
      ${P(e)}
      <h1>${t===`save`?`Load game`:`Replays`}</h1>
      <p class="hint">${t===`save`?`Save from the in-game menu (Esc → Save game).`:`Save a replay from the in-game menu or the end screen. A replay replays every order, so it shows the whole game exactly as it happened.`}</p>
      ${r.length?`<ul class="rooms">${r.map(({key:e,file:t},n)=>`<li><b>${x(new Date(t.savedAt).toLocaleString())}</b> · ${x(l(t))}${t.dataVersion===b?``:` <span class="warn">(made with older game data)</span>`}
                  <button data-open="${n}">${i}</button> <button data-download="${n}">Download</button> <button data-delete="${x(e)}" aria-label="Delete">✕</button></li>`).join(``)}</ul>`:`<p class="hint">Nothing saved yet.</p>`}
      <p><label>Open a file: <input type="file" accept=".json,application/json"></label></p>
      <p class="error"${n?``:` hidden`}>${x(n)}</p>
    </div>`;let o=e=>{c(e),location.assign(`${location.pathname}?play&from=${t}`)};e.querySelector(`.screen`).addEventListener(`click`,n=>{let i=n.target,s=i.closest(`[data-open]`)?.dataset.open,c=i.closest(`[data-download]`)?.dataset.download,l=i.closest(`[data-delete]`)?.dataset.delete;s!==void 0&&o(r[Number(s)].file),c!==void 0&&a(r[Number(c)].file),l!==void 0&&(_(l),V(e,t))}),e.querySelector(`input[type=file]`).addEventListener(`change`,async n=>{let r=n.target.files?.[0];if(r)try{let e=JSON.parse(await r.text());if(e.kind!==t||e.format!==1)throw Error();o(e)}catch{V(e,t,`That isn't an Kingdoms Through Time ${t===`save`?`saved game`:`replay`} file.`)}})}export{M as showMenu};