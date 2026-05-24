
const cafes = [
  { id:'de-venezia', name:"De Venezia Café", location:"BF Resort Village, Talon Dos, Las Piñas",
    region:'metro-manila', leds:true, category:'hot', img:'dev.png',
    desc:"Tucked in a quiet residential pocket of Las Piñas, De Venezia feels like a tito's well-loved kitchen reimagined as a café. Warm wood, low lighting, and a pasta menu that locals quietly defend.",
    mustTry:"Hand-tossed pasta (any of them, honestly)" },
  { id:'cafe-singko', name:"Cafe Singko", location:"BF Resort Village, BF Resort Dr, Las Piñas",
    region:'metro-manila', leds:true, category:'dessert', img:'singko.png',
    desc:"A pastry-forward neighborhood café famous for its Strawberry Hat — a viral, photogenic dessert that actually delivers. Light, airy interiors, perfect for an afternoon merienda.",
    mustTry:"Strawberry Hat Pastry" },
  { id:'oolah', name:"Oolah Coffee", location:"VA Rufino St., Legazpi Village, Makati",
    region:'metro-manila', category:'hot', img:'oolah.png',
    desc:"A sleek matcha-forward café in the heart of Legazpi. Their Matcha Banana Pudding is the move — it has a near-cult following among the BGC/Makati café crowd.",
    mustTry:"Matcha Banana Pudding" },
  { id:'ani', name:"Ani Cafe", location:"Comuna, 238 Pablo Ocampo Sr. Ext., Makati",
    region:'metro-manila', category:'cozy', img:'ani.png',
    desc:"Farm-to-table done casually. Ani leans into fresh local produce — the menu rotates with what's in season, and the dishes feel both honest and quietly inventive.",
    mustTry:"Seasonal produce plates" },
  { id:'lola', name:"A Cup for Lola", location:"Gamboa St., Legazpi Village, Makati",
    region:'metro-manila', category:'cozy', img:'lola.png',
    desc:"The kind of place you settle into. Comfortable seating, a coffee program that takes itself seriously, and an ambiance that invites long conversations or solo journaling.",
    mustTry:"Single-origin pour-over" },
  { id:'ito-kish', name:"Ito Kish", location:"JP Rizal Avenue, Makati",
    region:'metro-manila', category:'cozy', img:'itokish.png',
    desc:"Hidden behind a furniture and design showroom — yes, really. Stepping in feels like discovering a secret. Curated, design-forward, and quiet enough to actually think.",
    mustTry:"Whatever the daily special is" },
  { id:'kapean', name:"Kap'ean Coffee PH", location:"Amuyong, Alfonso, Cavite",
    region:'cavite', category:'scenic', img:'kapean.png',
    desc:"A garden café where the views do most of the work. Cool air, plants everywhere, and coffee that tastes better because you drove a little to get here.",
    mustTry:"Iced specialty drinks in the garden seats" },
  { id:'bungad', name:"Bungad Cafe", location:"Zambal, Tagaytay City",
    region:'tagaytay', category:'scenic', img:'bungad.png',
    desc:"The 'hidden cafe of Tagaytay' that locals gatekeep. Off the main highway, perfectly quiet, and so worth the small detour. Ideal for a slow weekend morning.",
    mustTry:"Hot brews on a foggy day" },
  { id:'concordia', name:"Concordia's Cafe", location:"San Jose, Tagaytay City",
    region:'tagaytay', category:'hot', img:'concordia.png',
    desc:"Drinks that look like art on a tray. Concordia's leans heavily into beautifully composed beverages — your phone will eat first, but the taste keeps up.",
    mustTry:"Signature layered drinks" },
  { id:'kabasera', name:"Kabasera Café", location:"Angono, Rizal",
    region:'rizal', category:'scenic', img:'kabesera.png',
    desc:"An overlooking café in the art capital of the Philippines. Pair your coffee with a view of the Sierra Madre and a side trip to Angono's murals.",
    mustTry:"Brunch + the view" },
  { id:'sweet-tones', name:"Sweet Tones by Toni", location:"Quezon City, Metro Manila",
    region:'metro-manila', category:'dessert', img:'sweet.png',
    desc:"Home of arguably the best Dubai Chewy Cookie in Metro Manila. Pistachio, kataifi, chocolate — it's the trend done right.",
    mustTry:"Dubai Chewy Cookie" },
  { id:'heavenly', name:"Heavenly Desserts by Chef Jeng", location:"District One, BGC",
    region:'metro-manila', category:'dessert', img:'heavenly.png',
    desc:"A cake-forward dessert spot in BGC where the slices are tall, layered, and absurdly photogenic. Best paired with their espresso to cut the sweetness.",
    mustTry:"Signature layered cakes" },
  { id:'study-hall', name:"Study Hall España", location:"P. Campa, España, Manila",
    region:'espana', category:'study', img:'studyhall.png',
    desc:"Built for students and remote workers. Long tables, plenty of outlets, decent Wi-Fi, and a no-judgment policy on staying for hours. Walking distance from UST.",
    mustTry:"Bottomless brewed coffee for study sessions" },
  { id:'eutopia', name:"Eutopia Cafe", location:"España, Manila",
    region:'espana', category:'study', img:'eutopia.png',
    desc:"A quality-over-quantity drinks specialist on España. Small menu, but everything on it is dialed in. The kind of café that makes you respect a barista's craft.",
    mustTry:"House specialty espresso drinks" },
  { id:'calle', name:"Calle Cafe by Don Gabriel", location:"España, Manila",
    region:'espana', category:'cozy', img:'calle.png',
    desc:"Easily one of the most ambient cafés near España. Warm Spanish-Filipino interiors, soft lighting, and a menu that pairs perfectly with rainy-afternoon studying.",
    mustTry:"House blend + their pastries" },
  { id:'gimik', name:"Gimik Cafe", location:"Marcos Alvarez, Las Piñas City",
    region:'metro-manila', leds:true, category:'hot', img:'gimik.png',
    desc:"A 90's-themed café and an instant time machine. Cassette tapes on the walls, retro signages, and a playlist that will get your titos misty-eyed. Pure comfort.",
    mustTry:"Retro float drinks + 90's-coded pastries" },
  { id:'momento', name:"Momento Coffee Bar", location:"Diego Cera, Las Piñas City",
    region:'metro-manila', leds:true, category:'cozy', img:'momento.png',
    desc:"My personal hangout. Warm, low-key, and full of regulars — the kind of café where the barista remembers your order. Where most of my barkada studies and unwinds.",
    mustTry:"Their flat white and any seasonal drink" },
];

