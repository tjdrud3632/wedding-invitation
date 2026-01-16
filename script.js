/* =========================
   CONFIG
========================= */
const WEDDING = {
  dateTimeLocal: "2026-05-02T12:30:00",

  ceremony: { address: "Carretera Subida SantuarioS N, 46400 Cullera, Valencia, España" },
  reception: { address: "Av. Joanot Martorell, 16, 46408 Faro de Cullera, Valencia, España" },

  rsvpLink: "",

  bgmSrc: "./assets/audio/A Thousand Years.mp3",
  videoSrc: "./assets/video/wedding.mp4",

  gallery: [
    "./assets/images/gallery-01.JPG",
    "./assets/images/gallery-02.JPG",
    "./assets/images/gallery-03.JPG",
    "./assets/images/gallery-04.JPG",
    "./assets/images/gallery-05.JPG",
    "./assets/images/gallery-06.JPG",
    "./assets/images/gallery-07.JPG",
    "./assets/images/gallery-08.JPG",
    "./assets/images/gallery-09.JPG",
    "./assets/images/gallery-10.JPG",
  ],

  weekStartsOnSunday: true,

    rsvpLink: "",

    // ✅ Google Apps Script 웹앱 URL (배포 후 받은 exec URL)
    rsvpEndpoint: "https://script.google.com/macros/s/AKfycbwnyWkqZDZ9EC4gZwy8GBVn0ALTE9uZ5WG2A4EcNqEen-JjXEfnMCebHuD-5OgAqS2yvA/exec",

};

