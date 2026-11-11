/**
 * CIEDU Perú — Educational Platform Interactive Logic
 * All 23 Courses with enriched information, syllabus modules, and WhatsApp links
 */

const COURSES_DATA = [
  // --- 1. Ascenso PNP y Fuerzas Armadas (13 Cursos) ---
  {
    id: 'criminalistica',
    title: 'Criminalística y Ciencias Forenses',
    category: 'pnp',
    badge: 'Ascenso PNP · Alta Demanda',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo + Grabado',
    summary: 'Estudio de la escena del crimen, dactiloscopia, balística forense y preservación de evidencias conforme al NCPP.',
    description: 'Curso de alta especialización policial y jurídica diseñado para dominar las técnicas de inspección criminalística, cadena de custodia, recojo de indicios, peritajes balísticos y grafotécnicos con valor probatorio en el proceso penal peruano.',
    syllabus: [
      'Módulo 1: Introducción a la Criminalística y metodología en la escena del crimen.',
      'Módulo 2: Dactiloscopia, lofoscopia y sistemas de identificación biométrica.',
      'Módulo 3: Balística forense: armas de fuego, trayectorias y lesiones por proyectil.',
      'Módulo 4: Cadena de custodia y sustentación de informes periciales en juicio oral.'
    ]
  },
  {
    id: 'armapol',
    title: 'Armapol y Tiro Policial',
    category: 'pnp',
    badge: 'Uso de la Fuerza PNP',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual y Semi-presencial',
    summary: 'Normativa del uso progresivo y diferenciado de la fuerza (D.L. 1186), medidas de seguridad y técnicas de tiro.',
    description: 'Capacitación táctica y doctrinaria centrada en los principios jurídicos y procedimentales del Decreto Legislativo 1186, manejo seguro de armamento policial, mantenimiento, despeje de fallas y tiro de reacción.',
    syllabus: [
      'Módulo 1: Marco normativo del D.L. 1186 y estándares internacionales de DD.HH.',
      'Módulo 2: Clasificación de armas de puño y largo alcance de uso policial.',
      'Módulo 3: Medidas de seguridad y decálogo de tiro defensivo.',
      'Módulo 4: Técnicas de tiro reactivo, toma de posiciones y tiro nocturno.'
    ]
  },
  {
    id: 'codigo-militar',
    title: 'Código de Justicia Militar-Policial',
    category: 'pnp',
    badge: 'Ascenso PNP y FF.AA.',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo + Campus 24/7',
    summary: 'Análisis de delitos de función militar-policial, proceso especial y jurisprudencia del Fuero Militar Policial.',
    description: 'Estudio detallado del Código de Justicia Militar Policial peruano, tipificación de delitos de función, desobediencia, abandono de puesto, debido proceso y fueros competenciales.',
    syllabus: [
      'Módulo 1: Estructura y principios del Fuero Militar Policial.',
      'Módulo 2: Tipología de delitos de función y distinciones con el delito común.',
      'Módulo 3: Procedimiento penal militar policial y etapas de juzgamiento.',
      'Módulo 4: Análisis de casos emblemáticos y criterios jurisdiccionales.'
    ]
  },
  {
    id: 'documentacion-policial',
    title: 'Documentación Policial y Redacción de Actas',
    category: 'pnp',
    badge: 'Operatividad PNP',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Elaboración técnica de partes, actas de intervención, informes periciales y oficios sin vicios de nulidad.',
    description: 'Taller práctico orientado a redactar con precisión jurídica y claridad sintáctica todos los documentos policiales requeridos por el Ministerio Público para evitar nulidades procesales.',
    syllabus: [
      'Módulo 1: Redacción jurídica y estructura del acta de intervención policial.',
      'Módulo 2: Actas de registro personal, vehicular, incautación y comiso.',
      'Módulo 3: Elaboración de partes disciplinarios e informes de investigación sumaria.',
      'Módulo 4: Simulación de casos y corrección de vicios frecuentes de redacción.'
    ]
  },
  {
    id: 'transito-seguridad',
    title: 'Tránsito y Seguridad Vial',
    category: 'pnp',
    badge: 'Fiscalización & Tránsito',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Reglamento Nacional de Tránsito, papeletas de infracción, fiscalización vehicular e investigación de accidentes.',
    description: 'Curso fundamental para efectivos asignados al control de tránsito y comisarías. Análisis del TUO del Reglamento Nacional de Tránsito, protocolo de intervención a conductores y alcoholemia.',
    syllabus: [
      'Módulo 1: TUO del Reglamento Nacional de Tránsito (D.S. 016-2009-MTC) y modificatorias.',
      'Módulo 2: Tipificación y aplicación de papeletas de infracción (M, G, L).',
      'Módulo 3: Protocolo de intervención policial y control de alcoholemia cualitativa y cuantitativa.',
      'Módulo 4: Peritaje preliminar en accidentes de tránsito y responsabilidad civil/penal.'
    ]
  },
  {
    id: 'orden-publico',
    title: 'Orden Público y Control de Multitudes',
    category: 'pnp',
    badge: 'Táctica Operativa',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Tácticas de disuasión, formaciones de escuadra, mediación en conflictos sociales y protocolos USE.',
    description: 'Especialización en tácticas de mantenimiento y restablecimiento del orden público, formaciones tácticas, empleo de agentes químicos disuasivos y respeto irrestricto de los Derechos Humanos.',
    syllabus: [
      'Módulo 1: Doctrina de orden público y dinámica de masas.',
      'Módulo 2: Tácticas de formaciones de escuadra y sección de control de multitudes.',
      'Módulo 3: Uso racional de medios no letales y gases lacrimógenos.',
      'Módulo 4: Mediación, diálogo preventivo y gestión de crisis en conflictos sociales.'
    ]
  },
  {
    id: 'orden-abierto',
    title: 'Orden Abierto y Mando de Unidades',
    category: 'pnp',
    badge: 'Liderazgo de Mando',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Técnicas de desplazamiento en terreno abierto, combate urbano y conducción de patrullas.',
    description: 'Instrucción avanzada sobre técnicas de patrullaje táctico, aproximación a objetivos de riesgo, cobertura y formaciones de orden abierto en zonas agrestes y urbanas.',
    syllabus: [
      'Módulo 1: Fundamentos y formaciones de orden abierto.',
      'Módulo 2: Señales de mando, avance por saltos y cobertura táctica.',
      'Módulo 3: Operaciones de patrullaje en zonas rurales y de frontera.',
      'Módulo 4: Toma de decisiones bajo presión y liderazgo en el terreno.'
    ]
  },
  {
    id: 'seguridad-ciudadana',
    title: 'Seguridad Ciudadana y Patrullaje Integrado',
    category: 'pnp',
    badge: 'Gestión Local & Comisarías',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Estrategias de policía comunitaria, patrullaje integrado con Serenazgo y mapas del delito.',
    description: 'Programa para optimizar el acercamiento vecinal, articulación interinstitucional con comités distritales (CODISEC) y estrategias focalizadas de reducción del delito común.',
    syllabus: [
      'Módulo 1: Ley del Sistema Nacional de Seguridad Ciudadana (SINASEC).',
      'Módulo 2: Metodología del Patrullaje Integrado PNP - Gobiernos Locales.',
      'Módulo 3: Elaboración y lectura de mapas del delito y puntos críticos.',
      'Módulo 4: Programas preventivos: Juntas Vecinales y Policía Escolar.'
    ]
  },
  {
    id: 'psicologia-delincuente',
    title: 'Psicología Criminal y del Delincuente',
    category: 'pnp',
    badge: 'Criminología Aplicada',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Perfilación criminal, psicopatología delictiva, conducta antisocial e interrogatorio táctico.',
    description: 'Aprende a analizar patrones de conducta criminal, rasgos psicopáticos, motivaciones delictivas y técnicas científicas de entrevista e interrogatorio.',
    syllabus: [
      'Módulo 1: Fundamentos de la criminología y psicología criminal.',
      'Módulo 2: Tipología del agresor: asesinos seriales, delincuente común y bandas organizadas.',
      'Módulo 3: Perfilación criminal inductiva y deductiva (Criminal Profiling).',
      'Módulo 4: Técnicas modernas de interrogatorio y detección de la mentira.'
    ]
  },
  {
    id: 'defensa-personal',
    title: 'Defensa Personal y Tácticas de Reducción',
    category: 'pnp',
    badge: 'Entrenamiento Táctico',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Semi-presencial y Virtual',
    summary: 'Técnicas de luxación, desarmes, uso de vara policial y control de intervenidos violentos.',
    description: 'Entrenamiento práctico en técnicas de inmovilización no lesiva, desarmes ante armas blancas y de fuego, y reducción segura del infractor de la ley.',
    syllabus: [
      'Módulo 1: Puntos de presión y biomecánica defensiva.',
      'Módulo 2: Técnicas de luxación, agarres y derribos controlados.',
      'Módulo 3: Empleo táctico de la vara policial de ley (PR-24 / bastón retráctil).',
      'Módulo 4: Colocación de grilletes de seguridad y traslado del intervenido.'
    ]
  },
  {
    id: 'trafico-drogas',
    title: 'Tráfico Ilícito de Drogas e Interdicción',
    category: 'pnp',
    badge: 'Especialidad DIRANDRO',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Modus operandi del narcotráfico, químicos fiscalizados, técnicas de inteligencia e interdicción.',
    description: 'Capacitación en técnicas operativas contra el microcomercio y macrotráfico de drogas, control de insumos químicos fiscalizados y coordinación fiscal en allanamientos.',
    syllabus: [
      'Módulo 1: Clasificación de sustancias estupefacientes y reactivos químicos de campo.',
      'Módulo 2: Rutas del narcotráfico y modus operandi en el VRAEM y puertos marítimos.',
      'Módulo 3: Marco legal del D.L. 1241 y operativos de interdicción terrestre y aérea.',
      'Módulo 4: Procedimiento policial en decomisos de droga y cadena de custodia.'
    ]
  },
  {
    id: 'terrorismo',
    title: 'Terrorismo y Contraterrorismo',
    category: 'pnp',
    badge: 'Historia & Seguridad Nacional',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Historia del terrorismo en el Perú, doctrina del GEIN y estrategias actuales de inteligencia.',
    description: 'Estudio histórico y operativo de la lucha contra el terrorismo en el Perú (Sendero Luminoso y MRTA), legado del GEIN, y nuevas modalidades de subversión ideológica contemporánea.',
    syllabus: [
      'Módulo 1: Orígenes, ideología y evolución del terrorismo en el Perú.',
      'Módulo 2: Estrategia y doctrina de inteligencia del GEIN en la captura del siglo.',
      'Módulo 3: Marco jurídico antiterrorista y delitos conexos.',
      'Módulo 4: Nuevas amenazas asimétricas y narcoterrorismo en la actualidad.'
    ]
  },
  {
    id: 'historia-pnp',
    title: 'Historia y Doctrina de la PNP',
    category: 'pnp',
    badge: 'Cultura Institucional PNP',
    badgeColor: 'police',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Evolución histórica de las fuerzas policiales, héroes institucionales, mística y valores del policía.',
    description: 'Curso clave para exámenes de ascenso donde se evalúa la historia institucional de la Guardia Civil, Policía de Investigaciones, Guardia Republicana y la unificación de la PNP en 1988.',
    syllabus: [
      'Módulo 1: Antecedentes históricos de la función policial en el Perú republicano.',
      'Módulo 2: Las tres instituciones matrices: GC, PIP y GR.',
      'Módulo 3: Ley de Unificación Policial de 1988 y consagración constitucional.',
      'Módulo 4: Héroes y mártires policiales: Mariano Santos, Alipio Ponce y su legado.'
    ]
  },

  // --- 2. Línea Escolar y Habilidades para Niños y Jóvenes (5 Cursos) ---
  {
    id: 'lectura-veloz',
    title: 'Lectura Veloz y Mnemotecnia',
    category: 'escolar',
    badge: 'Escolar · Niños y Adultos',
    badgeColor: 'brand',
    hours: '80 Horas Pedagógicas',
    modality: 'Virtual Interactivo',
    summary: 'Triplica tu velocidad de lectura (de 200 a +600 ppm) eliminando la subvocalización y fortaleciendo la retención.',
    description: 'Método patentado e interactivo que amplía el campo visual, entrena los movimientos sacádicos y enseña mapas mentales y palacios de la memoria para recordar el 100% de lo leído en menos tiempo.',
    syllabus: [
      'Módulo 1: Diagnóstico inicial de velocidad lectora y eliminación de malos hábitos.',
      'Módulo 2: Expansión del campo visual y técnicas de fijación fotográfica.',
      'Módulo 3: Mnemotecnia aplicada: cadenas de memoria y método Loci.',
      'Módulo 4: Comprensión profunda, síntesis analítica y evaluación final con métricas.'
    ]
  },
  {
    id: 'comprension-lectora',
    title: 'Comprensión Lectora y Análisis de Textos',
    category: 'escolar',
    badge: 'Nivel Primaria, Secundaria y Pre',
    badgeColor: 'brand',
    hours: '80 Horas Pedagógicas',
    modality: 'Virtual Interactivo',
    summary: 'Desarrolla el nivel literal, inferencial y crítico. Ideal para exámenes escolares, preuniversitarios y ascensos.',
    description: 'Aprende a desentrañar la idea principal, tesis, argumentos, tono del autor e inferencias complejas en textos humanísticos, científicos y periodísticos.',
    syllabus: [
      'Módulo 1: Estructura del texto: tema central, ideas principales y secundarias.',
      'Módulo 2: Nivel inferencial: presuposiciones, deducciones e inducciones.',
      'Módulo 3: Nivel crítico-valorativo y detección de falacias argumentativas.',
      'Módulo 4: Resolución de balotarios tipo examen de admisión y ascenso institucional.'
    ]
  },
  {
    id: 'oratoria',
    title: 'Oratoria, Liderazgo y Expresión Corporal',
    category: 'escolar',
    badge: 'Niños, Jóvenes y Ejecutivos',
    badgeColor: 'brand',
    hours: '80 Horas Pedagógicas',
    modality: 'Virtual y Talleres Prácticos',
    summary: 'Vence el miedo escénico, modula tu voz, domina el lenguaje no verbal y aprende a cautivar a cualquier audiencia.',
    description: 'Taller 100% dinámico donde los participantes exponen desde la primera clase. Corrección de muletillas, ejercicios de respiración diafragmática, modulación vocal y técnicas de persuasión.',
    syllabus: [
      'Módulo 1: Control de los nervios, respiración diafragmática y postura corporal.',
      'Módulo 2: Articulación, dicción, entonación y eliminación de muletillas.',
      'Módulo 3: Estructura de un discurso persuasivo: inicio impactante, nudo y cierre.',
      'Módulo 4: Técnicas de improvisación, debates y oratoria frente a cámaras.'
    ]
  },
  {
    id: 'matematica',
    title: 'Matemática y Razonamiento Lógico',
    category: 'escolar',
    badge: 'Refuerzo Escolar y Pre',
    badgeColor: 'brand',
    hours: '80 Horas Pedagógicas',
    modality: 'Virtual con Pizarra Digital',
    summary: 'Aritmética, Álgebra, Geometría y Razonamiento Matemático explicado de forma visual, práctica y sin estrés.',
    description: 'Orientado a estudiantes de primaria y secundaria que necesitan nivelarse, reforzar su base lógica o prepararse para exámenes de ingreso y concursos de matemáticas.',
    syllabus: [
      'Módulo 1: Operaciones fundamentales, fracciones y porcentajes aplicados a la vida real.',
      'Módulo 2: Planteo de ecuaciones de primer y segundo grado.',
      'Módulo 3: Razonamiento lógico, secuencias numéricas, analogías y probabilidades.',
      'Módulo 4: Geometría práctica y trigonometría básica sin memorización mecánica.'
    ]
  },
  {
    id: 'ortografia-redaccion',
    title: 'Ortografía, Redacción y Comunicación Eficaz',
    category: 'escolar',
    badge: 'Para Escolares y Adultos',
    badgeColor: 'brand',
    hours: '80 Horas Pedagógicas',
    modality: 'Virtual Interactivo',
    summary: 'Domina las nuevas normas de la RAE, acentuación, signos de puntuación y redacción de ensayos o informes.',
    description: 'Aprende a redactar sin faltas ortográficas, con coherencia textual y riqueza de vocabulario. Esencial tanto para tareas escolares como para cartas y documentos administrativos.',
    syllabus: [
      'Módulo 1: Acentuación gráfica general, diacrítica, diptongos e hiatos según la RAE.',
      'Módulo 2: Uso correcto de signos de puntuación: coma, punto y coma, y dos puntos.',
      'Módulo 3: Cohesión y conectores lógicos en la redacción de párrafos.',
      'Módulo 4: Redacción de ensayos, solicitudes formales y monografías.'
    ]
  },

  // --- 3. Línea Derecho, Ética y Gestión (3 Cursos) ---
  {
    id: 'derecho-penal',
    title: 'Derecho Penal y Procesal Penal',
    category: 'derecho',
    badge: 'NCPP · Operadores de Justicia',
    badgeColor: 'amber',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo + Campus 24/7',
    summary: 'Teoría del delito, etapas del Nuevo Código Procesal Penal, flagrancia delictiva y medidas cautelares.',
    description: 'Estudio profundo de la tipicidad, antijuricidad y culpabilidad penal, rol de la Policía como órgano de auxilio de la Fiscalía y detención policial en flagrancia delictiva.',
    syllabus: [
      'Módulo 1: Teoría del delito y elementos de la imputación penal.',
      'Módulo 2: La investigación preparatoria y diligencias preliminares de la PNP.',
      'Módulo 3: Prisión preventiva, comparecencia y detención judicial en flagrancia.',
      'Módulo 4: Prueba ilícita, tutela de derechos y el juicio oral.'
    ]
  },
  {
    id: 'constitucion-politica',
    title: 'Constitución Política del Perú y DD.HH.',
    category: 'derecho',
    badge: 'Derecho Constitucional',
    badgeColor: 'amber',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Derechos fundamentales de la persona, garantías constitucionales, estructura del Estado y convenios internacionales.',
    description: 'Análisis minucioso del articulado de la Carta Magna del Perú de 1993, Habeas Corpus, Amparo y estándares de la Corte Interamericana de Derechos Humanos aplicados a la función pública.',
    syllabus: [
      'Módulo 1: Título I de la Constitución: La persona humana y sus derechos fundamentales.',
      'Módulo 2: Procesos constitucionales de garantía: Habeas Corpus, Amparo y Habeas Data.',
      'Módulo 3: Estructura del Estado Peruano y poderes públicos.',
      'Módulo 4: La Policía Nacional y las FF.AA. en el marco de la Constitución (Art. 165 - 175).'
    ]
  },
  {
    id: 'etica-liderazgo',
    title: 'Ética, Liderazgo y Transparencia Pública',
    category: 'derecho',
    badge: 'Gestión Pública & Integridad',
    badgeColor: 'amber',
    hours: '120 Horas Pedagógicas',
    modality: 'Virtual en Vivo',
    summary: 'Código de Ética de la Función Pública, integridad institucional, prevención de la corrupción y liderazgo transformacional.',
    description: 'Formación en probidad administrativa, resolución ética de dilemas en el ejercicio de la autoridad, transparencia y fortalecimiento de la confianza ciudadana en las instituciones.',
    syllabus: [
      'Módulo 1: Principios del Código de Ética de la Función Pública (Ley 27815).',
      'Módulo 2: Conflictos de interés, probidad y consecuencias disciplinarias.',
      'Módulo 3: Liderazgo institucional y toma de decisiones éticas bajo presión.',
      'Módulo 4: Cultura de integridad, canales de denuncia y transparencia activa.'
    ]
  },

  // --- 4. Computación e Idiomas (2 Cursos) ---
  {
    id: 'computacion-informatica',
    title: 'Computación e Informática (Office & Excel)',
    category: 'digital',
    badge: 'Habilidades Digitales 2026',
    badgeColor: 'violet',
    hours: '100 Horas Pedagógicas',
    modality: 'Virtual Práctico en PC',
    summary: 'Domina Microsoft Word, Excel profesional (fórmulas, tablas dinámicas), PowerPoint y herramientas de IA productiva.',
    description: 'Curso 100% práctico diseñado para niños, jóvenes y adultos. Desde lo básico hasta la automatización de reportes, tablas dinámicas y elaboración de presentaciones ejecutivas.',
    syllabus: [
      'Módulo 1: Fundamentos de Windows, gestión de archivos y seguridad digital.',
      'Módulo 2: Microsoft Word avanzado: formato de documentos, índices y combinación de correspondencia.',
      'Módulo 3: Microsoft Excel: fórmulas esenciales, funciones lógicas (SI, BUSCARV/BUSCARX) y tablas dinámicas.',
      'Módulo 4: PowerPoint y herramientas de Inteligencia Artificial para el estudio y trabajo.'
    ]
  },
  {
    id: 'ingles',
    title: 'Inglés Práctico y Conversacional',
    category: 'digital',
    badge: 'Básico e Intermedio',
    badgeColor: 'violet',
    hours: '100 Horas Pedagógicas',
    modality: 'Virtual en Vivo con Docente Nativo/Bilingüe',
    summary: 'Aprende a hablar y escribir en inglés con soltura mediante situaciones reales de conversación y gramática esencial.',
    description: 'Metodología inmersiva enfocada en la fluidez oral (Speaking & Listening). Desarrolla la confianza para entablar diálogos, viajar, rendir exámenes internacionales o calificar a ascensos con requerimiento de idioma.',
    syllabus: [
      'Módulo 1: Presentaciones personales, saludos, rutinas diarias y vocabulario elemental.',
      'Módulo 2: Tiempos verbales básicos: Present Simple, Past Simple y Future forms.',
      'Módulo 3: Práctica de conversación: viajes, compras, direcciones y situaciones de emergencia.',
      'Módulo 4: Redacción de correos formales y lectura guiada en inglés.'
    ]
  }
];

