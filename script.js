// ===== Textos de la interfaz / UI texts =====
const UI = {
  es: {
    title: "Técnica de Natación",
    startTitle: "¿Sabés nadar bien?",
    startText: "Te mostramos ejercicios de natación. Decidí si la técnica descripta es CORRECTA o INCORRECTA.",
    start: "Empezar",
    correct: "Correcto",
    incorrect: "Incorrecto",
    next: "Siguiente",
    finish: "Ver resultado",
    endTitle: "¡Terminaste!",
    restart: "Jugar de nuevo",
    question: (i, n) => `Ejercicio ${i} de ${n}`,
    right: "¡Bien! 🎉",
    wrong: "¡Uy, no! 💦",
    wasCorrect: "La técnica era CORRECTA.",
    wasIncorrect: "La técnica era INCORRECTA.",
    msgs: ["¡Nivel olímpico! 🥇", "¡Muy buen nado! 🥈", "Vas bien, seguí practicando 🥉", "A repasar la técnica 🐠"],
  },
  en: {
    title: "Swimming Technique",
    startTitle: "Do you swim right?",
    startText: "We'll show you swimming drills. Decide whether the described technique is CORRECT or INCORRECT.",
    start: "Start",
    correct: "Correct",
    incorrect: "Incorrect",
    next: "Next",
    finish: "See results",
    endTitle: "You finished!",
    restart: "Play again",
    question: (i, n) => `Drill ${i} of ${n}`,
    right: "Nice! 🎉",
    wrong: "Oops! 💦",
    wasCorrect: "The technique was CORRECT.",
    wasIncorrect: "The technique was INCORRECT.",
    msgs: ["Olympic level! 🥇", "Great swimming! 🥈", "Good, keep practicing 🥉", "Time to review technique 🐠"],
  },
};

