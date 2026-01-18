/* =========================
   CONFIG
========================= */
const WEDDING = {
  dateTimeLocal: "2026-05-02T12:30:00",

  ceremony: { address: "Carretera Subida SantuarioS N, 46400 Cullera, Valencia, España" },
  reception: { address: "Av. Joanot Martorell, 16, 46408 Faro de Cullera, Valencia, España" },

  // Google Apps Script 웹앱 URL
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycbwnyWkqZDZ9EC4gZwy8GBVn0ALTE9uZ5WG2A4EcNqEen-JjXEfnMCebHuD-5OgAqS2yvA/exec",

  bgmSrc: "./assets/audio/A Thousand Years.mp3",
  videoSrc: "./assets/video/0502.mp4",

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
    reception: "피로연",
    calendar: "CALENDAR",
    dday: "D-DAY",
    ddayText: "결혼식까지 --일",
    gallery: "GALLERY",
    galleryHint: "사진을 누르면 크게 볼 수 있어요. (좌/우 탭 또는 스와이프)",
    galleryMore: "더 보기",
    video: "VIDEO",
    location: "LOCATION",
    rsvp: "RSVP",
    rsvpHint: "참석 여부를 미리 알려주시면 감사하겠습니다.",
    rsvpBtn: "참석 여부 전달하기",
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
    toastCopyFail: "복사에 실패했어요",
    toastNeedRSVP: "RSVP 설정이 아직 완료되지 않았어요.",
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
    rsvpSubmitting: "전송 중...",
    rsvpPrivacy: "연락처는 예식 안내 및 확인용으로만 사용 후, 일정 기간 내 파기됩니다.",
    rsvpName: "이름",
    rsvpCount: "인원 수",
    rsvpPhone: "연락처(선택)",
    rsvpMemo: "메모(선택)",
    toastRsvpDone: "제출 완료! 감사합니다 💛",
    toastRsvpFail: "저장에 실패했어요. 다시 시도해주세요.",
    toastRsvpRequired: "필수 항목을 입력해주세요.",
  },

  en: {
    title: "Wedding Invitation",
    invitationTitle: "Wedding Invitation",
    invitationBody:
      `Two hearts that crossed time and distance<br/>
       have finally arrived here, hand in hand.<br/>
       We would be truly grateful<br/>
       if you could celebrate this special moment with us.`,
    ceremony: "Ceremony",
    reception: "Reception (After-party)",
    calendar: "CALENDAR",
    dday: "COUNTDOWN",
    ddayText: "-- days to go",
    gallery: "GALLERY",
    galleryHint: "Tap a photo to view it larger. (Tap sides / swipe)",
    galleryMore: "Load more",
    video: "VIDEO",
    location: "LOCATION",
    rsvp: "RSVP",
    rsvpHint: "Kindly let us know whether you’ll be able to attend.",
    rsvpBtn: "Send RSVP",
    gift: "GIFT",
    groomAccTitle: "Groom's account",
    brideAccTitle: "Bride's account",
    groomHolder: "Account holder (Groom)",
    brideHolder: "Account holder (Bride)",
    copyBtn: "Copy",
    closing1: "Thank you for being part of our new beginning.",
    closing2: "With love and gratitude, we’ll cherish your warm wishes.",
    closingSign: "Jacob & 성경",
    toastCopy: "Copied",
    toastCopyFail: "Copy failed",
    toastNeedRSVP: "RSVP isn’t available yet.",
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
    rsvpSubmitting: "Sending...",
    rsvpPrivacy: "Your phone number will be used only for confirmation and will be deleted later.",
    rsvpName: "Name",
    rsvpCount: "Number of guests",
    rsvpPhone: "Phone (optional)",
    rsvpMemo: "Message (optional)",
    toastRsvpDone: "Submitted! Thank you 💛",
    toastRsvpFail: "Save failed. Please try again.",
    toastRsvpRequired: "Please fill in the required fields.",
  },

  es: {
    title: "Invitación de boda",
    invitationTitle: "Invitación de boda",
    invitationBody:
      `Dos corazones que han cruzado el tiempo y la distancia<br/>
       han llegado hasta aquí unidos.<br/>
       Nos haría mucha ilusión<br/>
       que compartieras este momento tan especial con nosotros.`,
    ceremony: "Ceremonia",
    reception: "Recepción",
    calendar: "CALENDARIO",
    dday: "CUENTA ATRÁS",
    ddayText: "Faltan -- días",
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
    toastNeedRSVP: "La confirmación aún no está disponible.",
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
    rsvpAttendNo: "No podré asistir",
    rsvpSubmit: "Enviar",
    rsvpSubmitting: "Enviando...",
    rsvpPrivacy: "El teléfono se usará solo para confirmar la asistencia y se eliminará más adelante.",
    rsvpName: "Nombre",
    rsvpCount: "Número de personas",
    rsvpPhone: "Teléfono (opcional)",
    rsvpMemo: "Mensaje (opcional)",
    toastRsvpDone: "¡Enviado! Gracias 💛",
    toastRsvpFail: "Error al guardar. Inténtalo de nuevo.",
    toastRsvpRequired: "Por favor, completa los campos obligatorios.",
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
   2) 요일/카운트다운 라벨
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
   3) 지도
========================= */
const GOOGLE_MAPS_EMBED_KEY = "";

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

function applyInvitationAddresses(){
  const c = $("#metaCeremonyAddr");
  const r = $("#metaReceptionAddr");
  if(c) c.textContent = WEDDING.ceremony.address;
  if(r) r.textContent = WEDDING.reception.address;
}

