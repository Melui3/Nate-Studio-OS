const STORAGE_KEY = "nate-studio-os:v2";

const today = new Date();
const isoToday = today.toISOString().slice(0, 10);

const defaultState = {
  prospects: [
    {
      id: "prospect-velvet",
      name: "Maya Laurent",
      company: "Studio Velvet",
      channel: "Instagram",
      status: "interesse",
      firstContact: "2026-06-03",
      nextAction: "Envoyer proposition pour mini-identite",
      nextDate: "2026-06-25",
      notes: "Aime les univers premium, besoin d'une direction visuelle pour lancement septembre.",
      history: ["Premier DM apres un post portfolio", "Call decouverte de 25 min"]
    },
    {
      id: "prospect-atelier",
      name: "Noe Carmin",
      company: "Atelier Carmin",
      channel: "Reco client",
      status: "contacte",
      firstContact: "2026-06-12",
      nextAction: "Relance douce avec 2 references",
      nextDate: "2026-06-24",
      notes: "Budget a clarifier. Interesse par site vitrine et shooting produit.",
      history: ["Mail envoye via Louise", "A repondu avec brief court"]
    },
    {
      id: "prospect-arcane",
      name: "Iris Solal",
      company: "Maison Arcane",
      channel: "LinkedIn",
      status: "a-contacter",
      firstContact: "2026-06-18",
      nextAction: "Preparer message personnalise",
      nextDate: "2026-06-27",
      notes: "Marque de bijoux, feed tres editorial, possible refonte landing.",
      history: ["Ajoutee a la veille luxe"]
    }
  ],
  clients: [
    {
      id: "client-lune",
      name: "Louise Martin",
      company: "Lune Noire",
      status: "actif",
      needs: "Direction artistique mensuelle, contenus lancement, coherence Instagram.",
      notes: "Ton tres feutre. Valide vite quand les options sont tranchees.",
      projects: ["project-lune-campaign"]
    },
    {
      id: "client-ember",
      name: "Samir Bellamy",
      company: "Ember Table",
      status: "veille",
      needs: "Identite pour restaurant confidentiel, supports print, menu.",
      notes: "A relancer apres ouverture de la salle.",
      projects: ["project-ember-identity"]
    },
    {
      id: "client-nova",
      name: "Anais Roche",
      company: "Nova Rituals",
      status: "actif",
      needs: "Site vitrine, pages service, systeme de devis clair.",
      notes: "Tres sensible aux mots. Penser storytelling avant maquette.",
      projects: ["project-nova-site"]
    }
  ],
  projects: [
    {
      id: "project-lune-campaign",
      title: "Campagne Lune Noire",
      client: "Lune Noire",
      status: "production",
      progress: 68,
      due: "2026-07-08",
      description: "Pack contenus pour lancement collection ete sombre.",
      links: ["Moodboard", "Drive shooting", "Planning contenus"]
    },
    {
      id: "project-ember-identity",
      title: "Identite Ember Table",
      client: "Ember Table",
      status: "concept",
      progress: 36,
      due: "2026-07-18",
      description: "Logo, palette, menus, carte de visite, vitrophanie.",
      links: ["Brief", "Pistes typographiques"]
    },
    {
      id: "project-nova-site",
      title: "Site Nova Rituals",
      client: "Nova Rituals",
      status: "validation",
      progress: 82,
      due: "2026-06-30",
      description: "Site vitrine one-page avec section services et prise de contact.",
      links: ["Wireframe", "Copywriting", "Assets"]
    }
  ],
  tasks: [
    {
      id: "task-1",
      title: "Finaliser direction photo Lune Noire",
      project: "Campagne Lune Noire",
      priority: "haute",
      due: "2026-06-24",
      done: false
    },
    {
      id: "task-2",
      title: "Relire devis Nova Rituals",
      project: "Site Nova Rituals",
      priority: "moyenne",
      due: "2026-06-25",
      done: false
    },
    {
      id: "task-3",
      title: "Archiver notes du call Ember",
      project: "Identite Ember Table",
      priority: "basse",
      due: "2026-06-28",
      done: true
    },
    {
      id: "task-4",
      title: "Construire template devis express",
      project: "Nate Studio OS",
      priority: "haute",
      due: "2026-06-26",
      done: false
    }
  ],
  quotes: [
    {
      id: "quote-nova",
      client: "Nova Rituals",
      project: "Site Nova Rituals",
      title: "Site vitrine premium",
      amount: 2400,
      status: "envoye",
      created: "2026-06-19",
      intro: "Site vitrine premium pour présenter l'offre et convertir les demandes entrantes.",
      timeline: "4 semaines",
      deposit: 40,
      validity: "30 jours",
      items: [
        { label: "Structure one-page", detail: "Parcours, sections, hiérarchie", price: 450 },
        { label: "Design responsive", detail: "Direction UI desktop et mobile", price: 850 },
        { label: "Intégration", detail: "Page responsive prête à publier", price: 850 },
        { label: "Recette", detail: "Corrections et passation", price: 250 }
      ],
      deliverables: ["Maquette", "Page intégrée", "Exports optimisés"],
      terms: ["40% d'acompte", "Solde avant livraison", "Contenus client fournis avant intégration"]
    },
    {
      id: "quote-ember",
      client: "Ember Table",
      project: "Identite Ember Table",
      title: "Identite visuelle fondatrice",
      amount: 3200,
      status: "brouillon",
      created: "2026-06-21",
      intro: "Identité fondatrice pour installer une présence premium cohérente.",
      timeline: "3 à 4 semaines",
      deposit: 40,
      validity: "30 jours",
      items: [
        { label: "Logo", detail: "Système principal et déclinaisons", price: 1450 },
        { label: "Palette", detail: "Couleurs, contrastes, usages", price: 450 },
        { label: "Menus", detail: "Application print prioritaire", price: 800 },
        { label: "Charte courte", detail: "Guide PDF de livraison", price: 500 }
      ],
      deliverables: ["Logo", "Palette", "Menus", "Charte PDF"],
      terms: ["40% d'acompte", "2 cycles de retours inclus", "Impression non incluse"]
    }
  ],
  notes: [
    {
      id: "note-ritual",
      title: "Concept: carnet de rituels client",
      type: "idee",
      updated: "2026-06-20",
      body: "Transformer les notes clients en fiches ritualisees: besoins, tabous, references, prochaines offrandes creatives.",
      tags: ["produit", "crm", "studio"]
    },
    {
      id: "note-call-lune",
      title: "Call Lune Noire",
      type: "reunion",
      updated: "2026-06-22",
      body: "Priorite aux visuels qui ressemblent a un editorial de maison ancienne. Eviter le trop gothique frontal.",
      tags: ["client", "direction-art"]
    },
    {
      id: "note-template",
      title: "Template devis rapide",
      type: "systeme",
      updated: "2026-06-18",
      body: "Modules: decouverte, concept, creation, revisions, livraison. Ajouter conditions et acompte par defaut.",
      tags: ["devis", "process"]
    }
  ],
  activities: [
    {
      id: "activity-1",
      date: "2026-06-22",
      type: "call",
      title: "Call Lune Noire",
      detail: "Direction photo validee, attente references bijoux."
    },
    {
      id: "activity-2",
      date: "2026-06-21",
      type: "quote",
      title: "Brouillon Ember Table",
      detail: "Devis structure autour de l'identite fondatrice."
    },
    {
      id: "activity-3",
      date: "2026-06-19",
      type: "quote",
      title: "Devis Nova Rituals envoye",
      detail: "Site vitrine premium envoye par mail."
    }
  ],
  selected: null
};