// Current filter state
let currentCategory = 'all';
let currentSearch = '';

// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  lucide.createIcons();
  setupMobileMenu();
});

// Render Course Cards
function renderCourses() {
  const container = document.getElementById('coursesGrid');
  const noResults = document.getElementById('noResultsState');
  
  if (!container) return;

  const filtered = COURSES_DATA.filter(course => {
    const matchesCat = currentCategory === 'all' || course.category === currentCategory;
    const matchesSearch = !currentSearch || 
      course.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      course.summary.toLowerCase().includes(currentSearch.toLowerCase()) ||
      course.badge.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    noResults.classList.remove('hidden');
    return;
  }

  noResults.classList.add('hidden');

  container.innerHTML = filtered.map(course => {
    // Determine category styling
    let badgeBg = 'bg-brand-50 text-brand-700 border-brand-200';
    let iconName = 'book-open';
    if (course.category === 'pnp') {
      badgeBg = 'bg-police-600/10 text-police-700 border-police-600/20';
      iconName = 'shield';
    } else if (course.category === 'derecho') {
      badgeBg = 'bg-amber-50 text-amber-700 border-amber-200';
      iconName = 'scale';
    } else if (course.category === 'digital') {
      badgeBg = 'bg-violet-50 text-violet-700 border-violet-200';
      iconName = 'cpu';
    }

    const waLink = `https://wa.me/51993577680?text=${encodeURIComponent(`Hola CIEDU Perú, solicito información y matrícula para el curso "${course.title}".`)}`;

    return `
      <div class="course-card bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm relative overflow-hidden group">
        
        <div class="space-y-4">
          <!-- Top Badge & Hours -->
          <div class="flex items-center justify-between gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border ${badgeBg}">
              <i data-lucide="${iconName}" class="w-3.5 h-3.5"></i>
              ${course.badge}
            </span>
            <span class="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
              <i data-lucide="clock" class="w-3 h-3"></i>
              ${course.hours}
            </span>
          </div>

          <!-- Title -->
          <h3 class="font-display text-lg font-bold text-slate-900 group-hover:text-brand-600 transition leading-snug">
            ${course.title}
          </h3>

          <!-- Summary -->
          <p class="text-xs text-slate-500 leading-relaxed line-clamp-3">
            ${course.summary}
          </p>

          <!-- Highlights Bar -->
          <div class="pt-2 flex items-center gap-3 text-[11px] text-slate-500 font-medium border-t border-slate-100">
            <div class="flex items-center gap-1">
              <i data-lucide="video" class="w-3.5 h-3.5 text-brand-500"></i>
              <span>${course.modality}</span>
            </div>
            <div class="flex items-center gap-1">
              <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-500"></i>
              <span>Código QR</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
          <button 
            onclick="openCourseModal('${course.id}')"
            class="flex-1 py-2.5 px-3 text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-xl transition flex items-center justify-center gap-1 border border-brand-200/60"
          >
            <i data-lucide="info" class="w-3.5 h-3.5"></i>
            <span>Ver Temario</span>
          </button>
          
          <a 
            href="${waLink}" 
            target="_blank"
            class="py-2.5 px-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition flex items-center justify-center gap-1 shadow-sm active:scale-95"
            title="Inscribirme por WhatsApp"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i>
            <span class="hidden sm:inline">Inscribirme</span>
          </a>
        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Filter Tabs Handler
function filterCategory(cat) {
  currentCategory = cat;
  
  const buttons = document.querySelectorAll('#categoryTabs .cat-btn');
  buttons.forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.className = 'cat-btn active-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition';
    } else {
      btn.className = 'cat-btn inactive-tab px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition flex items-center gap-1.5';
    }
  });

  renderCourses();
}

// Live Search Input in Courses Section
function handleSearchFilter(value) {
  currentSearch = value.trim();
  renderCourses();
}

// Reset Filters
function resetFilters() {
  currentSearch = '';
  currentCategory = 'all';
  const input = document.getElementById('courseFilterInput');
  if (input) input.value = '';
  filterCategory('all');
}

// Hero Search Box
function handleHeroSearch(e) {
  if (e.key === 'Enter') {
    executeHeroSearch();
  }
}

function executeHeroSearch() {
  const heroInput = document.getElementById('heroSearchInput');
  const query = heroInput ? heroInput.value.trim() : '';
  
  currentSearch = query;
  currentCategory = 'all';

  const courseInput = document.getElementById('courseFilterInput');
  if (courseInput) courseInput.value = query;

  filterCategory('all');
  scrollToSection('cursos');
}

// Scroll to section smoothly
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Open Course Detail Modal
function openCourseModal(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  const modal = document.getElementById('courseModal');
  const title = document.getElementById('modalTitle');
  const badge = document.getElementById('modalCategoryBadge');
  const tagline = document.getElementById('modalTagline');
  const modality = document.getElementById('modalModality');
  const hours = document.getElementById('modalHours');
  const desc = document.getElementById('modalDescription');
  const syllabus = document.getElementById('modalSyllabus');
  const waBtn = document.getElementById('modalWhatsAppBtn');

  title.innerText = course.title;
  badge.innerText = course.badge;
  tagline.innerText = course.summary;
  modality.innerText = course.modality;
  hours.innerText = course.hours;
  desc.innerText = course.description;

  syllabus.innerHTML = course.syllabus.map(item => `
    <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
      <i data-lucide="check" class="w-4 h-4 text-brand-600 mt-0.5 shrink-0"></i>
      <span>${item}</span>
    </div>
  `).join('');

  const message = `Hola CIEDU Perú, solicito el temario completo y facilidades de matrícula para el curso "${course.title}".`;
  waBtn.href = `https://wa.me/51993577680?text=${encodeURIComponent(message)}`;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  lucide.createIcons();
}

function closeCourseModal() {
  const modal = document.getElementById('courseModal');
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

// Close modal on click outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('courseModal');
  const campusModal = document.getElementById('campusModal');
  if (e.target === modal) closeCourseModal();
  if (e.target === campusModal) closeCampusModal();
});

// Campus Virtual Modal
function openCampusModal() {
  document.getElementById('campusModal').classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeCampusModal() {
  document.getElementById('campusModal').classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function handleCampusLogin(e) {
  e.preventDefault();
  alert('Acceso al Campus Virtual CIEDU en proceso de verificación. Redirigiendo...');
  closeCampusModal();
}

// Interactive Program Finder / Quiz Widget
function handleFinderSelect(type) {
  const resultBox = document.getElementById('finderResult');
  resultBox.classList.remove('hidden');

  if (type === 'pnp') {
    resultBox.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-2xl">👮</span>
        <div>
          <p class="font-bold text-sm text-slate-900">Recomendación para Ascenso Policial y Militar:</p>
          <p class="text-xs text-slate-600">Te sugerimos comenzar con <strong>Criminalística Forense</strong> o <strong>Armapol y Tiro Policial</strong>. Ambos otorgan 120 horas con certificación válida para escalafón.</p>
        </div>
      </div>
      <div class="pt-2 flex gap-2">
        <button onclick="filterCategory('pnp'); scrollToSection('cursos')" class="px-3 py-1.5 bg-police-700 text-white rounded-lg text-xs font-bold hover:bg-police-800 transition">
          Ver los 13 cursos policiales
        </button>
        <a href="https://wa.me/51993577680?text=Hola,%20soy%20personal%20policial%20y%20deseo%20asesoria%20para%20ascenso." target="_blank" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition">
          Consultar por WhatsApp
        </a>
      </div>
    `;
  } else if (type === 'escolar') {
    resultBox.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-2xl">🎒</span>
        <div>
          <p class="font-bold text-sm text-slate-900">Recomendación para Escolares y Jóvenes:</p>
          <p class="text-xs text-slate-600">El <strong>Taller Integral de Lectura Veloz + Oratoria</strong> multiplicará su rendimiento escolar, eliminando el pánico escénico y aumentando su concentración.</p>
        </div>
      </div>
      <div class="pt-2 flex gap-2">
        <button onclick="filterCategory('escolar'); scrollToSection('cursos')" class="px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-700 transition">
          Ver cursos escolares
        </button>
        <a href="https://wa.me/51993577680?text=Hola,%20deseo%20informaci%C3%B3n%20para%20mi%20hijo%20en%20Lectura%20Veloz." target="_blank" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition">
          Hablar con Asesor Escolar
        </a>
      </div>
    `;
  } else if (type === 'profesional') {
    resultBox.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="text-2xl">💼</span>
        <div>
          <p class="font-bold text-sm text-slate-900">Recomendación para Profesionales:</p>
          <p class="text-xs text-slate-600">Potencia tu perfil con <strong>Computación / Excel Profesional</strong> o el diplomado en <strong>Derecho Penal y Procesal Penal</strong> con acreditación.</p>
        </div>
      </div>
      <div class="pt-2 flex gap-2">
        <button onclick="filterCategory('derecho'); scrollToSection('cursos')" class="px-3 py-1.5 bg-brand-600 text-white rounded-lg text-xs font-bold hover:bg-brand-700 transition">
          Ver cursos profesionales
        </button>
        <a href="https://wa.me/51993577680?text=Hola,%20deseo%20mejorar%20mi%20curriculum%20profesional." target="_blank" class="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition">
          Pedir Información
        </a>
      </div>
    `;
  }
}

// FAQ Accordion Toggle
function toggleFAQ(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}

// Mobile Menu Handler
function setupMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.add('hidden');
}

// Handle Lead Form Submission with Instant WhatsApp Redirect
function handleLeadSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('leadName').value.trim();
  const phone = document.getElementById('leadPhone').value.trim();
  const city = document.getElementById('leadCity').value.trim() || 'Perú';
  const course = document.getElementById('leadCourse').value;

  const msg = `¡Hola CIEDU Perú! Mi nombre es *${name}*, les escribo desde *${city}* (Cel: ${phone}). Estoy muy interesado/a en matricularme en el programa: *${course}*. ¿Podrían enviarme los horarios, costos y temario? ¡Muchas gracias!`;

  const waUrl = `https://wa.me/51993577680?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}
