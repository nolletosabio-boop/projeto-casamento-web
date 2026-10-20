const STORAGE_KEY = "noiva-quest-v2";
const tabs = [
  ["fornecedores", "Fornecedores"],
  ["orcamentos", "Orcamentos"],
  ["equipe", "Equipe"],
  ["convidados", "Convidados"],
  ["cardapio", "Cardapio"],
  ["musicas", "Musicas"],
  ["cronograma", "Cronograma"],
  ["civil", "Civil"]
];

const messages = [
  "Uma escolha por dia tambem constrói um casamento inteiro.",
  "Respira. O plano nao precisa estar perfeito, precisa continuar andando.",
  "Hoje voce sobe de nivel cuidando de um detalhe que importa.",
  "Cada tarefa concluida deixa o grande dia mais leve.",
  "Voce nao esta atrasada: esta organizando uma historia bonita.",
  "A noiva mais forte e a que divide o sonho em pequenos passos.",
  "O brilho do dia começa nessa constancia silenciosa de hoje."
];

const dailyMessages = [
  "O amor e paciente, o amor e bondoso. Hoje, caminhem com calma e carinho.",
  "Entreguem seus planos a Deus e deem o proximo passo com fe.",
  "Cada detalhe cuidado hoje aproxima voces do SIM com mais paz.",
  "Respirem. Deus tambem esta nos pequenos preparativos.",
  "Que a alegria do Senhor seja a forca de voces neste dia.",
  "Um casamento bonito tambem nasce de paciencia, conversa e oracao.",
  "O essencial e o amor que voces estao construindo, nao a perfeicao da festa.",
  "Hoje e dia de organizar uma coisa de cada vez e confiar no processo.",
  "Onde ha amor, ha graca para recomecar e ajustar o que for preciso.",
  "Deus abencoe cada escolha, cada fornecedor e cada detalhe deste caminho.",
  "O SIM de voces merece leveza. Facam o possivel e descansem no que ja foi feito.",
  "A paz tambem faz parte do planejamento. Escolham com sabedoria.",
  "Que o lar que voces estao formando comece com fe, respeito e ternura.",
  "Nenhum detalhe vale mais que a alegria de viver esse tempo juntos.",
  "Hoje, celebrem uma pequena conquista. O grande dia esta sendo construido.",
  "Se algo sair do plano, lembrem: o amor continua sendo o centro.",
  "Que Deus guie as conversas, acalme o coracao e ilumine as decisoes.",
  "A preparacao do casamento tambem e preparacao para caminhar lado a lado.",
  "Organizem com zelo, mas guardem espaco para sorrir no caminho.",
  "O melhor detalhe do casamento sera a alianca que voces escolheram viver.",
  "Que cada etapa traga mais uniao, cumplicidade e gratidao.",
  "Hoje e um bom dia para transformar ansiedade em uma pequena acao.",
  "Voces nao precisam resolver tudo agora. Apenas deem o proximo passo certo.",
  "Que o amor de Deus seja a base do SIM, da festa e da vida a dois.",
  "Planejar tambem e amar: e cuidar do sonho com responsabilidade e carinho.",
  "A graca de Deus alcanca ate os imprevistos. Sigam com serenidade.",
  "O casamento e um dia; a alianca e uma vida. Cuidem dos dois com amor.",
  "A melhor decoracao sempre sera a alegria verdadeira de voces.",
  "Que a fe seja maior que a pressa e a paz seja maior que a preocupacao.",
  "Hoje, facam uma coisa importante e celebrem o quanto ja caminharam."
];