/* =========================
   i18n (Default: ES)
========================= */
const I18N = {
  ko: {
    title: "Wedding Invitation",
    invitationTitle: "Wedding Invitation",
    invitationBody:
      `서로를 향해 긴 시간을 건너온 두 사람,<br/>
       멀리 떨어져 있어도 이어진 마음으로 여기까지 왔습니다.<br/>
       이 소중한 순간을 함께 나누고 축복해 주신다면<br/>
       더할 나위 없이 감사하겠습니다.`,
    ceremony: "예식",
    reception: "피로연(2부)",
    calendar: "CALENDAR",
    dday: "D-DAY",
    ddayText: "결혼식까지 D- --",
    gallery: "GALLERY",
    galleryHint: "사진을 누르면 크게 볼 수 있어요. (좌/우 탭 또는 스와이프)",
    galleryMore: "더 보기",
    video: "VIDEO",
    location: "LOCATION",
    rsvp: "RSVP",
    rsvpHint: "참석 여부를 알려주시면 준비에 큰 도움이 됩니다.",
    rsvpBtn: "참석여부 전달하기",
    gift: "GIFT",
    groomAccTitle: "신랑측 계좌번호",
    brideAccTitle: "신부측 계좌번호",
    groomHolder: "신랑 예금주",
    brideHolder: "신부 예금주",
    copyBtn: "복사하기",
    closing1: "저희의 새로운 시작에<br/>함께해 주셔서 진심으로 감사합니다.",
    closing2: "따뜻한 마음 오래도록 간직하며<br/>서로에게 좋은 부부가 되겠습니다.",
    closingSign: "Jacob & 성경",
    toastCopy: "복사되었습니다",
    toastCopyFail: "복사 실패",
    toastNeedRSVP: "RSVP 링크를 설정해줘!",
    toastBgmOn: "배경음악 ON",
    toastBgmOff: "배경음악 OFF",
    toastBgmNeedTap: "iOS에서 재생이 제한될 수 있어요. 다시 눌러주세요.",
    toastNoMore: "더 이상 사진이 없어요",
    cd_days: "일",
    cd_hours: "시",
    cd_mins: "분",
    cd_secs: "초",
    rsvpModalTitle: "RSVP",
    rsvpAttendPlaceholder: "참석 여부",
    rsvpAttendYes: "참석",
    rsvpAttendNo: "불참",
    rsvpSubmit: "제출",
    rsvpPrivacy: "연락처는 예식 안내 및 확인용으로만 사용 후 일정 기간 내 파기합니다.",
    toastRsvpDone: "제출 완료! 감사합니다 💛",
    toastRsvpFail: "저장 실패. 다시 시도해주세요.",    
  },
  en: {
    title: "Wedding Invitation",
    invitationTitle: "Wedding Invitation",
    invitationBody:
      `Two hearts that crossed time and distance,<br/>
       have arrived here holding onto one another.<br/>
       We would be truly grateful<br/>
       if you could celebrate this precious moment with us.`,
    ceremony: "Ceremony",
    reception: "Reception (After party)",
    calendar: "CALENDAR",
    dday: "D-DAY",
    ddayText: "D- -- days",
    gallery: "GALLERY",
    galleryHint: "Tap a photo to view larger. (Tap sides / swipe)",
    galleryMore: "Load more",
    video: "VIDEO",
    location: "LOCATION",
    rsvp: "RSVP",
    rsvpHint: "Please let us know if you can attend.",
    rsvpBtn: "Send RSVP",
    gift: "GIFT",
    groomAccTitle: "Groom's account",
    brideAccTitle: "Bride's account",
    groomHolder: "Account holder (Groom)",
    brideHolder: "Account holder (Bride)",
    copyBtn: "Copy",
    closing1: "Thank you for being part of our new beginning.",
    closing2: "With love and gratitude, we will cherish your warm wishes.",
    closingSign: "Jacob & 성경",
    toastCopy: "Copied",
    toastCopyFail: "Copy failed",
    toastNeedRSVP: "Please set the RSVP link!",
    toastBgmOn: "BGM ON",
    toastBgmOff: "BGM OFF",
    toastBgmNeedTap: "Playback may be restricted on iOS. Tap again.",
    toastNoMore: "No more photos",
    cd_days: "DAYS",
    cd_hours: "HOURS",
    cd_mins: "MIN",
    cd_secs: "SEC",
    rsvpModalTitle: "RSVP",
    rsvpAttendPlaceholder: "Attendance",
    rsvpAttendYes: "Attending",
    rsvpAttendNo: "Not attending",
    rsvpSubmit: "Submit",
    rsvpPrivacy: "Phone number is used only for wedding 안내/confirmation and will be deleted later.",
    toastRsvpDone: "Submitted! Thank you 💛",
    toastRsvpFail: "Save failed. Please try again.",
  },
  es: {
    title: "Invitación de boda",
    invitationTitle: "Invitación de boda",
    invitationBody:
      `Dos corazones que han cruzado el tiempo y la distancia,<br/>
       han llegado hasta aquí unidos.<br/>
       Nos haría mucha ilusión<br/>
       que compartieras y celebraras este momento con nosotros.`,
    ceremony: "Ceremonia",
    reception: "Recepción",
    calendar: "CALENDARIO",
    dday: "CUENTA ATRÁS",
    ddayText: "Faltan D- -- días",
    gallery: "GALERÍA",
    galleryHint: "Toca una foto para verla en grande. (Toca los lados / desliza)",
    galleryMore: "Ver más",
    video: "VÍDEO",
    location: "UBICACIÓN",
    rsvp: "CONFIRMACIÓN",
    rsvpHint: "Por favor, confirma tu asistencia.",
    rsvpBtn: "Confirmar asistencia",
    gift: "REGALO",
    groomAccTitle: "Cuenta del novio",
    brideAccTitle: "Cuenta de la novia",
    groomHolder: "Titular (Novio)",
    brideHolder: "Titular (Novia)",
    copyBtn: "Copiar",
    closing1: "Muchas gracias por acompañarnos<br/>en este nuevo comienzo.",
    closing2: "Guardaremos con cariño<br/>tus buenos deseos.",
    closingSign: "Jacob y 성경",
    toastCopy: "Copiado",
    toastCopyFail: "Error al copiar",
    toastNeedRSVP: "¡Configura el enlace de confirmación!",
    toastBgmOn: "Música ON",
    toastBgmOff: "Música OFF",
    toastBgmNeedTap: "En iOS puede estar restringido. Toca otra vez.",
    toastNoMore: "No hay más fotos",
    cd_days: "DÍAS",
    cd_hours: "HORAS",
    cd_mins: "MIN",
    cd_secs: "SEG",
    rsvpModalTitle: "CONFIRMACIÓN",
    rsvpAttendPlaceholder: "Asistencia",
    rsvpAttendYes: "Asistiré",
    rsvpAttendNo: "No asistiré",
    rsvpSubmit: "Enviar",
    rsvpPrivacy: "El teléfono se usará solo para confirmar la asistencia y se eliminará más adelante.",
    toastRsvpDone: "¡Enviado! Gracias 💛",
    toastRsvpFail: "Error al guardar. Inténtalo de nuevo.",

  }
};

