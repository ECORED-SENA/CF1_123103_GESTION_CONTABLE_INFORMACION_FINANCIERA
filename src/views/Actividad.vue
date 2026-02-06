<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Normatividad y Formalización de Empresas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la normatividad y los procesos de formalización empresarial en Colombia, incluyendo conceptos clave sobre comerciantes, empresas, sociedades, obligaciones legales y requisitos administrativos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes es un requisito fundamental para ser considerado comerciante en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro en la DIAN.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro mercantil en la Cámara de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Obtención de licencia de funcionamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Afiliación a la seguridad social.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una de las obligaciones de los comerciantes según el Código de Comercio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No llevar contabilidad de sus operaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Matricularse en el registro mercantil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la inscripción de documentos mercantiles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eximir a sus empleados de afiliaciones laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una clasificación de empresa según su capital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sociedad por Acciones Simplificada (S.A.S.).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Empresa industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empresa pública.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empresa microempresarial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué documento se tramita ante la DIAN para obtener el Número de Identificación Tributaria (NIT)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro Único Empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Registro Mercantil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro Único Tributario (RUT).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Certificado de Industria y Comercio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué organismo regula y administra el registro mercantil en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Comercio, Industria y Turismo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Superintendencia de Industria y Comercio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cámara de Comercio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Departamento Administrativo Nacional de Estadística (DANE).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes es una sociedad con responsabilidad limitada de los socios?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sociedad Colectiva.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sociedad en Comandita Simple.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sociedad por Acciones Simplificada (S.A.S.).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Empresa Unipersonal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes clasificaciones de empresa se basa en el número de trabajadores y los ingresos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Según su naturaleza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Según su tamaño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Según su objeto social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Según su actividad económica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué entidad se encarga de la expedición del Registro Único Tributario (RUT)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de Hacienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'DIAN.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Superintendencia de Industria y Comercio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Banco de la República.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el propósito del certificado de sanidad en la formalización de una empresa?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Garantizar que la empresa cumpla con normas contables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asegurar la salud pública en los establecimientos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar la empresa en la Cámara de Comercio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Determinar la capacidad financiera de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de los siguientes tipos de empresas aplica Normas Internacionales de Información Financiera (NIIF) en su contabilidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Empresas familiares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pequeñas empresas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Empresas con activos superiores a 30.000 SMMLV.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Negocios informales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La Cámara de Comercio es la entidad encargada de administrar el registro mercantil y expedir certificados de existencia.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La inscripción en la Cámara de Comercio es opcional para todas las empresas, sin importar su actividad económica.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Todas las empresas en Colombia deben aplicar las Normas Internacionales de Información Financiera (NIIF) sin excepción.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una empresa clasificada como de economía mixta cuenta con capital tanto público como privado.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'En Colombia, una sociedad anónima debe tener al menos cinco socios para su constitución.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