const LS_KEY = 'anotara_state_v2';
const defaultState = { ratings:{}, likes:{}, liked:{}, bookmarks:[], comments:{}, user:null };
let state = JSON.parse(localStorage.getItem(LS_KEY)) || defaultState;
function saveState(){ localStorage.setItem(LS_KEY, JSON.stringify(state)); }

const fakeSeed = {
  'de-venezia':[
    { who:'@maxinnnec', what:'the carbonara is unreal. came back the next week 😩' },
    { who:'@joshtthegreat', what:'low-key gem of Las Piñas. parking can be tight tho.' }
  ],
  'cafe-singko':[
    { who:'@bea.rrr', what:'strawberry hat literally lives up to the hype omg' },
    { who:'@kuyaJP', what:'cute spot, ang ganda ng interiors!!' }
  ],
  'oolah':[
    { who:'@matchamouth', what:'banana matcha pudding > everything else in makati' }
  ],
  'momento':[
    { who:'@enzodelacruz', what:'my comfort café. we go here pag burnt out kami sa school' },
    { who:'@iamtricia', what:'baristas are so kind and the playlist hits everytime' }
  ],
  'study-hall':[
    { who:'@ust.life', what:'survived thesis week here. shoutout sa unli kape' }
  ],
  'gimik':[
    { who:'@retrokid', what:'parang pumasok ako sa MTV 1996. sobrang fun!' }
  ],
};
if(!state._seeded){
  for(const [id, arr] of Object.entries(fakeSeed)){
    state.comments[id] = (state.comments[id]||[]).concat(arr);
  }
  cafes.forEach(c => state.likes[c.id] = state.likes[c.id] ?? Math.floor(Math.random()*200 + 30));
  state._seeded = true;
  saveState();
}

function renderAuth(){
  const area = document.getElementById('authArea');
  if(!area) return;
  if(state.user){
    area.innerHTML = `
      <span class="user-greet">hi, ${state.user.name} ✦</span>
      <button class="btn btn-ghost" id="logoutBtn">Log out</button>
    `;
    document.getElementById('logoutBtn').addEventListener('click', () => {
      state.user = null; saveState(); renderAuth(); renderHello();
    });
  } else {
    area.innerHTML = `
      <button class="btn btn-ghost" id="loginBtn">Log in</button>
      <button class="btn btn-solid" id="joinBtn">Join</button>
    `;
    document.getElementById('loginBtn').addEventListener('click', () => openAuth('login'));
    document.getElementById('joinBtn').addEventListener('click', () => openAuth('join'));
  }
}

