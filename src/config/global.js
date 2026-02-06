export default {
  global: {
    Name: 'Normatividad y formalización empresa',
    Description:
      'El presente componente busca fortalecer los conocimientos en las generalidades de comerciantes, empresas y demás asociadas a estas, así mismo, facilita la manera de reconocer los procesos para la formalización de empresas en Colombia, estableciendo el conocimiento en obligaciones comerciales, laborales, financieras y tributarias inherentes al desarrollo del objeto social de una organización económica. De allí la importancia de analizar la normatividad a nivel Internacional y Nacional de Información Financiera (NIIF), que reflejen la realidad de la empresa y contribuyan a la adecuada toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comerciante',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y calidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Deberes, derechos y obligaciones',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Registro mercantil',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Cámara de Comercio: actos mercantiles',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Definición, clasificaciones, naturaleza y estructura de las organizaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Sociedad: concepto, clasificación, requisitos para constitución y liquidación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Normas comerciales, laborales, tributarias y de información financiera para la constitución de la empresa',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Principios básicos de áreas funcionales, planeación estratégica, organización, dirección y control',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123101_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Concepto y calidad',
      referencia:
        'Congreso de Colombia. (1971). <em>Decreto 410 de 1971: Por el cual se expide el Código de Comercio</em>. Diario Oficial No. 33.339.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      tema: 'Deberes, derechos y obligaciones',
      referencia:
        'Presidencia de la República de Colombia. (1990, junio 13). <em>Decreto 1252 de 1990: Por el cual se reglamenta parcialmente el Título VI del Libro I del Código de Comercio</em>. Diario Oficial No. 39.457.',
      tipo: 'Página web',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1252678',
    },
    {
      tema: 'Registro mercantil',
      referencia:
        'Presidencia de la República de Colombia. (1992, marzo 11). Decreto 474 de 1992: Por el cual se adiciona el Decreto 1252 de 1990 sobre cámaras de comercio. Diario Oficial No. 40.346.',
      tipo: 'Página web',
      link:
        'https://compilacionjuridica.antioquia.gov.co/compilacion/compilacion/docs/decreto_0474_1992.htm',
    },
    {
      tema:
        'Definición, clasificaciones, naturaleza y estructura de las organizaciones',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019, diciembre 5).<em> Resolución 2225 de 2019: Por la cual se adopta la Clasificación Uniforme para las Actividades Económicas – CIIU Rev. 4 A.C. adaptada para Colombia.</em>',
      tipo: 'Página web',
      link:
        'https://www.mincit.gov.co/getattachment/7e05bcde-66df-49a2-b6d2-a160f585cf54/Resolucion-2225-del-05-de-diciembre-de-2019-por-la.aspx',
    },
    {
      tema:
        'Normas comerciales, laborales, tributarias y de información financiera para la constitución de la empresa',
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2019, junio 5). <em>Decreto 957 de 2019: Por el cual se adiciona el capítulo 13 al título 1 de la parte 2 del libro 2 del Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo, relacionado con la clasificación de las micro, pequeñas y medianas empresas – MIPYMES</em>. Diario Oficial No. 50.963.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=94550',
    },
  ],
  glosario: [
    {
      termino: 'Contabilidad financiera',
      significado:
        'Sistema de información integrado a la empresa, cuyas funciones son recolectar, clasificar, registrar, resumir, analizar e interpretar la información financiera de la organización.',
    },
    {
      termino: 'Comerciantes',
      significado:
        'Personas que ejercen alguna de las actividades que se consideran mercantiles.',
    },
    {
      termino: 'Empresa comercial',
      significado:
        'Ente económico dedicado a la compra y venta de bienes, conocidos como mercancías.',
    },
    {
      termino: 'Empresa de servicio',
      significado:
        'Ente económico dedicado a la prestación de servicios o a la venta de una capacidad profesional.',
    },
    {
      termino: 'Empresa de manufactura',
      significado:
        'Ente económico dedicado a producir y vender un producto elaborado a partir de materias primas y sometido a un proceso productivo.',
    },
    {
      termino: 'Normas básicas',
      significado:
        'Conceptos básicos y reglas que se deben observar al efectuar los registros contables correspondientes a las actividades que desarrollan las personas jurídicas o naturales, y que deben aplicar todas las personas obligadas a llevar contabilidad.',
    },
    {
      termino: 'Razón comercial',
      significado:
        'Es el nombre que se asigna a la empresa, para darse a conocer ante el público o mercado.',
    },
    {
      termino: 'Razón social',
      significado:
        'Es el nombre de la empresa, que se encuentra registrado en la cámara de comercio y demás entidades de control.',
    },
    {
      termino: 'Registro Único Tributario (RUT) ',
      significado:
        'es el documento que se tramita en la Dirección de Impuestos y Aduanas Nacionales (DIAN), el cual relaciona la clasificación y responsabilidades del contribuyente.',
    },
    {
      termino: 'Sociedad anónima',
      significado:
        'Sociedad que requiere para su constitución un mínimo de cinco socios. Su capital se divide en acciones de igual valor y la responsabilidad de los socios se limita a los aportes de capital. También se conoce con el nombre de corporación. ',
    },
    {
      termino: 'Unidad de valor tributario (UVT)',
      significado:
        'Es una medida que busca estandarizar el cumplimiento de las obligaciones tributarias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). <em>Contabilidad financiera, correlacionado con NIIF</em>. Ediciones de la U. ',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2020, 6 de noviembre). Decreto 1252 de 1990. ',
      link: 'https://bibliotecadigital.ccb.org.co/handle/11520/13702',
    },
    {
      referencia:
        'Cámara de Comercio de Bogotá (2020, 6 de noviembre). Decreto 726 de 2000. ',
      link: 'https://bibliotecadigital.ccb.org.co/handle/11520/14660',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (2020, noviembre 6).',
      link: 'https://www.ctcp.gov.co/',
    },
    {
      referencia:
        'Cuaspa, C. (2013). <em>Normas internacionales de información financiera convergencia a Colombia y aplicación a empresas de salud</em>. Ediciones Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas nacionales -DIAN- (2020, noviembre 6).',
      link: 'https://www.dian.gov.co/',
    },
    {
      referencia:
        'Fayol, H. (1971). <em>Administración industrial y general</em>. Editorial Herrero Hermanos S.A.',
      link: '',
    },
    {
      referencia:
        'Instituto nacional de contadores públicos INCP (2020, noviembre 6).',
      link: 'https://www.incp.org.co/',
    },
    {
      referencia: 'Junta central de contadores (2020, noviembre 6).',
      link: 'http://www.jcc.gov.co/',
    },
    {
      referencia:
        'Ministerio de Comercio Industria y Turismo -MINCIT- (2020, 6 de noviembre). Decreto 957 de 2019',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20957%20DEL%2005%20DE%20JUNIO%20DE%202019.pdf',
    },
    {
      referencia:
        'Münch, L. (2015). <em>Administración: proceso administrativo, clave del éxito empresarial</em>. Pearson.',
      link: '',
    },
    {
      referencia:
        'Santos-Cid, C. (2018). Una mirada a la historia de la Contabilidad. <em>Revista Cubana De Finanzas Y Precios, 2</em>(1), 139-155.',
      link: '',
    },
    {
      referencia:
        'Sánchez, V. (2015). La redefinición del papel de la empresa en la sociedad. <em>Barataria: revista Castellano-Manchega de Ciencias Sociales</em>, (20),129-145.',
      link: '',
    },
    {
      referencia:
        'Secretaria del Senado (2020, octubre 15). Código del Comercio: Decreto-Ley 410 de 1971. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, noviembre 6). Ley 222 de 1995. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0222_1995.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, noviembre 6). Ley 1258 de 2008.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1258_2008.html',
    },
    {
      referencia: 'Secretaría del Senado (2020, noviembre 6) Ley 1014 de 2006.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1014_2006.html',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). <em>Contabilidad: sistema de información para las organizaciones</em>. Mc. Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Sistema Único de Información Normativa (2020, noviembre 6) Decreto 2420 de 2015 Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/30019674',
    },
    {
      referencia: 'Superintendencia de Sociedades (2020, noviembre 6).',
      link: 'http://www.supersociedades.gov.co/',
    },
    {
      referencia:
        'Vilches, R. (2019). <em>Apuntes de contabilidad básica</em>. Editorial El Cid.',
      link: '',
    },
    {
      referencia:
        'Warren, C., Reeves, J. y Duchac, J. (2016). <em>Contabilidad financiera</em>. Cengage Learning. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Patricia Mantilla Galvis',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Maryuri Agudelo Franco',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Arnulfo Beltrán Mojica',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Camila Ovalle',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo Lopez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Caceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
