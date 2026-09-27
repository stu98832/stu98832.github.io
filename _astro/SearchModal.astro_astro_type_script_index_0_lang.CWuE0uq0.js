function e(e,n=16){if(!e)return t(n);switch(e.toLowerCase().trim()){case`obsidian`:case`vault`:case`vaultcms`:return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="currentColor" class="tech-svg" style="color: #A855F7;" aria-hidden="true"><path d="m12.44 2.12 6.84 5.31a1.5 1.5 0 0 1 .49 1.6l-2.45 8.7a1.5 1.5 0 0 1-1.12 1.05l-8.54 1.83a1.5 1.5 0 0 1-1.57-.64l-3.8-5.83a1.5 1.5 0 0 1-.02-1.63L7.74 3.6a1.5 1.5 0 0 1 1.43-.88l3.27-.6z"/><path d="m12 7-3 5 4 4 4-6-5-3z" fill="#fff" opacity="0.8"/></svg>`;case`astro`:case`ssg`:return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="currentColor" class="tech-svg" style="color: #FF5D01;" aria-hidden="true"><path d="M12 2a1 1 0 0 1 .89.55l3.5 7a1 1 0 0 1-.13 1.15l-3.5 4a1 1 0 0 1-1.52 0l-3.5-4a1 1 0 0 1-.13-1.15l3.5-7A1 1 0 0 1 12 2z"/><path d="M7 16c-.55 0-1 .45-1 1a5 5 0 0 0 10 0c0-.55-.45-1-1-1a3 3 0 0 1-6 0c0-.55-.45-1-1-1z" fill="#9333ea"/></svg>`;case`scatterleaf`:case`comments`:return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="currentColor" class="tech-svg" style="color: #10B981;" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.42 3.12 7.24L4 22l3.43-1.03C8.75 21.6 10.33 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/><path d="M17 8c-2 0-4 1.5-4 4s2 4 4 4c0-2-1-4-2-5 1 0 2 0 2-3z" fill="#fff" opacity="0.6"/></svg>`;case`github`:case`git`:return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="currentColor" class="tech-svg" style="color: #8957E5;" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>`;case`design`:case`typography`:case`writing`:return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tech-svg" style="color: #3B82F6;" aria-hidden="true"><path d="M4 20h16"/><path d="m14 4-8 12"/><path d="m18 12-4-8-4 8"/></svg>`;case`gallery`:case`showcase`:case`photoswipe`:return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tech-svg" style="color: #EC4899;" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`;case`code`:case`workflow`:case`web-components`:case`shadow-dom`:return`<svg width="${n}" height="${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tech-svg" style="color: #06B6D4;" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;default:return t(n)}}function t(e=16){return`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tech-svg tech-svg-doc" style="color: var(--accent);" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`}var n=null,r=!1,i=-1,a=[],o=document.getElementById(`search-modal-backdrop`),s=document.getElementById(`search-modal-input`),c=document.getElementById(`search-modal-clear`),l=document.getElementById(`search-modal-close`),u=document.getElementById(`search-modal-results`),d=u?u.innerHTML:``;async function f(){if(n)return n;if(r)return null;r=!0;try{let e=await fetch(`/search-index.json`);e.ok&&(n=await e.json())}catch(e){console.error(`Error loading search index:`,e)}finally{r=!1}return n}window.addEventListener(`load`,()=>{`requestIdleCallback`in window?window.requestIdleCallback(()=>f()):setTimeout(f,1500)});function p(){o&&(o.classList.add(`open`),o.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`,f(),setTimeout(()=>{s?.focus(),s?.select()},50))}function m(){o&&(o.classList.remove(`open`),o.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``,s&&(s.value=``),c&&(c.style.display=`none`),u&&(u.innerHTML=d),i=-1,a=[])}function h(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function g(e,t){if(!e)return``;if(!t)return h(e);let n=t.trim().split(/\s+/).filter(Boolean);if(n.length===0)return h(e);let r=n.map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)).filter(Boolean);if(r.length===0)return h(e);let i=RegExp(`(${r.join(`|`)})`,`gi`);return e.split(i).map(e=>i.test(e)?`<mark class="search-match">${h(e)}</mark>`:h(e)).join(``)}function _(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase()}function v(n){if(n.type===`project`)return n.emoji?`<span style="font-size: 15px; line-height: 1;">${h(n.emoji)}</span>`:e(`vault`,16);let r=(n.title+` `+(n.tags||[]).join(` `)).toLowerCase();return r.includes(`obsidian`)?e(`obsidian`,16):r.includes(`astro`)||r.includes(`ssg`)?e(`astro`,16):r.includes(`vault`)?e(`vault`,16):r.includes(`scatterleaf`)||r.includes(`comment`)?e(`scatterleaf`,16):r.includes(`github`)||r.includes(`git`)?e(`github`,16):r.includes(`gallery`)||r.includes(`photo`)||r.includes(`zoom`)?e(`gallery`,16):r.includes(`typography`)||r.includes(`writing`)?e(`typography`,16):r.includes(`code`)?e(`code`,16):t(16)}function y(e){if(!u)return;let t=e.trim();if(!t){u.innerHTML=d,i=-1,a=[];return}if(!n){u.innerHTML=`
        <div class="search-empty">
          <div class="search-empty-icon">⏳</div>
          <div class="search-empty-title">Loading search index...</div>
        </div>
      `;return}let r=_(t).split(/\s+/).filter(Boolean),o=n.posts.map(e=>{let t=_(e.title),n=_(e.description),i=e.tags.map(e=>_(e)),a=0;for(let e of r)t.includes(e)&&(a+=50),t.startsWith(e)&&(a+=30),i.some(t=>t.includes(e))&&(a+=40),n.includes(e)&&(a+=15);return{item:e,score:a}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).map(e=>e.item),s=n.projects.map(e=>{let t=_(e.title),n=_(e.description),i=e.tags.map(e=>_(e)),a=e.category?_(e.category):``,o=0;for(let e of r)t.includes(e)&&(o+=50),t.startsWith(e)&&(o+=30),i.some(t=>t.includes(e))&&(o+=40),a.includes(e)&&(o+=25),n.includes(e)&&(o+=15);return{item:e,score:o}}).filter(e=>e.score>0).sort((e,t)=>t.score-e.score).map(e=>e.item),c=n.tags.filter(e=>{let t=_(e.name);return r.every(e=>t.includes(e))});if(o.length+s.length+c.length===0){u.innerHTML=`
        <div class="search-empty">
          <div class="search-empty-icon">🔍</div>
          <div class="search-empty-title">No results found for "${h(t)}"</div>
          <div class="search-empty-desc">Try searching for keywords like <code>obsidian</code>, <code>astro</code>, <code>vault</code> or <code>ssg</code>.</div>
        </div>
      `,i=-1,a=[];return}let l=``;if(o.length>0){l+=`
        <div class="search-category-group">
          <div class="search-category-title">
            <span>📄 Blog Articles</span>
            <span class="search-category-count">${o.length}</span>
          </div>
      `;for(let e of o)l+=`
          <a href="${e.url}" class="search-result-item" data-search-item>
            <div class="search-result-icon">${v(e)}</div>
            <div class="search-result-content">
              <div class="search-result-top">
                <div class="search-result-title">${g(e.title,t)}</div>
                <div class="search-result-meta">${e.date}</div>
              </div>
              <div class="search-result-desc">${g(e.description,t)}</div>
              <div class="search-result-tags">
                ${e.tags.slice(0,4).map(e=>`<span class="search-result-badge">${g(e,t)}</span>`).join(``)}
              </div>
            </div>
          </a>
        `;l+=`</div>`}if(s.length>0){l+=`
        <div class="search-category-group">
          <div class="search-category-title">
            <span>📦 Projects</span>
            <span class="search-category-count">${s.length}</span>
          </div>
      `;for(let e of s)l+=`
          <a href="${e.url}" class="search-result-item" data-search-item>
            <div class="search-result-icon">${v(e)}</div>
            <div class="search-result-content">
              <div class="search-result-top">
                <div class="search-result-title">${g(e.title,t)}</div>
                <div class="search-result-meta">${e.category||`Project`}</div>
              </div>
              <div class="search-result-desc">${g(e.description,t)}</div>
              <div class="search-result-tags">
                <span class="search-result-badge series-badge">⚡ ${h(e.category||`Project`)}</span>
                ${e.tags.slice(0,3).map(e=>`<span class="search-result-badge">${g(e,t)}</span>`).join(``)}
              </div>
            </div>
          </a>
        `;l+=`</div>`}if(c.length>0){l+=`
        <div class="search-category-group">
          <div class="search-category-title">
            <span>🏷️ Tags &amp; Topics</span>
            <span class="search-category-count">${c.length}</span>
          </div>
          <div class="search-tags-grid">
      `;for(let e of c)l+=`
          <a href="${e.url}" class="search-tag-item" data-search-item>
            <span>${g(e.name,t)}</span>
            <span class="search-tag-count">(${e.count})</span>
          </a>
        `;l+=`</div></div>`}u.innerHTML=l,a=Array.from(u.querySelectorAll(`[data-search-item]`)),i=a.length>0?0:-1,b(),a.forEach((e,t)=>{e.addEventListener(`mouseenter`,()=>{i=t,b()})})}function b(){a.forEach((e,t)=>{t===i?(e.classList.add(`selected`),e.scrollIntoView({block:`nearest`,behavior:`smooth`})):e.classList.remove(`selected`)})}s?.addEventListener(`input`,e=>{let t=e.target.value;c&&(c.style.display=t?`inline-flex`:`none`),y(t)}),c?.addEventListener(`click`,()=>{s&&(s.value=``,s.focus()),c&&(c.style.display=`none`),y(``)}),l?.addEventListener(`click`,m),o?.addEventListener(`click`,e=>{e.target===o&&m()}),window.addEventListener(`keydown`,e=>{let t=o?.classList.contains(`open`);if(!t){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`k`){e.preventDefault(),p();return}let t=(typeof e.composedPath==`function`?e.composedPath():[]).some(e=>{if(!e||!e.tagName)return!1;let t=e.tagName.toLowerCase();return t===`input`||t===`textarea`||e.isContentEditable});if(e.key===`/`&&!t){e.preventDefault(),p();return}}if(t){if(e.key===`Escape`){e.preventDefault(),m();return}if(e.key===`ArrowDown`){e.preventDefault(),a.length>0&&(i=(i+1)%a.length,b());return}if(e.key===`ArrowUp`){e.preventDefault(),a.length>0&&(i=(i-1+a.length)%a.length,b());return}e.key===`Enter`&&i>=0&&i<a.length&&(e.preventDefault(),a[i].click())}});function x(){document.querySelectorAll(`#header-search-btn, #mobile-search-btn`).forEach(e=>{e.addEventListener(`click`,e=>{e.preventDefault(),p()})})}x(),document.addEventListener(`astro:after-swap`,x);