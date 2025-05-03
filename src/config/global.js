export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'El poder punitivo del estado. Evolución histórica del derecho penal. Escuelas penales.',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El poder punitivo del Estado y sus límites',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y justificación del poder punitivo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios que limitan el poder punitivo del Estado',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evolución histórica del Derecho Penal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Orígenes del Derecho Penal y primeros códigos normativos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Derecho Penal Romano Germánico',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Derecho penal en la edad moderna y contemporánea',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Casanueva Sainz, I. (2013). Derecho Penal. Parte general: materiales didácticos: (3 ed.). Publicaciones de la Universidad de Deusto. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34064 ',
    },
    {
      referencia:
        'Muñoz Clares, J. (2013). Determinaciones preliminares del derecho penal: ( ed.). Difusora Larousse - Editorial Tecnos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/114269 ',
    },
    {
      referencia:
        'Del Valle, C. P. (2008). Estudios sobre los fundamentos del derecho penal: ( ed.). Dykinson. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/61036?page=10 ',
    },
    {
      referencia:
        'López Betancourt, E. (2018). Derecho procesal penal: (3 ed.). IURE Editores. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40253 ',
    },
    {
      referencia:
        'Hernández Quintero, H. A. (2007). Cuadernos de Derecho Penal Económico: ( ed.). Universidad de Ibagué. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70752 ',
    },
    {
      referencia:
        'López Betancourt, E. (2018). Derecho procesal penal: (3 ed.). IURE Editores. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40253 ',
    },
  ],
  glosario: [
    {
      termino: 'Control social penal',
      significado:
        'mecanismo mediante el cual el Estado regula conductas a través de normas y sanciones en el marco del Derecho Penal.',
    },
    {
      termino: 'Debido proceso',
      significado:
        'conjunto de garantías procesales que aseguran un juicio justo e imparcial para cualquier persona acusada de un delito.',
    },
    {
      termino: 'Delito',
      significado:
        'conducta tipificada en la ley como punible, que afecta bienes jurídicos protegidos por el Estado.',
    },
    {
      termino: '<em>Lus puniendi</em>',
      significado:
        'facultad exclusiva del Estado para definir y aplicar sanciones penales a quienes infringen el orden jurídico.',
    },
    {
      termino: 'Pena',
      significado:
        'sanción impuesta por el Estado a quienes cometen delitos, con el fin de castigar y prevenir conductas ilícitas.',
    },
    {
      termino: 'Presunción de inocencia',
      significado:
        'derecho fundamental que establece que toda persona es inocente hasta que se pruebe su culpabilidad.',
    },
    {
      termino: 'Principio de culpabilidad',
      significado:
        'garantía penal que establece que solo se puede sancionar a quien haya accionado con dolo o culpa.',
    },
    {
      termino: 'Principio de intervención mínima',
      significado:
        'considera el Derecho Penal como la última instancia para conductas regulares, impidiendo su uso excesivo.',
    },
    {
      termino: 'Principio de legalidad',
      significado:
        'ninguna persona puede ser sancionada por una conducta que no esté previamente tipificada como delito.',
    },
    {
      termino: 'Principio de proporcionalidad',
      significado:
        'la pena impuesta debe ser adecuada y proporcional a la gravedad del delito cometido.',
    },
    {
      termino: 'Principio del acto',
      significado:
        'solo pueden sancionarse conductas humanas concretas, no meras intenciones o pensamientos del individuo.',
    },
    {
      termino: 'Ultima ratio',
      significado:
        'idea de que el Derecho Penal debe ser utilizado como último recurso ante la imposibilidad de otras soluciones jurídicas.',
    },
  ],
}