let currentLang = localStorage.getItem("wedding_lang") || "es";

/* =========================
   Helpers
========================= */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const pad2 = (n) => String(n).padStart(2, "0");

function t(key){
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.es && I18N.es[key]) || key;
}

function toast(msg){
  const el = $("#toast");
  if(!el) return;
  el.textContent = msg;
  el.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(()=>{ el.style.opacity = "0"; }, 1200);
}

async function safeCopy(text){
  if(!text) throw new Error("no text");
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  document.execCommand("copy");
  ta.remove();
}

function formatDateYMD_KO(date){
  return `${date.getFullYear()}.${pad2(date.getMonth()+1)}.${pad2(date.getDate())}`;
}
function formatDateDMY(date){
  return `${pad2(date.getDate())}.${pad2(date.getMonth()+1)}.${date.getFullYear()}`;
}

/* =========================
   1) 상단 메타 날짜 포맷
========================= */
function formatWeddingDate(){
  const el = $("#metaDate");
  if(!el) return;

  const d = new Date(WEDDING.dateTimeLocal);
  if(Number.isNaN(d.getTime())) return;

  if(currentLang === "ko"){
    const DOW = ["일","월","화","수","목","금","토"];
    el.textContent = `${d.getFullYear()}. ${pad2(d.getMonth()+1)}. ${pad2(d.getDate())} (${DOW[d.getDay()]}) ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
    return;
  }

  if(currentLang === "en"){
    const datePart = d.toLocaleDateString("en-US", { year:"numeric", month:"long", day:"numeric" });
    const timePart = d.toLocaleTimeString("en-US", { hour:"numeric", minute:"2-digit", hour12:true });
    el.textContent = `${datePart} · ${timePart}`;
    return;
  }

  const datePart = d.toLocaleDateString("es-ES", { year:"numeric", month:"long", day:"numeric" });
  const timePart = d.toLocaleTimeString("es-ES", { hour:"2-digit", minute:"2-digit", hour12:false });
  el.textContent = `${datePart} · ${timePart}`;
}

/* =========================
   2) 스페인어 요일/카운트다운 라벨
========================= */
function renderCalendarHead(){
  const head = $("#calHead");
  if(!head) return;

  const map = {
    ko: ["일","월","화","수","목","금","토"],
    en: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
    es: ["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],
  };

  const labels = map[currentLang] || map.es;
  head.innerHTML = labels.map(l=>`<div>${l}</div>`).join("");
}

function renderCountdownLabels(){
  const d = $("#lblDays"), h = $("#lblHours"), m = $("#lblMins"), s = $("#lblSecs");
  if(d) d.textContent = t("cd_days");
  if(h) h.textContent = t("cd_hours");
  if(m) m.textContent = t("cd_mins");
  if(s) s.textContent = t("cd_secs");
}

/* =========================
   3) 지도: 정확도 개선 (KEY 있으면 v1/search)
========================= */
const GOOGLE_MAPS_EMBED_KEY = ""; // ✅ 있으면 여기에 넣기 (없으면 자동 fallback)

function buildEmbedURL(address){
  const q = encodeURIComponent(address);
  if(GOOGLE_MAPS_EMBED_KEY){
    return `https://www.google.com/maps/embed/v1/search?key=${GOOGLE_MAPS_EMBED_KEY}&q=${q}`;
  }
  return `https://www.google.com/maps?&q=${q}&output=embed`;
}