function renderHello(){
  const line = document.getElementById('helloLine');
  if(!line) return;
  if(state.user){
    document.getElementById('helloName').textContent = state.user.name;
    line.style.display = 'block';
  } else {
    line.style.display = 'none';
  }
}

function openAuth(mode){
  const m = document.getElementById('authModal');
  if(!m) return;
  document.getElementById('authTitle').textContent = mode === 'login' ? 'Log in' : 'Join';
  document.getElementById('authSub').textContent = mode === 'login' ? 'welcome back ✦' : 'welcome to Ano Tara? ✦';
  m.classList.add('open');
  m.dataset.mode = mode;
}
function closeAuth(){
  const m = document.getElementById('authModal');
  if(m) m.classList.remove('open');
}

const authModal = document.getElementById('authModal');
if(authModal){
  document.getElementById('authClose').addEventListener('click', closeAuth);
  authModal.addEventListener('click', e => { if(e.target === authModal) closeAuth(); });
  document.getElementById('authSubmit').addEventListener('click', () => {
    const name = document.getElementById('authName').value.trim();
    if(!name){ alert('Please enter your first name'); return; }
    state.user = { name: name.split(' ')[0] };
    saveState();
    closeAuth();
    renderAuth();
    renderHello();
  });
}

renderAuth();
renderHello();

const hotGrid = document.getElementById('hotGrid');
if(hotGrid){
  function cardHTML(c){
    return `
      <article class="hot-card hover-float" data-cafe="${c.id}">
        <img src="${c.img}" alt="${c.name}" class="hot-img" />
        <h4>${c.name}</h4>
        <p class="loc">${c.location}</p>
      </article>
    `;
  }

  function renderCategorized(){
    const byCat = {
      hot: cafes.filter(c => c.category === 'hot'),
      cozy: cafes.filter(c => c.category === 'cozy'),
      study: cafes.filter(c => c.category === 'study'),
      scenic: cafes.filter(c => c.category === 'scenic'),
      dessert: cafes.filter(c => c.category === 'dessert'),
    };
    document.getElementById('hotGrid').innerHTML = byCat.hot.map(cardHTML).join('');
    document.getElementById('cozyGrid').innerHTML = byCat.cozy.map(cardHTML).join('');
    document.getElementById('studyGrid').innerHTML = byCat.study.map(cardHTML).join('');
    document.getElementById('scenicGrid').innerHTML = byCat.scenic.map(cardHTML).join('');
    document.getElementById('dessertGrid').innerHTML = byCat.dessert.map(cardHTML).join('');
    bindCafeCards();
  }

  function applyFilter(filter){
    const ledsSection = document.getElementById('ledsSection');
    const categoryBlocks = document.querySelectorAll('.category-block');
    const filteredBlock = document.getElementById('filteredBlock');

    if(filter === 'all'){
      ledsSection.style.display = '';
      categoryBlocks.forEach(b => b.style.display = '');
      filteredBlock.style.display = 'none';
    } else {
      ledsSection.style.display = 'none';
      categoryBlocks.forEach(b => b.style.display = 'none');
      filteredBlock.style.display = '';

      let list = cafes.slice();
      let title = 'Results';
      if(filter === 'leds'){ list = list.filter(c => c.leds); title = "Led's Picks"; }
      else { list = list.filter(c => c.region === filter);
        const map = {'metro-manila':'Metro Manila','cavite':'Cavite','tagaytay':'Tagaytay','rizal':'Rizal','espana':'España'};
        title = map[filter] || 'Results';
      }
      document.getElementById('filteredTitle').textContent = title;
      document.getElementById('filteredGrid').innerHTML = list.map(cardHTML).join('');
      bindCafeCards();
    }
  }

  renderCategorized();

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyFilter(chip.dataset.filter);
    });
  });

  const exploreSearch = document.getElementById('exploreSearch');
  if(exploreSearch){
    exploreSearch.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.hot-card').forEach(card => {
        const id = card.dataset.cafe;
        const c = cafes.find(x => x.id === id);
        const match = c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q);
        card.style.display = match ? '' : 'none';
      });
    });
  }
}

