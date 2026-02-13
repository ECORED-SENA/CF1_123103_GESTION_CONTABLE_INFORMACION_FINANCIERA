<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="zoom-in") Administración

    .row.align-items-center.justify-content-center
      .col-lg-7 
        p.p-4.bg-t2-4_1(data-aos="fade-left") El término administración existe desde la época primitiva, donde se realizaban trabajos rudimentarios. Toma importancia a partir de la revolución industrial, atendiendo la necesidad de coordinar esfuerzos y organizar las actividades con el fin de generar productividad y eficiencia.

        p El desarrollo de la administración ha estado marcado por diversas corrientes teóricas que han contribuido a la evolución de la gestión organizacional. Desde la administración científica hasta la escuela neoclásica, cada enfoque ha aportado principios clave que han permitido mejorar la eficiencia, la estructura y la toma de decisiones en las organizaciones. La siguiente tabla presenta una comparación de estas teorías, sus principales exponentes y los aportes que han dejado en la gestión empresarial.

      .col-lg-5.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img1.png', alt='', style="width: 480px").m-auto
 

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 1.
      span Aportes de las principales teorías de la administración

    .tabla-a.color-acento-contenido.mt-4 
      table
        thead
          tr(style="background-color: #FD9826")
            th Teoría
            th Autores
            th Aportes
        tbody(style="background-color: #F6F6F6")
          tr
            td.text-start Administración científica
            td.text-start Frederick Taylor, Henry Lawrence Gantt, Robinson Towne, Henry Metcalf.
            td.text-start Se da importancia al manejo de incentivos, selección del personal.
          tr
            td.text-start Teoría clásica
            td.text-start Henri Fayol.
            td.text-start Desarrolla las áreas funcionales que debe tener la organización. De igual manera se establecen los 14 principios de administración relacionados con la organización del trabajo y especialización del trabajador.
          tr
            td.text-start Escuela humanista
            td.text-start George Elton Mayo, Roberto Owen.
            td.text-start Tiene énfasis en los valores humanos, motivación, liderazgo y estudio de las necesidades del personal.

          tr 
            td.text-start Enfoque estructuralista
            td.text-start Renate Mayntz, Etzioni Amitai.
            td.text-start Relaciona los tipos de autoridad, estructura de las organizaciones, descentralización, manejo de conflictos, busca interrelacionar las empresas con el entorno.

          tr 
            td.text-start Escuela neoclásica
            td.text-start Peter Drucker, Lawrence Appley, George Terry.
            td.text-start Tienen en cuenta la administración por objetivos, profundización en el proceso administrativo. Hace énfasis al modelo actual.

    .row.align-items-center.justify-content-center.mt-4.bg-t1-3
      .col-lg-auto
        figure(data-aos="fade-down")
          img(src="@/assets/curso/tema3/img2.svg", alt="", style="width: 88px").m-auto
      .col-lg
        p.mb-0 Actualmente, existen otros enfoques que contribuyen notoriamente con las necesidades de las organizaciones y su entorno, entre ellas se encuentran: <em>Benchmarking</em>, Calidad total, <em>Empowerment</em>, <em>Downsizing</em>, <em>Coaching</em>, <em>Balanced Scorecard</em> y Teorías de restricciones, las cuales dan respuesta a los criterios de eficiencia, eficacia y valor agregado (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019).

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Principios básicos de áreas funcionales, planeación estratégica, organización, dirección y control

    p Las organizaciones se estructuran en diversas áreas funcionales que permiten coordinar y optimizar sus operaciones. Estas áreas, definidas por Henri Fayol, abarcan funciones técnicas, comerciales, financieras, de seguridad, contables y administrativas, cada una con un rol específico dentro de la gestión empresarial. Su correcta aplicación contribuye a la eficiencia operativa y al cumplimiento de los objetivos organizacionales. Según la teoría clásica las áreas funcionales son las siguientes (Fayol, 1971):

    .row.bg-t1-2
      .col-12
        .p-5
          .carousel-bg
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-3.d-none.d-lg-block
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/tema3/img3.png", alt="alt", style="width: 305px").m-auto
              .col-lg-8
                SlyderF.custom.mb-5(columnas="col-md-6 col-xl-4")
                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img4.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-2 #[b Funciones técnicas]
                    p.text-center.mb-0 Son las actividades productivas.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img5.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-2 #[b Funciones comerciales]
                    p.text-center.mb-0 Actividades relacionadas con la compra y venta de bienes.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img6.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-2 #[b Funciones financieras]
                    p.text-center.mb-0 Buscan la generación de rentabilidad, liquidez y administración de capital.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img7.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-2 #[b Funciones de seguridad]
                    p.text-center.mb-0 Se enfocan en el bienestar de los colaboradores.

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img8.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-2 #[b Funciones contables]
                    p.text-center.mb-0 Están relacionadas con el área de costos y control de recursos financieros. 

                  .tarjeta.tarjeta--slyder.p-4
                    .row.justify-content-center.mb-3
                      .col-8
                        img(src="@/assets/curso/tema3/img9.svg", alt='', style="width: 90px").m-auto
                    p.text-center.mb-2 #[b Funciones administrativas]
                    p.text-center.mb-0 Relacionan las actividades administrativas de planeación, organización, dirección y control.

          .row.mb-2.ms-0.mt-4
            .col-auto.bg-c3(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure(data-aos="fade-left")
                    img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
                .col
                  h3.mb-0 Proceso administrativo

          .row.justify-content-center.mt-4
            .col-lg-12(data-aos="fade-down")
              .row.d-flex.align-items-stretch.bg-t1-1
                .col-xl.d-flex
                  .p-4.w-100.d-flex.align-items-center
                    p.mb-0 El proceso administrativo es el conjunto de pasos que se aplican en una empresa para llevar a cabo una actividad que contribuya al cumplimiento de los objetivos propuestos. Las etapas que lo integran son: planeación, organización, dirección y control (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971).
                .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                  figure.m-0.p-0.w-100.h-100.d-flex(data-aos="zoom-in")
                    img(src='@/assets/curso/tema3/img10.png', alt='', class="w-100 h-100 object-fit-cover")

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 Planeación

    p.mt-4 Son las actividades iniciales que desarrollará la empresa para obtener los resultados deseados. Los elementos que intervienen son:  

    .row.bg-t1-4.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/img11.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Filosofía] 
                    p Son los valores y principios que aplica la empresa en el desarrollo de su objeto social, ratificando el compromiso con la sociedad.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/img12.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Número de identificación tributaria (NIT)] 
                    p Es el número que se obtiene una vez que se ha tramitado el RUT, el cual identifica al contribuyente ante las diferentes entidades de control y supervisión. En el caso de las personas naturales, se encuentra compuesto por el número de documento de identidad y el dígito de verificación. En cuanto a la identificación del NIT de las personas jurídicas, la DIAN y la cámara de comercio mediante proceso, realizan la asignación de 9 dígitos y el dígito de verificación.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img13.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Visión] 
                    p Es lo que se espera en un futuro, por ello se implementan estrategias que contribuyan a los resultados esperados. Es importante que sea inspiradora y se actualice conforme los cambios del entorno.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/tema3/img14.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Objetivos estratégicos] 
                    p Deben ser medibles y cuantificables en el tiempo, hace referencia a los resultados específicos por alcanzar.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema3/img15.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Políticas ] 
                    p Son los lineamientos que diseña e implementa la empresa para el desarrollo de las diferentes actividades empresariales. Tienen enfoque tecnológico, talento humano, ambiental, etc.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/img16.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Estrategias ] 
                    p Son las acciones que se implementan para el cumplimiento de objetivos.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img17.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Programas] 
                    p Relaciona el conjunto de actividades, responsable, tiempo y recursos involucrados para llevar a cabo las estrategias.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img18.png')

                  .col-md-7.mb-4.mb-md-0
                    p #[b Presupuestos ] 
                    p Aquí se definen los recursos en términos cuantificables para llevar a cabo los programas que contribuyan a alcanzar los objetivos.



    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 Organización


    p.mt-4 Hace referencia a la coordinación de funciones, recursos y división del trabajo, teniendo en cuenta los procesos, sistemas, estructuras y jerarquías para el cumplimento de objetivos. El establecimiento de la estructura depende de las características de la empresa, objetivos y recursos. Entre las posibles estructuras se encuentran (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971):

    .row.bg-t1-4.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-left")
                      img(src='@/assets/curso/tema3/img19.png', alt="Diagrama jerárquico con Gerente general, Subgerente y Jefe de departamento en tres niveles.")

                  .col-md-7.mb-4.mb-md-0
                    p #[b Lineal o militar] 
                    p Las decisiones son tomadas por una persona, por lo que se dice que la autoridad en la empresa es ejercida por ésta, a quien los subalternos le entregan reportes de las actividades realizadas.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="zoom-in")
                      img(src='@/assets/curso/tema3/img20.png', alt="Estructura jerárquica con Gerente de planta, Jefe de producción y tres áreas: Compras, Proceso y Producto terminado.")

                  .col-md-7.mb-4.mb-md-0
                    p #[b Líneo-funcional] 
                    p Las funciones son asignadas a las diferentes áreas de la empresa, con el fin de alcanzar los objetivos mediante el esfuerzo colectivo.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/img21.png', alt="Estructura organizacional con un Director Ejecutivo a la cabeza y cuatro direcciones: Planta, Ventas, Servicios y Finanzas. La Dirección de Ventas se divide en Equipos Industriales y Ventas de Consumo.")

                  .col-md-7.mb-4.mb-md-0
                    p #[b #[i Staff]] 
                    p En esta estructura se combina la autoridad directa con la asesoría de un profesional para llevar a cabo los procesos organizacionales.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure(data-aos="fade-down")
                      img(src='@/assets/curso/tema3/img22.png', alt="Estructura organizacional con un Director Ejecutivo a la cabeza y cuatro direcciones: Planta, Ventas, Servicios y Finanzas. La Dirección de Ventas se divide en Equipos Industriales y Ventas de Consumo.")

                  .col-md-7.mb-4.mb-md-0
                    p #[b Matricial] 
                    p En términos generales es utilizada por las grandes empresas, donde se combinan los recursos y materiales para ejecutar actividades específicas o proyectos.


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 Dirección

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-7 
        p.p-5.bg-t2-4  En esta etapa se materializan los planes y programas, teniendo en cuenta la asignación de recursos, responsables, tiempo y actividades establecidas en la etapa de planeación. Para llevar a cabo el proceso de forma satisfactoria se requiere de habilidades como liderazgo, comunicación asertiva, trabajo en equipo, motivación, actitud, responsabilidad, administración de tiempo, innovación, creatividad, disciplina y cultura organizacional. Es por esto, que es importante seleccionar cuidadosamente el personal que ejecutará los planes propuestos (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971). 
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img23.png', alt='', style="width: 480px").m-auto

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c4(data-aos="fade-left")
        .row.align-items-center
          .col
            h3.mb-0 Control

    .row.align-items-center.justify-content-center.mt-4
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema3/img24.png', alt='', style="width: 480px").m-auto
      .col-lg-7 
        p.p-5.bg-t2-7  Esta etapa es muy importante en el proceso administrativo, pues se verifica que los programas se hayan desarrollado conforme a lo planeado, teniendo en cuenta el manejo de recursos de forma eficiente. Además, permite observar las posibles desviaciones, con el fin de implementar acciones correctivas o preventivas que ayuden a alcanzar los objetivos (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019).  

        p Para realizar el proceso de control se debe contar con elementos de medición como los indicadores de gestión o indicadores financieros, los cuales permiten valorar los resultados obtenidos y, los recursos consumidos. El seguimiento de los resultados conduce a la mejora continua de los procesos de la organización; por ende, debe darse la importancia que merece, con el fin de garantizar el cumplimiento de los planes (Angulo, 2018; Münch, 2015; Sánchez, 2015; Vilches, 2019; Fayol, 1971).


    .row.justify-content-center.mt-4
      .col-lg-12(data-aos="fade-down")
        .row.d-flex.align-items-stretch.bg-t3-1
          .col-xl.d-flex
            .p-5.w-100.align-items-center

              p Recuerde ingresar a la Biblioteca SENA y explorar las diferentes referencias bibliográficas como:

              ul.lista-ul--color
                li.d-flex
                  i.fa-solid.fa-chevron-right
                  |
                  p.mb-0 Münch, L. (2015). Administración: proceso administrativo, clave del éxito empresarial. Pearson

                li.d-flex
                  i.fa-solid.fa-chevron-right
                  |
                  p.mb-0 Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U.

                li.d-flex
                  i.fa-solid.fa-chevron-right
                  |
                  p.mb-0 Fayol, H. (1971). Administración industrial y general. Editorial Herrero Hermanos S.A.


          .col-xl-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
            figure.m-0.p-0.w-100.h-100.d-flex(data-aos="fade-down")
              img(src='@/assets/curso/tema3/img25.png', alt='', class="w-100 h-100 object-fit-cover")


</template>

<script>
export default {
  name: 'Tema3',
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