function initMapEmbed(){
  const ceremonyAddr = $("#addrCeremony");
  const receptionAddr = $("#addrReception");
  const ceremonyMap = $("#gmapCeremony");
  const receptionMap = $("#gmapReception");

  if(ceremonyAddr) ceremonyAddr.textContent = WEDDING.ceremony.address;
  if(receptionAddr) receptionAddr.textContent = WEDDING.reception.address;

  if(ceremonyMap) ceremonyMap.src = buildEmbedURL(WEDDING.ceremony.address);
  if(receptionMap) receptionMap.src = buildEmbedURL(WEDDING.reception.address);
}

/* =========================
   invitation addresses
========================= */
function applyInvitationAddresses(){
  const c = $("#metaCeremonyAddr");
  const r = $("#metaReceptionAddr");
  if(c) c.textContent = WEDDING.ceremony.address;
  if(r) r.textContent = WEDDING.reception.address;
}

/* =========================
   5) 계좌 노출 조건
   - EN/ES: groom만
   - KO: bride만
========================= */
function applyAccountVisibility(){
  const groom = $("#groomAcc");
  const bride = $("#brideAcc");
  if(!groom || !bride) return;

  if(currentLang === "ko"){
    groom.style.display = "none";
    bride.style.display = "";
    bride.open = true;
  }else{
    groom.style.display = "";
    bride.style.display = "none";
    groom.open = true;
  }
}

/* =========================
   Language
========================= */
function applyLanguage(lang){
  currentLang = (I18N[lang] ? lang : "es");
  localStorage.setItem("wedding_lang", currentLang);

  const titleEl = document.querySelector('title[data-i18n="title"]');
  if(titleEl) titleEl.textContent = t("title");

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(!key) return;
    if(el.tagName === "TITLE") return;
    el.innerHTML = t(key);
  });

  document.querySelectorAll(".lang-item[data-lang]").forEach(b=>{
    b.classList.toggle("is-active", b.getAttribute("data-lang") === currentLang);
  });

  const moreBtn = $("#galleryMore");
  if(moreBtn) moreBtn.textContent = t("galleryMore");

  // ✅ 언어별 UI 갱신
  formatWeddingDate();
  applyInvitationAddresses();
  renderCalendarHead();
  renderCountdownLabels();
  applyAccountVisibility();
  initCalendar(); // ✅ 캘린더 상단 날짜/렌더 재갱신
}

function initLanguageSwitcher(){
  const langBtn = $("#langBtn");
  const langMenu = $("#langMenu");
  if(langMenu) langMenu.inert = true; // ✅ 닫힌 상태에서 포커스 방지

  const toggleMenu = (force) => {
    if(!langMenu) return;
    const willOpen = (typeof force === "boolean") ? force : !langMenu.classList.contains("open");

    langMenu.classList.toggle("open", willOpen);
    langMenu.setAttribute("aria-hidden", willOpen ? "false" : "true");
    langMenu.inert = !willOpen;

    // ✅ 닫힐 때 내부 포커스가 남아 aria 경고 나는 것 방지
    if(!willOpen){
      if(document.activeElement && langMenu.contains(document.activeElement)){
        langBtn?.focus();
      }
    }
  };

  langBtn?.addEventListener("click", (e)=>{
    e.stopPropagation();
    toggleMenu();
  });

  document.querySelectorAll(".lang-item[data-lang]").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      e.stopPropagation();
      applyLanguage(btn.getAttribute("data-lang"));
      toggleMenu(false);
    });
  });

  document.addEventListener("click", ()=> toggleMenu(false));
  window.addEventListener("keydown", (e)=>{ if(e.key === "Escape") toggleMenu(false); });

  applyLanguage(currentLang);
}

