<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1(data-aos="fade-left") Introducción
    .row.bg-intro1
      .col-12
        .p-5
          .row.justify-content-center.align-items-center
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="fade-down")
                img(src='@/assets/curso/intro/img1.png', alt='', style="width: 480px").m-auto
            .col-lg-8 

              p.bg-intro2.p-4(data-aos="fade-left") El objetivo de este componente es fortalecer conocimientos en las generalidades de comerciantes, empresas, sociedades, registro mercantil y principios básicos de administración, con el fin de dar aplicabilidad a la normatividad legal vigente. 

              p.mt-2 Cabe resaltar que el aprendiz se encuentra en la capacidad de reconocer los procesos para la formalización de empresas en Colombia, observando las obligaciones comerciales, laborales, financieras y tributarias inherentes al desarrollo del objeto social de una organización económica. De allí la importancia de analizar la normatividad establecida en el Código de Comercio, el Estatuto Tributario y el marco normativo de Normas Internacionales de Información Financiera (NIIF), con el fin de emitir informes sólidos a los usuarios de la información financiera, que reflejen la realidad de la empresa y contribuyan a la adecuada toma de decisiones. 

          p.mt-lg-4(data-aos="fade-up") De igual forma, en el ámbito administrativo se abordan los temas relacionados con la planeación estratégica, organización y control. Esto le permitirá al aprendiz dimensionar la importancia de la empresa y, de esta manera, desarrollar estrategias que permitan dar cumplimiento con los objetivos organizacionales y financieros.



</template>

<script>
export default {
  name: 'Introduccion',
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