/* =========================
   5) 계좌 노출 조건
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(!key) return;
    el.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll(".lang-item[data-lang]").forEach(b=>{
    b.classList.toggle("is-active", b.getAttribute("data-lang") === currentLang);
  });

  const moreBtn = $("#galleryMore");
  if(moreBtn) moreBtn.textContent = t("galleryMore");

  formatWeddingDate();
  applyInvitationAddresses();
  renderCalendarHead();
  renderCountdownLabels();
  applyAccountVisibility();
  initCalendar();
}

function initLanguageSwitcher(){
  const langBtn = $("#langBtn");
  const langMenu = $("#langMenu");
  if(langMenu) langMenu.inert = true;

  const toggleMenu = (force) => {
    if(!langMenu) return;
    const willOpen = (typeof force === "boolean") ? force : !langMenu.classList.contains("open");

    langMenu.classList.toggle("open", willOpen);
    langMenu.setAttribute("aria-hidden", willOpen ? "false" : "true");
    langMenu.inert = !willOpen;

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
      if(currentLang === "ko") elText.textContent = `결혼식까지 D-${days}일`;
      else if(currentLang === "en") elText.textContent = `${days} days to go`;
      else elText.textContent = `Faltan ${days} días`;
    }
  }

  tick();
  setInterval(tick, 1000);
}

/* =========================
   Calendar
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

  modal.addEventListener("click", (e)=>{
    if(e.target === modal) close();
  });

  imgView.addEventListener("click", (e)=> e.stopPropagation());
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
   BGM
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
   Video (모바일 안정화)
========================= */
function initVideo(){
  const v = $("#weddingVideo");
  if(!v) return;

  if(!WEDDING.videoSrc){
    v.style.display = "none";
    return;
  }

  v.setAttribute("playsinline", "");
  v.setAttribute("webkit-playsinline", "");
  v.playsInline = true;

  // src 설정 후 load() 호출 (모바일에서 “안 뜸” 완화)
  v.src = WEDDING.videoSrc;
  v.load();

  // (선택) iOS에서 가끔 첫 재생이 막힐 때 대비: 사용자 탭 이후 다시 load
  const retryLoadOnce = ()=>{
    try { v.load(); } catch {}
    window.removeEventListener("touchstart", retryLoadOnce);
    window.removeEventListener("pointerdown", retryLoadOnce);
  };
  window.addEventListener("touchstart", retryLoadOnce, { once:true });
  window.addEventListener("pointerdown", retryLoadOnce, { once:true });
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

  if(!btn || !modal || !closeBtn || !form || !submitBtn) return;

  const attendSelect = form.querySelector('select[name="attend"]');
  const countInput  = form.querySelector('input[name="count"]');

  const open = ()=>{
    if(!WEDDING.rsvpEndpoint){
      toast(t("toastNeedRSVP"));
      return;
    }

    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";

    // 메시지 초기화
    if(msg){
      msg.style.display = "none";
      msg.textContent = "";
    }

    form.querySelector('input[name="name"]')?.focus();

    if(attendSelect && countInput){
      if(attendSelect.value === "no"){
        countInput.value = "0";
        countInput.disabled = true;
      }else{
        countInput.disabled = false;
        if(Number(countInput.value) < 1) countInput.value = "1";
      }
    }
  };

  const close = ()=>{
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
    if(msg){
      msg.style.display = "none";
      msg.textContent = "";
    }
  };

  btn.addEventListener("click", open);
  closeBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    close();
  });

  modal.addEventListener("click", (e)=>{
    if(e.target === modal) close();
  });

  window.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && modal.classList.contains("open")){
      close();
    }
  });

  if(attendSelect && countInput){
    attendSelect.addEventListener("change", ()=>{
      if(attendSelect.value === "no"){
        countInput.value = "0";
        countInput.disabled = true;
      }else{
        countInput.disabled = false;
        if(Number(countInput.value) < 1) countInput.value = "1";
      }
    });
  }

  form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    if(!WEDDING.rsvpEndpoint){
      toast(t("toastNeedRSVP"));
      return;
    }

    const fd = new FormData(form);

    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = t("rsvpSubmitting");

    // honeypot
    if((fd.get("website") || "").toString().trim() !== ""){
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    const name   = (fd.get("name") || "").toString().trim();
    const attend = (fd.get("attend") || "").toString().trim();
    const phone  = (fd.get("phone") || "").toString().trim();
    const memo   = (fd.get("memo") || "").toString().trim();

    const rawCount = Number(fd.get("count"));
    const count =
      attend === "no"
        ? 0
        : (Number.isFinite(rawCount) && rawCount > 0 ? rawCount : 1);

    if(!name || !attend || (attend !== "no" && count < 1)){
      toast(t("toastRsvpRequired"));
      if(msg){
        msg.textContent = t("toastRsvpRequired");
        msg.style.display = "block";
      }
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    const payload = {
      name,
      attend,
      count,
      phone,
      memo,
      lang: currentLang,
      userAgent: navigator.userAgent,
      page: location.href
    };

    try{
      const controller = new AbortController();
      const timer = setTimeout(()=> controller.abort(), 10000);

      const res = await fetch(WEDDING.rsvpEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timer);

      let data = {};
      try{ data = await res.json(); }catch{}

      if(res.ok && data.ok){
        form.reset();
        toast(t("toastRsvpDone"));
        close();
      }else{
        throw new Error("server error");
      }
    }catch(err){
      toast(t("toastRsvpFail"));
      if(msg){
        msg.textContent = t("toastRsvpFail");
        msg.style.display = "block";
      }
    }finally{
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}

/* =========================
   Boot
========================= */
document.addEventListener("DOMContentLoaded", ()=>{
  initLanguageSwitcher();
  initCopyButtons();
  initMapEmbed();
  initCountdown();
  initGallery();
  initBGM();
  initVideo();
  initRSVP();
});