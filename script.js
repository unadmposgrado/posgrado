// Datos completos de las semanas 2 a 19
  const unidadTitulos = {
    1: "El modelo didáctico como eje para la mediación del aprendizaje",
    2: "La mediación del aprendizaje en el contexto actual",
    3: "El aprendizaje para la sociedad del conocimiento"
  };

  const semanasData = [
    { semana: 2, unidad: 1, tituloLimpio: "Concepciones teóricas del modelo didáctico",
      temas: [
          { titulo: "1.1 Concepciones teóricas del modelo didáctico", subtemas: [
              "1.1.1 Relaciones entre pedagogía y didáctica (Vargas-Silva)",
              "1.1.2 Diversidad didáctica, aprendizaje y propuestas de acción (Flechsig)"
          ]}
      ],
      actividades: "📖 Lectura individual. 💬 Foro: diferencias entre pedagogía y didáctica. 📝 Evaluación diagnóstica (conocimientos previos).",
      evaluacion: "Evaluación diagnóstica (formativa)"
    },
    { semana: 3, unidad: 1, tituloLimpio: "Modelos didácticos y entorno virtual de aprendizaje",
      temas: [
          { titulo: "1.1.3 Fundamentación, características, estructura y tipologías de los modelos didácticos (Guárate)", subtemas: [] },
          { titulo: "1.2 El modelo didáctico en un entorno virtual de aprendizaje", subtemas: ["1.2.1 Instrucción programada (Flechsig)"] }
      ],
      actividades: "📘 Organizador gráfico (mapa conceptual). 🗣️ Foro comparativo. Sesión asincrónica.",
      evaluacion: "Formativa (organizador gráfico)"
    },
    { semana: 4, unidad: 1, tituloLimpio: "Elementos tecnológicos, organizativos y pedagógicos",
      temas: [
          { titulo: "1.2.2 Elementos tecnológicos, organizativos y pedagógicos del modelo didáctico (Salinas, et. al)", subtemas: [] },
          { titulo: "1.2.3 Modelo: entornos virtuales de aprendizaje (Guárate)", subtemas: [] }
      ],
      actividades: "🔍 Revisión de aula virtual. Sesión sincrónica. Borrador de ensayo.",
      evaluacion: "Formativa (participación y avance)"
    },
    { semana: 5, unidad: 1, tituloLimpio: "Educación abierta, heutagogía y conectivismo",
      temas: [
          { titulo: "1.3 Aproximaciones a un modelo didáctico para la educación abierta y a distancia", subtemas: [
              "1.3.1 El aprendizaje abierto y cooperativo (García y Rabajoli)",
              "1.3.2 El aprendizaje heutagógico, andragógico y conectivista (Mendiola y Lima)"
          ]}
      ],
      actividades: "📚 Lectura. Borrador del ensayo argumentativo. Foro.",
      evaluacion: "Formativa (borrador de ensayo)"
    },
    { semana: 6, unidad: 1, tituloLimpio: "Hibridación, inteligencia artificial y cierre de Unidad 1",
      temas: [
          { titulo: "1.3.3 Desafíos didácticos entre la hibridación y la inteligencia artificial (Maggio)", subtemas: [] },
          { titulo: "1.3.4 Los modelos mediacional y ecológico (Gimeno Sacristán y Espinoza)", subtemas: [] }
      ],
      actividades: "🎓 Tutoría personalizada. Entrega final: Análisis sobre el modelo didáctico (ensayo argumentativo).",
      evaluacion: "📌 EVALUACIÓN SUMATIVA UNIDAD 1 (Ensayo)"
    },
    { semana: 7, unidad: 2, tituloLimpio: "Mediación del aprendizaje y su importancia",
      temas: [
          { titulo: "2.1 La mediación del aprendizaje y su importancia", subtemas: [
              "2.1.1 Enfoque epistémico de la mediación del aprendizaje (Tapia Sosa; Ruiz y Ramírez; Vargas-Manrique)",
              "2.1.2 Fundamentos de la mediación didáctica (Aguirre y Espinoza)"
          ]}
      ],
      actividades: "📖 Lectura. Foro: ¿Cómo aprendí a mediar?",
      evaluacion: "Formativa (participación foro)"
    },
    { semana: 8, unidad: 2, tituloLimpio: "Perspectivas, transposición y metodologías activas",
      temas: [
          { titulo: "2.1.3 Perspectivas pedagógica, cognitiva y sociocultural de la mediación (Ruiz y Ramírez)", subtemas: [] },
          { titulo: "2.1.4 Transposición didáctica (Gómez)", subtemas: [] },
          { titulo: "2.1.5 Metodologías del aprendizaje basado en proyectos y en problemas (Cenich; Ortiz et al.; Escribano)", subtemas: [] }
      ],
      actividades: "📝 Organizador gráfico. Sesión sincrónica ABP.",
      evaluacion: "Formativa (control de lectura)"
    },
    { semana: 9, unidad: 2, tituloLimpio: "Actores didácticos en un ambiente virtual de aprendizaje",
      temas: [
          { titulo: "2.2 Actores didácticos en un ambiente virtual de aprendizaje", subtemas: [
              "2.2.1 Diseño y análisis del ambiente virtual de aprendizaje (Vargas; Céron)",
              "2.2.2 Las fases de la modalidad didáctica de un ambiente virtual de aprendizaje (Céron)"
          ]}
      ],
      actividades: "🌐 Wiki colaborativa. Análisis de aula virtual modelo.",
      evaluacion: "Formativa (aportes wiki)"
    },
    { semana: 10, unidad: 2, tituloLimpio: "Aula virtual y estructuras cognitivas",
      temas: [
          { titulo: "2.2.3 El aula virtual (Buitrón)", subtemas: [] },
          { titulo: "2.2.4 Estructuras cognitivas para la construcción de un modelo didáctico en un ambiente virtual de aprendizaje (Céron)", subtemas: [] }
      ],
      actividades: "📘 Lectura + foro: estructuras cognitivas.",
      evaluacion: "Formativa (foro)"
    },
    { semana: 11, unidad: 2, tituloLimpio: "Mediación en un ambiente virtual de aprendizaje",
      temas: [
          { titulo: "2.3 La importancia de la mediación en un ambiente virtual de aprendizaje", subtemas: [
              "2.3.1 Mediación tecnológica (Lanzábal; Gómez)",
              "2.3.2 Habilidades cognitivas y metacognitivas (Arenas)",
              "2.3.3 De la mediación a la personalización (Bernaza)"
          ]}
      ],
      actividades: "🧠 Borrador del biograma de trayectoria.",
      evaluacion: "Formativa (borrador biograma)"
    },
    { semana: 12, unidad: 2, tituloLimpio: "Habilidades del mediador en un ambiente virtual",
      temas: [
          { titulo: "2.4 Habilidades del mediador en un ambiente virtual de aprendizaje", subtemas: [
              "2.4.1 Hablando de competencias para la mediación (Tapia; Ruiz)",
              "2.4.2 Estrategias para definir el perfil del mediador (Urdaneta)",
              "2.4.3 Habilidades pedagógicas (Brenes; Ruiz)",
              "2.4.4 Habilidades sociales (Cordero)"
          ]}
      ],
      actividades: "📋 Autoevaluación. Foro competencias.",
      evaluacion: "Formativa (listado reflexivo)"
    },
    { semana: 13, unidad: 2, tituloLimpio: "Habilidades del mediador y cierre de Unidad 2",
      temas: [
          { titulo: "2.4 Habilidades del mediador en un ambiente virtual de aprendizaje", subtemas: [
              "2.4.5 Comunicativas (Ávila)", "2.4.6 Psicológicas (Sánchez)",
              "2.4.7 Investigativas (Pegudo)", "2.4.8 Interculturales (Alarcón y Márquez)",
              "2.4.9 Socioemocionales (Feuerstein, Scarafía)"
          ]}
      ],
      actividades: "🎯 Tutoría personalizada. Entrega final del Biograma de trayectoria (narrativa autobiográfica).",
      evaluacion: "📌 EVALUACIÓN SUMATIVA UNIDAD 2 (Biograma)"
    },
    { semana: 14, unidad: 3, tituloLimpio: "Mediación para la interactividad en entornos virtuales",
      temas: [
          { titulo: "3.1 La mediación para la interactividad en un entorno virtual de aprendizaje", subtemas: [
              "3.1.1 Motivación y diálogo virtual (Arenas)",
              "3.1.2 Mediación sociocultural en entornos virtuales (Ruiz y Ramírez, pp. 21-26)"
          ]}
      ],
      actividades: "📖 Lectura + foro: ¿Qué estrategias de mejora?",
      evaluacion: "Formativa (participación)"
    },
    { semana: 15, unidad: 3, tituloLimpio: "Diálogo multimodal, retroalimentación y prosumidores educativos",
      temas: [
          { titulo: "3.1.3 Diálogo multimodal en la mediación virtual (Ruiz y Ramírez, 45-66)", subtemas: [] },
          { titulo: "3.1.4 La retroalimentación (Quezada; Espinoza)", subtemas: [] },
          { titulo: "3.2 El aprendizaje mediado y los prosumidores educativos", subtemas: [
              "3.2.1 Referente sobre el productor y consumidor: prosumidor (González)",
              "3.2.2 El docente-prosumidor (González; Buenestado)"
          ]}
      ],
      actividades: "✏️ Borrador de propuesta de mejora. Análisis de retroalimentación.",
      evaluacion: "Formativa (borrador estrategias)"
    },
    { semana: 16, unidad: 3, tituloLimpio: "Prosumidores y aprendizaje en la era digital",
      temas: [
          { titulo: "3.2.3 El prosumidor y su acción educadora (González)", subtemas: [] },
          { titulo: "3.2.4 La formación del docente-prosumidor (Buenestado)", subtemas: [] },
          { titulo: "3.3 El aprendizaje en la era digital y en la sociedad del conocimiento", subtemas: [
              "3.3.1 El conectivismo: una teoría para el aprendizaje en la era digital (Siemens)"
          ]}
      ],
      actividades: "🧩 Debate sincrónico. Lectura artículos conectivismo.",
      evaluacion: "Formativa (control lectura)"
    },
    { semana: 17, unidad: 3, tituloLimpio: "Conocimiento digital, internet, inteligencia artificial y neurodidáctica",
      temas: [
          { titulo: "3.3.2 Conocimiento en era digital (Requena)", subtemas: [] },
          { titulo: "3.3.3 Internet y aprendizaje (Villanueva)", subtemas: [] },
          { titulo: "3.3.4 La inteligencia artificial en el contexto educativo (Vera; Navarrete; Peña y Sanabria-Navarro)", subtemas: [] },
          { titulo: "3.4 Acerca de la neurodidáctica para el aprendizaje en el contexto actual", subtemas: [
              "3.4.1 Funciones de los hemisferios cerebrales para el aprendizaje (Rivas)",
              "3.4.2 Las emociones y el aprendizaje significativo (Rivas; Navacerrada)"
          ]}
      ],
      actividades: "📊 Organizador gráfico IA. Foro emociones y mediación.",
      evaluacion: "Formativa (organizador)"
    },
    { semana: 18, unidad: 3, tituloLimpio: "Neurodidáctica y productos integradores",
      temas: [
          { titulo: "3.4.3 Neurodidáctica (Rivas; Ibarrola)", subtemas: [] },
          { titulo: "Producto integrador de la unidad didáctica", subtemas: [
              "Características del modelo didáctico a implementar",
              "Análisis contextual",
              "Árbol de áreas de mejora",
              "Perfil de habilidades para la mediación"
          ] }
      ],
      actividades: "📑 Entrega final: Documento de estrategias didácticas + Narrativa autobiográfica integradora.",
      evaluacion: "📌 EVALUACIÓN SUMATIVA UNIDAD 3 (Estrategias + Narrativa)"
    },
    { semana: 19, unidad: 3, tituloLimpio: "Cierre integrador y reflexión final",
      temas: [
          { titulo: "Integración de aprendizajes", subtemas: [
              "Modelo didáctico en el que se enmarca la práctica de mediación",
              "Estrategias didácticas para la mejora de la práctica de mediación",
              "Conclusiones sobre los retos de ser mediador del aprendizaje en la sociedad del conocimiento"
          ] }
      ],
      actividades: "🎓 Sesión sincrónica de cierre. Portafolio reflexivo. Retroalimentación global.",
      evaluacion: "Evaluación sumativa global / Autoevaluación perfil de egreso."
    }
  ];

  // Generar menú con unidades destacadas y semanas anidadas
  function generarMenu() {
    const contenedor = document.getElementById('contenedorSemanas');
    contenedor.innerHTML = '';
    contenedor.classList.add('asignatura-menu-hidden');
    contenedor.setAttribute('aria-hidden', 'true');
    document.getElementById('menuBotones')?.classList.add('asignatura-menu-collapsed');
    let currentUnit = 0;

    const encuadreBtn = document.createElement('button');
    encuadreBtn.type = 'button';
    encuadreBtn.className = 'unit-header encuadre-button';
    encuadreBtn.innerHTML = `<span class="unit-pin">📌</span><strong>ENCUADRE</strong><small>Semana 1</small>`;
    encuadreBtn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(btnEl => btnEl.classList.remove('active'));
      document.querySelectorAll('.week-button').forEach(btnEl => btnEl.classList.remove('active'));
      document.querySelectorAll('.unit-header').forEach(btnEl => btnEl.classList.remove('active'));
      encuadreBtn.classList.add('active');
      mostrarEncuadre();
    });
    contenedor.appendChild(encuadreBtn);
    
    semanasData.forEach((sem) => {
      const unit = sem.unidad;
      if (unit !== currentUnit) {
        currentUnit = unit;
        const unitBtn = document.createElement('button');
        unitBtn.type = 'button';
        unitBtn.className = 'unit-header';
        unitBtn.setAttribute('aria-expanded', 'false');
        unitBtn.setAttribute('data-unit', currentUnit);
        unitBtn.innerHTML = `<span class="unit-pin">📌</span><strong>UNIDAD ${currentUnit}</strong><span class="unit-chevron">▸</span><small>${unidadTitulos[currentUnit]}</small>`;
        unitBtn.addEventListener('click', () => {
          const expanded = unitBtn.getAttribute('aria-expanded') === 'true';
          unitBtn.setAttribute('aria-expanded', String(!expanded));
          unitBtn.classList.toggle('expanded', !expanded);
          document.querySelectorAll(`.week-button[data-unit="${unit}"]`).forEach(btnEl => {
            btnEl.hidden = expanded;
          });
        });
        contenedor.appendChild(unitBtn);
      }
      const btn = document.createElement('button');
      btn.className = 'week-button';
      btn.hidden = true;
      const iconSpan = document.createElement('span');
      iconSpan.className = 'week-icon';
      iconSpan.innerText = `Sem ${sem.semana}`;
      const textSpan = document.createElement('span');
      textSpan.innerText = `${sem.tituloLimpio}`;
      btn.appendChild(iconSpan);
      btn.appendChild(textSpan);
      btn.setAttribute('data-semana', sem.semana);
      btn.setAttribute('data-unit', sem.unidad);
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.nav-btn').forEach(btnEl => btnEl.classList.remove('active'));
        document.querySelectorAll('.week-button').forEach(btnEl => btnEl.classList.remove('active'));
        document.querySelectorAll('.unit-header').forEach(btnEl => btnEl.classList.remove('active'));
        btn.classList.add('active');
        mostrarContenido(sem.semana);
      });
      contenedor.appendChild(btn);
    });

    const evaluacionBtn = document.createElement('button');
    evaluacionBtn.type = 'button';
    evaluacionBtn.className = 'unit-header evaluacion-button';
    evaluacionBtn.innerHTML = `<span class="unit-pin">📌</span><strong>EVALUACIÓN</strong><small>Semana 20</small>`;
    evaluacionBtn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(btnEl => btnEl.classList.remove('active'));
      document.querySelectorAll('.week-button').forEach(btnEl => btnEl.classList.remove('active'));
      document.querySelectorAll('.unit-header').forEach(btnEl => btnEl.classList.remove('active'));
      evaluacionBtn.classList.add('active');
      mostrarEvaluacion();
    });
    contenedor.appendChild(evaluacionBtn);
    
  }

  function crearBreadcrumbAsignatura() {
    return `<nav class="asignatura-breadcrumb" aria-label="Ruta de navegación">
      <span>Cursos</span>
      <span>Doctorado en educación abierta y adistancia</span>
      <span>El modelo didáctico como eje para la mediación del aprendizaje</span>
    </nav>`;
  }

  function mostrarEncuadre() {
    const contenedor = document.getElementById('contenidoDinamico');
    contenedor.innerHTML = `<div class="content-body"><div class="content-card">
      ${crearBreadcrumbAsignatura()}
      <span class="unidad-badge">ENCUADRE</span>
      <h2>Te damos la bienvenida</h2>
      <p>
        La asignatura Mediación del aprendizaje ofrece un espacio de análisis, reflexión
        y construcción académica en torno a las prácticas de mediación en entornos
        virtuales. A lo largo del curso, se revisarán modelos didácticos, estrategias de
        acompañamiento e interacciones pedagógicas orientadas a fortalecer experiencias
        formativas pertinentes, críticas y contextualizadas.
      </p>
      <footer>📚 Programa oficial · Mediación del aprendizaje · Doctorado</footer>
    </div></div>`;
    contenedor.scrollTop = 0;
  }

  function mostrarEvaluacion() {
    const contenedor = document.getElementById('contenidoDinamico');
    contenedor.innerHTML = `<div class="content-body"><div class="content-card">
      ${crearBreadcrumbAsignatura()}
      <span class="unidad-badge">EVALUACIÓN</span>
      <h2>Evaluación final de la asignatura</h2>
      <div class="semana-titulo">📅 Semana 20: Cierre evaluativo</div>
      <p>
        En esta etapa se integran las evidencias desarrolladas durante la asignatura para
        valorar el logro de los aprendizajes, la consistencia de las propuestas didácticas
        y la reflexión crítica sobre la mediación del aprendizaje en entornos virtuales. La
        evaluación final permite reconocer avances, consolidar criterios académicos y
        proyectar áreas de mejora para la práctica profesional.
      </p>
      <footer>📚 Programa oficial · Mediación del aprendizaje · Doctorado</footer>
    </div></div>`;
    contenedor.scrollTop = 0;
  }

  // Mostrar contenido detallado
  function mostrarContenido(numSemana) {
    const semana = semanasData.find(s => s.semana === numSemana);
    if (!semana) return;

    const contenedor = document.getElementById('contenidoDinamico');
    let html = `<div class="content-body"><div class="content-card">
                    ${crearBreadcrumbAsignatura()}
                    <span class="unidad-badge">UNIDAD ${semana.unidad}</span>
                    <h2>${unidadTitulos[semana.unidad]}</h2>
                    <div class="semana-titulo">📅 Semana ${semana.semana}: ${semana.tituloLimpio}</div>`;
    
    if (semana.temas && semana.temas.length > 0) {
      semana.temas.forEach(tema => {
        html += `<div class="tema-section">
                  <h3>📖 ${tema.titulo}</h3>`;
        if (tema.subtemas && tema.subtemas.length > 0) {
          html += `<ul class="subtema-list">`;
          tema.subtemas.forEach(sub => {
            html += `<li>${sub}</li>`;
          });
          html += `</ul>`;
        }
        html += `</div>`;
      });
    }

    html += `<div class="actividades-eval">
              <strong>📌 Actividades de aprendizaje:</strong>
              <p>${semana.actividades}</p>
              <hr>
              <strong>📊 Evaluación:</strong>
              <p>${semana.evaluacion}</p>
            </div>`;
    
    if (semana.semana === 6 || semana.semana === 13 || semana.semana === 18) {
      html += `<div class="footer-note">
                🏆 <strong>Producto sumativo de unidad:</strong> ${semana.evaluacion}
              </div>`;
    }
    if (semana.semana === 19) {
      html += `<div class="footer-note cierre-programa">
                🎓 <strong>Cierre del programa:</strong> Reflexión final sobre el perfil de egreso: "Construye experiencias de aprendizaje mediado considerando contextualización, diseño, implementación y evaluación en entornos virtuales desde perspectiva autocrítica y valoración de diversidades".
              </div>`;
    }
    
    html += `<footer>📚 Programa oficial · Mediación del aprendizaje · Doctorado</footer>
            </div></div>`;
    contenedor.innerHTML = html;
    contenedor.scrollTop = 0;
  }

  function mostrarMiUnADM() {
    const contenedor = document.getElementById('contenidoDinamico');
    const opciones = [
      { texto: 'Servicios escolares', seccion: 'servicios-escolares' },
      'Mesa de servicio',
      { texto: 'Normatividad', seccion: 'normatividad' },
      { texto: 'Biblioteca digital', seccion: 'biblioteca-digital' },
      'Eventos UnADM',
      { texto: 'SSAP', seccion: 'ssap' }
    ];

    document.querySelectorAll('.week-button').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelector('.nav-btn.primary').classList.add('active');

    contenedor.innerHTML = `<div class="content-body">
      <div class="miunadm-grid">
        ${opciones.map(opcion => {
          const texto = typeof opcion === 'string' ? opcion : opcion.texto;
          const seccion = typeof opcion === 'string' ? '' : ` data-section="${opcion.seccion}"`;
          return `<button class="miunadm-action" type="button"${seccion}>${texto}</button>`;
        }).join('')}
      </div>
    </div>`;

    const serviciosBtn = contenedor.querySelector('[data-section="servicios-escolares"]');
    if (serviciosBtn) {
      serviciosBtn.addEventListener('click', mostrarServiciosEscolares);
    }
    const normatividadBtn = contenedor.querySelector('[data-section="normatividad"]');
    if (normatividadBtn) {
      normatividadBtn.addEventListener('click', mostrarNormatividad);
    }
    const bibliotecaBtn = contenedor.querySelector('[data-section="biblioteca-digital"]');
    if (bibliotecaBtn) {
      bibliotecaBtn.addEventListener('click', mostrarBibliotecaDigital);
    }
    const ssapBtn = contenedor.querySelector('[data-section="ssap"]');
    if (ssapBtn) {
      ssapBtn.addEventListener('click', mostrarSSAP);
    }

    contenedor.scrollTop = 0;
  }

  function mostrarServiciosEscolares() {
    const contenedor = document.getElementById('contenidoDinamico');
    const servicios = [
      'Credencial estudiantil',
      'Constancia de estudios',
      'Titulación',
      { texto: 'Diploma especialidad', nivel: 'subtramite' },
      { texto: 'Grado maestría', nivel: 'subtramite' },
      { texto: 'Grado doctorado', nivel: 'subtramite' },
      'Manuales'
    ];

    contenedor.innerHTML = `<div class="content-body servicios-escolares">
      <section class="servicios-card" aria-labelledby="serviciosTitulo">
        <span class="servicios-kicker">Trámites académicos</span>
        <h2 id="serviciosTitulo">Servicios escolares</h2>
        <p>
          Consulta y gestiona solicitudes relacionadas con tu trayectoria académica,
          documentación institucional y recursos de apoyo para estudiantes.
        </p>
        <div class="servicios-list">
          ${servicios.map(servicio => {
            const texto = typeof servicio === 'string' ? servicio : servicio.texto;
            const clase = typeof servicio === 'string' ? '' : ` ${servicio.nivel}`;
            return `<a class="servicio-link${clase}" href="#">${texto}</a>`;
          }).join('')}
        </div>
      </section>
    </div>`;
    contenedor.scrollTop = 0;
  }

  function mostrarNormatividad() {
    const contenedor = document.getElementById('contenidoDinamico');
    const documentos = [
      'Reglamento',
      'Código de ética del estudiante',
      'Marco legal de la educación en México',
      'Reglamento de posgrado'
    ];

    contenedor.innerHTML = `<div class="content-body seccion-institucional">
      <section class="servicios-card" aria-labelledby="normatividadTitulo">
        <span class="servicios-kicker">Documentos institucionales</span>
        <h2 id="normatividadTitulo">Normatividad</h2>
        <p>
          Revisa las disposiciones, criterios y documentos de referencia que orientan
          la vida académica y administrativa de la comunidad estudiantil.
        </p>
        <div class="servicios-list">
          ${documentos.map(documento => `<a class="servicio-link" href="#">${documento}</a>`).join('')}
        </div>
      </section>
    </div>`;
    contenedor.scrollTop = 0;
  }

  function mostrarBibliotecaDigital() {
    const contenedor = document.getElementById('contenidoDinamico');

    contenedor.innerHTML = `<div class="content-body imagen-content">
      <img class="imagen-fluid" src="biblio.jpg" alt="Biblioteca digital">
    </div>`;
    contenedor.scrollTop = 0;
  }

  function mostrarSSAP() {
    const contenedor = document.getElementById('contenidoDinamico');

    contenedor.innerHTML = `<div class="content-body imagen-content">
      <img class="imagen-fluid" src="ssap.jpg" alt="SSAP">
    </div>`;
    contenedor.scrollTop = 0;
  }

  function mostrarMisCursos() {
    const contenedor = document.getElementById('contenidoDinamico');

    document.querySelectorAll('.week-button').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btnEl => {
      if (btnEl.textContent.trim().toLowerCase() === 'mis cursos') {
        btnEl.classList.add('active');
      }
    });

    contenedor.innerHTML = `<div class="content-body cursos-content">
      <section class="mis-cursos-view" aria-labelledby="misCursosTitulo">
        <header class="mis-cursos-header">
          <h2 id="misCursosTitulo">Mis cursos</h2>
          <p>Vista general de curso</p>
          <div class="mis-cursos-actions" aria-label="Acciones de curso">
            <button type="button" class="curso-btn curso-btn-outline">Gestionar cursos</button>
            <button type="button" class="curso-btn curso-btn-primary">Crear curso</button>
          </div>
        </header>

        <div class="cursos-filter-bar" aria-label="Filtros de cursos">
          <button type="button" class="curso-select">Todos <span aria-hidden="true">⌄</span></button>
          <label class="curso-search">
            <span class="sr-only">Buscar cursos</span>
            <input type="search" placeholder="Buscar">
          </label>
          <button type="button" class="curso-sort">Ordenar por fecha de inicio <span aria-hidden="true">⌄</span></button>
          <button type="button" class="curso-select">Tarjeta <span aria-hidden="true">⌄</span></button>
        </div>

        <div class="cursos-grid">
          <article class="curso-card">
            <div class="curso-card-cover curso-card-cover-gray" aria-hidden="true"></div>
            <div class="curso-card-body">
              <h3>Especialidad en el uso de tecnologías para el ...</h3>
              <p>Categoría 1</p>
              <button type="button" class="curso-menu" aria-label="Más opciones de Especialidad en el uso de tecnologías">⋮</button>
            </div>
          </article>

          <article class="curso-card">
            <div class="curso-card-cover curso-card-cover-green" aria-hidden="true"></div>
            <div class="curso-card-body">
              <h3>Maestría en ambientes de aprendizaje mediados por ...</h3>
              <p>Categoría 1</p>
              <button type="button" class="curso-menu" aria-label="Más opciones de Maestría en ambientes de aprendizaje">⋮</button>
            </div>
          </article>

          <a class="curso-card curso-card-link" href="#doctorado-educacion-abierta-distancia" data-course-link="doctorado">
            <div class="curso-card-cover curso-card-cover-blue" aria-hidden="true"></div>
            <div class="curso-card-body">
              <h3>Doctorado en educación abierta y a distancia</h3>
              <p>Categoría 1</p>
              <span class="curso-menu" aria-hidden="true">⋮</span>
            </div>
          </a>
        </div>
      </section>
    </div>`;
    const doctoradoLink = contenedor.querySelector('[data-course-link="doctorado"]');
    if (doctoradoLink) {
      doctoradoLink.addEventListener('click', event => {
        event.preventDefault();
        mostrarDoctoradoAsignaturas();
      });
    }
    contenedor.scrollTop = 0;
  }

  function mostrarSesionesSincronas() {
    const contenedor = document.getElementById('contenidoDinamico');
    const sesiones = [
      'Sesión 1: Fundamentos de las tecnologías del aprendizaje',
      'Sesión 2: Entornos y herramientas digitales para el aprendizaje',
      'Sesión 3: Diseño, mediación y evaluación con tecnologías del aprendizaje',
      'Sesión 4: Tendencias emergentes y escenarios futuros.'
    ];

    document.querySelectorAll('.week-button').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.unit-header').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btnEl => {
      if (btnEl.textContent.trim().toLowerCase() === 'sesiones síncronas') {
        btnEl.classList.add('active');
      }
    });

    contenedor.innerHTML = `<div class="content-body sesiones-content">
      <section class="sesiones-view" aria-labelledby="sesionesTitulo">
        <header class="sesiones-header">
          <div>
            <h2 id="sesionesTitulo">Sesiones síncronas</h2>
            <p>
              En este espacio se concentran las sesiones en vivo de la asignatura para
              acompañar el trabajo académico, resolver dudas y fortalecer la mediación
              mediante herramientas digitales.
            </p>
          </div>
          <div class="sesiones-logos" aria-label="Plataformas de sesiones síncronas">
            <img src="logo_teams.png" alt="Microsoft Teams">
            <img src="bbb_logo.png" alt="BigBlueButton">
          </div>
        </header>

        <div class="sesiones-list" aria-label="Listado de sesiones">
          ${sesiones.map(sesion => `<a class="sesion-link" href="#">${sesion}</a>`).join('')}
        </div>
      </section>
    </div>`;
    contenedor.scrollTop = 0;
  }

  function mostrarKitSupervivencia() {
    const contenedor = document.getElementById('contenidoDinamico');
    const recursos = [
      'Documentos de integridad académica',
      'Normas de convivencia',
      'Netiqueta',
      'Decálogo del estudiante en línea',
      'Normas de citación',
      'Orientaciónes para el parendizaje (autogestión)'
    ];

    document.querySelectorAll('.week-button').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.unit-header').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btnEl => btnEl.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btnEl => {
      if (btnEl.textContent.trim().toLowerCase() === 'kit de supervivencia') {
        btnEl.classList.add('active');
      }
    });

    contenedor.innerHTML = `<div class="content-body kit-content">
      <section class="kit-view" aria-labelledby="kitTitulo">
        <header class="kit-header">
          <h2 id="kitTitulo">Kit de supervivencia</h2>
          <p>
            Reúne recursos esenciales para orientar tu participación académica,
            fortalecer la comunicación en línea y acompañar el trabajo autónomo
            durante la asignatura.
          </p>
        </header>

        <div class="kit-list" aria-label="Recursos del kit de supervivencia">
          ${recursos.map(recurso => `<a class="kit-link" href="#">${recurso}</a>`).join('')}
        </div>
      </section>
    </div>`;
    contenedor.scrollTop = 0;
  }

  function mostrarDoctoradoAsignaturas() {
    const contenedor = document.getElementById('contenidoDinamico');
    const asignaturas = [
      { texto: 'Mediación del aprendizaje', principal: true },
      { texto: 'Asignatura 2' },
      { texto: 'Asignatura 3' },
      { texto: 'Asignatura 4' }
    ];

    contenedor.innerHTML = `<div class="content-body cursos-content">
      <section class="doctorado-view" aria-labelledby="doctoradoTitulo">
        <header class="doctorado-header">
          <h2 id="doctoradoTitulo">Doctorado en educación abierta y a distancia</h2>
        </header>

        <div class="asignaturas-panel" aria-labelledby="asignaturasTitulo">
          <h3 id="asignaturasTitulo">Asignaturas</h3>
          <div class="asignaturas-list">
            ${asignaturas.map(asignatura => `<button type="button" class="asignatura-btn"${asignatura.principal ? ' data-asignatura-principal="true"' : ''}>${asignatura.texto}</button>`).join('')}
          </div>
        </div>
      </section>
    </div>`;
    const asignaturaPrincipalBtn = contenedor.querySelector('[data-asignatura-principal="true"]');
    if (asignaturaPrincipalBtn) {
      asignaturaPrincipalBtn.addEventListener('click', mostrarMenuAsignatura);
    }
    contenedor.scrollTop = 0;
  }

  function mostrarMenuAsignatura() {
    const menuAsignatura = document.getElementById('contenedorSemanas');
    if (!menuAsignatura) return;

    menuAsignatura.classList.remove('asignatura-menu-hidden');
    menuAsignatura.removeAttribute('aria-hidden');
    document.getElementById('menuBotones')?.classList.remove('asignatura-menu-collapsed');
  }

  function ocultarMenuAsignatura() {
    const menuAsignatura = document.getElementById('contenedorSemanas');
    if (!menuAsignatura) return;

    menuAsignatura.classList.add('asignatura-menu-hidden');
    menuAsignatura.setAttribute('aria-hidden', 'true');
    document.getElementById('menuBotones')?.classList.add('asignatura-menu-collapsed');
  }

  // Inicializar
  function toggleMenu() {
    document.querySelector('.main-layout').classList.toggle('left-collapsed');
  }

  function toggleRightMenu() {
    const layout = document.querySelector('.main-layout');
    const toggle = document.querySelector('.right-menu-toggle');
    const isCollapsed = layout.classList.toggle('right-collapsed');

    toggle.setAttribute('aria-expanded', String(!isCollapsed));
    toggle.textContent = isCollapsed ? 'Mostrar panel derecho' : 'Panel derecho';
    toggle.title = isCollapsed ? 'Mostrar menú derecho' : 'Ocultar menú derecho';
  }

  generarMenu();
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', ocultarMenuAsignatura);
  });
  document.querySelector('.nav-btn.primary').addEventListener('click', mostrarMiUnADM);
  document.querySelectorAll('.nav-btn').forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === 'mis cursos') {
      btn.addEventListener('click', mostrarMisCursos);
    }
    if (btn.textContent.trim().toLowerCase() === 'sesiones síncronas') {
      btn.addEventListener('click', mostrarSesionesSincronas);
    }
    if (btn.textContent.trim().toLowerCase() === 'kit de supervivencia') {
      btn.addEventListener('click', mostrarKitSupervivencia);
    }
  });
  mostrarMiUnADM();