/* =========================
   Copy buttons
========================= */
function initCopyButtons(){
  $$("[data-copy-btn]").forEach(btn=>{
    btn.addEventListener("click", async ()=>{
      const text = btn.getAttribute("data-copy-btn");
      try{
        await safeCopy(text);
        toast(t("toastCopy"));
      }catch{
        toast(t("toastCopyFail"));
      }
    });
  });
}

/* =========================
   Countdown
========================= */
function initCountdown(){
  const target = new Date(WEDDING.dateTimeLocal);
  if(Number.isNaN(target.getTime())) return;

  const elD = $("#cdDays");
  const elH = $("#cdHours");
  const elM = $("#cdMins");
  const elS = $("#cdSecs");
  const elText = $("#ddayText");

  function tick(){
    const now = new Date();
    let diff = target.getTime() - now.getTime();
    if(diff < 0) diff = 0;

    const sec = Math.floor(diff / 1000);
    const days = Math.floor(sec / 86400);
    const hours = Math.floor((sec % 86400) / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const secs = sec % 60;

    if(elD) elD.textContent = String(days);
    if(elH) elH.textContent = pad2(hours);
    if(elM) elM.textContent = pad2(mins);
    if(elS) elS.textContent = pad2(secs);

    if(elText){
      if(currentLang === "ko") elText.textContent = `결혼식까지 D-${days}`;
      else if(currentLang === "en") elText.textContent = `D-${days} days`;
      else elText.textContent = `Faltan D-${days} días`;
    }
  }

  tick();
  setInterval(tick, 1000);
}

/* =========================
   Calendar
   - KO: 2026.05.02
   - EN/ES: 02.05.2026
========================= */
function initCalendar(){
  const grid = $("#calGrid");
  const dateBig = $("#dateBig");
  if(!grid || !dateBig) return;

  const target = new Date(WEDDING.dateTimeLocal);
  if(Number.isNaN(target.getTime())) return;

  const y = target.getFullYear();
  const m = target.getMonth();
  const d = target.getDate();

  dateBig.textContent = (currentLang === "ko")
    ? formatDateYMD_KO(target)
    : formatDateDMY(target);

  const first = new Date(y, m, 1);
  const last = new Date(y, m + 1, 0);

  const firstDow = first.getDay();
  const daysInMonth = last.getDate();
  const lead = WEDDING.weekStartsOnSunday ? firstDow : (firstDow === 0 ? 6 : firstDow - 1);

  grid.innerHTML = "";

  for(let i=0; i<lead; i++){
    const cell = document.createElement("div");
    cell.textContent = "";
    cell.className = "cal-cell dim";
    grid.appendChild(cell);
  }

  for(let day=1; day<=daysInMonth; day++){
    const cell = document.createElement("div");
    cell.className = "cal-cell";
    cell.textContent = String(day);
    if(day === d) cell.classList.add("target");
    grid.appendChild(cell);
  }

  const total = lead + daysInMonth;
  const tail = (7 - (total % 7)) % 7;
  for(let i=0; i<tail; i++){
    const cell = document.createElement("div");
    cell.className = "cal-cell dim";
    cell.textContent = "";
    grid.appendChild(cell);
  }
}

/* =========================
   Gallery
========================= */
function initGallery(){
  const grid = $("#galleryGrid");
  const moreBtn = $("#galleryMore");
  const modal = $("#imgModal");
  const imgView = $("#imgView");
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const tapPrev = $("#tapPrev");
  const tapNext = $("#tapNext");
  const closeBtn = $("#closeBtn");

  const imgs = (WEDDING.gallery || []).filter(Boolean);
  if(!grid || !modal || !imgView || imgs.length === 0){
    if(moreBtn) moreBtn.hidden = true;
    return;
  }

  const PAGE_SIZE = 6;
  let shown = 0;

  function renderMore(){
    const nextCount = Math.min(imgs.length, shown + PAGE_SIZE);
    for(let idx = shown; idx < nextCount; idx++){
      const img = document.createElement("img");
      img.src = imgs[idx];
      img.alt = `gallery-${idx+1}`;
      img.loading = "lazy";
      img.dataset.idx = String(idx);
      grid.appendChild(img);
    }
    shown = nextCount;

    if(moreBtn){
      moreBtn.hidden = (shown >= imgs.length);
      moreBtn.textContent = t("galleryMore");
    }
  }

  grid.innerHTML = "";
  renderMore();

  moreBtn?.addEventListener("click", ()=>{
    if(shown >= imgs.length){ toast(t("toastNoMore")); return; }
    renderMore();
  });

  let current = 0;

  const openAt = (idx)=>{
    current = (idx + imgs.length) % imgs.length;
    imgView.src = imgs[current];
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const close = ()=>{
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  const next = ()=> openAt(current + 1);
  const prev = ()=> openAt(current - 1);

  grid.addEventListener("click", (e)=>{
    const tEl = e.target;
    if(!(tEl instanceof HTMLImageElement)) return;
    openAt(Number(tEl.dataset.idx || "0"));
  });

  prevBtn?.addEventListener("click", (e)=>{ e.stopPropagation(); prev(); });
  nextBtn?.addEventListener("click", (e)=>{ e.stopPropagation(); next(); });
  tapPrev?.addEventListener("click", (e)=>{ e.stopPropagation(); prev(); });
  tapNext?.addEventListener("click", (e)=>{ e.stopPropagation(); next(); });

// ✅ 배경(오버레이) 클릭만 닫기: modal 자체가 아니라 "modal 배경"을 클릭했을 때만
modal.addEventListener("click", (e)=>{
  if(e.target === modal) close();
});

// ✅ 내부 요소 클릭은 닫히지 않게
imgView.addEventListener("click", (e)=> e.stopPropagation());
prevBtn?.addEventListener("click", (e)=>{ e.stopPropagation(); prev(); });
nextBtn?.addEventListener("click", (e)=>{ e.stopPropagation(); next(); });
tapPrev?.addEventListener("click", (e)=>{ e.stopPropagation(); prev(); });
tapNext?.addEventListener("click", (e)=>{ e.stopPropagation(); next(); });

// ✅ 닫기 버튼
closeBtn?.addEventListener("click", (e)=>{ e.stopPropagation(); close(); });

  window.addEventListener("keydown", (e)=>{
    if(!modal.classList.contains("open")) return;
    if(e.key === "Escape") close();
    if(e.key === "ArrowLeft") prev();
    if(e.key === "ArrowRight") next();
  });

  let sx = null;
  modal.addEventListener("touchstart", (e)=>{
    if(!modal.classList.contains("open")) return;
    sx = e.touches[0].clientX;
  }, {passive:true});

  modal.addEventListener("touchend", (e)=>{
    if(sx == null) return;
    const ex = e.changedTouches[0].clientX;
    const dx = ex - sx;
    sx = null;
    if(Math.abs(dx) < 40) return;
    if(dx < 0) next(); else prev();
  }, {passive:true});
}

/* =========================
   BGM (default ON attempt)
========================= */
function initBGM(){
  const btn = $("#bgmToggle");
  const state = $("#bgmState");
  if(!btn) return;

  if(!WEDDING.bgmSrc){
    btn.disabled = true;
    btn.style.opacity = ".6";
    btn.textContent = "♪";
    btn.setAttribute("aria-pressed","false");
    if(state) state.textContent = "OFF";
    return;
  }

  const audio = new Audio(WEDDING.bgmSrc);
  audio.loop = true;
  audio.volume = 0.35;

  const setUI = (on)=>{
    btn.textContent = on ? "♫" : "♪";
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    if(state) state.textContent = on ? "ON" : "OFF";
  };

  const tryAutoPlay = async ()=>{
    try{
      await audio.play();
      setUI(true);
      toast(t("toastBgmOn"));
    }catch{
      setUI(false);
      toast(t("toastBgmNeedTap"));
    }
  };

  setUI(false);
  tryAutoPlay();

  btn.addEventListener("click", async ()=>{
    try{
      if(audio.paused){
        await audio.play();
        setUI(true);
        toast(t("toastBgmOn"));
      }else{
        audio.pause();
        setUI(false);
        toast(t("toastBgmOff"));
      }
    }catch{
      toast(t("toastBgmNeedTap"));
    }
  });

  const retryOnce = async ()=>{
    if(!audio.paused) return;
    await tryAutoPlay();
    window.removeEventListener("pointerdown", retryOnce);
    window.removeEventListener("touchstart", retryOnce);
  };
  window.addEventListener("pointerdown", retryOnce, { once:true });
  window.addEventListener("touchstart", retryOnce, { once:true });
}

/* =========================
   Video
========================= */
function initVideo(){
  const v = $("#weddingVideo");
  if(!v) return;

  if(WEDDING.videoSrc){
    v.src = WEDDING.videoSrc;
  }else{
    v.style.display = "none";
  }
  v.playsInline = true;
}

/* =========================
   RSVP
========================= */
function initRSVP(){
  const btn = $("#rsvpBtn");
  const modal = $("#rsvpModal");
  const closeBtn = $("#rsvpCloseBtn");
  const form = $("#rsvpForm");
  const msg = $("#rsvpMsg");
  const submitBtn = $("#rsvpSubmitBtn");

  if(!btn || !modal || !closeBtn || !form) return;

  const open = ()=>{
    if(!WEDDING.rsvpEndpoint){
      toast(t("toastNeedRSVP"));
      return;
    }
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";

    // 첫 입력 포커스
    const first = form.querySelector('input[name="name"]');
    first?.focus();
  };

  const close = ()=>{
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
    if(msg){ msg.style.display = "none"; msg.textContent = ""; }
  };

  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", (e)=>{ e.stopPropagation(); close(); });

  // 배경 클릭 닫기
  modal.addEventListener("click", (e)=>{
    if(e.target === modal) close();
  });

  // ESC 닫기
  window.addEventListener("keydown", (e)=>{
    if(!modal.classList.contains("open")) return;
    if(e.key === "Escape") close();
  });

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    if(!WEDDING.rsvpEndpoint){
      toast(t("toastNeedRSVP"));
      return;
    }

    const fd = new FormData(form);

    // 허니팟: 봇이 채우면 무시
    if((fd.get("website") || "").toString().trim() !== "") return;

    const payload = {
      name: (fd.get("name") || "").toString().trim(),
      attend: (fd.get("attend") || "").toString().trim(),
      count: Number(fd.get("count") || 1),
      phone: (fd.get("phone") || "").toString().trim(),
      memo: (fd.get("memo") || "").toString().trim(),
      lang: currentLang,
      userAgent: navigator.userAgent,
      page: location.href
    };

    // 최소 검증
    if(!payload.name || !payload.attend || !payload.count){
      if(msg){
        msg.textContent = "Please fill required fields.";
        msg.style.display = "block";
      }
      return;
    }

    try{
      submitBtn && (submitBtn.disabled = true);

      const res = await fetch(WEDDING.rsvpEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(()=> ({}));

      if(res.ok && data.ok){
        form.reset();
        toast(t("toastRsvpDone"));
        close();
      }else{
        toast(t("toastRsvpFail"));
        if(msg){
          msg.textContent = t("toastRsvpFail");
          msg.style.display = "block";
        }
      }
    }catch(err){
      toast(t("toastRsvpFail"));
      if(msg){
        msg.textContent = t("toastRsvpFail");
        msg.style.display = "block";
      }
    }finally{
      submitBtn && (submitBtn.disabled = false);
    }
  });
}

/* =========================
   Boot (중복 호출 제거)
========================= */
document.addEventListener("DOMContentLoaded", ()=>{
  initLanguageSwitcher();   // ✅ 여기서 applyLanguage가 캘린더/라벨/계좌까지 갱신
  initCopyButtons();
  initMapEmbed();
  initCountdown();
  initGallery();
  initBGM();
  initVideo();
  initRSVP();
});