let activeView = "overview";
let query = "";
let activeFilter = "all";

const viewTitle = document.querySelector("#view-title");
const viewRoot = document.querySelector("#view-root");
const inspector = document.querySelector("#inspector");
const searchInput = document.querySelector("#global-search");
const dialog = document.querySelector("#entry-dialog");
const entryForm = document.querySelector("#entry-form");
const templateDialog = document.querySelector("#template-dialog");
const templateForm = document.querySelector("#template-form");
const toast = document.querySelector("#toast");

const labels = {
  overview: "Vue d'ensemble",
  prospects: "Prospects",
  clients: "Clients",
  projects: "Projets",
  tasks: "Tâches",
  quotes: "Devis",
  notes: "Notes",
  history: "Historique"
};

const prospectStatuses = {
  "a-contacter": "À contacter",
  contacte: "Contacté",
  interesse: "Intéressé",
  client: "Client",
  perdu: "Perdu"
};

const projectStatuses = {
  concept: "Concept",
  production: "Production",
  validation: "Validation",
  livre: "Livre"
};

const priorityLabels = {
  haute: "Haute",
  moyenne: "Moyenne",
  basse: "Basse"
};

const starterQuoteTemplates = [
  {
    title: "Identité visuelle fondatrice",
    amount: 3200,
    intro: "Création d'une base de marque claire, premium et directement exploitable.",
    timeline: "3 à 4 semaines",
    deposit: 40,
    validity: "30 jours",
    items: [
      { label: "Direction artistique", detail: "Moodboard, intention, territoire visuel", price: 650 },
      { label: "Logo & système de marque", detail: "Logo principal, déclinaisons, usages", price: 1450 },
      { label: "Palette, typographies, mini-charte", detail: "Règles d'usage et exports prêts à livrer", price: 800 },
      { label: "Passation & ajustements", detail: "2 cycles de retours inclus", price: 300 }
    ],
    deliverables: ["Exports logo", "Palette", "Typographies", "Mini-charte PDF"],
    terms: ["40% d'acompte à la validation", "Solde avant livraison finale", "2 cycles de retours inclus"]
  },
  {
    title: "Site vitrine premium",
    amount: 2400,
    intro: "Conception d'un site vitrine élégant, responsive et orienté conversion.",
    timeline: "4 à 5 semaines",
    deposit: 40,
    validity: "30 jours",
    items: [
      { label: "Structure & UX", detail: "Architecture de page, parcours, sections clés", price: 450 },
      { label: "Direction UI responsive", detail: "Design desktop et mobile", price: 850 },
      { label: "Intégration front", detail: "Page prête à publier, responsive", price: 850 },
      { label: "Recette & mise en ligne", detail: "Corrections, optimisation de base, passation", price: 250 }
    ],
    deliverables: ["Maquette", "Page responsive", "Assets optimisés", "Guide de mise à jour"],
    terms: ["40% d'acompte", "Contenus client fournis avant intégration", "Hébergement et licences non inclus"]
  },
  {
    title: "Retainer créatif mensuel",
    amount: 1500,
    intro: "Accompagnement mensuel pour garder une présence de marque cohérente.",
    timeline: "Renouvelable chaque mois",
    deposit: 100,
    validity: "15 jours",
    items: [
      { label: "Direction mensuelle", detail: "Priorités, planning, garde-fou DA", price: 350 },
      { label: "Création de contenus", detail: "Visuels, déclinaisons, formats sociaux", price: 900 },
      { label: "Support prioritaire", detail: "Retours rapides et micro-ajustements", price: 250 }
    ],
    deliverables: ["Planning mensuel", "Pack contenus", "Exports finaux"],
    terms: ["Paiement en début de mois", "Report non automatique des jours non utilisés", "Engagement minimum 1 mois"]
  }
];

function createEmptyState() {
  return {
    prospects: [],
    clients: [],
    projects: [],
    tasks: [],
    quotes: [],
    notes: [],
    activities: [],
    quoteTemplates: structuredClone(starterQuoteTemplates),
    selected: null
  };
}

function createSampleState() {
  return {
    ...structuredClone(defaultState),
    quoteTemplates: structuredClone(starterQuoteTemplates),
    selected: null
  };
}

function normalizeState(candidate) {
  const empty = createEmptyState();
  return {
    ...empty,
    ...candidate,
    quoteTemplates: candidate?.quoteTemplates?.length ? candidate.quoteTemplates : empty.quoteTemplates,
    selected: candidate?.selected || null
  };
}