const starter = {
  weddingDate: "",
  phases: [
    { id: crypto.randomUUID(), title: "Primeiros planos", tasks: [
      { id: crypto.randomUUID(), title: "Definir data do casamento", done: true },
      { id: crypto.randomUUID(), title: "Escolher estilo da festa", done: false },
      { id: crypto.randomUUID(), title: "Criar lista inicial de convidados", done: false }
    ]},
    { id: crypto.randomUUID(), title: "Contratacoes", tasks: [
      { id: crypto.randomUUID(), title: "Reservar local", done: false },
      { id: crypto.randomUUID(), title: "Fechar fotografia", done: false },
      { id: crypto.randomUUID(), title: "Escolher buffet", done: false }
    ]},
    { id: crypto.randomUUID(), title: "Grande dia", tasks: [
      { id: crypto.randomUUID(), title: "Confirmar fornecedores", done: false },
      { id: crypto.randomUUID(), title: "Montar cronograma final", done: false },
      { id: crypto.randomUUID(), title: "Separar kit da noiva", done: false }
    ]}
  ],
  lists: {
    lembretes: [{ id: crypto.randomUUID(), title: "Provar vestido", number: "15/08" }],
    orcamentos: [{ id: crypto.randomUUID(), title: "Buffet", number: "5000" }],
    equipe: [
      { id: crypto.randomUUID(), title: "Cerimonialista", number: "Contato" },
      { id: crypto.randomUUID(), title: "Damas e pajens", number: "Qtd." },
      { id: crypto.randomUUID(), title: "Responsavel pelas aliancas", number: "Nome" },
      { id: crypto.randomUUID(), title: "Madrinhas", number: "Qtd." },
      { id: crypto.randomUUID(), title: "Padrinhos", number: "Qtd." },
      { id: crypto.randomUUID(), title: "Responsavel pelos presentes", number: "Nome" }
    ],
    convidados: [{ id: crypto.randomUUID(), title: "Familia da noiva", number: "40" }],
    cardapio: [{ id: crypto.randomUUID(), title: "Jantar principal", number: "120" }],
    cronograma: [{ id: crypto.randomUUID(), title: "Entrada da noiva", number: "19:30" }],
    fornecedores: [{ id: crypto.randomUUID(), title: "Fotografo", number: "(00) 00000-0000" }],
    musicas: [{ id: crypto.randomUUID(), title: "Entrada da noiva", number: "1" }],
    noivo: [
      { id: crypto.randomUUID(), title: "Roupa do noivo", number: "Data" },
      { id: crypto.randomUUID(), title: "Sapato e acessorios", number: "Status" },
      { id: crypto.randomUUID(), title: "Barbearia ou cabelo", number: "Horario" },
      { id: crypto.randomUUID(), title: "Votos do noivo", number: "Status" },
      { id: crypto.randomUUID(), title: "Documentos pessoais", number: "Ok" },
      { id: crypto.randomUUID(), title: "Transporte para cerimonia", number: "Contato" },
      { id: crypto.randomUUID(), title: "Alianca do noivo", number: "Status" }
    ],
    noiva: [
      { id: crypto.randomUUID(), title: "Vestido e ajustes", number: "Data" },
      { id: crypto.randomUUID(), title: "Sapato e acessorios", number: "Status" },
      { id: crypto.randomUUID(), title: "Make e cabelo", number: "Horario" },
      { id: crypto.randomUUID(), title: "Buque", number: "Fornecedor" },
      { id: crypto.randomUUID(), title: "Votos da noiva", number: "Status" },
      { id: crypto.randomUUID(), title: "Dia da noiva", number: "Horario" },
      { id: crypto.randomUUID(), title: "Alianca da noiva", number: "Status" },
      { id: crypto.randomUUID(), title: "Kit emergencia", number: "Ok" }
    ],
    civil: [
      { id: crypto.randomUUID(), title: "Escolher cartorio", number: "Contato" },
      { id: crypto.randomUUID(), title: "Separar documentos", number: "Status" },
      { id: crypto.randomUUID(), title: "Certidao de nascimento atualizada", number: "Status" },
      { id: crypto.randomUUID(), title: "RG e CPF dos noivos", number: "Ok" },
      { id: crypto.randomUUID(), title: "Comprovante de residencia", number: "Ok" },
      { id: crypto.randomUUID(), title: "Definir testemunhas", number: "2" },
      { id: crypto.randomUUID(), title: "Escolher regime de bens", number: "Status" },
      { id: crypto.randomUUID(), title: "Agendar data do civil", number: "Data" },
      { id: crypto.randomUUID(), title: "Pagar taxa do cartorio", number: "Valor" }
    ]
  },
  photos: []
};

