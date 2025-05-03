<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Evolución histórica del Derecho Penal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in").mx-auto
          .col-lg-9
            p El Derecho Penal ha experimentado una evolución profunda, influida por los cambios sociales, políticos y filosóficos de cada época. Desde sistemas basados en la venganza privada hasta modelos orientados a la prevención y rehabilitación, esta transformación refleja el modo en que las sociedades han ido adaptando su concepción de la justicia y el castigo.
            p.mb-0 A lo largo de la historia, el Derecho Penal ha sido moldeado por factores como la moral, la religión, la estructura del poder y la racionalidad jurídica, lo que ha generado diversos modelos de intervención penal según el momento histórico.
    
    h2(data-aos="fade-left") Aportes específicos por periodo histórico
    p.mb-5 Cada etapa en la evolución del Derecho Penal no solo refleja transformaciones generales en la forma de entender la justicia, sino que también ha dejado aportaciones concretas que han sido fundamentales para el desarrollo de los sistemas penales contemporáneos. A continuación, se presentan los principales aportes de cada periodo histórico, en términos de institucionalización del castigo, principios jurídicos, funciones del Derecho Penal y garantías reconocidas al individuo frente al poder punitivo del Estado.

    .row.align-items-start
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Sociedades primitivas")
            p Justicia privada y vengativa. Predomina la Ley del Talión (ojo por ojo). No se consideran la intencionalidad ni la rehabilitación. (Del Valle, 2008)
          .div(titulo="Código de Hammurabi")
            p Primer cuerpo legal escrito (1750 a.C.). Regula delitos y sanciones con criterios de proporcionalidad. Introduce compensaciones económicas y responsabilidad objetiva.
          .div(titulo="Ley Mosaica")
            p Sistema normativo religioso con sanciones proporcionales. Fusiona moral y derecho.
          .div(titulo="Grecia clásica")
            p El Estado asume la justicia. Se crean tribunales y procedimientos. Se aleja la venganza privada.
          .div(titulo="Roma antigua")
            p Nace el Derecho Penal Romano: normas claras, tipificación de delitos y penas, presunción de inocencia, derecho a defensa (Lex Julia, Lex Cornelia).
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Edad Media")
            p El castigo se vincula con la fe. La Iglesia domina la justicia. Penas severas: inquisición, tortura, ejecuciones públicas. 
    
          .div(titulo="Ilustración (siglo XVIII)")
            p Beccaria: abolición de tortura y pena de muerte, proporcionalidad, enfoque preventivo. Se promueve una justicia racional y garantista. 
    
          .div(titulo="Codificación moderna (s. XIX)")
            p Código Penal Napoleónico (1810). Sistematicidad, igualdad ante la ley, prohibición de penas inhumanas. Influencia en Europa y América Latina.
    
          .div(titulo="Siglos XIX-XX")
            p Escuela Positiva: enfoque científico del delito (biológico, psicológico, social). Fortalecimiento de garantías procesales y derechos humanos.
          .div(titulo="Época contemporánea")
            p Respuesta a delitos transnacionales y tecnológicos. Surge la Corte Penal Internacional. Se desarrollan el Derecho Penal Económico y Ambiental.
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white A medida que las sociedades evolucionan, el Derecho Penal se vuelve menos represivo y más garantista, incorporando derechos humanos, proporcionalidad, y funciones preventivas y resocializadoras.

    h2(data-aos="fade-left") Aportes específicos por periodo histórico
    p.mb-5 Cada etapa en la evolución del Derecho Penal no solo refleja transformaciones generales en la forma de entender la justicia, sino que también ha dejado aportaciones concretas que han sido fundamentales para el desarrollo de los sistemas penales contemporáneos. A continuación, se presentan los principales aportes de cada periodo histórico, en términos de institucionalización del castigo, principios jurídicos, funciones del Derecho Penal y garantías reconocidas al individuo frente al poder punitivo del Estado.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Grecia clásica
              p La justicia se institucionaliza. El Estado asume el rol sancionador a través de tribunales. Se abandona la venganza privada y se establecen procedimientos judiciales más estructurados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Roma antigua
              p Se consolida el Derecho Penal Romano. Aparecen leyes como la Lex Julia y la Lex Cornelia, que introducen la <b>tipificación legal</b>, el <b>derecho a la defensa y la presunción de inocencia</b>.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Edad Media
              p El Derecho Penal se fusiona con la moral religiosa. La Iglesia controla la justicia, especialmente a través de la Inquisición. Predominan penas <b>severas, públicas y ejemplarizantes</b>.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ilustración (siglo XVIII)
              p Beccaria (1764) propone una reforma racional y humanitaria: <b>proporcionalidad, certeza del castigo, abolición de la tortura y la pena de muerte</b>. El castigo debe ser justo, no cruel.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Siglo XIX
              p El <b>Código Penal Napoleónico (1810)</b> sistematiza la legislación penal. Establece la <b>igualdad ante la ley</b> y prohíbe penas inhumanas. Se convierte en modelo para Europa y América Latina.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Siglos XIX y XX
              p La <b>Escuela Positiva</b> propone un enfoque científico del delito (factores biológicos, psicológicos y sociales). Se fortalecen las garantías procesales y se integran los derechos humanos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Época contemporánea
              p Nuevos desafíos: <b>globalización, tecnología, delitos internacionales</b>. Surge la Corte Penal Internacional. Se desarrollan el Derecho Penal Económico y Ambiental.
    
    .bg-full-width.bg-color-9.mb-3
      .px-4.px-md-5.py-4 
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/12.svg", data-aos="zoom-in")
          .col-lg-8
            .bg-color-white.shadow-soft.py-4.px-lg-5.mb-3
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Historia del Derecho Penal
                      p Para conocer más sobre la historia del Derecho Penal, se recomienda consultar el siguiente recurso:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71441 " target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
            .bg-color-white.shadow-soft.py-4.px-lg-5.mb-3
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 El Código Hammurabi
                      p Para conocer más sobre uno de los textos más antiguos en la historia del Derecho Penal, les invitamos a ver el siguiente video: 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=-C9t1G5uChA  " target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right
            .bg-color-white.shadow-soft.py-4.px-lg-5.mb-3
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/enlace.svg", style="width: 90px;")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 El propósito de la Ley Mosaica
                      p Para conocer más sobre la Ley Mosaica, uno de los primeros textos normativos en Derecho Penal, se recomienda ver el siguiente video: 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=1vK_0JSj8Vk  " target="_blank")
                        span Ir al sitio
                        i.fas.fa-arrow-right


    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Orígenes del Derecho Penal y primeros códigos normativos
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/13.png', alt='')
        .col-lg.order-lg-1
          .p-4
            p.mb-0(data-aos="fade-up") El Derecho Penal ha acompañado a la humanidad desde sus primeras formas de organización social. Desde entonces, las comunidades han establecido mecanismos para regular la conducta y sancionar las transgresiones que afectaban el orden colectivo.
            p.mb-0 En sus inicios, la justicia tenía un carácter primitivo y vengativo, basado en la represalia directa. Los castigos eran severos y tenían como fin retribuir el daño causado. Con el tiempo, estos mecanismos evolucionaron hacia sistemas jurídicos más racionales y equitativos, orientados a la protección de los bienes jurídicos fundamentales.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Venganza privada y Ley del Talión
        p.mb-5 En las sociedades primitivas, la justicia se basaba en la venganza privada. La víctima o su familia tenían derecho a castigar al agresor, lo que generaba ciclos de violencia sin límite.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este sistema dio origen a la Ley del Talión, que introdujo el principio de proporcionalidad del castigo, resumido en la fórmula: “ojo por ojo, diente por diente”. Si bien supuso un intento de limitar los excesos vengativos, aún no diferenciaba entre intencionalidad y culpa, ni reconocía posibilidades de rehabilitación.
            
    .bg-full-width.bg-color-4
      .px-4.px-md-5.pb-md-3

        h2(data-aos="fade-left") Primeros códigos escritos
        p.mb-5 A medida que las sociedades se organizaron, surgió la necesidad de establecer normas escritas para regular las penas de manera más clara y uniforme. Uno de los primeros fue el Código de Hammurabi (Babilonia, 1750 a.C.). Este código:
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 90px")
              p.mb-0.text-center Estableció castigos proporcionales a los delitos cometidos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/17.svg" alt="" style="width: 90px")
              p.mb-0.text-center Incluyó normas sobre robo, agresiones, difamación, entre otros.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/18.svg" alt="" style="width: 90px")
              p.mb-0.text-center Se basaba en la Ley del Talión, pero introdujo también compensaciones económicas.
      
        p.mb-4 Otro ejemplo es la Ley Mosaica, contenida en el Antiguo Testamento (Éxodo, Levítico, Deuteronomio). Esta legislación:

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
              p(data-aos="fade-left").mb-0 Combinaba principios jurídicos y religiosos.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
              p(data-aos="fade-left").mb-0 Sancionaba delitos como el homicidio, el robo y el adulterio.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
              p(data-aos="fade-left").mb-0 Introdujo alternativas al castigo físico, como el perdón y la reparación. (López Betancourt, 2018)

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En la India, el Código de Manú (siglo II a.C.) ofrecía un enfoque diferente:
    
        .bg-color-2.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Establecía castigos según la posición social del infractor.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Regulaba delitos en función del sistema de castas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Mantenía el orden social y consolidaba la autoridad de las castas superiores.
    
    h2(data-aos="fade-left") Aportes de Grecia y Roma
    p.mb-5 Las civilizaciones clásicas también jugaron un papel clave en la evolución del Derecho Penal. En Grecia, las leyes de Dracón (siglo VII a.C.) fueron extremadamente severas: aplicaban la pena de muerte incluso para delitos menores. Posteriormente, Solón reformó el sistema y propuso leyes más proporcionadas y racionales, estableciendo así un antecedente de la justicia estatal. En Roma, el Derecho Penal alcanzó un mayor grado de desarrollo:

    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/20.svg", data-aos="zoom-in").mx-auto
          .col-lg-8
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 La Ley de las XII Tablas (siglo V a.C.) fue la primera codificación sistemática del derecho romano.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Incluía delitos como robo, violencia y falso testimonio.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Establecía castigos como multas, esclavitud o muerte.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Posteriormente, la jurisprudencia romana introdujo nociones clave como:
              li.mb-0.d-flex.ms-5
                i.fas.fa-circle.bg-color-12
                p.mb-0 Dolo y culpa.
              li.mb-0.d-flex.ms-5
                i.fas.fa-circle.bg-color-12
                p.mb-0 El principio de non bis in ídem (prohibición de doble sanción por el mismo hecho).
    
    p.mb-4 Los primeros sistemas normativos son: 

    .bg-full-width-1.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ley del Talión
                p.text-center Proporcionalidad del castigo. Justicia aplicada por la víctima o su familia.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Código de Hammurabi
                p.text-center Primer código escrito. Castigos proporcionales. Introduce compensaciones. Regula diversos delitos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ley Mosaica
                p.text-center Mezcla de derecho y religión. Sanciona con posibilidad de perdón o compensación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Código de Manú
                p.text-center Derecho penal vinculado al sistema de castas. Sanciones diferenciadas según la jerarquía social.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Leyes de Dracón y Solón
                p.text-center Dracón: penas desproporcionadas. Solón: reformas más racionales. Transición de venganza privada a castigo estatal.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ley de las XII Tablas
                p.text-center Codificación jurídica romana. Establece principios como dolo, culpa y non bis in ídem. Base del Derecho Penal europeo posterior.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/21.png', alt='')

        p.mb-4 Estos sistemas fueron fundamentales para el tránsito de un modelo penal primitivo y arbitrario hacia estructuras más sistemáticas, proporcionales y garantistas. Introdujeron principios que perduran hasta hoy, como la tipificación del delito, la proporcionalidad de la pena, la distinción entre dolo y culpa, y el respeto a ciertos derechos procesales.       
    
    .row.mb-5.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/28.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El Derecho Penal seguiría desarrollándose con la expansión del Imperio Romano, influenciando las legislaciones de la Edad Media y de la Edad Moderna. Estas transformaciones serán abordadas en las siguientes secciones, centradas en el Derecho Penal romano-germánico, la justicia medieval y las reformas ilustradas.
        .bg-color-white.shadow-soft.py-4.px-lg-5
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/enlace.svg", style="width: 90px;")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Contexto histórico del Derecho Penal en Colombia
                  p Para conocer más sobre el contexto histórico del Derecho Penal en Colombia, se recomienda consultar el siguiente recurso: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/123150 " target="_blank")
                    span Ir al sitio
                    i.fas.fa-arrow-right
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Derecho Penal Romano Germánico
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/29.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left").mb-5 El Derecho Penal experimentó una transformación decisiva durante el Imperio Romano, constituyendo uno de los pilares fundamentales del desarrollo jurídico occidental. En esta etapa, se pasó de un modelo centrado en la venganza privada a uno donde el Estado asumió un papel activo en la persecución y sanción de los delitos.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/30.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La consolidación de normas y principios en Roma sentó las bases del derecho penal moderno, influyendo especialmente en los sistemas de tradición romano-germánica.

    .bg-full-width.bg-color-13
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Aportes del derecho penal romano
        p.mb-5 Uno de los principales avances fue la sistematización normativa y la distinción entre delitos públicos y privados. Normas como la Lex Julia y la Lex Cornelia establecieron sanciones específicas:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/31.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 1
                p.mb-0 La Lex Julia de Repetundis castigaba la corrupción de funcionarios públicos.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/32.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tema 2
                p.mb-0 La Lex Cornelia de Sicariis et Veneficiis sancionaba homicidios y envenenamientos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/33.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Estas leyes reflejan una tendencia a proteger el orden público y la estabilidad del Imperio, ampliando la intervención del Estado.
    
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/34.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 También se desarrolló un sistema procesal más estructurado. Durante la República, los juicios penales eran resueltos por comicios y tribunales populares. Con el Imperio, el poder judicial se centralizó en manos de magistrados y gobernadores, quienes actuaban en nombre del emperador.
        p(data-aos="fade-left") Se introdujo la cognitio extra ordinem, un procedimiento más flexible, con amplia discrecionalidad judicial y mayor intervención estatal. Este modelo anticipa el posterior sistema inquisitivo de la Edad Media.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/35.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        h2(data-aos="fade-left") Penas y proporcionalidad
        p.mb-5 Las sanciones variaban según el estatus social del infractor y la gravedad del delito. Se aplicaban:
    
        .bg-color-3.p-4(data-aos="fade-left")
          p.mb-0 Multas
        .bg-color-14.p-4(data-aos="fade-left")
          p.mb-0 Destierro
        .bg-color-15.p-4(data-aos="fade-left")
          p.mb-0 Esclavitud penal
        .bg-color-16.p-4(data-aos="fade-left")
          p.mb-0.text-white Confiscación de bienes
        .bg-color-17.p-4(data-aos="fade-left")
          p.mb-0.text-white Pena de muerte (para delitos como traición, homicidio o corrupción)
    
    p.mb-4 Aunque se promovía el principio de proporcionalidad, su aplicación no era igualitaria: los esclavos recibían castigos más severos que los ciudadanos libres. (López Betancourt, 2018)

    h2(data-aos="fade-left") El Corpus Iuris Civilis
    p.mb-5 Uno de los legados más importantes fue la compilación del Corpus Iuris Civilis, realizada bajo el emperador Justiniano en el siglo VI. Esta obra incluyó:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 El Código de Justiniano
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 El Digesto
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Las Instituciones
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Las Novelas
    
    p.mb-4 Estos textos incorporaron principios esenciales como:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/36.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 La presunción de inocencia

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/37.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 El derecho a la defensa
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/38.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 La necesidad de pruebas para condenar
    
    p.mb-4 Este compendio jurídico tuvo una influencia directa en la legislación medieval y moderna europea.

    h2(data-aos="fade-left") Fusión con el Derecho Germánico
    p.mb-5 Tras la caída del Imperio Romano, el derecho penal se fusionó con las tradiciones germánicas. En los reinos germánicos:

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            img(src="@/assets/curso/tema2/39.svg", data-aos="zoom-in").mx-auto
          .col-lg-8.order-lg-1
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Se mantuvieron muchas disposiciones romanas.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Se introdujo el sistema de composición, donde el agresor pagaba una compensación económica a la víctima.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 La venganza privada aún era aceptada en casos menores.
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 En delitos graves (como homicidio o traición), se aplicaban sanciones severas, incluyendo la ejecución pública.
    
    p.mb-4 A diferencia de Roma, el derecho germánico no diferenciaba claramente entre delitos públicos y privados. Con el tiempo, los monarcas europeos comenzaron a centralizar la justicia penal, sentando las bases del Estado moderno. Los aportes del Derecho Penal Romano-Germánico:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/40.png")
            .col-lg-7
              h5 Normas penales
              p Distinción entre delitos públicos y privados. Penalización de la corrupción, el homicidio y la traición.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/41.png")
            .col-lg-7
              h5 Procedimiento penal
              p De tribunales populares a magistrados imperiales. Cognitio extra ordinem como antecedente del modelo inquisitivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/42.png")
            .col-lg-7
              h5 Sistema de sanciones
              p Aplicación de multas, destierro, esclavitud penal y pena de muerte. Principio de proporcionalidad limitado por el estatus social.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/43.png")
            .col-lg-7
              h5 Corpus Iuris Civilis
              p Recopilación jurídica que integra principios como presunción de inocencia, necesidad de prueba y derecho a la defensa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/44.png")
            .col-lg-7
              h5 Influencia germánica
              p Fusión de normas romanas con prácticas tribales. Composición económica como forma de reparación. Persistencia de la venganza privada en ciertos casos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/45.png")
            .col-lg-7
              h5 Legado al derecho moderno
              p Consolidación de estructuras penales centralizadas. Influencia directa en los sistemas jurídicos romano-germánicos contemporáneos.

    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/45-1.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El Derecho Penal romano-germánico representó un punto de inflexión histórico, consolidando principios clave como la tipificación del delito, la centralización judicial, el uso de procedimientos estructurados y la búsqueda de proporcionalidad en las penas.
            p.mb-0 Su legado perdura en los sistemas penales actuales de tradición continental europea, donde se sigue defendiendo la importancia de un poder punitivo racional y garantista.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Derecho penal en la edad moderna y contemporánea
    
    p.mb-4 El Derecho Penal experimentó profundas transformaciones durante la Edad Moderna y Contemporánea, marcadas por la consolidación del Estado de derecho, la humanización de las penas y el reconocimiento de derechos fundamentales para los acusados. En estos periodos, el pensamiento filosófico y jurídico avanzó hacia un sistema penal más garantista, enfocado en limitar el poder punitivo del Estado.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/46.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-5(data-aos="fade-left")
          h5 Edad Moderna: del absolutismo al pensamiento ilustrado
          p.mb-0 Durante la Edad Moderna, el Derecho Penal se distanció de la tradición medieval. Predominaba la arbitrariedad judicial, el castigo físico y la tortura como formas de represión. Con el fortalecimiento del absolutismo, el monarca asumió el control de la justicia penal y utilizó el castigo como herramienta para consolidar su autoridad.
        p.mb-0(data-aos="fade-left") En este contexto, las penas públicas y ejemplarizantes (mutilaciones, ejecuciones) eran comunes y se aplicaban con gran severidad para garantizar el orden.
        p(data-aos="fade-left") Con la llegada de la Ilustración en el siglo XVIII, surgió un cambio de paradigma. Filósofos y juristas comenzaron a criticar la brutalidad del sistema penal y a proponer una justicia racional, proporcional y legal.
        h5(data-aos="fade-left") Uno de los exponentes clave fue Cesare Beccaria, quien en De los delitos y las penas (1764) planteó:

    .bg-full-width.bg-color-4
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/47.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center La abolición de la tortura y de la pena de muerte.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/48.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center La proporcionalidad de las penas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/49.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center El principio de legalidad penal: nadie puede ser castigado sin ley previa.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/50.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") La codificación penal
        p.mb-0 Otro cambio esencial en la Edad Moderna fue la codificación del derecho penal. Hasta entonces, las normas penales estaban dispersas y se aplicaban de manera discrecional. Con la Revolución Francesa, se impulsó la creación de códigos penales uniformes.
        p En 1791, Francia promulgó su Código Penal, que:
    
        .bg-color-3.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Estableció la igualdad ante la ley.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Eliminó la arbitrariedad en la aplicación de penas.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-12
              p.mb-0 Sentó las bases para la codificación moderna en Europa y América Latina.
    
    h2(data-aos="fade-left") Siglo XIX: Escuelas penales
    p.mb-5 Durante el siglo XIX, surgieron distintas corrientes que debatieron sobre la naturaleza del delito y la función de la pena.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/51.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La Escuela Clásica (Beccaria, Romagnosi) defendía:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 El delito como acto racional.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 La pena como respuesta proporcional y predecible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/52.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La Escuela Positiva (Lombroso, Ferri, Garofalo) introdujo una visión científica del delito:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 El comportamiento delictivo es resultado de factores biológicos, psicológicos o sociales.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-12
                  p.mb-0 Se promovieron medidas preventivas y de rehabilitación, más allá de la simple sanción retributiva.
    
    h2(data-aos="fade-left") Siglo XX: derechos humanos y cooperación internacional
    p El siglo XX marcó un punto de inflexión. Tras la Segunda Guerra Mundial, se impulsó un modelo penal basado en el Estado de derecho y el respeto a los derechos humanos. En 1948, la Declaración Universal de Derechos Humanos reconoció principios clave:

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-6.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/53.svg", data-aos="zoom-in").mx-auto
          .col-lg-6
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Prohibición de penas crueles, inhumanas o degradantes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Derecho a un juicio justo y a la presunción de inocencia.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-12
                p.mb-0 Reconocimiento del debido proceso legal.
    
    p.mb-4 En la segunda mitad del siglo XX y en el siglo XXI, el Derecho Penal continuó adaptándose a nuevos contextos sociales y tecnológicos. Se fortalecieron la cooperación internacional y la respuesta ante formas de criminalidad como:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Delincuencia organizada
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-11.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Terrorismo
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.text-center.text-white.p-4.h-100(data-aos="fade-left").align-content-center
          p(data-aos="fade-left").mb-0 Delitos cibernéticos
    
    p.mb-4 Instituciones como la Corte Penal Internacional (CPI) y la ONU jugaron un rol central en la justicia penal universal y en el combate de crímenes de lesa humanidad. (López Betancourt, 2018)


    .bg-full-width.bg-color-13
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Nuevos enfoques: justicia restaurativa y prevención
        p.mb-5 En la actualidad, el Derecho Penal enfrenta el desafío de equilibrar la represión del delito con la protección de los derechos fundamentales. Muchos sistemas penales promueven:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/54.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Justicia restaurativa
                p.mb-0 Centrada en la reparación del daño y la participación de víctimas e infractores.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/55.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Modelos preventivos
                p.mb-0 Inspirados en la criminología y la sociología, que cuestionan la eficacia de la prisión como solución.
    
    p.mb-4 Aportes del Derecho penal en la edad moderna y contemporánea: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/56.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Edad Moderna absolutista")
            p Centralización del poder penal en el monarca. Uso de penas severas como instrumento de control político.
    
          .div(titulo="Ilustración (siglo XVIII)")
            p Beccaria: abolición de la tortura y la pena de muerte. Legalidad, proporcionalidad, racionalidad del castigo.
    
          .div(titulo="Codificación (desde 1791)")
            p Códigos penales modernos. Igualdad ante la ley. Fin de la arbitrariedad. Uniformidad jurídica.
    
          .div(titulo="Siglo XIX (escuelas penales)")
            p Escuela Clásica: responsabilidad racional y penas proporcionales. Escuela Positiva: factores biológicos y sociales del delito, enfoque preventivo.
          .div(titulo="Siglo XX (postguerra)")
            p Declaración Universal de Derechos Humanos. Prohibición de penas inhumanas. Reconocimiento del debido proceso.
    
          .div(titulo="Actualidad")
            p Cooperación internacional (CPI, ONU). Justicia restaurativa. Enfoques preventivos y rehabilitadores frente a la delincuencia transnacional y tecnológica.
    
    .row.mb-5
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema2/57.svg", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/58.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Derecho Penal, desde la Edad Moderna hasta nuestros días, ha transitado de un modelo represivo y autoritario hacia un sistema garantista y respetuoso de los derechos humanos. Las ideas ilustradas, la codificación legal, las corrientes criminológicas y la justicia internacional han sido fundamentales en este proceso.
        p(data-aos="fade-left") Sin embargo, los retos actuales —como la delincuencia global, la reforma carcelaria y la prevención del delito— exigen seguir repensando el papel del Derecho Penal en las sociedades contemporáneas.
    
    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Escuelas penales y sus aportes al Derecho Penal
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Escuelas penales y sus aportes al Derecho Penal, donde se aborda la evolución del pensamiento penal a través de las principales corrientes doctrinales: Escuela Clásica, Escuela Positiva y Escuela Neoclásica. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Escuelas penales y sus aportes al Derecho Penal.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/59.png', alt='')
        


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71441 " target="_blank" rel="noopener noreferrer") Ojeda Rodríguez, N. D. L. C. (2011). Derecho Procesal Penal I. En: Selección de Guías de Estudio: Derecho: (ed.). Editorial Universitaria.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/1271/127113486008.pdf " target="_blank" rel="noopener noreferrer") Parada García, GE, (2009). Orden y revolución en la ley penal colombiana (1819-1837). Un debate historiográfico. Anuario Colombiano de Historia Social y de la Cultura , 36 (2), 177-205
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.18601/21452946.n16.05  " target="_blank" rel="noopener noreferrer") Espitia Garzón, F. (2016). Derecho criminal romano. Aportes a problemas actuales en relación con los “delitos contra la administración pública”. Revista Digital de derecho Administrativo, (16), 51–102.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.24142/raju.v16n32a4" target="_blank" rel="noopener noreferrer") Menéndez Conca, L. G. (2021). Antecedentes históricos de la responsabilidad penal de las personas jurídicas. Ratio Juris ( UNAULA), 16(32), 93–116.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-C9t1G5uChA " target="_blank" rel="noopener noreferrer") Historias de Adelina. (2023, 29 de marzo). El Código Hammurabi, una de las legislaciones más antiguas en la historia de la humanidad. [Vídeo]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=1vK_0JSj8Vk" target="_blank" rel="noopener noreferrer") M. E. V. V. Las vegas. (2023, 30 de enero). El propósito de la Ley (Mosaica). [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El poder punitivo del Estado, o ius puniendi, ¿se fundamenta en?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La voluntad del gobierno de castigar conductas inaceptables',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La facultad del Estado para imponer sanciones a quienes transgreden las normas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La imposición de sanciones sin ningún tipo de limitación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La necesidad de reprimir cualquier conducta sospechosa sin juicio previo ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El poder punitivo del Estado es la facultad que tiene para sancionar a quienes violan las normas, con el fin de preservar el orden público y proteger los bienes jurídicos fundamentales.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones justifica el poder punitivo del Estado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Es necesario para regular la convivencia social y evitar la anarquía ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Sirve para garantizar la venganza de las víctimas sobre los infractores',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Permite al Estado castigar sin necesidad de pruebas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Es un mecanismo para imponer la voluntad política del gobierno en turno  ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El poder punitivo surge de la necesidad de regular la convivencia y evitar el caos social. Sin un sistema de sanciones claras, las relaciones humanas estarían marcadas por la justicia privada y la inseguridad.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'El principio que establece que no puede haber delito ni pena sin una ley previa                   que lo determine se conoce como:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Principio de intervención mínima',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Principio de proporcionalidad',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Principio de legalidad',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Principio de humanidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El principio de legalidad ( nullum crimen, nulla poena sine lege ) establece que ninguna persona puede ser sancionada sin que exista una ley previa que tipifique su conducta como delito. Esto evita la arbitrariedad en la aplicación de sanciones.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Durante la antigüedad, el castigo en los sistemas primitivos de justicia se basaba principalmente en:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La reinserción social del infractor',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La proporcionalidad y equidad de las penas',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La Ley del Talión, es decir, un castigo equivalente al daño causado',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Un análisis científico de la peligrosidad del delincuente',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En las primeras civilizaciones, la justicia estaba marcada por la Ley del Talión ("ojo por ojo, diente por diente"), donde el castigo debía ser equivalente al daño causado. Con el tiempo, este sistema fue evolucionando hacia modelos más humanitarios y garantistas.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'El Derecho Penal moderno se basa en un modelo garantista que incluye mecanismos como:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La eliminación de cualquier sanción para los infractores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La aplicación arbitraria de penas sin juicio',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'La imposición de sanciones colectivas sin distinción',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La presunción de inocencia y el debido proceso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              'El modelo garantista busca evitar arbitrariedades y asegurar que las penas sean impuestas dentro de un marco legal que respeta la dignidad humana. Entre sus mecanismos clave están la presunción de inocencia, el debido proceso y el derecho a la defensa.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