const bookmarkGrid = document.getElementById('bookmarkGrid');
if(bookmarkGrid){
  function renderBookmarks(){
    const list = cafes.filter(c => state.bookmarks.includes(c.id));
    document.getElementById('emptyMsg').style.display = list.length ? 'none' : 'block';
    bookmarkGrid.innerHTML = list.map(c => `
      <article class="hot-card hover-float" data-cafe="${c.id}">
        <img src="${c.img}" alt="${c.name}" class="hot-img" />
        <h4>${c.name}</h4>
        <p class="loc">${c.location}</p>
      </article>
    `).join('');
    bindCafeCards();
  }
  renderBookmarks();
  window._renderBookmarks = renderBookmarks;
}

const modal = document.getElementById('modal');
let currentCafe = null;

function openModal(id){
  const c = cafes.find(x => x.id === id);
  if(!c || !modal) return;
  currentCafe = c;
  const photo = document.getElementById('modalPhoto');
  photo.src = c.img;
  photo.alt = c.name;
  document.getElementById('modalTitle').textContent = c.name;
  document.getElementById('modalLocation').textContent = c.location;
  document.getElementById('modalDesc').textContent = c.desc;
  document.getElementById('modalMustTry').textContent = c.mustTry;
  document.getElementById('likeCount').textContent = state.likes[c.id] || 0;

  const likeBtn = document.getElementById('likeBtn');
  likeBtn.classList.toggle('liked', !!state.liked[c.id]);

  const bmBtn = document.getElementById('bookmarkBtn');
  bmBtn.classList.toggle('saved', state.bookmarks.includes(c.id));
  bmBtn.textContent = state.bookmarks.includes(c.id) ? '✓ Bookmarked' : '⛉ Bookmark';

  const rating = state.ratings[c.id] || 0;
  document.querySelectorAll('#starRate span').forEach(s => {
    s.textContent = (+s.dataset.v <= rating) ? '★' : '☆';
  });

  renderComments();
  modal.classList.add('open');
}

function closeModal(){
  if(modal) modal.classList.remove('open');
  currentCafe = null;
}

function renderComments(){
  if(!currentCafe) return;
  const list = state.comments[currentCafe.id] || [];
  const el = document.getElementById('commentList');
  if(!list.length){
    el.innerHTML = `<p class="muted">be the first to comment ✦</p>`;
    return;
  }
  el.innerHTML = list.map(c => `
    <div class="comment">
      <div class="who">${c.who}</div>
      <div class="what">${c.what}</div>
    </div>
  `).join('');
}

function bindCafeCards(){
  document.querySelectorAll('[data-cafe]').forEach(el => {
    el.onclick = () => openModal(el.dataset.cafe);
  });
}
bindCafeCards();

if(modal){
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') { closeModal(); closeAuth(); } });

  document.querySelectorAll('#starRate span').forEach(s => {
    s.addEventListener('click', () => {
      if(!currentCafe) return;
      const v = +s.dataset.v;
      state.ratings[currentCafe.id] = v;
      saveState();
      document.querySelectorAll('#starRate span').forEach(x => {
        x.textContent = (+x.dataset.v <= v) ? '★' : '☆';
      });
    });
  });

  document.getElementById('likeBtn').addEventListener('click', () => {
    if(!currentCafe) return;
    const id = currentCafe.id;
    state.liked[id] = !state.liked[id];
    state.likes[id] = (state.likes[id] || 0) + (state.liked[id] ? 1 : -1);
    saveState();
    document.getElementById('likeCount').textContent = state.likes[id];
    document.getElementById('likeBtn').classList.toggle('liked', state.liked[id]);
  });

  document.getElementById('bookmarkBtn').addEventListener('click', () => {
    if(!currentCafe) return;
    const id = currentCafe.id;
    const i = state.bookmarks.indexOf(id);
    if(i === -1) state.bookmarks.push(id); else state.bookmarks.splice(i, 1);
    saveState();
    const saved = state.bookmarks.includes(id);
    const btn = document.getElementById('bookmarkBtn');
    btn.classList.toggle('saved', saved);
    btn.textContent = saved ? '✓ Bookmarked' : '⛉ Bookmark';
    if(window._renderBookmarks) window._renderBookmarks();
  });

  document.getElementById('commentBtn').addEventListener('click', postComment);
  document.getElementById('commentInput').addEventListener('keydown', e => {
    if(e.key === 'Enter') postComment();
  });
  function postComment(){
    if(!currentCafe) return;
    const inp = document.getElementById('commentInput');
    const text = inp.value.trim();
    if(!text) return;
    const who = state.user ? `@${state.user.name.toLowerCase()}` : '@you';
    state.comments[currentCafe.id] = state.comments[currentCafe.id] || [];
    state.comments[currentCafe.id].push({ who, what: text });
    saveState();
    inp.value = '';
    renderComments();
  }
}