let state = loadState();
const board = document.querySelector("#board");
const gallery = document.querySelector("#gallery");
const phaseTemplate = document.querySelector("#phaseTemplate");
const taskTemplate = document.querySelector("#taskTemplate");
const rowTemplate = document.querySelector("#rowTemplate");
const weddingDate = document.querySelector("#weddingDate");
const daysLeft = document.querySelector("#daysLeft");
const dailyMessage = document.querySelector("#dailyMessage");
const xpValue = document.querySelector("#xpValue");
const xpBar = document.querySelector("#xpBar");
const xpHint = document.querySelector("#xpHint");
const rankName = document.querySelector("#rankName");
const budgetTotal = document.querySelector("#budgetTotal");

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? normalizeState(JSON.parse(saved)) : structuredClone(starter);
  } catch {
    return structuredClone(starter);
  }
}
function normalizeState(saved) {
  const next = { ...structuredClone(starter), ...saved };
  next.lists = { ...structuredClone(starter.lists), ...(saved.lists || {}) };
  if (saved.lists?.musica && !saved.lists?.musicas) next.lists.musicas = next.lists.musica;
  delete next.lists.musica;
  delete next.lists.cerimonia;
  return next;
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function render() {
  renderCountdown(); renderMessage(); renderXp(); renderBoard(); renderLists(); renderGallery(); saveState();
}
function setupTabs() {
  const nav = document.querySelector("#tabs");
  tabs.forEach(([id, label], index) => {
    const button = document.createElement("button");
    button.className = `tab${index === 0 ? " active" : ""}`;
    button.dataset.tab = id; button.type = "button"; button.textContent = label;
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".tab-view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(`[data-view="${id}"]`).classList.add("active");
    });
    nav.appendChild(button);
  });
  document.querySelector(`[data-view="${tabs[0][0]}"]`)?.classList.add("active");
}
function renderCountdown() {
  weddingDate.value = state.weddingDate || "";
  if (!state.weddingDate) { daysLeft.textContent = "--"; return; }
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const target = new Date(`${state.weddingDate}T00:00:00`);
  const diff = Math.ceil((target - today) / 86400000);
  daysLeft.textContent = diff >= 0 ? diff : "0";
}
function renderMessage() {
  const dayIndex = Math.floor(Date.now() / 86400000) % dailyMessages.length;
  dailyMessage.textContent = dailyMessages[dayIndex];
}
function getDoneTasks() { return state.phases.flatMap((phase) => phase.tasks).filter((task) => task.done).length; }
function renderXp() {
  const done = getDoneTasks();
  const listItems = Object.values(state.lists).flat().length;
  const xp = done * 50 + listItems * 10 + state.photos.length * 15;
  const level = Math.floor(xp / 200) + 1;
  const rank = level >= 10 ? "Noiva S-rank" : level >= 7 ? "Noiva A-rank" : level >= 4 ? "Noiva B-rank" : "Noiva E-rank";
  xpValue.textContent = xp;
  rankName.textContent = `${rank} · Nivel ${level}`;
  xpBar.style.width = `${xp % 200 / 2}%`;
  xpHint.textContent = `${200 - (xp % 200)} XP para o proximo nivel`;
}
function renderBoard() {
  board.replaceChildren();
  state.phases.forEach((phase) => {
    const node = phaseTemplate.content.firstElementChild.cloneNode(true);
    const title = node.querySelector(".phase-title");
    const list = node.querySelector(".tasks");
    const progressText = node.querySelector(".progress-text");
    const progressBar = node.querySelector(".progress span");
    const finished = phase.tasks.filter((task) => task.done).length;
    const percent = phase.tasks.length ? Math.round((finished / phase.tasks.length) * 100) : 0;
    node.classList.toggle("has-done", finished > 0);
    title.value = phase.title;
    progressText.textContent = `${finished} de ${phase.tasks.length} tarefas concluidas`;
    progressBar.style.width = `${percent}%`;
    title.addEventListener("input", () => { phase.title = title.value; saveState(); });
    node.querySelector(".phase-delete").addEventListener("click", () => {
      state.phases = state.phases.filter((item) => item.id !== phase.id); render();
    });
    phase.tasks.forEach((task) => list.appendChild(createTask(phase, task)));
    node.querySelector(".task-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const input = event.currentTarget.querySelector("input");
      const value = input.value.trim();
      if (!value) return;
      phase.tasks.push({ id: crypto.randomUUID(), title: value, done: false });
      input.value = ""; render();
    });
    board.appendChild(node);
  });
}
function createTask(phase, task) {
  const node = taskTemplate.content.firstElementChild.cloneNode(true);
  const checkbox = node.querySelector("input[type='checkbox']");
  const title = node.querySelector(".task-title");
  checkbox.checked = task.done; title.value = task.title;
  node.classList.toggle("done", task.done);
  checkbox.addEventListener("change", () => { task.done = checkbox.checked; render(); });
  title.addEventListener("input", () => { task.title = title.value; saveState(); });
  node.querySelector(".box").addEventListener("click", () => checkbox.click());
  node.querySelector(".task-delete").addEventListener("click", () => {
    phase.tasks = phase.tasks.filter((item) => item.id !== task.id); render();
  });
  return node;
}
function renderLists() {
  Object.keys(state.lists).forEach((name) => {
    const area = document.querySelector(`[data-list-area="${name}"]`);
    if (!area) return;
    area.replaceChildren();
    state.lists[name].forEach((row) => {
      const node = rowTemplate.content.firstElementChild.cloneNode(true);
      const title = node.querySelector(".row-title");
      const number = node.querySelector(".row-number");
      title.placeholder = placeholderFor(name); number.placeholder = numberPlaceholderFor(name);
      title.value = row.title; number.value = row.number;
      title.addEventListener("input", () => { row.title = title.value; saveState(); });
      number.addEventListener("input", () => { row.number = number.value; renderBudgetOnly(); saveState(); });
      node.querySelector(".row-delete").addEventListener("click", () => {
        state.lists[name] = state.lists[name].filter((item) => item.id !== row.id); render();
      });
      area.appendChild(node);
    });
  });
  renderBudgetOnly();
}
function placeholderFor(name) {
  return {
    lembretes: "Lembrete", orcamentos: "Item do orcamento", convidados: "Nome ou grupo",
    cardapio: "Prato ou bebida", cronograma: "Momento da festa", fornecedores: "Fornecedor",
    musicas: "Musica ou momento", equipe: "Pessoa ou funcao", noivo: "Organizacao do noivo",
    noiva: "Organizacao da noiva", civil: "Organizacao do civil"
  }[name];
}
function numberPlaceholderFor(name) {
  return {
    lembretes: "Data", orcamentos: "Valor", convidados: "Numero", cardapio: "Qtd.",
    cronograma: "Hora", fornecedores: "Telefone", musicas: "Ordem", equipe: "Contato/Qtd.",
    noivo: "Data/Status", noiva: "Data/Status", civil: "Data/Contato"
  }[name];
}
function renderBudgetOnly() {
  const total = state.lists.orcamentos.reduce((sum, row) => {
    const value = Number(String(row.number).replace(/[^\d,.-]/g, "").replace(",", "."));
    return sum + (Number.isFinite(value) ? value : 0);
  }, 0);
  budgetTotal.textContent = total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
function renderGallery() {
  gallery.replaceChildren();
  if (!state.photos.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "Adicione fotos de vestido, decoracao, buque, penteado e inspiracoes.";
    gallery.appendChild(empty); return;
  }
  state.photos.forEach((src) => {
    const card = document.createElement("figure");
    const img = document.createElement("img");
    card.className = "photo-card"; img.src = src; img.alt = "Inspiracao do casamento";
    card.appendChild(img); gallery.appendChild(card);
  });
}
function addCrisisMessage(text, type) {
  const chat = document.querySelector("#crisisChat");
  const message = document.createElement("div");
  message.className = `crisis-message ${type}`;
  message.textContent = text; chat.appendChild(message); chat.scrollTop = chat.scrollHeight;
}
function getCrisisAdvice(text) {
  const lower = text.toLowerCase();
  if (lower.includes("fornecedor") || lower.includes("cancelou") || lower.includes("atrasou")) {
    return "Primeiro: respire e confirme por mensagem o que aconteceu, com horario e solucao proposta. Depois acione uma alternativa da lista de fornecedores, peça indicacao para cerimonialista e negocie devolucao ou substituicao por escrito. Foque em resolver hoje o essencial: quem assume, quanto custa e ate que hora confirma.";
  }
  if (lower.includes("dinheiro") || lower.includes("orcamento") || lower.includes("caro") || lower.includes("pagar")) {
    return "Vamos cortar a ansiedade em numeros: anote o valor que falta, o prazo e o que e indispensavel. Separe em tres colunas: manter, simplificar, cancelar. Negocie pagamento parcelado antes de trocar fornecedor. O objetivo agora e proteger o essencial do casamento.";
  }
  if (lower.includes("convidado") || lower.includes("familia") || lower.includes("briga")) {
    return "Aqui vale responder com calma e limite. Defina uma frase curta: 'entendo, mas precisamos seguir essa decisao'. Evite discutir no calor do momento. Se envolver familia, escolha uma pessoa neutra para ajudar a comunicar e mantenha tudo alinhado com o noivo.";
  }
  if (lower.includes("vestido") || lower.includes("maquiagem") || lower.includes("cabelo") || lower.includes("noiva")) {
    return "Priorize o que aparece no grande dia: caimento, conforto e horario. Tire foto do problema, mande para o profissional e peça duas opcoes: correcao ideal e plano reserva. Se faltar tempo, escolha a solucao que te deixa segura, nao a perfeita.";
  }
  if (lower.includes("chuva") || lower.includes("tempo") || lower.includes("clima")) {
    return "Plano clima: confirme cobertura, guarda-chuvas, caminho seco para entrada e um ponto de foto alternativo. Avise fornecedores-chave e deixe uma mensagem pronta para convidados se houver mudanca de local ou horario.";
  }
  return "Vamos resolver por partes: 1) escreva exatamente o que aconteceu; 2) diga o que precisa estar decidido nas proximas 2 horas; 3) escolha uma pessoa para ajudar; 4) registre tudo por mensagem. A melhor decisao agora e a mais clara, nao a mais perfeita.";
}
weddingDate.addEventListener("change", () => { state.weddingDate = weddingDate.value; render(); });
document.querySelector("#addPhase").addEventListener("click", () => {
  state.phases.push({ id: crypto.randomUUID(), title: "Nova etapa", tasks: [] }); render();
});
document.querySelectorAll(".add-row").forEach((button) => {
  button.addEventListener("click", () => {
    const list = button.dataset.list;
    state.lists[list].push({ id: crypto.randomUUID(), title: "", number: "" }); render();
  });
});
document.querySelectorAll(".partner-tab").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.partnerTab;
    document.querySelectorAll(".partner-tab").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".partner-view").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`[data-partner-view="${view}"]`).classList.add("active");
  });
});
document.querySelector("#photoInput").addEventListener("change", async (event) => {
  const files = [...event.target.files].slice(0, 18);
  const readers = files.map((file) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  }));
  state.photos.push(...await Promise.all(readers));
  event.target.value = ""; render();
});
document.querySelector("#crisisOpen").addEventListener("click", () => {
  const panel = document.querySelector("#crisisPanel");
  panel.classList.add("open"); panel.setAttribute("aria-hidden", "false");
  document.querySelector("#crisisInput").focus();
});
document.querySelector("#crisisClose").addEventListener("click", () => {
  const panel = document.querySelector("#crisisPanel");
  panel.classList.remove("open"); panel.setAttribute("aria-hidden", "true");
});
document.querySelector("#crisisForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#crisisInput");
  const text = input.value.trim();
  if (!text) return;
  addCrisisMessage(text, "user"); input.value = "";
  window.setTimeout(() => addCrisisMessage(getCrisisAdvice(text), "assistant"), 240);
});
setupTabs();
render();