// ===== Ejercicios / Drills =====
// correct: true  -> la técnica descripta es correcta
// correct: false -> la técnica descripta tiene un error
const EXERCISES = [
  {
    icon: "🏊‍♀️", correct: true,
    stroke: { es: "Crol", en: "Freestyle" },
    name: { es: "Respiración lateral", en: "Side breathing" },
    desc: {
      es: "Girás la cabeza hacia el costado junto con la rotación del cuerpo, con un ojo dentro del agua, y respirás por la boca.",
      en: "You turn your head to the side along with your body rotation, one eye still in the water, and breathe through your mouth.",
    },
    why: {
      es: "Girar con el cuerpo y mantener un ojo en el agua mantiene la línea y evita que se hundan las piernas.",
      en: "Rotating with the body and keeping one eye in the water keeps you aligned and stops your legs from sinking.",
    },
  },
  {
    icon: "🏊", correct: false,
    stroke: { es: "Crol", en: "Freestyle" },
    name: { es: "Respirar levantando la cabeza", en: "Lifting the head to breathe" },
    desc: {
      es: "Para respirar levantás la cabeza hacia adelante y la sacás completamente del agua.",
      en: "To breathe, you lift your head forward and take it completely out of the water.",
    },
    why: {
      es: "Levantar la cabeza hunde la cadera y las piernas y frena el avance. Hay que girar la cabeza de costado.",
      en: "Lifting the head drops your hips and legs and slows you down. You should turn your head to the side.",
    },
  },
  {
    icon: "🦵", correct: true,
    stroke: { es: "Crol", en: "Freestyle" },
    name: { es: "Patada desde la cadera", en: "Kick from the hips" },
    desc: {
      es: "La patada nace en la cadera, con piernas casi estiradas, rodillas apenas flexionadas y tobillos relajados.",
      en: "The kick starts at the hips, legs almost straight, knees slightly bent and ankles relaxed.",
    },
    why: {
      es: "Patear desde la cadera es más eficiente y genera menos resistencia.",
      en: "Kicking from the hips is more efficient and creates less drag.",
    },
  },
  {
    icon: "🚲", correct: false,
    stroke: { es: "Crol", en: "Freestyle" },
    name: { es: "Patada de bicicleta", en: "Bicycle kick" },
    desc: {
      es: "Doblás mucho las rodillas y pateás como si pedalearas una bicicleta.",
      en: "You bend your knees a lot and kick as if you were pedaling a bicycle.",
    },
    why: {
      es: "Flexionar tanto las rodillas genera resistencia y casi no propulsa. La patada debe ser desde la cadera.",
      en: "Bending the knees that much creates drag and gives almost no propulsion. Kick from the hips.",
    },
  },
  {
    icon: "🙆", correct: false,
    stroke: { es: "Espalda", en: "Backstroke" },
    name: { es: "Cadera hundida", en: "Sinking hips" },
    desc: {
      es: "Nadás espalda sentado en el agua, con la cadera baja y la cabeza levantada mirando tus pies.",
      en: "You swim backstroke sitting in the water, hips low and head raised looking at your feet.",
    },
    why: {
      es: "En espalda la cabeza va apoyada, mirando hacia arriba, y la cadera alta cerca de la superficie.",
      en: "In backstroke your head rests back looking up, with hips high near the surface.",
    },
  },
  {
    icon: "🙌", correct: true,
    stroke: { es: "Espalda", en: "Backstroke" },
    name: { es: "Entrada con el meñique", en: "Pinky-first entry" },
    desc: {
      es: "El brazo entra estirado por encima del hombro y la mano entra al agua primero con el dedo meñique.",
      en: "The arm enters straight above the shoulder and the hand goes into the water pinky finger first.",
    },
    why: {
      es: "Entrar con el meñique deja la palma lista para traccionar y cuida el hombro.",
      en: "A pinky-first entry sets the palm up for the pull and protects the shoulder.",
    },
  },
  {
    icon: "🐸", correct: true,
    stroke: { es: "Pecho", en: "Breaststroke" },
    name: { es: "Tirar, respirar, patear, deslizar", en: "Pull, breathe, kick, glide" },
    desc: {
      es: "Hacés la brazada y respirás, luego la patada de rana, y te deslizás con los brazos estirados.",
      en: "You pull and breathe, then do the frog kick, and glide with your arms stretched out.",
    },
    why: {
      es: "Es el orden correcto del ciclo de pecho; el deslizamiento aprovecha el impulso.",
      en: "That's the correct breaststroke cycle; the glide uses the momentum.",
    },
  },
  {
    icon: "🐸", correct: false,
    stroke: { es: "Pecho", en: "Breaststroke" },
    name: { es: "Brazos y piernas a la vez", en: "Arms and legs together" },
    desc: {
      es: "Tirás con los brazos y pateás con las piernas exactamente al mismo tiempo, sin deslizar.",
      en: "You pull with your arms and kick with your legs at exactly the same time, with no glide.",
    },
    why: {
      es: "Si brazos y piernas trabajan juntos se anulan. Primero brazos, después patada, y deslizás.",
      en: "If arms and legs work together they cancel out. Arms first, then kick, then glide.",
    },
  },
  {
    icon: "🦋", correct: true,
    stroke: { es: "Mariposa", en: "Butterfly" },
    name: { es: "Dos patadas por brazada", en: "Two kicks per stroke" },
    desc: {
      es: "Hacés dos patadas de delfín por cada brazada: una cuando entran las manos y otra cuando salen.",
      en: "You do two dolphin kicks per arm stroke: one when the hands enter and one when they exit.",
    },
    why: {
      es: "Ese ritmo de dos patadas da el ondular y el empuje propios de la mariposa.",
      en: "That two-kick rhythm gives butterfly its undulation and push.",
    },
  },
  {
    icon: "🦋", correct: false,
    stroke: { es: "Mariposa", en: "Butterfly" },
    name: { es: "Brazos alternados", en: "Alternating arms" },
    desc: {
      es: "En mariposa movés primero un brazo y después el otro, como en crol.",
      en: "In butterfly you move one arm and then the other, like in freestyle.",
    },
    why: {
      es: "En mariposa los dos brazos se mueven juntos y simétricos.",
      en: "In butterfly both arms move together, symmetrically.",
    },
  },
  {
    icon: "🫧", correct: true,
    stroke: { es: "General", en: "General" },
    name: { es: "Exhalar bajo el agua", en: "Exhale underwater" },
    desc: {
      es: "Vas soltando el aire por la nariz y la boca mientras tenés la cara dentro del agua.",
      en: "You let the air out through your nose and mouth while your face is in the water.",
    },
    why: {
      es: "Exhalar abajo te deja inhalar rápido al girar y evita la fatiga.",
      en: "Exhaling underwater lets you inhale quickly when you turn and prevents fatigue.",
    },
  },
  {
    icon: "😮‍💨", correct: false,
    stroke: { es: "General", en: "General" },
    name: { es: "Aguantar el aire", en: "Holding your breath" },
    desc: {
      es: "Aguantás el aire todo el tiempo bajo el agua y lo soltás de golpe al sacar la cabeza.",
      en: "You hold your breath the whole time underwater and let it all out when you lift your head.",
    },
    why: {
      es: "Así no te da el tiempo para exhalar e inhalar: te cansás y tragás agua.",
      en: "That leaves no time to exhale and inhale: you get tired and swallow water.",
    },
  },
];

