// Liste des documents du site.
// Pour ajouter un document : 1) déposez le fichier dans le dossier documents/
// 2) ajoutez un bloc { ... } ci-dessous dans la bonne catégorie (categorie: id existant ou nouveau).
const CATEGORIES = [
  { id: "cours", nom: "Cours du stage (théorie)", icone: "📚" },
  { id: "entrainement", nom: "Entraînement & progressions", icone: "📈" },
  { id: "programme", nom: "Programme & organisation", icone: "🗓️" },
  { id: "referentiels", nom: "Manuels & référentiels", icone: "📖" },
  { id: "valise", nom: "Valise pédagogique", icone: "🧰" },
];

const DOCUMENTS = [
  /* ---- COURS ---- */
  {
    categorie: "cours",
    titre: "Physiologie & accidents de l'apnée (2026)",
    description: "Formation complète en 60 diapositives et deux parties — lois physiques, physiologie, réflexe d'immersion, hyperventilation, et toutes les fiches accidents. Notes formateur incluses. Support du dimanche matin.",
    fichier: "documents/Synthese_physiologie_accidents_apnee.pptx",
    type: "PPTX",
  },
  {
    categorie: "cours",
    titre: "Les facteurs de la performance en apnée (2026)",
    description: "21 diapositives actualisées : équation de la performance, spleen effect, tolérances CO₂/hypoxie, sécurité, méthodologie. Support du dimanche 10h30. À compléter par les schémas stratégiques de l'onglet Photos & schémas.",
    fichier: "documents/Facteurs_performance_apnee_2026.pptx",
    type: "PPTX",
  },
  {
    categorie: "cours",
    titre: "La réglementation de la pratique",
    description: "Support du samedi 9h15 : cadre légal et fédéral de la pratique et de l'encadrement de l'apnée. Vérifier les textes en vigueur (voir addendum 2026).",
    fichier: "documents/Reglementation_de_la_pratique.pptx",
    type: "PPTX",
  },
  {
    categorie: "cours",
    titre: "L'organisation de la sécurité",
    description: "Support du samedi 10h30 : organiser la sécurité d'une séance et d'une sortie — rôles, binômes, matériel, plan de secours.",
    fichier: "documents/Organisation_de_la_securite.pptx",
    type: "PPTX",
  },
  {
    categorie: "cours",
    titre: "Pédagogie de la pratique",
    description: "Support du samedi 11h30 : construire et conduire une séance — lois de l'apprentissage, étapes, types de séances, évaluation.",
    fichier: "documents/Pedagogie_de_la_pratique.pptx",
    type: "PPTX",
  },
  {
    categorie: "cours",
    titre: "Présentation générale du stage",
    description: "Diaporama d'ouverture : objectifs de la formation, déroulé et attendus.",
    fichier: "documents/Presentation_generale_stage.pptx",
    type: "PPTX",
  },

  /* ---- ENTRAÎNEMENT & PROGRESSIONS ---- */
  {
    categorie: "entrainement",
    titre: "Construction de l'entraînement",
    description: "Support de référence du dimanche 11h30 : bâtir un entraînement en cycles (foncier → spécifique), doser volume et intensité. À lire avec la pyramide et les tableaux de cycles (onglet Photos & schémas).",
    fichier: "documents/Construction_de_l_entrainement.pdf",
    type: "PDF",
  },
  {
    categorie: "entrainement",
    titre: "Construction de progressions",
    description: "Méthode complète pour construire une progression pédagogique — LE sujet d'examen des MEF1 (dimanche 14h).",
    fichier: "documents/Construction_de_progressions.pdf",
    type: "PDF",
  },
  {
    categorie: "entrainement",
    titre: "Fiche express : construire une progression",
    description: "La version condensée à garder sous la main pour les présentations au tableau.",
    fichier: "documents/Construction_d_une_progression_fiche.pdf",
    type: "PDF",
  },
  {
    categorie: "entrainement",
    titre: "Mémo entraînement — à remettre aux stagiaires",
    description: "Le document distribuable qui récapitule facteurs de performance et principes d'entraînement.",
    fichier: "documents/Memo_entrainement_stagiaires.docx",
    type: "DOCX",
  },

  /* ---- PROGRAMME ---- */
  {
    categorie: "programme",
    titre: "Programme officiel du stage initial",
    description: "Programme détaillé des 7, 8 et 9 août 2026 à Lifou : horaires, thèmes et intervenants, jour par jour.",
    fichier: "documents/Programme_stage_initial_Lifou_aout_2026.pdf",
    type: "PDF",
  },
  {
    categorie: "programme",
    titre: "Récap organisation & logistique",
    description: "Informations pratiques : hébergement à Luecila, repas, transport, et rappels importants pour les participants.",
    fichier: "documents/Recap_organisation_stage_Lifou.docx",
    type: "DOCX",
  },
  {
    categorie: "programme",
    titre: "L'équipe : stagiaires et instructeur",
    description: "Présentation des stagiaires (initiateurs, MEF) et de l'encadrement.",
    fichier: "documents/Equipe_stagiaires_et_instructeur.pdf",
    type: "PDF",
  },

  /* ---- RÉFÉRENTIELS ---- */
  {
    categorie: "referentiels",
    titre: "⭐ Manuel du Moniteur d'apnée — Édition actualisée 2026",
    description: "LE document de référence du stage : compilation en 8 chapitres du manuel de 2004 (pédagogie), du cadre fédéral actuel (cursus 2019, IE1→MEF2, RIFAA), de la physiologie moderne, des fiches accidents, des facteurs de la performance et de l'organisation des séances. Avec annexe des chiffres à connaître.",
    fichier: "documents/Manuel_Moniteur_Apnee_2026.docx",
    type: "DOCX",
  },
  {
    categorie: "referentiels",
    titre: "Addendum 2026 — Ce qui a changé depuis 2004",
    description: "La fiche express : refonte des cursus 2019, filière cadres, RIFAA obligatoire, liens vers les textes officiels en vigueur.",
    fichier: "documents/Addendum_actualisation_manuel_2026.docx",
    type: "DOCX",
  },
  {
    categorie: "referentiels",
    titre: "Manuel du Moniteur d'apnée stagiaire (2004 — historique)",
    description: "Le manuel pédagogique d'origine (67 pages) : précieux pour la pédagogie et la culture apnée, mais les cursus qu'il décrit sont obsolètes — lisez le manuel 2026 et l'addendum ci-dessus.",
    fichier: "documents/Manuel_Moniteur.pdf",
    type: "PDF",
  },

  /* ---- VALISE PÉDAGOGIQUE ---- */
  {
    categorie: "valise",
    titre: "Valise pédagogique — Généralités",
    description: "Le socle de la valise pédagogique fédérale : principes et activités pour enseigner l'aisance aquatique et subaquatique.",
    fichier: "documents/Valise_pedagogique_0_Generalites.pdf",
    type: "PDF",
  },
  {
    categorie: "valise",
    titre: "Vidéo : faire imploser une canette",
    description: "Expérience de physique spectaculaire pour illustrer la pression en cours (Boyle-Mariotte) — à projeter pendant le chapitre lois physiques.",
    fichier: "documents/Video_imploser_une_canette.mp4",
    type: "MP4",
  },
  {
    categorie: "valise",
    titre: "📦 Autres ressources de la valise (sur demande)",
    description: "Trop volumineux pour le site : « Aisance aquatique » (29 Mo), « Jouer ensemble sous l'eau » (24 Mo), « Hockey subaquatique » (22 Mo), et les 4 vidéos RIFA de sauvetage d'un syncopé (120-180 Mo chacune). Disponibles auprès des formateurs sur clé USB.",
    fichier: "documents/Valise_pedagogique_0_Generalites.pdf",
    type: "INFO",
  },
];