let state = loadState();

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    activeFilter = "all";
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  query = event.target.value.trim().toLowerCase();
  render();
});

document.querySelector("#new-entry").addEventListener("click", () => {
  entryForm.reset();
  entryForm.elements.date.value = isoToday;
  applyEntryTypeDefaults();
  dialog.showModal();
});

document.querySelectorAll("[data-close-dialog]").forEach((button) => {
  button.addEventListener("click", () => {
    dialog.close();
    entryForm.reset();
  });
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
    entryForm.reset();
  }
});

entryForm.elements.type.addEventListener("change", applyEntryTypeDefaults);

document.querySelector("#load-demo").addEventListener("click", () => {
  state = createSampleState();
  saveState();
  render();
  showToast("Exemples chargés.");
});

document.querySelector("#clear-board").addEventListener("click", () => {
  state = createEmptyState();
  saveState();
  render();
  showToast("Cockpit vidé.");
});

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!entryForm.reportValidity()) return;
  const data = Object.fromEntries(new FormData(entryForm));
  createEntry(data);
  dialog.close();
  entryForm.reset();
});

document.querySelectorAll("[data-close-template]").forEach((button) => {
  button.addEventListener("click", () => {
    templateDialog.close();
    templateForm.reset();
  });
});

templateDialog.addEventListener("click", (event) => {
  if (event.target === templateDialog) {
    templateDialog.close();
    templateForm.reset();
  }
});

templateForm.addEventListener("submit", handleTemplateSubmit);
templateForm.querySelector("button[type='submit']").addEventListener("click", handleTemplateSubmit);

viewRoot.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");
  if (!actionTarget) return;
  const { action, id, type, value } = actionTarget.dataset;

  if (action === "select") {
    state.selected = { type, id };
  }

  if (action === "toggle-task") {
    toggleTask(id);
  }

  if (action === "use-template") {
    createQuoteFromTemplate(Number(value));
  }

  if (action === "new-template") {
    openTemplateEditor();
  }

  if (action === "edit-template") {
    openTemplateEditor(Number(value));
  }

  if (action === "load-demo") {
    state = createSampleState();
    showToast("Exemples chargés.");
  }

  if (action === "clear-data") {
    state = createEmptyState();
    showToast("Cockpit vidé.");
  }

  if (action === "set-filter") {
    activeFilter = value;
  }

  saveState();
  render();
});

viewRoot.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.matches("[data-change]")) return;
  const { change, id } = target.dataset;

  if (change === "prospect-status") {
    updateProspectStatus(id, target.value);
  }

  if (change === "project-status") {
    updateProjectStatus(id, target.value);
  }

  if (change === "quote-status") {
    updateQuoteStatus(id, target.value);
  }

  saveState();
  render();
});