// ===== Estado / State =====
let lang = "es";
let order = [];
let index = 0;
let score = 0;
let answered = false;

const $ = (id) => document.getElementById(id);
const t = (key) => UI[lang][key];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function show(screenId) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  $(screenId).classList.add("active");
}

function applyStaticTexts() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = t(el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll(".lang-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
}

function renderQuestion() {
  const ex = order[index];
  $("progress-text").textContent = t("question")(index + 1, order.length);
  $("progress-bar").style.width = `${(index / order.length) * 100}%`;
  $("score").textContent = score;
  $("stroke").textContent = ex.stroke[lang];
  $("illus").textContent = ex.icon;
  $("exercise-name").textContent = ex.name[lang];
  $("exercise-desc").textContent = ex.desc[lang];
  if (answered) renderFeedback();
}

function renderFeedback() {
  const ex = order[index];
  const fb = $("feedback");
  const right = fb.dataset.right === "true";
  fb.classList.remove("hidden", "right", "wrong");
  fb.classList.add(right ? "right" : "wrong");
  $("feedback-title").textContent = right ? t("right") : t("wrong");
  $("feedback-text").textContent =
    `${ex.correct ? t("wasCorrect") : t("wasIncorrect")} ${ex.why[lang]}`;
  $("btn-next").textContent = index === order.length - 1 ? t("finish") : t("next");
}

function answer(choice) {
  if (answered) return;
  answered = true;
  const ex = order[index];
  const right = choice === ex.correct;
  if (right) score++;
  $("score").textContent = score;
  document.querySelectorAll(".answer").forEach((b) => {
    b.disabled = true;
    if ((b.dataset.answer === "true") === choice) b.classList.add("chosen");
  });
  $("feedback").dataset.right = right;
  renderFeedback();
}

function next() {
  index++;
  if (index >= order.length) return renderEnd();
  answered = false;
  $("feedback").classList.add("hidden");
  document.querySelectorAll(".answer").forEach((b) => {
    b.disabled = false;
    b.classList.remove("chosen");
  });
  renderQuestion();
}

function renderEnd() {
  $("progress-bar").style.width = "100%";
  const pct = score / order.length;
  const tier = pct >= 0.9 ? 0 : pct >= 0.7 ? 1 : pct >= 0.5 ? 2 : 3;
  $("end-emoji").textContent = ["🏆", "🥈", "🥉", "🐠"][tier];
  $("final-score").textContent = `${score} / ${order.length}`;
  $("end-msg").textContent = t("msgs")[tier];
  show("screen-end");
}

function start() {
  order = shuffle(EXERCISES);
  index = 0;
  score = 0;
  answered = false;
  $("feedback").classList.add("hidden");
  document.querySelectorAll(".answer").forEach((b) => {
    b.disabled = false;
    b.classList.remove("chosen");
  });
  renderQuestion();
  show("screen-quiz");
}

// ===== Eventos / Events =====
$("btn-start").addEventListener("click", start);
$("btn-restart").addEventListener("click", start);
$("btn-next").addEventListener("click", next);
document.querySelectorAll(".answer").forEach((b) =>
  b.addEventListener("click", () => answer(b.dataset.answer === "true"))
);
document.querySelectorAll(".lang-btn").forEach((b) =>
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    applyStaticTexts();
    if ($("screen-quiz").classList.contains("active")) renderQuestion();
    if ($("screen-end").classList.contains("active")) renderEnd();
  })
);

applyStaticTexts();
