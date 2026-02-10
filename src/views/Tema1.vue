<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1(data-aos="fade-left") Comerciante

    .row.justify-content-center.mb-5
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t1-1
          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img1.png', alt='', class="w-100 h-100 object-fit-cover" style="margin-left: -10px;")
          
          .col-xl.d-flex
            .p-4.w-100.d-flex.align-items-center
              p.mb-0 Antes de hablar de empresa, sociedad y su clasificación, es importante enfocarse en el tema de comerciantes; sus deberes, derechos y obligaciones. Teniendo en cuenta que a partir de aquí comienzan a configurarse las actividades que se consideran mercantiles y son ejercidas por los comerciantes, se verán reflejadas en el momento de crear la empresa de acuerdo con el marco normativo vigente.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.1 Concepto y calidad

    p(data-aos="fade-left") El concepto de comerciante, según el Código de Comercio, se define por el ejercicio profesional de actividades mercantiles, independientemente de si se actúa directamente o a través de terceros. La calidad de comerciante implica cumplir ciertos requisitos, como el registro en la Cámara de Comercio y la disponibilidad de un establecimiento abierto al público. Con la globalización y el avance tecnológico, el comercio ha evolucionado, dando paso a estrategias de marketing innovadoras y al auge del comercio electrónico, facilitado por dispositivos móviles y plataformas digitales.

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/Grpi6UZRWLM?si=btyjE1_LDnDWLJ3G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.2 Deberes, derechos y obligaciones

    p De acuerdo con el Código de Comercio es obligación de todo comerciante:

    .row.bg-t1-2
      .col-12
        .p-5
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema1/img2.png", alt="alt", style="width: 305px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas=" col-md-6 col-xl-6")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img3.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2.bg-c6 #[b 01]
                    p.text-small.text-center.mb-0 Matricularse en el registro mercantil.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img4.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2.bg-c6 #[b 02]
                    p.text-small.text-center.mb-0 Inscribir en el registro mercantil todos los actos, libros y documentos respecto de los cuales la ley exija esa formalidad.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img5.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2.bg-c6 #[b 03]
                    p.text-small.text-center.mb-0 Llevar contabilidad regular de sus negocios conforme a las prescripciones legales.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img6.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2.bg-c6 #[b 04]
                    p.text-small.text-center.mb-0 Conservar, con arreglo a la ley, la correspondencia y demás documentos relacionados con sus negocios o actividades.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img7.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2.bg-c6 #[b 05]
                    p.text-small.text-center.mb-0 Denunciar ante el juez competente la cesación en el pago corriente de sus obligaciones mercantiles.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema1/img8.svg", alt='', style="width: 90px").m-auto
                    p.text-small.text-center.mb-2.bg-c6 #[b 06]
                    p.text-small.text-center.mb-0 Abstenerse de ejecutar actos de competencia desleal.

          p Respecto al último punto, además de considerar lo dispuesto en el Código de Comercio (Secretaría del Senado, 2020), también se considera lo dispuesto en las Normas sobre Competencia Desleal (Secretaría del Senado, 2020), donde se especifican las acciones que se consideran competencia desleal:

          .row.justify-content-center.align-items-center.mt-4(data-aos="fade-right")
            .col-lg-6
              .row
                .col-6
                  ul.lista-ul--color
                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Actos de desviación de la clientela.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Actos de desorganización.
                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Actos de confusión.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Actos de engaño.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Actos de descrédito.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Actos de comparación.
                
                .col-6
                  ul.lista-ul--color
                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Actos de imitación.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Explotación de la reputación ajena.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Violación de secretos.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Inducción a la ruptura contractual.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Violación de normas.

                    li.d-flex
                      i.fa-solid.fa-chevron-right
                      |
                      p.mb-0 Pactos desleales de exclusividad.

            .col-lg-6.d-none.d-lg-block 
              figure(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img9.png', alt='', style="width: 624px").m-auto


    .row.mb-2.ms-0
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure(data-aos="fade-up")
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Trámites legales para ejercer el comercio

      p.mt-4 El ejercicio del comercio implica cumplir con una serie de trámites legales que garantizan el cumplimiento normativo y la operatividad empresarial. Desde la verificación del nombre de la empresa hasta la afiliación de colaboradores a la seguridad social, cada paso es clave para el reconocimiento legal y la protección de los derechos comerciales, tributarios y laborales. Este proceso no solo facilita la formalización de los negocios, sino que también contribuye a un entorno empresarial más seguro y regulado.

      .video.mb-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/n5Bv63FxmNY?si=qDXawDi9lK-DVoFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.3 Registro mercantil

    .row.justify-content-center.align-items-center
      .col-lg-7
        p.bg-t1-3.p-4 El registro mercantil se tramita ante la Cámara de Comercio y su principal objetivo es identificar a los comerciantes y los establecimientos de comercio; por ende, al inscribirse se otorga la calidad de comerciantes. Así mismo, se registran todos los actos, libros y documentos respecto de los cuales la ley exigiere esa formalidad (Secretaría del Senado, 2020).

        p.mt-2 Para realizar la inscripción es importante identificar el tipo de empresa y/o sociedad que va a registrar, teniendo en cuenta determinar si se constituye bajo persona natural o jurídica. Esto para el diligenciamiento y presentación de los documentos pertinentes.

      .col-lg-5.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img10.png', alt='', style="width: 500px").m-auto

    .row.bg-t1-4.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/img11.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Registro Único Tributario (RUT)] 
                    p Es el documento que se tramita ente la Dirección de Impuestos y Aduanas Nacionales (DIAN), el cual relaciona la clasificación y responsabilidades del contribuyente.
                  
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/img12.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Número de Identificación tributaria (NIT)] 
                    p Es el número que se obtiene una vez se ha tramitado el RUT, el cual identifica al contribuyente ante las diferentes entidades de control y supervisión. En el caso de las personas naturales se encuentra compuesto por el número de documento de identidad y el dígito de verificación. En cuanto a la identificación del NIT de las personas jurídicas, la DIAN y cámara de comercio mediante proceso realizan la asignación de 9 dígitos y el dígito de verificación.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/tema1/img13.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b CIIU] 
                    p Es la clasificación de las actividades económicas de los empresarios del país de la manera más precisa. Las cámaras de comercio del país, a partir del año 2000, se rigen por la Clasificación Industrial Internacional Uniforme (CIIU) de todas las actividades económicas.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-up")
                      img(src='@/assets/curso/tema1/img14.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Persona natural] 
                    p De acuerdo con el Artículo 74 del Código Civil, son todos los individuos de la especie humana, cualquiera que sea su edad, sexo, estirpe o condición. Las empresas que se constituyen bajo esta modalidad son integradas por una persona, quien adquiere los derechos y obligaciones. 

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema1/img15.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Persona jurídica ] 
                    p Es una persona ficticia, que contrae derechos y obligaciones. Dentro de esta figura se encuentran las sociedades comerciales. Por tanto, para ejercer la representación, se realiza mediante apoderado o representante legal.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/img16.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Razón social] 
                    p Es el nombre de la empresa, que se encuentra registrado en la cámara de comercio y demás entidades de control. Ejemplo: Nalsani SAS.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/img17.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Razón comercial] 
                    p Es el nombre que se asigna a la empresa, para darse a conocer ante el público o mercado. Ejemplo: Totto es el nombre comercial y su razón social es Nalsani SAS.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/img18.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Registro de personas naturales:] 
                    ul.lista-ul--color
                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Verificar el nombre o razón social que se va a asignar a la empresa. Donde se obtenga el certificado de homonimia. Este trámite hoy en día se puede realizar de forma virtual.


                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Diligenciar el formulario RUES.

                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Presentar el RUT.

                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 La solicitud de registro se hará a más tardar un mes después de haber iniciado actividades comerciales.

                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Copia del documento de identidad de forma legible, además de presentar el original.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema1/img19.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Registro de personas jurídicas:] 
                    ul.lista-ul--color
                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Diligenciar el formulario RUES.

                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Presentar el documento privado o escritura de constitución de la sociedad.

                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Presentar el RUT.

                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 La solicitud de registro se hará a más tardar un mes después de haber iniciado actividades comerciales.

                      li.d-flex
                        i.bg-icon-ul
                        p.mb-0.ms-2 Copia del documento de identidad de forma legible, además de presentar el original.

    .row.mt-4
      p Cabe resaltar, que el comerciante debe realizar la inscripción en la cámara de comercio de la jurisdicción donde se encuentra ubicado el establecimiento de comercio. Una vez finalice el proceso se podrá obtener el certificado de registro mercantil. Así mismo, se debe realizar la renovación de la matrícula mercantil de forma anual, entre el 1 de enero al 31 de marzo de cada año.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2(data-aos="fade-left") 1.4 Cámara de Comercio: actos mercantiles

    .row.justify-content-center.align-items-center
      .col-lg-7

        p.bg-t1-5.p-4 De acuerdo con el Código de Comercio, “Las cámaras de comercio son instituciones de orden legal con personería jurídica, creadas por el Gobierno Nacional, de oficio o a petición de los comerciantes del territorio donde hayan de operar. Dichas entidades serán representadas por sus respectivos presidentes” (Secretaría del Senado, 2020. Art. 78).

        p.mt-2 Estas instituciones tienen como objetivo llevar la matrícula de los comerciantes y sus establecimientos. En el Art. 86 del Código de Comercio (Secretaría del Senado, 2020), se establecen las siguientes funciones a las cámaras de comercio:

      .col-lg-5.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img20.png', alt='', style="width: 480px").m-auto

    .row.mt-4.align-items-center
      .col-lg-6
        .row.align-items-center.justify-content-center.row-equal-height 
          .col-2
            figure
              img(src="@/assets/curso/tema1/img21.svg", alt="", style="width: 50px").m-auto
          .col-10
            p.mb-0 Servir de órgano de los intereses generales del comercio ante el Gobierno y ante los comerciantes mismos.
          
        hr.borde-num

      .col-lg-6
        .row.align-items-center.justify-content-center.row-equal-height 
          .col-2
            figure
              img(src="@/assets/curso/tema1/img22.svg", alt="", style="width: 50px").m-auto
          .col-10 
            p.mb-0 Adelantar investigaciones económicas sobre aspectos o ramos específicos del comercio interior y exterior y formular recomendaciones a los organismos estatales y semioficiales encargados de la ejecución de los planes respectivos.
        hr.borde-num

      .col-lg-6
        .row.align-items-center.justify-content-center.row-equal-height 
          .col-2
            figure
              img(src="@/assets/curso/tema1/img23.svg", alt="", style="width: 50px").m-auto
          .col-10
            p.mb-0 Llevar el registro mercantil y certificar sobre los actos y documentos en él inscritos, como se prevé en este código.
          
        hr.borde-num

      .col-lg-6
        .row.align-items-center.justify-content-center.row-equal-height 
          .col-2
            figure
              img(src="@/assets/curso/tema1/img24.svg", alt="", style="width: 50px").m-auto
          .col-10 
            p.mb-0 Dar noticia en sus boletines u órganos de publicidad de las inscripciones hechas en el registro mercantil y de toda modificación, cancelación o alteración que se haga de dichas inscripciones.
        hr.borde-num

      .col-lg-6
        .row.align-items-center.justify-content-center.row-equal-height 
          .col-2
            figure
              img(src="@/assets/curso/tema1/img25.svg", alt="", style="width: 50px").m-auto
          .col-10
            p.mb-0 Organizar exposiciones y conferencias, editar o imprimir estudios o informes relacionados con sus objetivos.
          
        hr.borde-num

      .col-lg-6
        .row.align-items-center.justify-content-center.row-equal-height 
          .col-2
            figure
              img(src="@/assets/curso/tema1/img26.svg", alt="", style="width: 50px").m-auto
          .col-10 
            p.mb-0 Rendir en el mes de enero de cada año un informe o memoria al Superintendente de Industria y Comercio acerca de las labores realizadas en el año anterior y su concepto sobre la situación económica de sus respectivas zonas, así como el detalle de sus ingresos y egresos.
        hr.borde-num

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure(data-aos="fade-down")
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 De los actos, operaciones y empresas mercantiles

    p.mt-4  De acuerdo con el Código de Comercio se consideran actos mercantiles los siguientes (Secretaría del Senado, 2020):

    .row.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-6.p-4.tarj-t1
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img27.svg', style="width:95px").m-auto

          p.text-center.mb-4.bg-c6 #[b 01]
          p.text-center.mb-0 La adquisición de bienes para enajenarlos o arrendarlos, dedicadas a la comercialización.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.bg-t1-6.p-4.tarj-t1
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img28.svg', style="width:95px").m-auto

          p.text-center.mb-4.bg-c6 #[b 02]
          p.text-center.mb-0 Las operaciones financieras.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.bg-t1-6.p-4.tarj-t1
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img29.svg', style="width:95px").m-auto

          p.text-center.mb-4.bg-c6 #[b 03]
          p.text-center.mb-0 Las empresas de servicios, que satisfacen necesidades.

      .col-sm-6.col-lg-3
        .tarjeta--boton.bg-t1-6.p-4.tarj-t1
          .row.justify-content-center.mb-3
            .col-7
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img30.svg', style="width:95px").m-auto

          p.text-center.mb-4.bg-c6 #[b 04]
          p.text-center.mb-0 Las empresas industriales que se dedican a transformar materia prima en producto terminado.

    .row.mt-4.bg-t1-7
      .col-12
       .p-5 
          .row.align-items-center
            .col-lg-6
              p Con el fin de ampliar la información, lo invitamos a explorar el siguiente recurso

              a.anexo.mb-4.mb-lg-0(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr003.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web]. Código de comercio 
            .col-lg-6.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/img31.png', alt='', style="width: 610px").m-auto


 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
