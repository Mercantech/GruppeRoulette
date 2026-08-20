const STORAGE_KEY = "gruppe-roulette-v1";
const demoNames = [
  "Alma", "Malik", "Freja", "Noah", "Clara", "Elias", "Asta", "Oscar", "Sofia",
  "Viggo", "Luna", "William", "Ida", "Adam", "Karla", "August", "Aya", "Mads"
];
const colors = ["#ffd84d", "#ff4fa3", "#8a36ff", "#54e3c2", "#ff815a", "#7bb7ff"];
const slotEmojis = ["🍒", "⭐", "💎", "🔥", "👾", "🦄", "🍀", "🎰", "⚡", "🌈"];
const groupNameStarts = [
  "Turbo", "Disco", "Kage", "Super", "Ninja", "Laser", "Måne", "Bølle", "Vaffel", "Glitter",
  "Samba", "Torden", "Fjolle", "Raket", "Banan", "Kakao", "Mega", "Pølse", "Konfetti", "HokusPokus",
  "Rum", "Fløde", "Karamel", "Chili", "Skumfidus", "Gummi", "Dunder", "Stjerne", "Kanon", "Marmelade",
  "Panda", "Kæmpe", "Mini", "Mester", "Spion", "Sølv", "Guld", "Regnbue", "Drømme", "Krudt",
  "Snegle", "Popcorn", "Nacho", "Ananas", "Mango", "Kokos", "Peber", "Pandekage", "Marcipan", "Lakridse",
  "Hurlumhej", "Trylle", "Himmel", "Storm", "Lyn", "Flamme", "Is", "Boble", "Klatre", "Kramme",
  "Hoppe", "Snurre", "Brøle", "Grine", "Danse", "Klods", "Magi", "Champagne", "Morgenhår", "Sokke"
];
const groupNameEnds = [
  "Pingvinerne", "Kartoflerne", "Troldene", "Torskerne", "Kometterne", "Kænguruerne", "Næsehornene",
  "Banditterne", "Bæverne", "Vikingerne", "Guruerne", "Girafferne", "Robotterne", "Riddere", "Dovendyrene",
  "Kaptajnerne", "Alpakkaerne", "Dragerne", "Detektiverne", "Enhjørningerne", "Dinosaurerne", "Hamsterne",
  "Lamaerne", "Oddere", "Pandaerne", "Vaskebjørnene", "Hajerne", "Blæksprutterne", "Flamingoerne", "Uglerne",
  "Ninjaerne", "Piraterne", "Astronauterne", "Superheltene", "Tryllekunstnerne", "Professorerne", "Opfinderne",
  "Ballademagerne", "Verdensmestrene", "Stjerneskuddene", "Raketterne", "Kanonkuglerne", "Klodserne", "Kagerne",
  "Vaflerne", "Muffinsene", "Donutsene", "Nachosene", "Skumfiduserne", "Sokkerne", "Gummistøvlerne",
  "Hatte", "Koste", "Gryderne", "Tekopperne", "Sofapuderne", "Diskokuglerne", "Megafonerne", "Banjoerne",
  "Kazooerne", "Trompeterne", "Akrobaterne", "Genierne", "Legenderne", "Mysterierne", "Oraklerne", "Goblinsene",
  "Grævlingerne", "Pindsvinene", "Søløverne", "Krokodillerne", "Papegøjerne", "Natteravnene"
];
const celebrations = [
  { id: "monster", kicker: "UHYRET ER LØS!", title: "MONSTER GROUP!", subtitle: "Et hold med gigantiske kræfter", voice: "Monster Group!", lang: "en-US", color: "#78ff65", accent: "#8a36ff", symbols: ["◆", "✹", "⚡", "⬢"], notes: [110, 82, 147, 220] },
  { id: "epic", kicker: "LEGENDARISK TRÆKNING", title: "EPIC GROUP!", subtitle: "Det her bliver stort", voice: "Epic Group!", lang: "en-US", color: "#ffd84d", accent: "#ff6b35", symbols: ["★", "✦", "✺", "⚡"], notes: [392, 523, 659, 784] },
  { id: "wizard", kicker: "MAGISK FORSTYRRELSE!", title: "Kasper den mægtige troldmand er på spil!", subtitle: "Maskinen sitrer af mystiske kræfter...", voice: "Kasper den mægtige troldmand er på spil!", lang: "da-DK", color: "#d59bff", accent: "#8a36ff", symbols: ["✦", "★", "✧", "☾", "✺"], notes: [220, 277, 330, 440, 554, 659, 880] },
  { id: "disco", kicker: "LYSET RAMMER DANSEGULVET", title: "DISCO DREAM TEAM!", subtitle: "Groove-niveauet er kritisk højt", voice: "Disco Dream Team!", lang: "en-US", color: "#ff4fa3", accent: "#43e8ff", symbols: ["●", "✦", "◆", "♫"], notes: [262, 330, 392, 523] },
  { id: "space", kicker: "OPSENDELSE GODKENDT", title: "GALACTIC GROUP!", subtitle: "Næste stop: en helt anden galakse", voice: "Galactic Group!", lang: "en-US", color: "#7bb7ff", accent: "#8a36ff", symbols: ["✦", "☄", "◉", "⋆"], notes: [196, 294, 440, 587] },
  { id: "viking", kicker: "VALHALLA KALDER", title: "VIKING VICTORY!", subtitle: "Et hold smedet i torden og triumf", voice: "Viking Victory!", lang: "en-US", color: "#ff9f43", accent: "#e74c3c", symbols: ["ᚱ", "ᚦ", "⚔", "ᛉ"], notes: [147, 196, 220, 294] },
  { id: "ninja", kicker: "LYDLØS. HURTIG. DØDBRINGENDE.", title: "NINJA SQUAD!", subtitle: "Ingen så dem komme", voice: "Ninja Squad!", lang: "en-US", color: "#ff4567", accent: "#6d28d9", symbols: ["✦", "╱", "◆", "✧"], notes: [330, 247, 494, 370] },
  { id: "royal", kicker: "FANFAREN LYDER", title: "ROYAL GROUP!", subtitle: "Kronen sidder perfekt", voice: "Royal Group!", lang: "en-US", color: "#ffe082", accent: "#b388ff", symbols: ["♛", "✦", "♜", "♦"], notes: [523, 659, 784, 1047] },
  { id: "fire", kicker: "TEMPERATUREN STIGER", title: "FIRE SQUAD!", subtitle: "Det her hold er brandvarmt", voice: "Fire Squad!", lang: "en-US", color: "#ff6333", accent: "#ffd84d", symbols: ["▲", "✹", "◆", "⚡"], notes: [175, 233, 349, 466] },
  { id: "ice", kicker: "ABSOLUT NULPUNKT", title: "ICE LEGENDS!", subtitle: "Iskolde nerver. Knivskarpt hold.", voice: "Ice Legends!", lang: "en-US", color: "#8ff5ff", accent: "#4b7bff", symbols: ["❄", "✦", "◇", "❅"], notes: [659, 587, 494, 392] },
  { id: "jungle", kicker: "JUNGLEN VÅGNER", title: "WILD GROUP!", subtitle: "Det bliver helt ustyrligt", voice: "Wild Group!", lang: "en-US", color: "#8ee34d", accent: "#ffc83d", symbols: ["❋", "◆", "✦", "♣"], notes: [196, 262, 330, 392] },
  { id: "jackpot", kicker: "ALLE LAMPER BLINKER", title: "MEGA JACKPOT GROUP!", subtitle: "Maskinen har talt", voice: "Mega Jackpot Group!", lang: "en-US", color: "#ffd84d", accent: "#ff4fa3", symbols: ["★", "7", "◆", "✦"], notes: [523, 659, 784, 988, 1175] }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const elements = {
  spin: $("#spinButton"),
  machine: $("#slotMachine"),
  lever: $("#lever"),
  status: $("#machineStatus"),
  remainingCount: $("#remainingCount"),
  peopleBadge: $("#peopleBadge"),
  groupsBadge: $("#groupsBadge"),
  nameList: $("#nameList"),
  groupList: $("#groupList"),
  namesEmpty: $("#namesEmpty"),
  groupsEmpty: $("#groupsEmpty"),
  progressText: $("#progressText"),
  progressPercent: $("#progressPercent"),
  progressBar: $("#progressBar"),
  dialog: $("#addDialog"),
  namesInput: $("#namesInput"),
  toast: $("#toast"),
  winnerToast: $("#winnerToast"),
  winnerToastNames: $("#winnerToastNames"),
  winnerToastGroupName: $("#winnerToastGroupName"),
  magicEvent: $("#magicEvent"),
  magicBurst: $("#magicBurst"),
  effectKicker: $("#effectKicker"),
  effectTitle: $("#effectTitle"),
  effectSubtitle: $("#effectSubtitle"),
  effectRuneLeft: $("#effectRuneLeft"),
  effectRuneRight: $("#effectRuneRight"),
  overview: $("#fullOverview"),
  overviewContent: $("#overviewContent"),
  overviewButton: $("#overviewButton"),
  hackerOverlay: $("#hackerOverlay"),
  hackerTarget: $("#hackerTarget"),
  hackerMembers: $("#hackerMembers"),
  hackerNewName: $("#hackerNewName"),
  canvas: $("#confettiCanvas"),
  soundToggle: $("#soundToggle")
};

let state = loadState();
let isSpinning = false;
let soundEnabled = true;
let audioContext = null;
let toastTimer;
let winnerTimer;
let magicTimer;
let leverPointer = null;
let suppressLeverClick = false;
let pendingCelebrationId = null;
let isHacking = false;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.remaining) && Array.isArray(saved.groups)) {
      saved.groups = saved.groups.map((group, index) => Array.isArray(group)
        ? { id: makeId(), members: group, name: `JackpotHoldet ${saved.groups.length - index}`, round: 1 }
        : { ...group, id: group.id || makeId(), round: group.round || 1 }
      );
      saved.round ||= Math.max(1, ...saved.groups.map((group) => group.round));
      saved.roster ||= [...new Set([...saved.remaining, ...saved.groups.flatMap((group) => group.members)])];
      saved.initialCount = saved.roster.length;
      saved.leverPullCount ||= 0;
      delete saved.kasperCelebrated;
      return saved;
    }
  } catch (_) {}
  return { remaining: [], groups: [], roster: [], round: 1, initialCount: 0, leverPullCount: 0 };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function initials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function hashColor(name) {
  const hash = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function makeId() {
  return globalThis.crypto?.randomUUID?.() || `group-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function render() {
  const left = state.remaining.length;
  const total = state.roster.length;
  const used = Math.max(0, total - left);
  const percent = total ? Math.round((used / total) * 100) : 0;

  elements.remainingCount.textContent = left;
  elements.peopleBadge.textContent = left;
  elements.groupsBadge.textContent = state.groups.length;
  elements.progressText.textContent = total ? `${used} af ${total} navne trukket` : "Ingen navne endnu";
  elements.progressPercent.textContent = `${percent}%`;
  elements.progressBar.style.width = `${percent}%`;
  const hasIncompleteGroup = left > 0 && left < 3;
  if (left > 0) elements.machine.classList.remove("emoji-mode");
  elements.spin.disabled = hasIncompleteGroup || isSpinning;
  elements.lever.setAttribute("aria-disabled", String(hasIncompleteGroup || isSpinning));
  elements.status.textContent = left >= 3 ? "MASKINEN ER KLAR" : left > 0 ? "MANGLER NAVNE" : "EMOJI MODE";
  elements.spin.querySelector(".spin-label").textContent = left === 0 ? "SPIN EMOJIS" : "TRÆK 3 NAVNE";
  elements.namesEmpty.hidden = left > 0;
  elements.groupsEmpty.hidden = state.groups.length > 0;

  elements.nameList.innerHTML = state.remaining.map((name, index) => `
    <div class="name-row" style="animation-delay:${Math.min(index * 18, 180)}ms">
      <span class="avatar" style="--avatar:${hashColor(name)}">${escapeHtml(initials(name))}</span>
      <strong title="${escapeHtml(name)}">${escapeHtml(name)}</strong>
      <button class="remove-name" type="button" data-remove="${index}" aria-label="Fjern ${escapeHtml(name)}">×</button>
    </div>
  `).join("");

  elements.groupList.innerHTML = state.groups.map((group, index) => `
    <article class="group-card" style="--card-color:${colors[index % colors.length]};animation-delay:${index * 45}ms">
      <span class="group-round">Runde ${group.round}</span>
      <div class="group-title"><strong>${escapeHtml(group.name)}</strong><span>Gruppe ${state.groups.length - index}</span></div>
      <div class="group-members">${group.members.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div>
      <button class="reroll-name" type="button" data-reroll="${escapeHtml(group.id)}" aria-label="Lav et nyt navn til ${escapeHtml(group.name)}">↻ Nyt navn</button>
    </article>
  `).join("");
  renderFullOverview();
}

function renderFullOverview() {
  if (!state.groups.length) {
    elements.overviewContent.innerHTML = `
      <div class="overview-empty">
        <div><span aria-hidden="true">♠</span><strong>Ingen grupper endnu</strong><p>Træk den første gruppe for at fylde overblikket.</p></div>
      </div>`;
    return;
  }

  const rounds = [...new Set(state.groups.map((group) => group.round))].sort((a, b) => a - b);
  elements.overviewContent.innerHTML = rounds.map((round) => {
    const groups = state.groups.filter((group) => group.round === round).reverse();
    const columns = idealOverviewColumns(groups.length);
    const maxWidth = Math.min(1500, columns * 430 + Math.max(0, columns - 1) * 13);
    return `
      <section class="overview-round" aria-labelledby="overviewRound${round}">
        <div class="overview-round-heading">
          <h3 id="overviewRound${round}">Runde ${round}</h3>
          <span>${groups.length} ${groups.length === 1 ? "gruppe" : "grupper"}</span>
        </div>
        <div class="overview-grid" style="--overview-columns:${columns};--overview-max-width:${maxWidth}px">
          ${groups.map((group, index) => `
            <article class="overview-card" style="--card-color:${colors[(round + index - 1) % colors.length]};animation-delay:${index * 35}ms">
              <span class="overview-card-number">GRUPPE ${index + 1}</span>
              <div class="overview-card-title">
                <h4>${escapeHtml(group.name)}</h4>
                <button class="reroll-name icon-reroll" type="button" data-reroll="${escapeHtml(group.id)}" aria-label="Lav et nyt navn til ${escapeHtml(group.name)}">↻</button>
              </div>
              <div class="overview-members">${group.members.map((name) => `<span>${escapeHtml(name)}</span>`).join("")}</div>
            </article>
          `).join("")}
        </div>
      </section>`;
  }).join("");
}

function idealOverviewColumns(groupCount) {
  if (groupCount <= 1) return 1;

  let bestColumns = 1;
  let bestScore = Number.POSITIVE_INFINITY;
  const maxColumns = Math.min(groupCount, 5);

  for (let columns = 1; columns <= maxColumns; columns++) {
    const rows = Math.ceil(groupCount / columns);
    const emptySlots = columns * rows - groupCount;
    const aspectRatio = columns / rows;
    const portraitPenalty = columns < rows ? 0.8 : 0;
    const score = emptySlots * 1.15 + Math.abs(aspectRatio - 1.6) + portraitPenalty;

    if (score < bestScore) {
      bestScore = score;
      bestColumns = columns;
    }
  }

  return bestColumns;
}

function toggleFullOverview(force) {
  const shouldOpen = typeof force === "boolean" ? force : !elements.overview.classList.contains("open");
  elements.overview.classList.toggle("open", shouldOpen);
  elements.overview.setAttribute("aria-hidden", String(!shouldOpen));
  elements.overviewButton.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("overview-open", shouldOpen);
  if (shouldOpen) {
    renderFullOverview();
    $("#closeOverviewButton").focus();
  } else {
    elements.overviewButton.focus();
  }
}

function shatterGroupCard(card, groupId) {
  if (isHacking) return;
  const group = state.groups.find((candidate) => candidate.id === groupId);
  if (!group) return;
  isHacking = true;

  const rect = card.getBoundingClientRect();
  const layer = document.createElement("div");
  layer.className = "shatter-layer";
  const rows = 3;
  const columns = 4;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const piece = card.cloneNode(true);
      piece.removeAttribute("id");
      piece.querySelectorAll("button").forEach((button) => button.remove());
      piece.classList.add("shatter-piece");
      piece.style.left = `${rect.left}px`;
      piece.style.top = `${rect.top}px`;
      piece.style.width = `${rect.width}px`;
      piece.style.height = `${rect.height}px`;
      piece.style.minHeight = "0";
      piece.style.clipPath = `inset(${row * 100 / rows}% ${(columns - column - 1) * 100 / columns}% ${(rows - row - 1) * 100 / rows}% ${column * 100 / columns}%)`;
      const burstX = (column - 1.5) * 28 + (Math.random() - .5) * 35;
      const rotation = (Math.random() - .5) * 240;
      piece.style.setProperty("--burst-x", `${burstX}px`);
      piece.style.setProperty("--fall-x", `${burstX * 2.2}px`);
      piece.style.setProperty("--burst-y", `${-35 - Math.random() * 45}px`);
      piece.style.setProperty("--piece-rotation", `${rotation}deg`);
      piece.style.setProperty("--piece-rotation-small", `${rotation * .12}deg`);
      piece.style.setProperty("--piece-delay", `${Math.random() * .16}s`);
      piece.style.setProperty("--origin-x", `${(column + .5) * 25}%`);
      piece.style.setProperty("--origin-y", `${(row + .5) * 33.33}%`);
      layer.appendChild(piece);
    }
  }

  card.style.visibility = "hidden";
  document.body.appendChild(layer);
  playHackSound();
  setTimeout(() => showHackerPrompt(group), 620);
  setTimeout(() => {
    layer.remove();
    card.style.visibility = "";
  }, 1900);
}

function showHackerPrompt(group) {
  const previousName = group.name;
  group.name = createGroupName();
  if (group.name === previousName) group.name = createGroupName();
  saveState();
  render();

  elements.hackerTarget.textContent = `> GAMMEL IDENTITET: RUNDE ${group.round} / ${previousName.toLocaleUpperCase("da")}`;
  elements.hackerMembers.textContent = `> DATA UDTRUKKET: ${group.members.join(" · ")}`;
  elements.hackerNewName.textContent = `> NYT ALIAS: ${group.name.toLocaleUpperCase("da")}`;
  elements.hackerOverlay.setAttribute("aria-hidden", "false");
  elements.hackerOverlay.classList.add("show");
  setTimeout(() => $("#terminalExitButton").focus(), 350);
}

function closeHackerPrompt() {
  elements.hackerOverlay.classList.remove("show");
  setTimeout(() => elements.hackerOverlay.setAttribute("aria-hidden", "true"), 320);
  isHacking = false;
}

function addNames() {
  const names = elements.namesInput.value
    .split(/[\n,;]+/)
    .map((name) => name.trim().replace(/\s+/g, " "))
    .filter(Boolean);

  if (!names.length) {
    showToast("Skriv mindst ét navn");
    return;
  }

  const existing = new Set(state.roster.map((name) => name.toLocaleLowerCase("da")));
  const unique = names.filter((name, index) => {
    const key = name.toLocaleLowerCase("da");
    if (existing.has(key) || names.findIndex((candidate) => candidate.toLocaleLowerCase("da") === key) !== index) return false;
    existing.add(key);
    return true;
  });

  state.remaining.push(...unique);
  state.roster.push(...unique);
  state.initialCount = state.roster.length;
  saveState();
  render();
  elements.namesInput.value = "";
  elements.dialog.close();
  showToast(`${unique.length} ${unique.length === 1 ? "navn" : "navne"} tilføjet`);
}

function removeName(index) {
  if (isSpinning) return;
  const [removed] = state.remaining.splice(index, 1);
  state.roster = state.roster.filter((name) => name !== removed);
  state.initialCount = state.roster.length;
  saveState();
  render();
}

function randomName(exclude = []) {
  const pool = state.remaining.filter((name) => !exclude.includes(name));
  return pool[Math.floor(Math.random() * pool.length)] || "★";
}

function shuffled(values) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pairKey(first, second) {
  return [first.toLocaleLowerCase("da"), second.toLocaleLowerCase("da")].sort().join("\u0000");
}

function forbiddenPairs() {
  const pairs = new Set();
  state.groups.forEach((group) => {
    for (let i = 0; i < group.members.length; i++) {
      for (let j = i + 1; j < group.members.length; j++) pairs.add(pairKey(group.members[i], group.members[j]));
    }
  });
  return pairs;
}

function isAllowedGroup(group, forbidden) {
  return !forbidden.has(pairKey(group[0], group[1]))
    && !forbidden.has(pairKey(group[0], group[2]))
    && !forbidden.has(pairKey(group[1], group[2]));
}

function createRoundPlan(names) {
  const groupCount = Math.floor(names.length / 3);
  if (!groupCount) return null;
  const forbidden = forbiddenPairs();

  // Randomiserede komplette planer undgår, at et tidligt gyldigt valg skaber en blindgyde senere i runden.
  for (let attempt = 0; attempt < 8000; attempt++) {
    const candidate = shuffled(names);
    const groups = [];
    let valid = true;
    for (let index = 0; index < groupCount * 3; index += 3) {
      const group = candidate.slice(index, index + 3);
      if (!isAllowedGroup(group, forbidden)) { valid = false; break; }
      groups.push(group);
    }
    if (valid) return groups;
  }
  return null;
}

function createGroupName() {
  const usedNames = new Set(state.groups.map((group) => group.name));
  const combinations = [];
  groupNameStarts.forEach((start) => groupNameEnds.forEach((end) => combinations.push(`${start}${end}`)));
  const available = combinations.filter((name) => !usedNames.has(name));
  return available[Math.floor(Math.random() * available.length)] || `JackpotLegenderne${state.groups.length + 1}`;
}

function rerollGroupName(groupId) {
  const group = state.groups.find((candidate) => candidate.id === groupId);
  if (!group) return;
  const previousName = group.name;
  group.name = createGroupName();
  if (group.name === previousName) group.name = createGroupName();
  saveState();
  render();
  showToast(`${previousName} blev til ${group.name}`);
}

async function spin() {
  if (isSpinning) return;
  if (state.remaining.length === 0) return spinEmojis();
  if (state.remaining.length < 3) {
    showToast("Der mangler tre navne til en gruppe");
    return;
  }
  const plan = createRoundPlan(state.remaining);
  if (!plan) {
    showToast("Ingen flere grupper kan laves uden gentagelser");
    elements.status.textContent = "RUNDE FÆRDIG";
    return;
  }
  isSpinning = true;
  render();
  ensureAudio();
  elements.machine.classList.add("spinning-machine");
  elements.lever.classList.add("pulled");
  elements.status.textContent = "TRÆKKER...";
  playLeverSound();
  setTimeout(() => elements.lever.classList.remove("pulled"), 430);

  const winners = plan[0];
  const reels = $$(".reel");
  const reelNames = $$(".reel-name");
  reels.forEach((reel) => reel.classList.add("spinning"));

  const cycles = reelNames.map((node, reelIndex) => setInterval(() => {
    node.textContent = randomName(winners.slice(0, reelIndex));
    playTick(reelIndex);
  }, 80 + reelIndex * 12));

  await wait(1050);
  for (let i = 0; i < 3; i++) {
    await wait(520);
    clearInterval(cycles[i]);
    reels[i].classList.remove("spinning");
    reels[i].classList.add("locked");
    reelNames[i].textContent = winners[i];
    playLock(i);
    setTimeout(() => reels[i].classList.remove("locked"), 500);
  }

  await wait(250);
  state.remaining = state.remaining.filter((name) => !winners.includes(name));
  const group = { id: makeId(), members: winners, name: createGroupName(), round: state.round };
  state.groups.unshift(group);
  saveState();
  isSpinning = false;
  elements.machine.classList.remove("spinning-machine");
  elements.machine.classList.add("jackpot");
  setTimeout(() => elements.machine.classList.remove("jackpot"), 600);
  playWinSound();
  launchConfetti();
  showWinner(group);
  triggerGroupCelebration(group, pendingCelebrationId);
  pendingCelebrationId = null;
  render();
}

async function spinEmojis() {
  if (isSpinning) return;
  isSpinning = true;
  render();
  ensureAudio();
  elements.machine.classList.add("emoji-mode");
  elements.machine.classList.add("spinning-machine");
  elements.lever.classList.add("pulled");
  elements.status.textContent = "EMOJI-SPIN...";
  playLeverSound();
  setTimeout(() => elements.lever.classList.remove("pulled"), 430);

  const forceJackpot = Math.random() < .18;
  const jackpotEmoji = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];
  const result = forceJackpot
    ? [jackpotEmoji, jackpotEmoji, jackpotEmoji]
    : Array.from({ length: 3 }, () => slotEmojis[Math.floor(Math.random() * slotEmojis.length)]);
  const reels = $$(".reel");
  const reelNames = $$(".reel-name");
  reels.forEach((reel) => reel.classList.add("spinning"));

  const cycles = reelNames.map((node, reelIndex) => setInterval(() => {
    node.textContent = slotEmojis[Math.floor(Math.random() * slotEmojis.length)];
    playTick(reelIndex);
  }, 72 + reelIndex * 10));

  await wait(850);
  for (let index = 0; index < 3; index++) {
    await wait(430);
    clearInterval(cycles[index]);
    reels[index].classList.remove("spinning");
    reels[index].classList.add("locked");
    reelNames[index].textContent = result[index];
    playLock(index);
    setTimeout(() => reels[index].classList.remove("locked"), 500);
  }

  await wait(180);
  isSpinning = false;
  elements.machine.classList.remove("spinning-machine");
  const isJackpot = result.every((emoji) => emoji === result[0]);
  render();

  if (isJackpot) {
    elements.status.textContent = "EMOJI JACKPOT!";
    elements.machine.classList.add("jackpot");
    setTimeout(() => elements.machine.classList.remove("jackpot"), 650);
    playWinSound();
    launchConfetti();
    triggerEmojiJackpot(result[0]);
  } else {
    elements.status.textContent = "PRØV IGEN";
    showToast("Ingen emoji-jackpot denne gang");
  }
}

function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

function beginLeverPull(event) {
  if (isSpinning || event.button !== 0) return;
  leverPointer = { id: event.pointerId, startY: event.clientY, distance: 0 };
  elements.lever.setPointerCapture(event.pointerId);
  elements.lever.classList.add("dragging");
}

function moveLever(event) {
  if (!leverPointer || event.pointerId !== leverPointer.id) return;
  leverPointer.distance = Math.max(0, Math.min(90, event.clientY - leverPointer.startY));
  const angle = (leverPointer.distance / 90) * 38;
  elements.lever.style.setProperty("--lever-angle", `${angle}deg`);
}

function endLeverPull(event) {
  if (!leverPointer || event.pointerId !== leverPointer.id) return;
  const distance = leverPointer.distance;
  suppressLeverClick = true;
  leverPointer = null;
  elements.lever.classList.remove("dragging");
  elements.lever.style.removeProperty("--lever-angle");
  if (distance >= 45) {
    if (state.remaining.length >= 3) {
      state.leverPullCount = (state.leverPullCount || 0) + 1;
      if (state.leverPullCount % 2 === 0) pendingCelebrationId = "wizard";
      saveState();
    }
    spin();
  } else if (distance < 6) {
    spin();
  } else {
    showToast("Træk håndtaget helt ned!");
  }
  setTimeout(() => { suppressLeverClick = false; }, 0);
}

function cancelLeverPull() {
  leverPointer = null;
  elements.lever.classList.remove("dragging");
  elements.lever.style.removeProperty("--lever-angle");
}

function switchTab(tabName) {
  const peopleActive = tabName === "people";
  $("#peopleTab").classList.toggle("active", peopleActive);
  $("#groupsTab").classList.toggle("active", !peopleActive);
  $("#peopleTab").setAttribute("aria-selected", String(peopleActive));
  $("#groupsTab").setAttribute("aria-selected", String(!peopleActive));
  $("#peoplePanel").hidden = !peopleActive;
  $("#groupsPanel").hidden = peopleActive;
  $("#peoplePanel").classList.toggle("active", peopleActive);
  $("#groupsPanel").classList.toggle("active", !peopleActive);
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

function showWinner(group) {
  clearTimeout(winnerTimer);
  elements.winnerToastNames.textContent = group.members.join(" · ");
  elements.winnerToastGroupName.textContent = group.name;
  elements.winnerToast.setAttribute("aria-hidden", "false");
  elements.winnerToast.classList.add("show");
  winnerTimer = setTimeout(() => {
    elements.winnerToast.classList.remove("show");
    setTimeout(() => elements.winnerToast.setAttribute("aria-hidden", "true"), 600);
  }, 4200);
}

function chooseCelebration(forcedId) {
  if (forcedId) return celebrations.find((effect) => effect.id === forcedId) || celebrations[0];
  const choices = celebrations.filter((effect) => effect.id !== state.lastCelebrationId && effect.id !== "wizard");
  return choices[Math.floor(Math.random() * choices.length)];
}

function triggerGroupCelebration(group, forcedId) {
  const effect = chooseCelebration(forcedId);
  triggerCelebration(effect, group.name, effect.subtitle, group.name);
}

function triggerEmojiJackpot(emoji) {
  const effect = celebrations.find((candidate) => candidate.id === "jackpot");
  triggerCelebration(effect, `${emoji} ${emoji} ${emoji}`, "EMOJI JACKPOT! Den hemmelige maskine er vågnet", "Emoji Jackpot!");
}

function triggerCelebration(effect, title, subtitle, voiceText) {
  clearTimeout(magicTimer);
  document.body.classList.add("magic-active");
  elements.magicEvent.className = `magic-event effect-${effect.id}`;
  elements.magicEvent.style.setProperty("--effect-color", effect.color);
  elements.magicEvent.style.setProperty("--effect-accent", effect.accent);
  elements.effectKicker.textContent = effect.kicker;
  elements.effectTitle.textContent = title;
  elements.effectSubtitle.textContent = subtitle;
  elements.effectRuneLeft.textContent = effect.symbols[0];
  elements.effectRuneRight.textContent = effect.symbols[1] || effect.symbols[0];
  elements.magicEvent.setAttribute("aria-hidden", "false");
  elements.magicEvent.classList.add("show");
  elements.magicBurst.innerHTML = "";
  for (let index = 0; index < 44; index++) {
    const spark = document.createElement("span");
    spark.className = "magic-spark";
    spark.textContent = effect.symbols[index % effect.symbols.length];
    spark.style.setProperty("--spark-x", `${(Math.random() - .5) * innerWidth * .9}px`);
    spark.style.setProperty("--spark-y", `${(Math.random() - .5) * innerHeight * .9}px`);
    spark.style.setProperty("--spark-rotate", `${Math.random() * 720 - 360}deg`);
    spark.style.setProperty("--spark-size", `${Math.random() * 22 + 10}px`);
    spark.style.setProperty("--spark-color", index % 2 ? effect.color : effect.accent);
    spark.style.animationDelay = `${Math.random() * .35}s`;
    elements.magicBurst.appendChild(spark);
  }
  state.lastCelebrationId = effect.id;
  saveState();
  playCelebrationSound(effect, voiceText);
  magicTimer = setTimeout(() => {
    elements.magicEvent.classList.remove("show");
    document.body.classList.remove("magic-active");
    setTimeout(() => {
      elements.magicEvent.setAttribute("aria-hidden", "true");
      elements.magicBurst.innerHTML = "";
    }, 750);
  }, 3800);
}

function resetAll() {
  if (!state.remaining.length && !state.groups.length) return;
  if (!confirm("Vil du slette alle navne og grupper og starte helt forfra?")) return;
  state = { remaining: [], groups: [], roster: [], round: 1, initialCount: 0, leverPullCount: 0 };
  saveState();
  elements.machine.classList.remove("emoji-mode");
  $$(".reel-name").forEach((node) => node.textContent = "Klar?");
  render();
  switchTab("people");
  showToast("Maskinen er nulstillet");
}

function startNewRound() {
  if (isSpinning) return;
  if (state.roster.length < 3) return showToast("Tilføj mindst tre deltagere først");
  const groupsThisRound = state.groups.filter((group) => group.round === state.round);
  if (groupsThisRound.length && state.remaining.length >= 3
    && !confirm("Denne runde er ikke færdig. Vil du alligevel starte en ny runde?")) return;

  state.round += 1;
  state.remaining = [...state.roster];
  state.initialCount = state.roster.length;
  saveState();
  $$(".reel-name").forEach((node) => node.textContent = "Klar?");
  render();
  switchTab("people");
  showToast(`Runde ${state.round} er klar – ingen gamle makkerpar!`);
}

async function copyGroups() {
  if (!state.groups.length) return showToast("Ingen grupper at kopiere endnu");
  const chronological = [...state.groups].reverse();
  const text = chronological.map((group) => `Runde ${group.round} – ${group.name}: ${group.members.join(", ")}`).join("\n");
  try {
    await navigator.clipboard.writeText(text);
    showToast("Grupperne er kopieret");
  } catch (_) {
    showToast("Kunne ikke kopiere grupperne");
  }
}

function ensureAudio() {
  if (!soundEnabled) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === "suspended") audioContext.resume();
}

function tone(frequency, duration, type = "sine", volume = .03, delay = 0) {
  if (!soundEnabled || !audioContext) return;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime + delay);
  gain.gain.setValueAtTime(volume, audioContext.currentTime + delay);
  gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + delay + duration);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(audioContext.currentTime + delay);
  oscillator.stop(audioContext.currentTime + delay + duration);
}

function playLeverSound() { tone(120, .18, "sawtooth", .035); tone(70, .22, "square", .025, .12); }
function playTick(index) { if (Math.random() > .52) tone(190 + index * 25, .035, "square", .009); }
function playLock(index) { tone(230 + index * 90, .16, "square", .045); tone(110, .18, "sine", .035); }
function playWinSound() { [523, 659, 784, 1047].forEach((frequency, index) => tone(frequency, .5, "triangle", .045, index * .11)); }
function playCelebrationSound(effect, groupName) {
  effect.notes.forEach((frequency, index) => tone(frequency, .65, index % 2 ? "triangle" : "sine", .038, index * .09));
  tone(effect.notes[0] / 2, 1.25, "triangle", .025);
  if (!soundEnabled || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
  window.speechSynthesis.cancel();
  const phrase = new SpeechSynthesisUtterance(groupName);
  phrase.lang = "da-DK";
  phrase.rate = effect.id === "monster" ? .72 : effect.id === "ninja" ? 1.25 : .92;
  phrase.pitch = effect.id === "monster" ? .45 : effect.id === "epic" ? 1.15 : .9;
  phrase.volume = .8;
  setTimeout(() => window.speechSynthesis.speak(phrase), 180);
}

function playHackSound() {
  ensureAudio();
  [880, 440, 220, 110, 73].forEach((frequency, index) => tone(frequency, .28, "sawtooth", .025, index * .07));
  [147, 175, 196].forEach((frequency, index) => tone(frequency, .65, "square", .018, .38 + index * .06));
}

function launchConfetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas = elements.canvas;
  const ctx = canvas.getContext("2d");
  const ratio = Math.min(devicePixelRatio, 2);
  canvas.width = innerWidth * ratio;
  canvas.height = innerHeight * ratio;
  ctx.scale(ratio, ratio);
  const pieces = Array.from({ length: 170 }, () => ({
    x: innerWidth / 2 + (Math.random() - .5) * 250,
    y: innerHeight * .42,
    vx: (Math.random() - .5) * 15,
    vy: -Math.random() * 13 - 4,
    size: Math.random() * 7 + 4,
    rotation: Math.random() * Math.PI,
    spin: (Math.random() - .5) * .25,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 1
  }));
  const start = performance.now();
  function frame(now) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    pieces.forEach((piece) => {
      piece.x += piece.vx;
      piece.y += piece.vy;
      piece.vy += .28;
      piece.vx *= .995;
      piece.rotation += piece.spin;
      piece.life = Math.max(0, 1 - (now - start) / 2300);
      ctx.save();
      ctx.globalAlpha = piece.life;
      ctx.translate(piece.x, piece.y);
      ctx.rotate(piece.rotation);
      ctx.fillStyle = piece.color;
      ctx.fillRect(-piece.size / 2, -piece.size / 4, piece.size, piece.size / 2);
      ctx.restore();
    });
    if (now - start < 2300) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, innerWidth, innerHeight);
  }
  requestAnimationFrame(frame);
}

$("#openAddButton").addEventListener("click", () => { elements.dialog.showModal(); setTimeout(() => elements.namesInput.focus(), 50); });
$("#addNamesButton").addEventListener("click", addNames);
$("#loadDemoButton").addEventListener("click", () => { elements.namesInput.value = demoNames.join("\n"); });
$("#peopleTab").addEventListener("click", () => switchTab("people"));
$("#groupsTab").addEventListener("click", () => switchTab("groups"));
$("#copyGroupsButton").addEventListener("click", copyGroups);
$("#resetButton").addEventListener("click", resetAll);
$("#newRoundButton").addEventListener("click", startNewRound);
elements.overviewButton.addEventListener("click", () => toggleFullOverview());
$("#closeOverviewButton").addEventListener("click", () => toggleFullOverview(false));
elements.overview.addEventListener("click", (event) => {
  if (event.target === elements.overview) toggleFullOverview(false);
});
elements.spin.addEventListener("click", spin);
elements.lever.addEventListener("pointerdown", beginLeverPull);
elements.lever.addEventListener("pointermove", moveLever);
elements.lever.addEventListener("pointerup", endLeverPull);
elements.lever.addEventListener("pointercancel", cancelLeverPull);
elements.lever.addEventListener("click", () => {
  if (!suppressLeverClick) spin();
});
elements.nameList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove]");
  if (button) removeName(Number(button.dataset.remove));
});
elements.groupList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-reroll]");
  if (button) rerollGroupName(button.dataset.reroll);
});
elements.overviewContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-reroll]");
  if (button) {
    rerollGroupName(button.dataset.reroll);
    return;
  }
  const card = event.target.closest(".overview-card");
  if (card) {
    const reroll = card.querySelector("[data-reroll]");
    if (reroll) shatterGroupCard(card, reroll.dataset.reroll);
  }
});
$("#closeHackerButton").addEventListener("click", closeHackerPrompt);
$("#terminalExitButton").addEventListener("click", closeHackerPrompt);
elements.soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  elements.soundToggle.classList.toggle("muted", !soundEnabled);
  elements.soundToggle.setAttribute("aria-pressed", String(soundEnabled));
  elements.soundToggle.setAttribute("aria-label", soundEnabled ? "Slå lyd fra" : "Slå lyd til");
  if (!soundEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
  if (soundEnabled) { ensureAudio(); tone(660, .12, "sine", .03); }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && elements.hackerOverlay.classList.contains("show")) {
    closeHackerPrompt();
    return;
  }
  if (event.key === "Escape" && elements.overview.classList.contains("open")) {
    toggleFullOverview(false);
    return;
  }
  if (event.code === "Space" && !elements.dialog.open && event.target === document.body) {
    event.preventDefault();
    spin();
  }
});

render();
if (!state.initialCount) setTimeout(() => elements.dialog.showModal(), 450);
