import Layout from '../components/layout'

export default () => (
  <Layout title='Preface'>
    <div>

<style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }
                    .hint {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 100%;             
                        max-width: 1000px;
                        background-color: #E9E3B9;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        line-height: 1.1;
                        padding: 1.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                    
                    h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                    .sub{
                        text-decoration: underline;
                    }
                `}</style>

    <div className="col-md-6">              
   <header>
<h1 className="p">Preface</h1>
</header>


<p className="it">Desde el lanzamiento de la versión 1.0 en 2000, la popularidad de R como un entorno para la informática estadística, analítica de datos y gráficos ha crecido exponencialmente. Las personas que han estado utilizando hojas de cálculo y necesitan realizar cosas que los paquetes de hojas de cálculo no pueden hacer fácilmente, o necesitan manejar volúmenes de datos más grandes que lo que un programa de hoja de cálculo puede manejar cómodamente, buscan a R. Análogamente, las personas que usan poderosos paquetes analíticos comerciales también están intrigados por esta opción gratuita y poderosa. Como resultado, un gran número de personas ahora están buscando rápidamente hacer las cosas en R. Siendo un sistema extensible, la funcionalidad de R está dividida en numerosos paquetes con cada uno exponiendo un gran número de funciones. Incluso los usuarios experimentados no pueden esperar para recordar todos los detalles de la parte superior de su cabeza.</p>



<p className="p">Since the release of version 1.0 in 2000, R's popularity as an environment for statistical computing, data analytics, and graphing has grown exponentially. People who have been using spreadsheets and need to perform things that spreadsheet packages cannot readily do, or need to handle larger data volumes than what a spreadsheet program can comfortably handle, are looking to R. Analogously, people using powerful commercial analytics packages are also intrigued by this free and powerful option. As a result, a large number of people are now looking to quickly get things done in R. Being an extensible system, R's functionality is divided across numerous packages with each one exposing large numbers of functions. Even experienced users cannot expect to remember all the details off the top of their head.</p>
<p className="it">Nuestra capacidad de generar datos ha mejorado enormemente con el advenimiento de la tecnología. Los datos generados se han vuelto más complejos con el paso del tiempo. La complejidad de los datos nos obliga a desarrollar nuevas herramientas y métodos para analizarlo, interpretarlo y comunicarse con los datos. La visualización de datos nos capacita con las habilidades necesarias para transmitir el significado de los datos subyacentes. La visualización de datos es una intersección notable de datos, ciencia y arte, y esto hace difícil definir la visualización de una manera formal; Una simple búsqueda en Google me demostrará la razón. El diccionario Merriam-Webster define la visualización como "formación de imágenes mentales visuales".</p>



<p className="p">Our ability to generate data has improved tremendously with the advent of technology. The data generated has become more complex with the passage of time. The complexity in data forces us to develop new tools and methods to analyze it, interpret it, and communicate with the data. Data visualization empowers us with the necessary skills required to convey the meaning of underlying data. Data visualization is a remarkable intersection of data, science, and art, and this makes it hard to define visualization in a formal way; a simple Google search will prove me right. The Merriam-Webster dictionary defines visualization as "formation of mental visual images”.</p>
<p className="it">Los grandes datos se han convertido en una moda popular en muchas industrias. Un número creciente de personas han estado expuestas al término y están buscando cómo aprovechar grandes datos en sus propios negocios, para mejorar las ventas y la rentabilidad. Sin embargo, la recolección, agregación y visualización de datos es sólo una parte de la ecuación. Ser capaz de extraer información útil de los datos es otra tarea, y mucho más difícil.</p>



<p className="p">Big data has become a popular buzzword across many industries. An increasing number of people have been exposed to the term and are looking at how to leverage big data in their own businesses, to improve sales and profitability. However, collecting, aggregating, and visualizing data is just one part of the equation. Being able to extract useful information from data is another task, and much more challenging.</p>
<p className="it">Tradicionalmente, la mayoría de los investigadores realizan análisis estadísticos usando muestras históricas de datos. El principal inconveniente de este proceso es que las conclusiones extraídas del análisis estadístico son limitadas. De hecho, los investigadores suelen luchar para descubrir patrones ocultos y correlaciones desconocidas de los datos objetivo. Aparte de la aplicación del análisis estadístico, el aprendizaje automático ha surgido como una alternativa. Este proceso produce un modelo predictivo más preciso con los datos insertados en un algoritmo de aprendizaje. A través del aprendizaje automático, el análisis de las operaciones y los procesos empresariales no se limita al pensamiento a escala humana. El análisis a escala de máquina permite a las empresas descubrir valores ocultos en grandes datos.</p>



<p className="p">Traditionally, most researchers perform statistical analysis using historical samples of data. The main downside of this process is that conclusions drawn from statistical analysis are limited. In fact, researchers usually struggle to uncover hidden patterns and unknown correlations from target data. Aside from applying statistical analysis, machine learning has emerged as an alternative. This process yields a more accurate predictive model with the data inserted into a learning algorithm. Through machine learning, the analysis of business operations and processes is not limited to human-scale thinking. Machine-scale analysis enables businesses to discover hidden values in big data.</p>
<h3 className="p">What this learning path covers</h3>
<p className="it">Este módulo, dirigido a usuarios que ya están expuestos a los fundamentos de R, proporciona recetas listas para realizar muchas tareas importantes de análisis de datos. En lugar de tener que buscar en la Web o profundizar en numerosos libros cuando se enfrentan a una tarea específica, la gente puede encontrar la receta adecuada y ponerse en marcha en cuestión de minutos.</p>



<p className="p">Module 1, R Data Analysis Cookbook, this module, aimed at users who are already exposed to the fundamentals of R, provides ready recipes to perform many important data analytics tasks. Instead of having to search the Web or delve into numerous books when faced with a specific task, people can find the appropriate recipe and get going in a matter of minutes.</p>
<p className="it">En este módulo aprenderá a generar visualizaciones básicas, entender las limitaciones y ventajas de utilizar ciertas visualizaciones, desarrollar visualizaciones y aplicaciones interactivas, comprender varias funciones exploratorias de datos en R y, finalmente, aprender formas de presentar Los datos a nuestra audiencia. Este módulo está dirigido a principiantes e intermedios usuarios de R que les gustaría ir un paso más allá en el uso de sus datos complejos para transmitir una historia muy convincente a su audiencia.</p>



<p className="p">Module 2, R Data Visualization Cookbook, in this module you will learn how to generate basic visualizations, understand the limitations and advantages of using certain visualizations, develop interactive visualizations and applications, understand various data exploratory functions in R, and finally learn ways of presenting the data to our audience. This module is aimed at beginners and intermediate users of R who would like to go a step further in using their complex data to convey a very convincing story to their audience.</p>
<p className="it">Módulo 3, Aprendizaje de la máquina con R Cookbook, este módulo cubre cómo realizar el análisis estadístico con el análisis de aprendizaje automático y la evaluación de modelos creados, que se tratan en detalle más adelante en el libro. El módulo incluye contenido sobre cómo integrar R y Hadoop para crear una gran plataforma de análisis de datos. Las ilustraciones detalladas proporcionan toda la información requerida para comenzar a aplicar el aprendizaje de la máquina a los proyectos individuales.</p>



<p className="p">Module 3, Machine Learning with R Cookbook, this module covers how to perform statistical analysis with machine learning analysis and assessing created models, which are covered in detail later on in the book. The module includes content on learning how to integrate R and Hadoop to create a big data analysis platform. The detailed illustrations provide all the information required to start applying machine learning to individual projects.</p>
<h3 className="p">What you need for this learning path</h3>
<h3 className="p">Module 1:</h3>
<p className="it">Hemos probado todo el código de este módulo para versiones R 3.0.2 (Frisbee Sailing) y 3.1.0 (Spring Dance). Cuando instale o cargue algunos de los paquetes, puede recibir un mensaje de advertencia indicando que el código se compiló para una versión diferente, pero esto no afectará a ninguno de los códigos de este módulo.</p>



<p className="p">We have tested all the code in this module for R versions 3.0.2 (Frisbee Sailing) and 3.1.0 (Spring Dance). When you install or load some of the packages, you may get a warning message to the effect that the code was compiled for a different version, but this will not impact any of the code in this module.</p>
<h3 className="p">Module 2:</h3>
<p className="it">Necesitas descargar R para generar las visualizaciones. Puede descargar e instalar R usando el sitio web de CRAN disponible en http://cran.r-project.org/. Todas las recetas fueron escritas usando RStudio. RStudio es un entorno de desarrollo integrado (IDE) para R y se puede descargar desde http://www.rstudio.com/products/rstudio/. Muchas de las visualizaciones se crean utilizando paquetes R y se discuten en sus respectivas recetas.</p>



<p className="p">You need to download R to generate the visualizations. You can download and install R using the CRAN website available at http://cran.r-project.org/. All the recipes were written using RStudio. RStudio is an integrated development environment (IDE) for R and can be downloaded from http://www.rstudio.com/products/rstudio/. Many of the visualizations are created using R packages and they are discussed in their respective recipes.</p>
<p className="it">En algunas de las recetas, he introducido a los usuarios a otras plataformas de código abierto, como ScapeToad, ArcGIS y Mapbox. Sus procedimientos de instalación se describen en sus respectivas recetas.</p>



<p className="p">In few of the recipes, I have introduced users to some other open source platforms such as ScapeToad, ArcGIS, and Mapbox. Their installation procedures are outlined in their respective recipes.</p>
<h3 className="p">Module 3:</h3>
<p className="it">Para seguir los ejemplos del curso, necesitará un ordenador con acceso a Internet y la posibilidad de instalar el entorno R. Puede descargar R desde http://www.cran.r-project.org/. Las instrucciones de instalación detalladas están disponibles en el primer capítulo.</p>



<p className="p">To follow the course's examples, you will need a computer with access to the Internet and the ability to install the R environment. You can download R from http://www.cran.r-project.org/. Detailed installation instructions are available in the first chapter.</p>
<p className="it">Los ejemplos proporcionados en este libro fueron codificados y probados con R Versión 3.1.2 en un equipo con Microsoft Windows instalado en él. Estos ejemplos también deberían funcionar con cualquier versión reciente de R instalada en MAC OSX o en un sistema operativo tipo Unix.</p>



<p className="p">The examples provided in this book were coded and tested with R Version 3.1.2 on a computer with Microsoft Windows installed on it. These examples should also work with any recent version of R installed on either MAC OSX or a Unix-like OS.</p>
<h3 className="p">Who this learning path is for</h3>
<p className="it">Esta Ruta de Aprendizaje es ideal para aquellos que ya están expuestos a R, pero aún no lo han utilizado extensivamente. Este curso de aprendizaje le preparará con una amplia visión de las técnicas profesionales de análisis, visualización y aprendizaje de máquinas con R. Independientemente de su nivel de experiencia, este curso también cubre los conceptos básicos de usar R y está escrito teniendo en cuenta nuevo e intermedio R interesados ​​en el aprendizaje.</p>



<p className="p">This Learning Path is ideal for those who are already exposed to R, but have not yet used it extensively. This Learning Path will set you up with an extensive insight into professional techniques for analysis, visualization and machine learning with R. Regardless of your level of experience, this course also covers the basics of using R and it is written keeping in mind new and intermediate R users interested in learning.</p>
<h3 className="p">Reader feedback</h3>
<p className="it">Los comentarios de nuestros lectores son siempre bienvenidos. Háganos saber lo que piensa acerca de este curso, lo que le gustó o le disgustó. La retroalimentación del lector es importante para nosotros ya que nos ayuda a desarrollar títulos de los que realmente sacarás el máximo provecho.</p>



<p className="p">Feedback from our readers is always welcome. Let us know what you think about this course —what you liked or disliked. Reader feedback is important for us as it helps us develop titles that you will really get the most out of.</p>
<p className="it">Para enviarnos comentarios generales, simplemente envíe un e-mail <code>&lt;feedback@packtpub.com&gt;</code>, y mencione el título del curso en el tema de su mensaje.</p>



<p className="p">To send us general feedback, simply e-mail <code>&#60;feedback@packtpub.com&#62;</code>, and mention the course's title in the subject of your message.</p>
<p className="it">Si hay un tema en el que tiene experiencia y está interesado en escribir o contribuir a un curso, consulte nuestra guía de autores en www.packtpub.com/authors.</p>



<p className="p">If there is a topic that you have expertise in and you are interested in either writing or contributing to a course, see our author guide at www.packtpub.com/authors.</p>
<h2 className="p">Customer support</h2>
<p className="it">Ahora que usted es el orgulloso propietario de un curso de Pack, tenemos una serie de cosas para ayudarle a sacar el máximo provecho de su compra.</p>



<p className="p">Now that you are the proud owner of a Packt course, we have a number of things to help you to get the most from your purchase.</p>
<h3 className="p">Downloading the example code</h3>
<p className="it">Puede descargar los archivos de código de ejemplo de este curso desde su cuenta en http://www.packtpub.com. Si ha adquirido este curso en otro lugar, puede visitar http://www.packtpub.com/support y registrarse para que los archivos se envíen por correo electrónico directamente a usted.</p>



<p className="p">You can download the example code files for this course from your account at http://www.packtpub.com. If you purchased this course elsewhere, you can visit http://www.packtpub.com/support and register to have the files e-mailed directly to you.</p>
<p className="it">Puede descargar los archivos de código siguiendo estos pasos:</p>



<p className="p">You can download the code files by following these steps:</p>

<ul>
<li className="it">1. Inicie sesión o regístrese en nuestro sitio web utilizando su dirección de correo electrónico y contraseña.</li>



<li className="p">1.	Log in or register to our website using your e-mail address and password.</li>
<li className="it">2. Coloque el puntero del mouse en la pestaña SUPPORT en la parte superior.</li>



<li className="p">2.	Hover the mouse pointer on the SUPPORT tab at the top.</li>
<li className="it">3. Haga clic en Código Descargas &amp; Erratas.</li>



<li className="p">3.	Click on Code Downloads & Errata.</li>
<li className="it">4. Introduzca el nombre del curso en el cuadro Buscar.</li>



<li className="p">4.	Enter the name of the course in the Search box.</li>
<li className="it">5. Seleccione el curso para el que desea descargar los archivos de código.</li>



<li className="p">5.	Select the course for which you're looking to download the code files.</li>
<li className="it">6. Elija en el menú desplegable donde adquirió este curso.</li>



<li className="p">6.	Choose from the drop-down menu where you purchased this course from.</li>
<li className="it">7. Haga clic en Descargar código.</li>



<li className="p">7.	Click on Code Download.</li>
</ul>
<p className="it">También puede descargar los archivos de código haciendo clic en el botón Archivos de código en la página web del curso en el sitio web de Packt Publishing. Se puede acceder a esta página ingresando el nombre del curso en el cuadro de búsqueda. Ten en cuenta que debes iniciar sesión en tu cuenta de Packt.</p>



<p className="p">You can also download the code files by clicking on the Code Files button on the course's webpage at the Packt Publishing website. This page can be accessed by entering the course's name in the Search box. Please note that you need to be logged in to your Packt account.</p>
<p className="it">Una vez descargado el archivo, asegúrese de descomprimir o extraer la carpeta utilizando la última versión de:</p>



<p className="p">Once the file is downloaded, please make sure that you unzip or extract the folder using the latest version of:</p>
<ul>
<li className="p">	WinRAR / 7-Zip for Windows</li>
<li className="p">	Zipeg / iZip / UnRarX for Mac</li>
<li className="p">	7-Zip / PeaZip for Linux</li>
</ul>

<p className="p">The code bundle for the course is also hosted on GitHub at <code>https://github.com/PacktPublishing/R-Recipes-for-Analysis-Visualization-and-Machine- Learning</code>. También tenemos otros paquetes de código de nuestro rico catálogo de libros, videos y cursos disponibles en <code>https://github.com/PacktPublishing/</code>. ¡Compruébelo!</p>

<p className="it">El paquete de código para el curso también está alojado en GitHub en <code>https://github.com/PacktPublishing/R-Recipes-for-Analysis-Visualization-and-Machine- Learning</code>. We also have other code bundles from our rich catalog of books, videos and courses available at <code>https://github.com/PacktPublishing/</code>. Check them out!</p>


<h3 className="p">Errata</h3>
<p className="it">Aunque hemos tomado todas las precauciones para garantizar la exactitud de nuestro contenido, los errores se producen. Si encuentras un error en uno de nuestros libros -tal vez un error en el texto o el código- estaríamos agradecidos si pudieras informarnos esto. Al hacerlo, puede ahorrar a otros lectores la frustración y ayudarnos a mejorar las versiones posteriores de este curso. Si encuentra alguna errata, infórmenos visitando http://www.packtpub.com/submit-errata. Seleccionando su curso, haciendo clic en el enlace Formulario de Envío de Erratas e ingresando los detalles de sus erratas. Una vez verificadas sus erratas, se aceptará su envío y las erratas se cargarán en nuestro sitio web o se agregarán a cualquier lista de erratas existentes en la sección Erratas de ese título.</p>



<p className="p">Although we have taken every care to ensure the accuracy of our content, mistakes do happen. If you find a mistake in one of our books—maybe a mistake in the text or the code—we would be grateful if you could report this to us. By doing so, you can save other readers from frustration and help us improve subsequent versions of this course. If you find any errata, please report them by visiting http://www.packtpub.com/submit-errata. selecting your course, clicking on the Errata Submission Form link, and entering the details of your errata. Once your errata are verified, your submission will be accepted and the errata will be uploaded to our website or added to any list of existing errata under the Errata section of that title.</p>
<p className="it">Para ver las erratas presentadas anteriormente, vaya a <code>https://www.packtpub.com/books/content/support</code> e introduzca el nombre del libro en el campo de búsqueda. La información requerida aparecerá en la sección Errata.</p> 
<p className="p">To view the previously submitted errata, go to <code>https://www.packtpub.com/books/content/support</code> and enter the name of the book in the search field. The required information will appear under the Errata section.</p>
<h3 className="p">Piracy</h3>
<p className="it">La piratería de material protegido por derechos de autor en Internet es un problema continuo en todos los medios de comunicación. En Packt, tomamos muy en serio la protección de nuestros derechos de autor y licencias. Si encuentra alguna copia ilegal de nuestras obras en cualquier forma en Internet, sírvase proporcionarnos la dirección de la ubicación o el nombre del sitio web inmediatamente para que podamos buscar un remedio.</p>
<p className="p">Piracy of copyrighted material on the Internet is an ongoing problem across all media. At Packt, we take the protection of our copyright and licenses very seriously. If you come across any illegal copies of our works in any form on the Internet, please provide us with the location address or website name immediately so that we can pursue a remedy.</p>
<p className="it">Póngase en contacto con nosotros <code>&lt;copyright@packtpub.com&gt;</code>con un enlace a la sospecha de material pirateado.</p>
<p className="p">Please contact us at <code>&#60;copyright@packtpub.com&#62;</code> with a link to the suspected pirated material.</p>
<p className="it">Agradecemos su ayuda en la protección de nuestros autores y nuestra capacidad para ofrecerle contenido valioso.</p>
<p className="p">We appreciate your help in protecting our authors and our ability to bring you valuable content.</p>
<h3 className="p">Questions</h3>
<p className="it">Si tiene algún problema con cualquier aspecto de este curso, puede ponerse en contacto con nosotros en <code>&lt;questions@packtpub.com&gt;</code>. Y haremos nuestro mejor esfuerzo para resolver el problema.</p>
<p className="p">If you have a problem with any aspect of this course, you can contact us at <code>&#60;questions@packtpub.com&#62;</code>. and we will do our best to address the problem.</p>

</div>
</div>

  </Layout>
)
