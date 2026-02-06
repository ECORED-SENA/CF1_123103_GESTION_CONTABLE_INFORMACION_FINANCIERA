<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-left") La empresa

    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t1-1
          .col-xl.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Para iniciar el proceso contable en una organización, es indispensable hablar de empresas y sociedades, teniendo en cuenta la clasificación, características y requisitos. La contextualización de estos elementos contribuye a la identificación de la normatividad financiera y tributaria aplicable en cada caso; por lo tanto, es importante la apropiación de los conceptos que se proponen en esta unidad.
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex
              img(src='@/assets/curso/tema2/img1.png', alt='', class="w-100 h-100 object-fit-cover")

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2(data-aos="zoom-in") 2.1 Definición, clasificaciones, naturaleza y estructura de las organizaciones

    p(data-aos="fade-left") Es fundamental comprender que una organización se estructura a partir de la integración de recursos financieros, tecnológicos y humanos con el propósito de desarrollar actividades mercantiles. Las empresas pueden clasificarse según su naturaleza y funciones, abarcando desde la comercialización de bienes hasta la prestación de servicios. Para su funcionamiento, requieren talento humano, inversión financiera y una distribución clara de tareas, elementos esenciales para alcanzar sus objetivos y garantizar su sostenibilidad en el mercado.

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/yvEoYhSCaV8?si=ro-NMGiyiQHF2qZB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mt-4.bg-t2-1
      .col-12 
        .p-5      
          .row.mb-2.ms-0
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Clasificaciones, naturaleza y estructura de las organizaciones     

          p.mt-2 Las empresas se clasifican de la siguiente manera (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Warren, Reeves y Duchac, 2016; Cuaspa, 2013):

          .row.mt-2.justify-content-center
            .col-lg-10(data-aos="fade-left")
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-t2-2")
                .row.justify-content-center(titulo="Según su objetivo")
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema2/img2.svg", alt="", style="width: 79px").m-auto
                  .col-lg-8
                    p #[b Con ánimo de lucro:] son empresas que tienen por objetivo la generación de rentabilidad o beneficios económicos, los cuales serán distribuidos entre los socios o propietarios. En esta clasificación podemos mencionar: persona naturales y jurídicas. 

                    p #[b Sin ánimo de lucro:]  son empresas creadas en apoyo de la comunidad. No se distribuyen las ganancias, estas son invertidas en la organización para beneficio social. En este grupo se encuentran: fundaciones de beneficencia, fondos de empleados, corporaciones civiles, clubes deportivos, etc.

                div(titulo="Según su actividad económica")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img3.svg", alt="", style="width: 79px").m-auto
                    .col-lg-8
                      p #[b Empresas agropecuarias:] son las empresas dedicadas a la producción de bienes agrícolas y pecuarios. Ejemplo: granjas avícolas, de cultivos de hortalizas y granos.

                      p #[b Empresas mineras:]  son las empresas que explotan los recursos del subsuelo.  Ejemplo: empresas petroleras, de piedras preciosas.

                      p #[b Empresas industriales:] son aquellas que transforman materia prima en productos terminados. Ejemplo: fábricas de jeans, de calzado y de muebles.

                      p #[b Empresas comerciales:] realizan actividades de compra y venta de bienes. Ejemplo: empresas de electrodomésticos, supermercados, etc.

                      p #[b Empresas de servicios:] son aquellas empresas que tienen como objetivo satisfacer una necesidad. Ejemplo: empresas de salud, transporte, educación, etc.


                div(titulo="Según la procedencia de capital")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img4.svg", alt="", style="width: 79px").m-auto
                    .col-lg-8
                      p #[b Empresas privadas:] están constituidas con capital privado; es decir, aporte de particulares.

                      p #[b Empresas oficiales o públicas:]  son las empresas constituidas con capital del Estado.

                      p #[b Empresas de economía mixta:] son creadas con aportes de capital privado y público.

                div(titulo="Según el grupo de presentación de información financiera")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img5.svg", alt="", style="width: 79px").m-auto
                    .col-lg-8
                      p #[b Grupo 1: ]son las empresas que aplican las NIIF plenas. De acuerdo con el decreto 2420 y 2496 de 2015, son: emisores de valores, entidades de interés público,entidades que tengan activos totales superiores a treinta mil (30.000) SMMLV o planta de personal superior a doscientos (200) trabajadores; que no sean emisores de valores ni entidades de interés público y que cumplan además cualquiera de los siguientes requisitos: 

                      ul.lista-ul--color
                        li.d-flex
                          i.fa-solid.fa-chevron-right
                          |
                          p.mb-0 Ser subordinada o sucursal de una compañía extranjera que aplique NIIF. 

                        li.d-flex
                          i.fa-solid.fa-chevron-right
                          |
                          p.mb-0 Ser subordinada o matriz de una compañía nacional que deba aplicar NIIF. 

                        li.d-flex
                          i.fa-solid.fa-chevron-right
                          |
                          p.mb-0 Realizar importaciones (pagos al exterior) o exportaciones (ingresos del exterior) que representen más del 50 % de las compras o de las ventas respectivamente (Sistema Único de Información Normativa, 2020).
                  .row.justify-content-center
                    .col-11
                      p.mt-4 #[b Grupo 2:] son las empresas que aplican las NIIF para pymes. De acuerdo con el decreto 2420 y 2496 de 2015, son: empresas que tengan activos totales por valor entre quinientos (500) y treinta mil (30.000) SMMLV o planta de personal entre once (11) y doscientos (200) trabajadores, y que no sean emisores de valores ni entidades de interés público. Microempresas que tengan activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o planta de personal no superior a los (10) trabajadores, y cuyos ingresos brutos anuales sean iguales o superiores a 6.000 SMMLV (Sistema Único de Información Normativa, 2020).

                      p #[b Grupo 3:] son las empresas que aplican contabilidad simplificada para microempresas. De acuerdo con el decreto 2420 y 2496 de 2015, son: personas naturales o jurídicas que cumplan los criterios establecidos en el art. 499 del estatuto tributario (ET) y normas posteriores que lo modifiquen. Para el efecto se tomará el equivalente a UVT, en salarios mínimos legales vigentes. b) Microempresas que tengan activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o planta de personal no superior a los (10) trabajadores que no cumplan con los requisitos para ser incluidas en el grupo 2 ni en el literal anterior (Sistema Único de Información Normativa, 2020). 

                div(titulo="Según Conformación del Capital")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img6.svg", alt="", style="width: 79px").m-auto
                    .col-lg-8
                      p #[b Multinacionales:] son aquellas empresas que realizan operaciones a nivel mundial, generalmente constituida con capital extranjero. Ejemplo: BBVA.

                      p #[b Grupos económicos:] son empresas que pertenecen al mismo grupo de socios o propietarios, se dedican a diferentes sectores de la economía. Ejemplo: Grupo Santo Domingo, Grupo Luis Carlos Sarmiento Angulo.

                      p #[b Nacionales:] son las empresas creadas en el territorio colombiano, cuentan con una empresa principal y varias sucursales. Ejemplo: arturo calle, panamericana.

                      p #[b Locales:] son las empresas que funcionan dentro de la misma localidad.

                div(titulo="Según su naturaleza")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img7.svg", alt="", style="width: 79px").m-auto
                    .col-lg-8
                      p #[b Personas naturales:] son las empresas constituidas por una persona, quienes adquieren derechos y obligaciones. Es cualquier individuo de la especie humana.

                      p #[b Personas jurídicas:] son un ente ficticio, pertenecen a las sociedades, quienes adquieren derechos y contraen obligaciones civiles.

                div(titulo="Según el tamaño")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img8.svg", alt="", style="width: 79px").m-auto
                    .col-lg-8
                      p De acuerdo con el Decreto 957 del 5 de junio de 2019, las empresas según el tamaño se clasifican en micro, pequeña, mediana y gran empresa, el criterio de clasificación se encuentra definido por los ingresos de las actividades ordinarias anuales de acuerdo con el sector manufacturero, de servicios y comercial. La clasificación está determinada de la siguiente manera (MINCIT, 2020):

                  .row.justify-content-center.mt-2
                    .col-10
                      h2.text-center(style="color: #5B39A6") Sector manufacturero
                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Microempresa]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≤ 23.563 Unidad de valor Tributario (UVT).
                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Pequeña]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 23.563 Unidad de valor Tributario (UVT) y ≤ 204.995 UVT.

                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Mediana]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 204.995 Unidad de valor Tributario (UVT) y ≤ 1.736.565 UVT.

                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Grande]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 1.736.565 UVT.

                      h2.text-center.mt-4(style="color: #5B39A6") Sector servicios
                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Microempresa]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos <= 32.988 Unidad de valor Tributario (UVT).
                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Pequeña]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 32.988 Unidad de valor Tributario (UVT) y ≤ 131.951 UVT.

                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Mediana]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 131.951 Unidad de valor Tributario (UVT) y ≤ 483.034 UVT.

                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Grande]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 483.034 UVT.

                      h2.text-center.mt-4(style="color: #5B39A6") Sector comercial
                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Microempresa]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≤ 44.769 Unidad de valor Tributario (UVT).
                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Pequeña]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 44.769 Unidad de valor Tributario (UVT) y ≤ 431.196 UVT.

                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Mediana]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 431.196 Unidad de valor Tributario (UVT) y ≤ 2.160.692 UVT.

                      .row.justify-content-center.align-items-center
                        .col-lg-2.mt-2.bg-t2-2
                          p.text-center.text-white.mt-2 #[b Grande]
                        .col-lg-8.mt-2.bg-t2-3 
                          p.text-center.mt-2 Ingresos ≥ 2.160.692 UVT.

                      p.mt-4 Cabe resaltar que el presente decreto empezó a regir a partir de diciembre de 2019, donde se constituye como criterio de clasificación los ingresos ordinarios del año inmediatamente anterior, los cuales corresponden a las ventas brutas anuales derivadas del objeto social. En caso de que los ingresos generados sean de diferentes sectores, se tendrá en cuenta el rango de los ingresos del sector económico más altos (MINCIT, 2020).


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2(data-aos="zoom-in") 2.2 Sociedad: concepto, clasificación, requisitos para constitución y liquidación

    p(data-aos="fade-left") La constitución de una sociedad es un paso fundamental en el ámbito empresarial, ya que permite la asociación de personas con el fin de realizar actividades mercantiles bajo una figura jurídica propia. Según el Código de Comercio, estas sociedades pueden clasificarse en diferentes tipos, cada una con características específicas que determinan su funcionamiento y responsabilidad legal. Comprender su concepto, clasificación y los requisitos para su constitución y liquidación es esencial para garantizar el cumplimiento normativo y el desarrollo sostenible de los negocios.

    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Concepto

    .row.justify-content-center.align-items-center
      .col-lg-7
        p.bg-t2-4.p-4 Según el Código de Comercio la constitución de una sociedad consiste en que “dos o más personas se obligan a hacer un aporte en dinero, en trabajo o en otros bienes apreciables en dinero, con el fin de repartirse entre sí las utilidades obtenidas en la empresa o actividad social” (Secretaría del Senado, 2020, Art. 98).

        p.mt-2 De acuerdo con lo anterior, en la constitución de la sociedad intervienen diferentes personas, las cuales se denominan socios, quienes realizan aportes de diferente índole. Esto con el objetivo de distribuirse las ganancias generadas en el curso normal del desarrollo de las operaciones comerciales. Cabe resaltar, que las sociedades se crean bajo la figura de persona jurídica distinta de los socios individualmente considerados.

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img9.png', alt='', style="width: 500px").m-auto

    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Clasificación

    p(data-aos="fade-left") De acuerdo con el Código de Comercio las sociedades se clasifican de la siguiente forma (Secretaría del Senado, 2020):

    .row.bg-t2-5
      .col-12
       .p-5
          .row.mt-2.justify-content-center
            .col-lg-10
              AcordionA(tipo="a" clase-tarjeta="tarjeta bg-t2-2")
                .row.justify-content-center(titulo="Sociedad colectiva:")
                  .col-lg-2.mb-4.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 90px").m-auto
                  .col-lg-8
                    p #[b Número de socios]
                    p Para su constitución deben existir mínimo dos socios.
                    hr.hr-big
                
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Responsabilidad de los socios]
                      p Responden solidaria e ilimitadamente por las operaciones sociales.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Razón social]
                      p Se forma con el nombre completo o el solo apellido de alguno o algunos de los socios seguido de las expresiones “& compañía”, “hermanos”, “e hijos”, u otras análogas, si no se incluyen los nombres completos o los apellidos de todos los socios.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Conformación del capital]
                      p El capital lo constituye el aporte de los socios.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Causales de disolución y liquidación (Secretaría del Senado, 2020, Art. 218).]
                      p #[b Por muerte de alguno de los socios], si no se hubiere estipulado su continuación con uno o más de los herederos, o con los socios supérstites.
                      p #[b Por incapacidad sobreviniente a alguno de los socios], a menos que se convenga que la sociedad continúe con los demás, o que acepten que los derechos del incapaz sean ejercidos por su representante.
                      p #[b Por declaración de quiebra de alguno de los socios], si los demás no adquieren su interés social o no aceptan la cesión a un extraño, una vez requeridos por el síndico de la quiebra, dentro de los treinta días siguientes.
                      p #[b Por enajenación forzada del interés de alguno de los socios], en favor de un extraño, si los demás asociados no se avienen dentro de los treinta días siguientes a continuar la sociedad con el adquirente.
                      p #[b Por renuncia o retiro justificado de alguno de los socios], si los demás no adquieren su interés en la sociedad o no aceptan su cesión a un tercero.


                div(titulo="Sociedad en comandita simple")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Número de socios]
                      p Intervienen dos categorías de socios: comanditarios (aportes de capital) y gestores (aporte industrial). 
                      hr.hr-big
                
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Responsabilidad de los socios]
                      p Responden los socios gestores solidaria e ilimitadamente por las operaciones sociales.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Razón social]
                      p Se forma con el nombre completo o apellido de uno o más de los socios colectivo seguido de “& compañía”, finalmente se registra la expresión “Sociedad en comandita”.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Conformación del capital]
                      p El capital lo constituye el aporte de los socios comanditarios y los socios gestores.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Causales de disolución y liquidación (Secretaría del Senado, 2020, Art. 218).]

                      p Causales definidas en el Art. 218 del Código de comercio.

                      p Causales definidas en el Art. 319 del Código de comercio.

                      p Por desaparición de alguna de las categorías de socios.

                      p Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento del capital suscrito.

                  
                div(titulo="Sociedad en comandita por acciones")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Número de socios]
                      p Intervienen dos categorías de socios: comanditarios (aportes de capital) y gestores (aporte industrial). 
                      hr.hr-big
                
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Responsabilidad de los socios]
                      p Responden los socios gestores solidaria e ilimitadamente por las operaciones sociales.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Razón social]
                      p Se forma con el nombre completo o apellido de uno o más de los socios colectivo seguido de “& compañía”, finalmente se registra la expresión “Sociedad en comandita por acciones”.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Conformación del capital]
                      p El capital lo constituye el aporte de los socios, mediante acciones de igual valor.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Causales de disolución y liquidación (Secretaría del Senado, 2020, Art. 218).]

                      p Causales definidas en el Art. 218 del Código de comercio.

                      p Causales definidas en el Art. 319 del Código de comercio.

                      p Por desaparición de alguna de las categorías de socios.

                      p Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento del capital suscrito.


                div(titulo="Sociedad de responsabilidad limitada")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Número de socios]
                      p Para su constitución deben existir mínimo dos socios y máximo 25. 
                      hr.hr-big
                
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Responsabilidad de los socios]
                      p Responden limitadamente; es decir, hasta el límite de sus aportes.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Razón social]
                      p Se forma con el nombre o denominación de la sociedad, seguido de la expresión “Limitada o LTDA”.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Conformación del capital]
                      p El capital lo constituye las cuotas de igual valor.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Causales de disolución y liquidación (Secretaría del Senado, 2020, Art. 218).]

                      p  Causales definidas en el Art. 218 del Código de comercio.

                      p Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento.

                      p Cuando el número de socios exceda de 25.


                div(titulo="Sociedad anónima")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Número de socios]
                      p Para su constitución deben existir mínimo cinco socios. 
                      hr.hr-big
                
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Responsabilidad de los socios]
                      p Responden limitadamente; es decir, hasta el límite de sus aportes.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Razón social]
                      p Se forma con el nombre o denominación de la sociedad, seguido de la expresión “Sociedad anónima o S.A.”.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Conformación del capital]
                      p El capital lo constituye acciones de igual valor.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Causales de disolución y liquidación (Secretaría del Senado, 2020, Art. 218).]

                      p Causales definidas en el Art. 218 del Código de comercio.

                      p Cuando ocurran pérdidas que reduzcan el patrimonio neto a menos del cincuenta por ciento, del capital suscrito.

                      p Cuando el 95 % o más de las acciones suscritas pertenezcan a un solo socio.


                div(titulo="Sociedad por acciones simplificada")
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img10.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Número de socios]
                      p Se encuentran constituidas por uno o más socios.
                      hr.hr-big
                
                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-8
                      p #[b Responsabilidad de los socios]
                      p Responden limitadamente; es decir, hasta el límite de sus aportes.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Razón social]
                      p Se forma con el nombre o denominación de la sociedad, seguido de la expresión “Sociedad por acciones o S.A.S”.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Conformación del capital]
                      p El capital lo constituye acciones de igual valor, las cuales no pueden inscribirse en el Registro Nacional de Valores.
                      hr.hr-big

                  .row.justify-content-center
                    .col-lg-2.mb-4.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/img11.svg", alt="", style="width: 90px").m-auto
                    .col-lg-8
                      p #[b Causales de disolución y liquidación (Secretaría del Senado, 2020, Art. 218).]

                      p De acuerdo con la Ley 1258 de 2008 (Secretaría del Senado, 2020. Art 34), las causales de disolución son:

                      p Por vencimiento del término previsto en los estatutos.

                      p Por imposibilidad de desarrollar las actividades previstas en su objeto social.

                      p Por la iniciación del trámite de liquidación judicial.

                      p Por las causales previstas en los estatutos.

                      p Por voluntad de los accionistas adoptada en la asamblea o por decisión del accionista único.

                      p Por orden de autoridad competente.

                      p Por pérdidas que reduzcan el patrimonio neto de la sociedad por debajo del cincuenta por ciento del capital suscrito.


    
    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Requisitos para constitución

    p.mt-3(data-aos="fade-left") De acuerdo con el Código de Comercio (Secretaría del Senado, 2020, Art. 110), se relacionan los requisitos para la constitución de una sociedad, la cual se realizará mediante escritura pública, relacionando:

    .row.bg-t1-4.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--gris.p-4
            PasosB.color-acento-contenido
              .row.justify-content-center(titulo="Paso 1")
                .col-md-6.mb-4.mb-md-0
                  p #[b El nombre]
                  p El nombre y domicilio de las personas que intervengan como otorgantes. Con el nombre de las personas naturales deberá indicarse su nacionalidad y documento de identificación legal; con el nombre de las personas jurídicas, la ley, decreto o escritura de que se deriva su existencia.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img15.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 2")
                .col-md-6.mb-4.mb-md-0
                  p #[b La clase]
                  p La clase o tipo de sociedad que se constituye y el nombre de esta, formado como se dispone en relación con cada uno de los tipos de sociedad que regula este Código.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img16.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 3")
                .col-md-6.mb-4.mb-md-0
                  p #[b El domicilio]
                  p El domicilio de la sociedad y el de las distintas sucursales que se establezcan en el mismo acto de constitución.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img17.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 4")
                .col-md-6.mb-4.mb-md-0
                  p #[b El objeto social]
                  p El objeto social, esto es, la empresa o negocio de la sociedad, haciendo una enunciación clara y completa de las actividades principales. Será ineficaz la estipulación en virtud de la cual el objeto social se extienda a actividades enunciadas en forma indeterminada o que no tengan una relación directa con aquel.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img18.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 5")
                .col-md-6.mb-4.mb-md-0
                  p #[b El capital]
                  p El capital social, la parte de este que se suscribe y la que se paga por cada asociado en el acto de la constitución. En las sociedades por acciones deberá expresarse, además, el capital suscrito y el pagado, la clase y valor nominal de las acciones representativas del capital, la forma y términos en que deberán cancelarse las cuotas debidas, cuyo plazo no podrá exceder de un año.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img19.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 6")
                .col-md-6.mb-4.mb-md-0
                  p #[b La forma]
                  p La forma de administrar los negocios sociales, con indicación de las atribuciones y facultades de los administradores, y de las que se reserven los asociados, las asambleas y las juntas de socios, conforme a la regulación legal de cada tipo de sociedad.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img20.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 7")
                .col-md-6.mb-4.mb-md-0
                  p #[b La época]
                  p La época y la forma de convocar y constituir la asamblea o la junta de socios en sesiones ordinarias o extraordinarias, y la manera de deliberar y tomar los acuerdos en los asuntos de su competencia.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img21.png', style="width: 295px")


              .row.justify-content-center(titulo="Paso 8")
                .col-md-6.mb-4.mb-md-0
                  p #[b Las fechas]
                  p Las fechas en que deben hacerse inventarios y balances generales, y la forma en que han de distribuirse los beneficios o utilidades de cada ejercicio social, con indicación de las reservas que deban hacerse.

              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img22.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 9")
                .col-md-6.mb-4.mb-md-0
                  p #[b La duración]
                  p La duración precisa de la sociedad y las causales de disolución anticipada de la misma.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img28.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 9")
                .col-md-6.mb-4.mb-md-0
                  p #[b La liquidación]
                  p La forma de hacer la liquidación, una vez disuelta la sociedad, con indicación de los bienes que hayan de ser restituidos o distribuidos en especie, o de las condiciones en que, a falta de dicha indicación, puedan hacerse distribuciones en especie.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img23.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 10")
                .col-md-6.mb-4.mb-md-0
                  p #[b Las diferencias]
                  p Si las diferencias que ocurran a los asociados entre sí o con la sociedad, con motivo del contrato social, han de someterse a decisión arbitral o de amigables componedores y, en caso afirmativo, la forma de hacer la designación de los árbitros o amigables componedores.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img24.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 11")
                .col-md-6.mb-4.mb-md-0
                  p #[b El nombre]
                  p El nombre y domicilio de la persona o personas que han de representar legalmente a la sociedad, precisando sus facultades y obligaciones, cuando esta función no corresponda, por la ley o por el contrato, a todos o a algunos de los asociados.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img25.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 12")
                .col-md-6.mb-4.mb-md-0
                  p #[b Las facultades]
                  p Las facultades y obligaciones del revisor fiscal, cuando el cargo esté previsto en la ley o en los estatutos.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img26.png', style="width: 295px")

              .row.justify-content-center(titulo="Paso 13")
                .col-md-6.mb-4.mb-md-0
                  p #[b Los demás pactos]
                  p Los demás pactos que, siendo compatibles con la índole de cada tipo de sociedad, estipulen los asociados para regular las relaciones a que da origen el contrato.
              
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema2/img27.png', style="width: 295px")

    .row.bg-t2-6.mt-4
      .col-12
        .p-5
          p(data-aos="fade-left") De acuerdo con la Ley 1014 de 2006 (Secretaría del Senado, 2020), pueden constituirse sociedades pluripersonales bajo documento privado que reúna los siguientes requisitos:
          .row.align-items-center
            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2 
                .col-2
                  figure
                    img(src="@/assets/curso/tema1/img21.svg", alt="", style="width: 50px").m-auto
                .col-10
                  p.mb-0 Nombre, documento de identidad, domicilio y dirección del socio o socios.
                
              hr.borde-num

            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2 
                .col-2
                  figure
                    img(src="@/assets/curso/tema1/img22.svg", alt="", style="width: 50px").m-auto
                .col-10 
                  p.mb-0 El domicilio social. 
              hr.borde-num

            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2 
                .col-2
                  figure
                    img(src="@/assets/curso/tema1/img23.svg", alt="", style="width: 50px").m-auto
                .col-10
                  p.mb-0 El término de duración o la indicación de que este es indefinido. 
                
              hr.borde-num

            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2
                .col-2
                  figure
                    img(src="@/assets/curso/tema1/img24.svg", alt="", style="width: 50px").m-auto
                .col-10 
                  p.mb-0 Una enunciación clara y completa de las actividades principales, a menos que se exprese que la sociedad podrá realizar cualquier acto lícito de comercio.
              hr.borde-num

            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2 
                .col-2
                  figure
                    img(src="@/assets/curso/tema1/img25.svg", alt="", style="width: 50px").m-auto
                .col-10
                  p.mb-0 El monto del capital haciendo una descripción pormenorizada de los bienes aportados, con estimación de su valor. El socio o socios responderá por el valor asignado a los bienes en el documento constitutivo.
                
              hr.borde-num

            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2 
                .col-2
                  figure
                    img(src="@/assets/curso/tema1/img26.svg", alt="", style="width: 50px").m-auto
                .col-10 
                  p.mb-0 El número de cuotas, acciones o partes de interés de igual valor nominal en que se dividirá el capital de la sociedad y la forma en que serán distribuidas si fuere el caso.
              hr.borde-num

            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2 
                .col-2
                  figure
                    img(src="@/assets/curso/tema2/img29.svg", alt="", style="width: 50px").m-auto
                .col-10 
                  p.mb-0 La forma de administración dentro del tipo o especie de sociedad de que se trate, así como el nombre, documento de identidad y las facultades de sus administradores. A falta de estipulaciones se entenderá que los administradores podrán adelantar todos los actos comprendidos dentro de las actividades previstas.
              hr.borde-num

            .col-lg-6
              .row.align-items-center.justify-content-center.row-equal-height2
                .col-2
                  figure
                    img(src="@/assets/curso/tema2/img30.svg", alt="", style="width: 50px").m-auto
                .col-10 
                  p.mb-0 Declaración por parte del constituyente o constituyentes, según sea el caso, o de sus representantes o apoderados sobre el cumplimiento de al menos uno de los requisitos señalados en el artículo 22 de la Ley 1014 de 2006 (Secretaría del Senado, 2020), esto es, que cuenten con diez (10) o menos trabajadores, o con activos totales, excluida la vivienda, por valor inferior a quinientos (500) salarios mínimos legales mensuales vigentes.
              hr.borde-num

            p.mt-4 Recuerde que, una vez que se obtiene la escritura pública o documento privado debe tramitarse el registro mercantil ante la cámara de comercio en la jurisdicción del domicilio.

    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0  Liquidación 

    p.mt-4 Según el Código de Comercio (Secretaría del Senado, 2020, Art. 218 y 225), se relacionan las causales de disolución y liquidación de una sociedad.

    .row.mt-4.justify-content-center.align-items-center.bg-t2-7.p-5
      .h3.text-center Causales de disolución
      .col-lg-4 
        ul.lista-ul--color
          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por vencimiento del término previsto para su duración en el contrato.

          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por la imposibilidad de desarrollar el objeto social.

          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por reducción del número de asociados a menos del requerido en la ley para su formación o funcionamiento, o por aumento que exceda del límite máximo fijado en la misma ley.

          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por la declaración de quiebra de la sociedad.
      
      .col-lg-4.d-none.d-lg-block

        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img31.png', alt='', style="width: 350px").m-auto

      .col-lg-4 
        ul.lista-ul--color
          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por las causales que expresa y claramente se estipulen en el contrato.

          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por decisión de los asociados.

          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por decisión de autoridad competente en los casos expresamente previstos en las leyes.

          li.d-flex
            i.fa-solid.fa-chevron-right
            |
            p.mb-0 Por las demás causales establecidas en las leyes, en relación con todas o algunas de las formas de sociedad que regula este Código.

    .row.mt-4.align-items-center
      .col-lg-6
        .row.mb-2.ms-0
          .col-auto.bg-c5(data-aos="fade-left")
            .row.align-items-center
              .col
                h3.mb-0 Liquidación de una sociedad 

        p.mt-2 La liquidación de una sociedad hace referencia a su terminación definitiva, la cual se deriva de las causales de disolución presentadas anteriormente; además, de las señaladas de forma específica, conforme con el tipo de sociedad constituida.

      .col-lg-6.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img32.png', alt='', style="width: 480px").m-auto

    .row.mt-4.align-items-center
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img33.png', alt='', style="width: 480px").m-auto

      .col-lg-7
        p #[b Proceso de liquidación de la sociedad:]
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.text-black 1
            | Convocar una reunión de la junta directiva donde se realice el acta que relacione las causales de disolución y presentadas, que hacen parte del objeto de liquidación.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 2
            | Registrar el acta de disolución ante la cámara de comercio.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 3
            | Nombrar un liquidador para determinar el patrimonio social y el inventario.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 4
            | Informar a las entidades de control, supervisión y al público en general que la sociedad se encuentra en liquidación.
          li 
            .lista-ol--cuadro__vineta
              span.text-black 5
            | El liquidador deberá cancelar pasivos externos y distribuir el remanente entre los socios.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 6
            | El liquidador realiza el proyecto de liquidación de acuerdo con la información financiera.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 7
            | Citar a reunión de junta directiva para aprobar el proyecto de liquidación.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 8
            | Registrar el acta de liquidación en la cámara de comercio.

          li 
            .lista-ol--cuadro__vineta
              span.text-black 9
            | Solicitar cancelación del RUT ante la Dirección de impuestos y Aduanas Nacionales.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Fenómenos societarios


    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.p-5(style="background-color: #412976")
        .d-flex.align-items-center.mb-3
          img(src='@/assets/curso/tema2/img34.svg', style="width:76px")
          h4.mb-0.ms-3.text-black 
            b.bg-t2-8 Transformación:

        p.mt-4.text-white La transformación es una reforma estatutaria en la cual la sociedad cambia de tipo societario, modificando el tipo de organización jurídica de la entidad según lo estipulado en el Código de Comercio (Secretaría del Senado, 2020, Art. 167).

        p.text-white Por ejemplo, cuando las empresas unipersonales se transformaron en Sociedad de Acciones Simplificadas (SAS), conforme los lineamientos establecidos en la Ley 1258 de 2008 (Secretaría del Senado, 2020).

      .col-md.tarjeta.p-5(style="background-color: #E8E8E8")
        .d-flex.align-items-center.mb-3
          img(src='@/assets/curso/tema2/img34.svg', style="width:76px")
          h4.mb-0.ms-3.text-black 
            b.bg-t2-8 Fusión:

        p La fusión es una reforma estatutaria en la cual una o más sociedades se disuelven sin liquidarse, para ser absorbidas por otra o crear una nueva. De esta manera, traspasan sus activos, pasivos, derechos y obligaciones a otra(s) sociedad(es) existente (sociedad absorbente) o a la nueva sociedad según lo estipulado en el Código de Comercio (Secretaría del Senado, 2020, Art. 172). 

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2(data-aos="zoom-in") 2.3 Normas comerciales, laborales, tributarias y de información financiera para la constitución de la empresa

    p(data-aos="fade-left") Para constituir una empresa es importante dar cumplimiento a los requisitos comerciales, laborales, tributarios y de funcionamiento; sin olvidar, aplicar adecuadamente las Normas Internacionales de Información Financiera (NIIF) para llevar a cabo el proceso contable de forma satisfactoria.  A continuación, se relacionan los diversos requisitos, los cuales aplican de acuerdo con el tipo de empresa que se desea constituir:

    TabsC.color-acento-contenido
      .py-3.py-md-4.bg-t2-9(titulo="Normas comerciales")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0.p-5
            h4 Normas comerciales
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Identificar el tipo de empresa y/o empresa que se desea constituir, teniendo en cuenta la figura de persona natural o jurídica.
              
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Verificar ante la cámara de comercio el nombre de la empresa, con el fin de evitar que ya se encuentre en el sistema creado; adicionalmente, confirmar la actividad económica (código CIIU).

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Dependiendo del tipo de empresa y/o sociedad se debe generar la escritura pública o documento privado en la notaría. Este documento es utilizado en el momento de constituir una sociedad, donde participan diferentes socios y sus aportes son de diversas formas.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Diligenciar y presentar el formulario de Registro Único empresarial y social (RUES) y formulario de matrícula en la Cámara de Comercio de la jurisdicción donde se encuentra ubicada la empresa.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Una vez diligenciados los formularios pertinentes se genera la inscripción del registro mercantil y se obtiene el certificado de existencia y representación legal.

      .py-3.py-md-4.bg-t2-9(titulo="Normas laborales")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0.p-5
            h4 Normas laborales
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 En el caso de contratar colaboradores para el desarrollo de las actividades de la empresa se debe realizar el contrato de trabajo que reúna los requisitos legales; además de presentar los exámenes de ingreso a que hay lugar. 

              li.d-flex
                i.fa-solid.fa-chevron-right
                | 
                p.mb-0 Afiliar a los colaboradores a Entidades Promotoras de salud (EPS), Fondos de pensión y Administradora de Riesgos Laborales (ARL). 

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Realizar aportes parafiscales: cajas de compensación familiar, SENA e ICBF, teniendo en cuenta las directrices para su aplicación.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Diseñar e implementar un programa de Seguridad y Salud en el Trabajo, aplicable de acuerdo con el número de trabajadores.


      .py-3.py-md-4.bg-t2-9(titulo="Normas tributarias")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0.p-5
            h4 Normas tributarias
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Registrar la inscripción ante la Dirección de impuestos y Aduanas Nacionales (DIAN) para obtener el Registro Único Tributario (RUT).

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Solicitar autorización de numeración para facturar, teniendo en cuenta los requisitos establecidos. 

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Presentar oportunamente las declaraciones de IVA, de renta y complementarios, de industria y comercio si cumple con los requisitos para hacerlo.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Presentar oportunamente las declaraciones de retención en la fuente por renta, IVA y de ICA, teniendo en cuenta la norma vigente y si cumple con los requisitos para realizarlo.

      .py-3.py-md-4.bg-t2-9(titulo="Normas de funcionamiento")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0.p-5
            h4 Normas de funcionamiento
            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Adquirir el certificado de sanidad, el cual indica que el establecimiento cuenta con los estándares de salubridad exigidos.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Obtener el certificado de bomberos, que tiene como objetivo la seguridad de los colaboradores mediante la identificación de riesgos.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Requerir el certificado de estudio de uso de suelos, expedido por las oficinas de planeación.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Solicitar paz y salvo de Sayco y Acinpro para el pago de derechos de autor e intérpretes musicales.


      .py-3.py-md-4.bg-t2-9(titulo="Normas de información financiera")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0.p-5
            h4 Normas de información financiera
            p La contabilidad existe desde la antigüedad, surgió a partir de la necesidad de llevar un control de las operaciones comerciales. Esta profesión ha ido evolucionando con los diferentes cambios del mercado a través del tiempo. Esto ha incentivado la sistematización de los procesos contables, agilizando de cierta manera la entrega de información financiera para la toma de decisiones (Santos-Cid, 2018).

            p En desarrollo de los procesos contables, es importante tener en cuenta las Normas Internacionales de Información Financiera (NIIF), las cuales presentan constantemente cambios. Por tanto, se requiere que los profesionales en esta área se encuentren actualizados.

            p El International Accounting Standars Board (IASB), es el organismo que emite los estándares internacionales NIIF o IFRS (International Financial Reporting Standars). Estos contienen los criterios de reconocimiento, medición, presentación y revelación de los hechos económicos de la empresa, los cuales son reflejados en los estados financieros; de esta manera, se establece un lenguaje contable homogéneo que genere información financiera comprensible, oportuna y útil para la toma de decisiones.

            p En el marco de la globalización y el acceso de mercados internacionales surge la necesidad de estandarizar la información financiera; en consecuencia, en Colombia, a partir de la expedición de la Ley 1314 de 2009 (Secretaría del Senado, 2020), se establece la regulación de los principios y normas de contabilidad e información financiera, con el fin de implementar las Normas Internacionales de Información Financiera (NIIF) de acuerdo con el tipo de empresa y actividades que desarrolla.

            p Con la expedición de dicha ley, comienza el desafío para los empresarios colombianos y los usuarios que de una u otra manera se encuentran involucrados en las empresas. Estos son: los colaboradores de las áreas administrativa, financiera, tecnológica y de talento humano. Todos tuvieron que ser capacitados y entrenados con el nuevo marco normativo para iniciar el proceso de implementación de acuerdo con los estándares establecidos.

            p Teniendo en cuenta lo anterior, es emitido el documento “Direccionamiento estratégico” por parte del Consejo Técnico de la Contaduría Pública (CTCP), con el fin de iniciar el proceso de convergencia hacia las normas internacionales; por lo tanto, se establecen los grupos de presentación de información financiera y se estipulan los requisitos para iniciar el periodo de preparación, transición, aplicación y reporte de las normas internacionales.

      .py-3.py-md-4.bg-t2-9(titulo="Grupos de presentación")
        .row.justify-content-center
          .col-md-10.mb-4.mb-md-0.p-5
            h4 Grupos de presentación

            p #[b Grupo 1 - NIIF Plenas]

            p Decreto 2784 de 2012

            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Emisores de valores.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Entidades de interés público.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Entidades que tengan activos totales superiores a treinta mil (30.000) SMMLV o planta de personal superior a doscientos (200) trabajadores; que no sean emisores de valores ni entidades de interés público.


            p #[b Grupo 2 - NIIF para Pymes]

            p Decreto 3022 de 2013

            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Empresas que no cumplan con los requisitos del literal c) del grupo 1.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Empresas que tengan activos totales por valor entre quinientos (500) y treinta mil (30.000) SMMLV' o planta de personal entre once (11) y doscientos (200) trabajadores, y que no sean emisores de valores ni entidades de interés público.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Microempresas que tengan activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o planta de personal no superior a los (10) trabajadores, y cuyos ingresos brutos anuales sean iguales o superiores a 6.000 SMMLV'.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Dichos ingresos brutos son los ingresos correspondientes al año inmediatamente anterior al periodo sobre el que se informa.

            p #[b Grupo 3 - NIIF Microempresas]

            p Decreto 2706 de 2012

            ul.lista-ul--color
              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Personas naturales o jurídicas que cumplan los criterios establecidos en el art. 499 del Estatuto Tributario (ET) y normas posteriores que lo modifiquen. Para el efecto, se tomará el equivalente a UVT, en salarios mínimos legales vigentes.

              li.d-flex
                i.fa-solid.fa-chevron-right
                |
                p.mb-0 Microempresas que tengan activos totales excluida la vivienda por un valor máximo de quinientos (500) SMMLV o planta de personal no superior a los diez (10) trabajadores que no cumplan con los requisitos para ser incluidas en el grupo 2 ni en el literal anterior.


    .row.align-items-center.mt-4
      .col-lg-7
        p.p-4.bg-t1-5  La información de los decretos relacionados anteriormente, se encuentran compilados en el Decreto Único Reglamentario 2420 de 2015, modificado por el Decreto 2496 2015, 2131 de 2016, 2170 de 2017, 2483 de 2018 y 2270 de 2019.

        p Según el grupo de presentación al cual pertenece la empresa, se realiza el proceso de aplicación de Normas Internacionales de Información Financiera (NIIF). Por tanto, con el fin de lograr apropiación de conocimiento y fortalecer su aprendizaje se sugiere revisar el siguiente enlace:

        a.anexo.mb-4.mb-lg-0(href="http://www.ctcp.gov.co/normatividad/normas-locales" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Enlace web]. Consejo Técnico de Contaduría Pública (CTCP)
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img35.png', alt='', style="width: 610px").m-auto
      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