inspector.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-inspector-action]");
  if (!actionTarget) return;

  if (actionTarget.dataset.inspectorAction === "new-entry") {
    entryForm.reset();
    entryForm.elements.date.value = isoToday;
    applyEntryTypeDefaults();
    dialog.showModal();
  }

  if (actionTarget.dataset.inspectorAction === "load-demo") {
    state = createSampleState();
    saveState();
    render();
    showToast("Exemples chargés.");
  }
});

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeState(JSON.parse(raw)) : createEmptyState();
  } catch {
    return createEmptyState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function applyEntryTypeDefaults() {
  const type = entryForm.elements.type.value;
  const title = entryForm.elements.title;
  const detail = entryForm.elements.detail;

  if (type === "quote") {
    title.placeholder = "Ex: Devis identité visuelle - Maison Arcane";
    detail.placeholder = "Contexte client, périmètre, exclusions, conditions";
    if (!detail.value.trim()) detail.value = manualQuoteSeed();
    return;
  }

  title.placeholder = "Ex: Relancer Studio Velvet";
  detail.placeholder = "Notes, besoin, prochaine action";
  if (detail.value.trim() === manualQuoteSeed()) detail.value = "";
}

function manualQuoteSeed() {
  return [
    "Objet : prestation créative premium",
    "Périmètre : cadrage, création, retours, livraison",
    "Livrables : fichiers finaux, exports web, mini-guide",
    "Conditions : 40% d'acompte, solde avant livraison, devis valable 30 jours"
  ].join("\n");
}

function buildManualQuote(title, detail, date) {
  const cleanDetail = detail.trim();
  return {
    id: uid("quote"),
    client: "À assigner",
    project: title,
    title,
    amount: 1200,
    status: "brouillon",
    created: date,
    intro: cleanDetail || "Devis créé depuis la capture rapide.",
    timeline: "À confirmer",
    deposit: 40,
    validity: "30 jours",
    items: [
      { label: "Cadrage & proposition", detail: "Brief, périmètre, recommandation", price: 300 },
      { label: "Production créative", detail: "Création principale selon périmètre", price: 700 },
      { label: "Retours & livraison", detail: "1 cycle de retours, exports finaux", price: 200 }
    ],
    deliverables: ["Proposition cadrée", "Création finale", "Exports prêts à utiliser"],
    terms: ["40% d'acompte", "Solde avant livraison", "Devis valable 30 jours"]
  };
}

function openTemplateEditor(index = null) {
  const template = Number.isInteger(index) ? state.quoteTemplates[index] : null;
  templateForm.reset();
  templateForm.elements.index.value = template ? String(index) : "";
  templateForm.elements.title.value = template?.title || "";
  templateForm.elements.amount.value = template?.amount ?? 1200;
  templateForm.elements.deposit.value = template?.deposit ?? 40;
  templateForm.elements.timeline.value = template?.timeline || "À confirmer";
  templateForm.elements.validity.value = template?.validity || "30 jours";
  templateForm.elements.intro.value = template?.intro || "";
  templateForm.elements.items.value = formatTemplateItems(template?.items || [
    { label: "Cadrage", detail: "Brief, périmètre, recommandation", price: 300 },
    { label: "Création", detail: "Production principale", price: 700 },
    { label: "Livraison", detail: "Exports finaux et passation", price: 200 }
  ]);
  templateForm.elements.deliverables.value = (template?.deliverables || ["Livrable principal", "Exports finaux"]).join("\n");
  templateForm.elements.terms.value = (template?.terms || ["40% d'acompte", "Solde avant livraison"]).join("\n");
  templateDialog.showModal();
}

function handleTemplateSubmit(event) {
  event.preventDefault();
  if (!validateTemplateForm()) return;
  saveTemplateFromForm();
}

function validateTemplateForm() {
  const required = ["title", "amount", "deposit", "timeline", "validity"];
  const missing = required.find((name) => !String(templateForm.elements[name].value).trim());
  if (missing) {
    showToast("Complète les champs principaux du template.");
    templateForm.elements[missing].focus();
    return false;
  }
  return true;
}

function saveTemplateFromForm() {
  const data = Object.fromEntries(new FormData(templateForm));
  const template = {
    title: data.title.trim(),
    amount: Number(data.amount) || 0,
    intro: data.intro.trim(),
    timeline: data.timeline.trim(),
    deposit: Number(data.deposit) || 0,
    validity: data.validity.trim(),
    items: parseTemplateItems(data.items),
    deliverables: linesFromText(data.deliverables),
    terms: linesFromText(data.terms)
  };

  const index = data.index === "" ? -1 : Number(data.index);
  if (index >= 0 && state.quoteTemplates[index]) {
    state.quoteTemplates[index] = template;
  } else {
    state.quoteTemplates.unshift(template);
  }

  saveState();
  templateDialog.close();
  templateForm.reset();
  render();
  showToast("Template enregistré.");
}

function formatTemplateItems(items) {
  return normalizeQuoteItems(items)
    .map((item) => `${item.label} | ${item.detail} | ${item.price}`)
    .join("\n");
}

function parseTemplateItems(text) {
  const parsed = linesFromText(text).map((line) => {
    const [label, detail, price] = line.split("|").map((part) => part.trim());
    return {
      label: label || "Prestation",
      detail: detail || "À détailler",
      price: Number(price) || 0
    };
  });

  return parsed.length ? parsed : [{ label: "Prestation", detail: "À détailler", price: 0 }];
}

function linesFromText(text = "") {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function createEntry(data) {
  const title = data.title.trim();
  const detail = data.detail.trim();
  const date = data.date || isoToday;

  if (!title) return;

  if (data.type === "task") {
    state.tasks.unshift({
      id: uid("task"),
      title,
      project: "Nate Studio OS",
      priority: "moyenne",
      due: date,
      done: false
    });
  }

  if (data.type === "prospect") {
    state.prospects.unshift({
      id: uid("prospect"),
      name: title,
      company: "A qualifier",
      channel: "Capture",
      status: "a-contacter",
      firstContact: date,
      nextAction: detail || "Qualifier le besoin",
      nextDate: date,
      notes: detail,
      history: ["Capture rapide"]
    });
  }

  if (data.type === "client") {
    state.clients.unshift({
      id: uid("client"),
      name: title,
      company: title,
      status: "actif",
      needs: detail || "Besoins a qualifier.",
      notes: detail,
      projects: []
    });
  }

  if (data.type === "project") {
    state.projects.unshift({
      id: uid("project"),
      title,
      client: "A assigner",
      status: "concept",
      progress: 5,
      due: date,
      description: detail || "Projet capture rapidement.",
      links: []
    });
  }

  if (data.type === "note") {
    state.notes.unshift({
      id: uid("note"),
      title,
      type: "capture",
      updated: date,
      body: detail || "Note rapide.",
      tags: ["capture"]
    });
  }

  if (data.type === "quote") {
    state.quotes.unshift(buildManualQuote(title, detail, date));
  }

  addActivity("capture", title, detail || `Nouvel élément ${data.type}`);
  saveState();
  render();
  showToast("Capture ajoutee.");
}

function addActivity(type, title, detail) {
  state.activities.unshift({
    id: uid("activity"),
    date: isoToday,
    type,
    title,
    detail
  });
}

function updateProspectStatus(id, status) {
  const prospect = state.prospects.find((item) => item.id === id);
  if (!prospect) return;
  prospect.status = status;
  prospect.history.unshift(`Statut passe a ${prospectStatuses[status] || status}`);
  addActivity("prospect", prospect.company, `Statut: ${prospectStatuses[status] || status}`);
}

function updateProjectStatus(id, status) {
  const project = state.projects.find((item) => item.id === id);
  if (!project) return;
  project.status = status;
  addActivity("projet", project.title, `Statut: ${projectStatuses[status] || status}`);
}

function updateQuoteStatus(id, status) {
  const quote = state.quotes.find((item) => item.id === id);
  if (!quote) return;
  quote.status = status;
  addActivity("devis", quote.title, `Statut: ${status}`);
}

function toggleTask(id) {
  const task = state.tasks.find((item) => item.id === id);
  if (!task) return;
  task.done = !task.done;
  addActivity("tache", task.title, task.done ? "Tâche terminée" : "Tâche réouverte");
}

function createQuoteFromTemplate(index) {
  const template = state.quoteTemplates[index];
  if (!template) return;
  const client = state.clients[0]?.company || "À assigner";
  state.quotes.unshift({
    id: uid("quote"),
    client,
    project: template.title,
    title: template.title,
    amount: template.amount,
    status: "brouillon",
    created: isoToday,
    intro: template.intro,
    timeline: template.timeline,
    deposit: template.deposit,
    validity: template.validity,
    items: structuredClone(template.items),
    deliverables: [...template.deliverables],
    terms: [...template.terms]
  });
  addActivity("devis", template.title, `Brouillon cree pour ${client}`);
  showToast("Devis brouillon cree.");
}

function render() {
  viewTitle.textContent = labels[activeView];
  const renderers = {
    overview: renderOverview,
    prospects: renderProspects,
    clients: renderClients,
    projects: renderProjects,
    tasks: renderTasks,
    quotes: renderQuotes,
    notes: renderNotes,
    history: renderHistory
  };

  viewRoot.innerHTML = renderers[activeView]();
  renderInspector();
}

function renderOverview() {
  const openTasks = state.tasks.filter((task) => !task.done);
  const hotProspects = state.prospects.filter((prospect) => ["interesse", "contacte"].includes(prospect.status));
  const activeProjects = state.projects.filter((project) => project.status !== "livre");
  const openQuoteAmount = state.quotes
    .filter((quote) => quote.status !== "accepte")
    .reduce((sum, quote) => sum + quote.amount, 0);

  const dueSoon = openTasks
    .slice()
    .sort((a, b) => a.due.localeCompare(b.due))
    .slice(0, 5);

  return `
    <div class="dashboard-grid">
      <div>
        <section class="section metric-grid">
          ${metric("Projets actifs", activeProjects.length, "En concept, production ou validation")}
          ${metric("Prospects chauds", hotProspects.length, "Contactés ou intéressés")}
          ${metric("Tâches ouvertes", openTasks.length, "À traiter dans le cockpit")}
          ${metric("Devis ouverts", formatMoney(openQuoteAmount), "Potentiel non signé")}
        </section>

        ${isWorkspaceEmpty() ? `
          <section class="section panel empty-command">
            <div>
              <div class="eyebrow">Trône vacant</div>
              <h2>Ton cockpit est vide pour l'instant.</h2>
              <p class="meta">Ajoute ton premier élément ou charge les exemples quand tu veux revoir la vision complète.</p>
            </div>
            <div class="empty-actions">
              <button class="primary-button" type="button" data-action="load-demo">Charger les exemples</button>
              <button class="ghost-button" type="button" data-action="clear-data">Garder vide</button>
            </div>
          </section>
        ` : ""}

        <section class="section panel">
          <div class="section-header">
            <div class="section-title">
              <h2>Priorités du moment</h2>
              <div class="meta">${formatDate(isoToday)} · tout ce qui merite ton attention maintenant</div>
            </div>
          </div>
          <div class="task-list">
            ${dueSoon.map(renderTaskRow).join("") || empty("Aucune tâche ouverte.")}
          </div>
        </section>

        <section class="section">
          <div class="section-header">
            <div class="section-title">
              <h2>Pipeline prospects</h2>
              <div class="meta">Contacts recents et prochaines actions</div>
            </div>
          </div>
          <div class="lane-grid">
            ${["a-contacter", "contacte", "interesse"].map((status) => renderProspectLane(status)).join("")}
          </div>
        </section>
      </div>

      <div>
        <section class="section oracle-panel">
          <div>
            <div class="eyebrow">Le Roi-Soleil approuve</div>
            <h2>Kael'thas murmure : le pouvoir ne se perd pas, il se centralise.</h2>
            <p>Anar'alah belore. Même vide, le trône attend ses clients, ses devis et ses quêtes.</p>
          </div>
        </section>

        <section class="section panel">
          <div class="section-header">
            <div class="section-title">
              <h2>Capture rapide</h2>
              <div class="meta">Jette une tâche, une note ou une piste dans le grimoire.</div>
            </div>
          </div>
          <div class="quick-grid">
            <select id="quick-type" class="inline-select">
              <option value="task">Tâche</option>
              <option value="note">Note</option>
              <option value="prospect">Prospect</option>
            </select>
            <button class="primary-button" type="button" onclick="quickCapture()">Ajouter</button>
            <input class="wide inline-input" id="quick-title" placeholder="Ex: Relancer Atelier Carmin">
            <textarea class="wide" id="quick-detail" rows="3" placeholder="Detail, prochaine action, idee brute"></textarea>
          </div>
        </section>

        <section class="section panel">
          <div class="section-header">
            <div class="section-title">
              <h2>Derniers signaux</h2>
              <div class="meta">Historique transversal</div>
            </div>
          </div>
          <div class="timeline">
            ${allActivities().slice(0, 4).map(renderTimelineItem).join("") || empty("Aucun signal pour le moment.")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderProspects() {
  const statuses = ["all", ...Object.keys(prospectStatuses)];
  const prospects = filterItems(state.prospects, ["name", "company", "channel", "notes", "nextAction"])
    .filter((prospect) => activeFilter === "all" || prospect.status === activeFilter);

  return `
    ${moduleToolbar("Prospects", "Personnes contacte/qualifiees", statuses, prospectStatuses)}
    <div class="table-list">
      ${prospects.map((prospect) => `
        <article class="project-row ${isSelected("prospect", prospect.id)}">
          <div>
            <button class="plain-button" data-action="select" data-type="prospect" data-id="${prospect.id}">
              <strong>${escapeHtml(prospect.company)}</strong>
            </button>
            <div class="meta">${escapeHtml(prospect.name)} · ${escapeHtml(prospect.channel)} · depuis ${formatDate(prospect.firstContact)}</div>
          </div>
          <select class="inline-select" data-change="prospect-status" data-id="${prospect.id}">
            ${Object.entries(prospectStatuses).map(([value, label]) => option(value, label, prospect.status)).join("")}
          </select>
          <div class="meta">${escapeHtml(prospect.nextAction)}</div>
          <span class="status-pill gold">${formatDate(prospect.nextDate)}</span>
        </article>
      `).join("") || empty("Aucun prospect ne correspond a la recherche.")}
    </div>
  `;
}

function renderClients() {
  const clients = filterItems(state.clients, ["name", "company", "needs", "notes"]);
  return `
    <section class="section">
      <div class="section-header">
        <div class="section-title">
          <h2>Clients</h2>
          <div class="meta">Fiches, besoins et projets relies</div>
        </div>
      </div>
      <div class="client-grid">
        ${clients.map((client) => `
          <article class="client-tile ${isSelected("client", client.id)}">
            <div class="row-between">
              <button class="plain-button" data-action="select" data-type="client" data-id="${client.id}">
                <strong>${escapeHtml(client.company)}</strong>
              </button>
              ${pill(client.status, client.status === "actif" ? "emerald" : "gold")}
            </div>
            <div class="meta">${escapeHtml(client.name)}</div>
            <p class="meta">${escapeHtml(client.needs)}</p>
            <div class="chips">
              ${client.projects.map((projectId) => `<span class="status-pill">${escapeHtml(projectTitle(projectId))}</span>`).join("")}
            </div>
          </article>
        `).join("") || empty("Aucun client.")}
      </div>
    </section>
  `;
}

function renderProjects() {
  const projects = filterItems(state.projects, ["title", "client", "description", "status"])
    .filter((project) => activeFilter === "all" || project.status === activeFilter);
  const statuses = ["all", ...Object.keys(projectStatuses)];

  return `
    ${moduleToolbar("Projets", "Avancement, livrables et liens utiles", statuses, projectStatuses)}
    <div class="table-list">
      ${projects.map((project) => `
        <article class="project-row ${isSelected("project", project.id)}">
          <div>
            <button class="plain-button" data-action="select" data-type="project" data-id="${project.id}">
              <strong>${escapeHtml(project.title)}</strong>
            </button>
            <div class="meta">${escapeHtml(project.client)} · ${escapeHtml(project.description)}</div>
          </div>
          <select class="inline-select" data-change="project-status" data-id="${project.id}">
            ${Object.entries(projectStatuses).map(([value, label]) => option(value, label, project.status)).join("")}
          </select>
          <div>
            <div class="row-between meta"><span>Avancement</span><span>${project.progress}%</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${project.progress}%"></div></div>
          </div>
          <span class="status-pill gold">${formatDate(project.due)}</span>
        </article>
      `).join("") || empty("Aucun projet ne correspond.")}
    </div>
  `;
}

function renderTasks() {
  const tasks = filterItems(state.tasks, ["title", "project", "priority"])
    .filter((task) => activeFilter === "all" || (activeFilter === "done" ? task.done : task.priority === activeFilter));
  const filters = ["all", "haute", "moyenne", "basse", "done"];
  const labelsByFilter = { ...priorityLabels, done: "Terminées" };

  return `
    ${moduleToolbar("Tâches", "Priorités et deadlines par projet", filters, labelsByFilter)}
    <div class="task-list">
      ${tasks.map(renderTaskRow).join("") || empty("Aucune tâche ne correspond.")}
    </div>
  `;
}

function renderQuotes() {
  const quotes = filterItems(state.quotes, ["client", "project", "title", "status"]);
  return `
    <section class="section">
      <div class="section-header">
        <div class="section-title">
          <h2>Templates de devis</h2>
          <div class="meta">Offres structurées avec lignes, total, acompte et validité</div>
        </div>
        <button class="primary-button" data-action="new-template" type="button">Nouveau template</button>
      </div>
      <div class="quote-grid">
        ${state.quoteTemplates.map(renderQuoteTemplateCard).join("") || empty("Aucun template. Crée ta première base de devis.")}
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <div class="section-title">
          <h2>Historique devis</h2>
          <div class="meta">Brouillons, envois et signatures</div>
        </div>
      </div>
      <div class="table-list">
        ${quotes.map(renderQuoteRow).join("") || empty("Aucun devis.")}
      </div>
    </section>
  `;
}

function renderQuoteTemplateCard(template, index) {
  return `
    <article class="quote-template">
      <div class="row-between">
        <strong>${escapeHtml(template.title)}</strong>
        <span class="status-pill gold">${formatMoney(template.amount)}</span>
      </div>
      <p class="meta">${escapeHtml(template.intro)}</p>
      <div class="quote-lines">
        ${template.items.map(renderQuoteLine).join("")}
      </div>
      <div class="quote-total">
        <span class="meta">Acompte ${template.deposit}% · ${escapeHtml(template.validity)}</span>
        <div class="template-actions">
          <button class="mini-button" data-action="edit-template" data-value="${index}" type="button">Modifier</button>
          <button class="mini-button" data-action="use-template" data-value="${index}" type="button">Créer</button>
        </div>
      </div>
    </article>
  `;
}

function renderQuoteRow(quote) {
  return `
    <article class="project-row ${isSelected("quote", quote.id)}">
      <div>
        <button class="plain-button" data-action="select" data-type="quote" data-id="${quote.id}">
          <strong>${escapeHtml(quote.title)}</strong>
        </button>
        <div class="meta">${escapeHtml(quote.client)} · ${escapeHtml(quote.project)} · ${formatDate(quote.created)}</div>
      </div>
      <select class="inline-select" data-change="quote-status" data-id="${quote.id}">
        ${["brouillon", "envoye", "accepte", "refuse"].map((value) => option(value, capitalize(value), quote.status)).join("")}
      </select>
      <div class="meta">${quoteItemsSummary(quote.items)}</div>
      <span class="status-pill emerald">${formatMoney(quoteTotal(quote))}</span>
    </article>
  `;
}

function renderNotes() {
  const notes = filterItems(state.notes, ["title", "type", "body", "tags"]);
  return `
    <section class="section">
      <div class="section-header">
        <div class="section-title">
          <h2>Notes et idees</h2>
          <div class="meta">Brainstorming, reunions, concepts et systemes</div>
        </div>
      </div>
      <div class="note-grid">
        ${notes.map((note) => `
          <article class="note-tile ${isSelected("note", note.id)}">
            <div class="row-between">
              <button class="plain-button" data-action="select" data-type="note" data-id="${note.id}">
                <strong>${escapeHtml(note.title)}</strong>
              </button>
              ${pill(note.type, "gold")}
            </div>
            <p class="meta">${escapeHtml(note.body)}</p>
            <div class="chips">
              ${note.tags.map((tag) => `<span class="status-pill">${escapeHtml(tag)}</span>`).join("")}
            </div>
          </article>
        `).join("") || empty("Aucune note.")}
      </div>
    </section>
  `;
}

function renderHistory() {
  const activities = filterItems(allActivities(), ["title", "detail", "type"]);
  return `
    <section class="section">
      <div class="section-header">
        <div class="section-title">
          <h2>Historique</h2>
          <div class="meta">Ce qui a ete dit, cree ou change</div>
        </div>
      </div>
      <div class="timeline">
        ${activities.map(renderTimelineItem).join("") || empty("Aucun historique.")}
      </div>
    </section>
  `;
}

function moduleToolbar(title, subtitle, filters, filterLabels) {
  return `
    <div class="module-toolbar">
      <div class="section-title">
        <h2>${escapeHtml(title)}</h2>
        <div class="meta">${escapeHtml(subtitle)}</div>
      </div>
      <div class="segmented">
        ${filters.map((filter) => `
          <button type="button" class="${activeFilter === filter ? "is-active" : ""}" data-action="set-filter" data-value="${filter}">
            ${filter === "all" ? "Tous" : escapeHtml(filterLabels[filter] || filter)}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderProspectLane(status) {
  const prospects = state.prospects.filter((prospect) => prospect.status === status).slice(0, 4);
  return `
    <div class="lane">
      <div class="lane-header">
        <span>${prospectStatuses[status]}</span>
        <span>${prospects.length}</span>
      </div>
      <div class="lane-body">
        ${prospects.map((prospect) => `
          <article class="item-card ${isSelected("prospect", prospect.id)}">
            <div class="card-title">
              <button class="plain-button" data-action="select" data-type="prospect" data-id="${prospect.id}">
                ${escapeHtml(prospect.company)}
              </button>
              ${pill(prospect.channel, "gold")}
            </div>
            <div class="meta">${escapeHtml(prospect.nextAction)}</div>
            <div class="row-between">
              <span class="meta">${escapeHtml(prospect.name)}</span>
              <span class="status-pill">${formatDate(prospect.nextDate)}</span>
            </div>
          </article>
        `).join("") || empty("Rien dans cette colonne.")}
      </div>
    </div>
  `;
}

function renderTaskRow(task) {
  return `
    <article class="task-row ${task.done ? "done" : ""}">
      <input type="checkbox" ${task.done ? "checked" : ""} data-action="toggle-task" data-id="${task.id}" aria-label="Terminer ${escapeHtml(task.title)}">
      <div>
        <button class="plain-button task-title" data-action="select" data-type="task" data-id="${task.id}" type="button">
          ${escapeHtml(task.title)}
        </button>
        <div class="meta">${escapeHtml(task.project)}</div>
      </div>
      ${pill(priorityLabels[task.priority] || task.priority, task.priority === "haute" ? "oxblood" : task.priority === "moyenne" ? "gold" : "")}
      <span class="status-pill">${formatDate(task.due)}</span>
    </article>
  `;
}

function renderTimelineItem(activity) {
  return `
    <article class="timeline-item">
      <div class="timeline-date">${formatDate(activity.date)}</div>
      <div class="timeline-body">
        <strong>${escapeHtml(activity.title)}</strong>
        <div class="meta">${escapeHtml(activity.detail)} · ${escapeHtml(activity.type)}</div>
      </div>
    </article>
  `;
}

function renderInspector() {
  const selected = state.selected;
  if (!selected) {
    inspector.innerHTML = `
      <div class="inspector-empty">
        <div class="sigil">✦</div>
        <h2>Détails</h2>
        <p>${isWorkspaceEmpty()
          ? "Ce panneau affiche la fiche de l'élément sélectionné. Le cockpit est vide pour le moment, donc il n'y a encore rien à ouvrir."
          : "Sélectionne un prospect, client, projet, tâche, devis ou note pour voir son contexte ici."}</p>
        <div class="inspector-actions">
          <button class="primary-button" data-inspector-action="new-entry" type="button">Créer</button>
          ${isWorkspaceEmpty() ? `<button class="ghost-button" data-inspector-action="load-demo" type="button">Charger les exemples</button>` : ""}
        </div>
      </div>
    `;
    return;
  }

  const item = getSelectedItem(selected);
  if (!item) {
    state.selected = null;
    renderInspector();
    return;
  }

  inspector.innerHTML = detailTemplate(selected.type, item);
}

function detailTemplate(type, item) {
  if (type === "prospect") {
    return `
      <div class="detail-stack">
        ${detailHero(item.company, `${item.name} · ${prospectStatuses[item.status]}`)}
        ${detailBlock("Prochaine action", [item.nextAction, `Date: ${formatDate(item.nextDate)}`])}
        ${detailBlock("Notes", [item.notes])}
        ${detailBlock("Historique", item.history)}
      </div>
    `;
  }

  if (type === "client") {
    const projects = item.projects.map(projectTitle);
    return `
      <div class="detail-stack">
        ${detailHero(item.company, `${item.name} · ${item.status}`)}
        ${detailBlock("Besoins", [item.needs])}
        ${detailBlock("Notes", [item.notes])}
        ${detailBlock("Projets relies", projects.length ? projects : ["Aucun projet lie"])}
      </div>
    `;
  }

  if (type === "project") {
    const relatedTasks = state.tasks.filter((task) => task.project === item.title).map((task) => task.title);
    return `
      <div class="detail-stack">
        ${detailHero(item.title, `${item.client} · ${projectStatuses[item.status]}`)}
        ${detailBlock("Description", [item.description])}
        ${detailBlock("Avancement", [`${item.progress}%`, `Deadline: ${formatDate(item.due)}`])}
        ${detailBlock("Liens utiles", item.links.length ? item.links : ["Aucun lien"])}
        ${detailBlock("Tâches liées", relatedTasks.length ? relatedTasks : ["Aucune tâche liée"])}
      </div>
    `;
  }

  if (type === "task") {
    return `
      <div class="detail-stack">
        ${detailHero(item.title, `${item.project} · ${item.done ? "Terminée" : "Ouverte"}`)}
        ${detailBlock("Priorité", [priorityLabels[item.priority] || item.priority])}
        ${detailBlock("Deadline", [formatDate(item.due)])}
        ${detailBlock("Statut", [item.done ? "Tâche terminée" : "À faire"])}
      </div>
    `;
  }

  if (type === "quote") {
    return `
      <div class="detail-stack">
        ${detailHero(item.title, `${item.client} · ${formatMoney(quoteTotal(item))}`)}
        ${detailBlock("Statut", [capitalize(item.status), `Créé le ${formatDate(item.created)}`])}
        ${renderQuotePreview(item)}
      </div>
    `;
  }

  if (type === "note") {
    return `
      <div class="detail-stack">
        ${detailHero(item.title, `${item.type} · ${formatDate(item.updated)}`)}
        ${detailBlock("Contenu", [item.body])}
        ${detailBlock("Tags", item.tags)}
      </div>
    `;
  }

  return "";
}

function detailHero(title, subtitle) {
  return `
    <header class="detail-hero">
      <div class="eyebrow">Detail</div>
      <h2>${escapeHtml(title)}</h2>
      <div class="meta">${escapeHtml(subtitle)}</div>
    </header>
  `;
}

function detailBlock(title, lines) {
  return `
    <section class="detail-block">
      <div class="micro-label">${escapeHtml(title)}</div>
      <ul class="detail-list">
        ${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
      </ul>
    </section>
  `;
}

function renderQuotePreview(quote) {
  const deliverables = quote.deliverables?.length ? quote.deliverables : ["Livrables à préciser"];
  const terms = quote.terms?.length ? quote.terms : ["Conditions à préciser"];
  return `
    <section class="detail-block">
      <div class="micro-label">Objet</div>
      <p class="meta">${escapeHtml(quote.intro || "Devis à compléter.")}</p>
    </section>
    <section class="detail-block">
      <div class="micro-label">Lignes de devis</div>
      <div class="quote-lines">
        ${normalizeQuoteItems(quote.items).map(renderQuoteLine).join("")}
      </div>
      <div class="quote-total">
        <span>Total estimé</span>
        <strong>${formatMoney(quoteTotal(quote))}</strong>
      </div>
    </section>
    ${detailBlock("Livrables", deliverables)}
    ${detailBlock("Modalités", [
      `Acompte: ${quote.deposit || 40}%`,
      `Délai: ${quote.timeline || "À confirmer"}`,
      `Validité: ${quote.validity || "30 jours"}`,
      ...terms
    ])}
  `;
}

function renderQuoteLine(item) {
  const line = normalizeQuoteItem(item);
  return `
    <div class="quote-line">
      <strong>${escapeHtml(line.label)}</strong>
      <span>${line.price ? formatMoney(line.price) : "À chiffrer"}</span>
      <div class="meta">${escapeHtml(line.detail)}</div>
    </div>
  `;
}

function quoteItemsSummary(items) {
  return normalizeQuoteItems(items)
    .map((item) => item.label)
    .join(" · ");
}

function quoteTotal(quote) {
  if (Number.isFinite(quote.amount) && quote.amount > 0) return quote.amount;
  return normalizeQuoteItems(quote.items).reduce((sum, item) => sum + (Number(item.price) || 0), 0);
}

function normalizeQuoteItems(items = []) {
  return items.map(normalizeQuoteItem);
}

function normalizeQuoteItem(item) {
  if (typeof item === "string") {
    return { label: item, detail: "Ligne héritée à détailler", price: 0 };
  }

  return {
    label: item?.label || "Prestation",
    detail: item?.detail || "À détailler",
    price: Number(item?.price) || 0
  };
}

function getSelectedItem(selected) {
  const collections = {
    prospect: state.prospects,
    client: state.clients,
    project: state.projects,
    task: state.tasks,
    quote: state.quotes,
    note: state.notes
  };
  return collections[selected.type]?.find((item) => item.id === selected.id);
}

function allActivities() {
  const prospectActivities = state.prospects.flatMap((prospect) =>
    prospect.history.map((entry, index) => ({
      id: `${prospect.id}-${index}`,
      date: index === 0 ? prospect.firstContact : prospect.nextDate,
      type: "prospect",
      title: prospect.company,
      detail: entry
    }))
  );

  return [...state.activities, ...prospectActivities].sort((a, b) => b.date.localeCompare(a.date));
}

function isWorkspaceEmpty() {
  return [
    state.prospects,
    state.clients,
    state.projects,
    state.tasks,
    state.quotes,
    state.notes,
    state.activities
  ].every((collection) => collection.length === 0);
}

function filterItems(items, fields) {
  if (!query) return items;
  return items.filter((item) =>
    fields.some((field) => {
      const value = item[field];
      if (Array.isArray(value)) return value.join(" ").toLowerCase().includes(query);
      return String(value || "").toLowerCase().includes(query);
    })
  );
}

function projectTitle(id) {
  return state.projects.find((project) => project.id === id)?.title || id;
}

function metric(label, value, caption) {
  return `
    <article class="metric">
      <div class="micro-label">${escapeHtml(label)}</div>
      <div class="metric-value">${escapeHtml(String(value))}</div>
      <div class="metric-caption">${escapeHtml(caption)}</div>
    </article>
  `;
}

function pill(text, tone = "") {
  return `<span class="status-pill ${tone}">${escapeHtml(text)}</span>`;
}

function option(value, label, current) {
  return `<option value="${escapeHtml(value)}" ${value === current ? "selected" : ""}>${escapeHtml(label)}</option>`;
}

function empty(text) {
  return `<div class="empty-state">${escapeHtml(text)}</div>`;
}

function isSelected(type, id) {
  return state.selected?.type === type && state.selected?.id === id ? "is-selected" : "";
}

function formatDate(date) {
  if (!date) return "Sans date";
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

function formatMoney(value) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

window.quickCapture = function quickCapture() {
  const title = document.querySelector("#quick-title").value.trim();
  const detail = document.querySelector("#quick-detail").value.trim();
  const type = document.querySelector("#quick-type").value;
  if (!title) {
    showToast("Ajoute un titre d'abord.");
    return;
  }
  createEntry({ type, title, detail, date: isoToday });
  document.querySelector("#quick-title").value = "";
  document.querySelector("#quick-detail").value = "";
};

render();
