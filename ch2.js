import Layout from '../components/layout'

export default () => (
  <Layout title='Contact us'>

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

                     code {
                        color: #224998;
                        font-size: 20px;
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
    <h1 className="p">Chapter 2. Practical Machine Learning with R</h1>
<p className="it"> En este capítulo, cubriremos los siguientes temas: Descargar e instalar R</p>
<p className="p"> In this chapter, we will cover the following topics: </p>

<ul>
<li className="p">Downloading and installing R</li>
<li className="p">Downloading and installing RStudio</li>
<li className="p">Installing and loading packages</li>
<li className="p">Reading and writing data</li>
<li className="p">Using R to manipulate data</li>
<li className="p">Applying basic statistics</li>
<li className="p">Visualizing data</li>
<li className="p">Getting a dataset for machine learning</li>
</ul>

<h2 className="p">Introduction</h2>
<p className="it">El objetivo de machine learning es descubrir patrones ocultos, correlaciones desconocidas, y encontrar información útil de los datos. Además de esto, a través de la incorporación con el análisis de datos, el machine learning puede ser utilizado para realizar un análisis predictivo. Con el machine learning, el análisis de las operaciones y procesos empresariales no se limita al pensamiento de escala humana; El análisis a escala de máquina permite a las empresas capturar valores ocultos en grandes datos.</p>

<p className="p">The aim of machine learning is to uncover  hidden patterns, unknown correlations, and find useful information from data. In addition to this, through incorporation with data analysis, machine learning  can be used to  perform predictive analysis. With machine learning, the analysis of business operations and processes is not limited to human scale thinking; machine scale analysis enables businesses to capture hidden values in big data.</p>


<p className="it">El machine learning tiene similitudes con el proceso de razonamiento humano. A diferencia del análisis tradicional, el modelo generado no puede evolucionar a medida que se acumulan los datos. El machine learning puede aprender de los datos que se procesan y analizan. En otras palabras, cuanto más datos se procesan, más se puede aprender.</p>

<p className="p">Machine learning has similarities to the human reasoning process. Unlike traditional analysis, the generated model cannot evolve as data is accumulated. Machine learning can learn from the data that is processed and analyzed. In other words, the more data that is processed, the more it can learn.</p>


<p className="it">R, como un dialecto de GNU-S, es un poderoso lenguaje estadístico que puede usarse para manipular y analizar datos. Además, R proporciona muchos paquetes de machine learning y funciones de visualización, que permiten a los usuarios analizar datos de forma instantánea. Lo más importante es que R es de código abierto y gratuito.</p>

<p className="p">R, as a dialect of GNU-S, is a powerful statistical language that can be used to manipulate and analyze data. Additionally, R provides many machine learning packages and visualization functions, which enable users to analyze data on the fly. Most importantly, R is open source and free.</p>

<p className="it">El uso de R simplifica en gran medida el machine learning. Todo lo que necesita saber es cómo cada algoritmo puede resolver su problema, y ​​luego simplemente puede utilizar un paquete escrito para generar rápidamente modelos de predicción en los datos con unas pocas líneas de comandos. Por ejemplo, puede realizar Naïve Bayes para el filtrado de correos no deseados, realizar clústeres k-means para la segmentación de clientes, usar la regresión lineal para predecir los precios de la vivienda o implementar un modelo de Markov oculto para predecir el mercado de valores, como se muestra en la siguiente captura de pantalla:</p>

<p className="p">Using R greatly simplifies machine learning. All you need to know is how each algorithm can solve your problem, and then you can simply use a written package to  quickly generate prediction models on data with a few command lines. For example, you can either  perform Naïve Bayes for spam mail filtering, conduct k-means clustering  for  customer  segmentation, use linear regression to forecast house prices, or  implement a  hidden  Markov  model  to predict the stock market, as shown in the following screenshot:</p>
<div className="image"><a></a><img src="/static/002_001.png" width="100%" alt="Image"/></div>
<div className="summary">Stock market prediction using R</div>

<p className="it">Además, puede realizar una reducción de dimensión no lineal para calcular la disimilitud de los datos de imagen y visualizar el gráfico agrupado, como se muestra en la siguiente captura de pantalla. Todo lo que necesitas hacer es seguir las recetas proporcionadas en este libro.</p>

<p className="p">Moreover, you can perform nonlinear dimension reduction to calculate the dissimilarity of image data, and visualize the clustered graph, as shown in the following screenshot. All you need to do is follow the recipes provided in this book.</p>

<div className="image"><a></a><img src="/static/002_002.png" width="100%" alt="Image"/></div>
<div className="summary">A clustered graph of face image data</div>

<p className="it">Este capítulo sirve como una introducción general al machine learning y R; Las primeras recetas introducen la forma de configurar el entorno R y el entorno de desarrollo integrado, RStudio. Después de configurar el entorno, la siguiente receta introduce la instalación y carga del paquete. Para comprender cómo se practica el análisis de datos con R, las cuatro recetas siguientes cubren la lectura / escritura de datos, la manipulación de datos, las estadísticas básicas y la visualización de datos utilizando R. La última receta del capítulo contiene fuentes de datos y recursos útiles.</p>

<p className="p">This chapter serves as an overall introduction to machine learning and R; the first few recipes introduce how to set up the R environment and integrated development environment, RStudio. After setting up the environment, the following recipe introduces package installation and loading. In order to understand how data analysis is practiced using R, the next four  recipes cover data read/write, data manipulation, basic statistics, and  data  visualization  using  R. The last recipe in the chapter lists useful data sources and resources.</p><h2 className="p">Downloading and installing R</h2>

<p className="it">Para usar R, primero debe instalarlo en su computadora. Esta receta proporciona instrucciones detalladas sobre cómo descargar e instalar R.</p>

<p className="p">To use R, you must first install it on your computer. This recipe gives detailed instructions on how to download and install R.</p>

<h3 className="p">Getting ready</h3>

<p className="it">Si eres nuevo en el idioma R, puedes encontrar una introducción detallada, el historial del idioma y la funcionalidad en el sitio web oficial (<a><code>http://www.r-project.org/</code></a>). Cuando esté listo para descargar e instalar R, acceda al siguiente enlace: <a><code>http://cran.r-project.org/</code></a>.</p>

<p className="p">If you are new to the R language, you can find a detailed introduction, language history, and functionality on the official website (<a><code>http://www.r-project.org/</code></a>). When you are ready to download and install R, please access the following link: <a><code>http://cran.r-project.org/</code></a>.</p><h3 className="p">How to do it...</h3>

<p className="it">Realice los siguientes pasos para descargar e instalar R para usuarios de Windows y Mac:</p>

<p className="p">Please perform the following steps to download and install R for Windows and Mac users:</p>

<p className="it">1- Vaya al sitio web de R CRAN, <a><code>http://www.r-project.org/</code></a>, y haga clic en el enlace R de descarga, es decir, <a><code>http://cran.r-project.org/mirrors.html</code></a>):</p>

<p className="p">1- Go to the R CRAN website, <a><code>http://www.r-project.org/</code></a>, and click on the download R link, that is, <a><code>http://cran.r-project.org/mirrors.html</code></a>):</p>

<div className="image"><a></a><img src="/static/002_003.png" width="100%" alt="Image"/></div>

<p className="it">2- Puede seleccionar la ubicación del espejo más cercana a usted:</p>

<p className="p">2- You may select the mirror location closest to you:</p>

<div className="image"><a></a><img src="/static/002_004.png" width="100%" alt="Image"/></div>

<p className="p">CRAN mirrors</p>

<p className="it">3- Seleccione el enlace de descarga correcto basado en su sistema operativo:</p>

<p className="p">3- Select the correct download link based on your operating system:</p>

<div className="image"><a></a><img src="/static/002_005.png" width="100%" alt="Image"/></div>

<div className="summary">Click on the download link based on your OS</div>

<p className="it">Como la instalación de R difiere para Windows y Mac, aquí se proporcionan los pasos necesarios para instalar R para cada OS.</p>

<p className="p">As the installation of R differs for Windows and Mac, the steps required to install R for each OS are provided here.</p>

<p className="it">Para usuarios de Windows:</p>

<p className="p">For Windows users:</p>

<p className="it">1- Haga clic en <strong>Descargar R para Windows</strong>, como se muestra en la siguiente captura de pantalla y, a continuación, haga clic en la base:</p>

<p className="p">1- Click on <strong>Download R for Windows</strong>, as shown in the following screenshot, and then click on base:</p>

<div className="image"><a></a><img src="/static/002_006.png" width="100%" alt="Image"/></div>

<p className="summary">Go to "Download R for Windows" and click "base"</p>

<p className="it">2- Haga clic en <strong>Download R 3.x.x for Windows</strong>:</p>

<p className="p">2- Click on <strong>Download R 3.x.x for Windows</strong>:</p>

<div className="image"><a></a><img src="/static/002_007.png" width="100%" alt="Image"/></div>
<p className="it">Haga clic en <strong>"Download R 3.x.x for Windows"</strong></p>

<p className="p">Click <strong>"Download R 3.x.x for Windows"</strong></p>

<p className="it">3- Se debe descargar el archivo de instalación. Una vez finalizada la descarga, puede hacer doble clic en el archivo de instalación e iniciar la instalación de R:</p>

<p className="p">3- The installation file should be downloaded. Once the download is finished, you can double-click on the installation file and begin installing R:</p>

<div className="image"><a></a><img src="/static/002_008.png" width="100%" alt="Image"/></div>

<p className="it">La instalación de Windows de R es bastante sencilla; La GUI de instalación puede indicarle cómo instalar el programa paso a paso (licencia pública, ubicación de destino, componentes seleccionados, opciones de inicio, carpeta del menú de inicio y tareas adicionales seleccionadas). Dejar todo</p>

<p className="p">The Windows installation of R is quite straightforward; the installation GUI may instruct you on how to install the program step by step (public license, destination location, select components, startup options, startup menu folder, and select additional tasks). Leave all</p>

<p className="it">Las opciones de instalación como la configuración predeterminada si no desea realizar ningún cambio.</p>

<p className="p">the installation options as the default settings if you do not want to make any changes.</p>

<p className="it">Después de completar la instalación con éxito, aparecerá un shorcut a la aplicación R en el menú Inicio, que abrirá la Consola R:</p>

<p className="p">After successfully completing the  installation, a shortcut to  the  R application will  appear in your Start menu, which will open the R Console:</p>

/* <div className="image"><a></a><img src="/static/002_009.png" width="100%" alt="Image"/></div> */
<div className="summary">The Windows R Console</div>

/* <p className="it">Para usuarios de Mac OS X:</p> */

/* <p className="p">For Mac OS X users:</p> */

/* <p className="it">Vaya a Descargar R para (Mac) OS X, como se muestra en esta captura de pantalla.</p> */

/* <p className="p">Go to Download R for (Mac) OS X, as shown in this screenshot.</p> */

/* <p className="it">Haga clic en la última versión (extensión de archivo .pkg) según la versión de Mac OS:</p> */

/* <p className="p">Click on the latest version (.pkg file extension) according to your Mac OS version:</p> */



/* <div className="image"><a></a><img src="/static/002_010.png" width="100%" alt="Image"/></div> */

/* <p className="it">Haga doble clic en el archivo de instalación descargado (extensión .pkg) y comience a instalar R. Deje todas las opciones de instalación como la configuración predeterminada si no desea realizar cambios:</p> */

/* <p className="p">Double-click on the downloaded installation file (.pkg extension) and begin to install R. Leave all the installation options as the default settings if you do not want to make any changes:</p> */

/* <div className="image"><a></a><img src="/static/002_011.png" width="100%" alt="Image"/></div> */

/* <p className="it">Siga las instrucciones en pantalla, Introducción, Léame, Licencia, Selección de destino,</p> */

/* <p className="p">Follow the onscreen instructions, Introduction, Read Me, License, Destination Select,</p> */


/* <p className="it">Tipo de instalación, Instalación, Resumen y haga clic en continuar para completar la instalación.</p> */

/* <p className="p">Installation Type, Installation, Summary, and click on continue to complete the installation.</p> */

/* <p className="it">Una vez instalado el archivo, puede usar la Búsqueda de Spotlight o ir a la carpeta de la aplicación para buscar R:</p> */

/* <p className="p">After the file is installed, you can use Spotlight Search or go to the application folder to find R:</p> */



/* <div className="image"><a></a><img src="/static/002_012.png" width="100%" alt="Image"/></div> */



/* <p className="it">Utilice "Búsqueda de Spotlight" para encontrar R</p> */

/* <p className="p">Use "Spotlight Search" to find R</p> */


/* <p className="it">Haga clic en R para abrir la consola R:</p> */

/* <p className="p">Click on R to open R Console:</p> */



/* <div className="image"><a></a><img src="/static/002_013.png" width="100%" alt="Image"/></div> */

/* <p className="it">Como alternativa a la descarga de un <code>.pkg</code>archivo Mac para instalar R, los usuarios de Mac también pueden instalar R con Homebrew:</p> */

/* <p className="p">As an alternative to downloading a Mac <code>.pkg</code> file to install R, Mac users can also install R using Homebrew:</p> */

/* <p className="it">Descargar XQuartz-2.XXdmg de <code>https://xquartz.macosforge.org/landing/</code>.</p> */

/* <p className="p">Download XQuartz-2.X.X.dmg from <code>https://xquartz.macosforge.org/landing/</code>.</p> */

/* <p className="it">Haga doble clic en el archivo .dmg para montarlo.</p> */

/* <p className="p">Double-click on the .dmg file to mount it.</p> */

/* <p className="it">Actualizar brew con la siguiente línea de comandos:</p> */

/* <p className="p">Update brew with the following command line:</p> */

/* <code>$ brew update</code> */

/* <p className="it">Clone el repositorio y enlace simbólico todas sus fórmulas a homebrew / science:</p> */

/* <p className="p">Clone the repository and symlink all its formulae to homebrew/science:</p> */

/* <code>$ brew tap homebrew/science</code> */

/* <p className="it">Instalar gfortran:</p> */

/* <p className="p">Install gfortran:</p> */


/* <code>$ brew install gfortran</code> */

/* <p className="it">Instalar R:</p> */

/* <p className="p">Install R:</p> */

/* <code>$ brew install R</code> */



/* <p className="it">Para los usuarios de Linux, hay binarios precompilados para Debian, Red Hat, SUSE y Ubuntu. Como alternativa, puede instalar R desde un código fuente. Además de descargar binarios precompilados, puede instalar R para Linux a través de un gestor de paquetes. Aquí están los pasos de instalación para CentOS y Ubuntu.</p> */

/* <p className="p">For Linux users, there are precompiled binaries for Debian, Red Hat, SUSE, and Ubuntu. Alternatively, you can install R from a source code. Besides downloading precompiled binaries, you can install R for Linux through a package manager. Here are the installation steps for CentOS and Ubuntu.</p> */

/* <p className="it">Descargando e instalando R en Ubuntu:</p> */

/* <p className="p">Downloading and installing R on Ubuntu:</p> */

/* <p className="it">Agregue la entrada al archivo /etc/apt/sources.list:</p> */

/* <p className="p">Add the entry to the /etc/apt/sources.list file:</p> */

/* <code>$ sudo sh - c "echo 'deb http:// cran.stat.ucla.edu/bin/linux/ubuntu precise/' >> /etc/apt/sources.list"</code> */

/* <p className="it">A continuación, actualice el repositorio:</p> */

/* <p className="p">Then, update the repository:</p> */

/* <code>$ sudo apt- get update</code> */

/* <p className="it">Instale R con el siguiente comando:</p> */

/* <p className="p">Install R with the following command:</p> */

/* <code>$ sudo apt- get install r- base</code> */

/* <p className="it">Inicie R en la línea de comandos:</p> */

/* <p className="p">Start R in the command line:</p> */

/* <code>$ R</code> */



/* <p className="it">Descarga e instalación de R en CentOS 5:</p>  */

/* <p className="p">Downloading and installing R on CentOS 5:</p>  */

/* <p className="it">Obtener rpm CentOS5 RHEL Depósito EPEL de CentOS5:</p>  */

/* <p className="p">Get rpm CentOS5 RHEL EPEL repository of CentOS5:</p>  */

/* <code>$ wget http://dl.fedoraproject.org/pub/epel/5/x86_64/epel- release- 5- 4.noarch.rpm</code>  */

/* <p className="it">Instalar CentOS5 Repositorio RHEL EPEL:</p>  */

/* <p className="p">Install CentOS5 RHEL EPEL repository:</p>  */

/* <code>$ sudo rpm - Uvh epel- release- 5- 4.noarch.rpm</code>  */

/* <p className="it">Actualizar los paquetes instalados:</p>  */

/* <p className="p">Update the installed packages:</p>  */

/* <code>$ sudo yum update</code>  */

/* <p className="it">Instale R a través del repositorio:</p>  */

/* <p className="p">Install R through the repository:</p>  */

/* <code>$ sudo yum install R</code>  */

/* <p className="it">Inicie R en la línea de comandos:</p>  */

/* <p className="p">Start R in the command line:</p>  */

/* <code>$ R</code>  */


/* <p className="it">Descargar e instalar R en CentOS 6:</p>  */

/* <p className="p">Downloading and installing R on CentOS 6:</p>  */

/* <p className="it">Obtener rpm CentOS5 RHEL EPEL repositorio de CentOS6:</p>  */

/* <p className="p">Get rpm CentOS5 RHEL EPEL repository of CentOS6:</p>  */

/* <code>$ wget http://dl.fedoraproject.org/pub/epel/6/x86_64/epel- release- 6- 8.noarch.rpm</code>  */

/* <p className="it">Instale el depósito CentOS5 RHEL EPEL:</p>  */

/* <p className="p">Install the CentOS5 RHEL EPEL repository:</p>  */

/* <code>$ sudo rpm - Uvh epel- release- 6- 8.noarch.rpm</code>  */

/* <p className="it">Actualizar los paquetes instalados:</p>  */

/* <p className="p">Update the installed packages:</p>  */

/* <code>$ sudo yum update</code>  */

/* <p className="it">Instale R a través del repositorio:</p>  */

/* <p className="p">Install R through the repository:</p>  */

/* <code>$ sudo yum install R</code>  */

/* <p className="it">Inicie R en la línea de comandos:</p>  */

/* <p className="p">Start R in the command line:</p>  */

/* <code>$ R</code> */

/* <h3 className="p">How it works...</h3>  */

/* <p className="it">CRAN proporciona binarios precompilados para Linux, Mac OS X y Windows. Para los usuarios de Mac y Windows, los procedimientos de instalación son sencillos. Por lo general, puede seguir las instrucciones en pantalla para completar la instalación. Para los usuarios de Linux, puede utilizar el gestor de paquetes proporcionado para cada plataforma para instalar R o crear R desde el código fuente.</p>  */

/* <p className="p">CRAN provides precompiled binaries for Linux, Mac OS X, and Windows. For Mac and Windows users, the installation procedures are straightforward. You can generally follow onscreen instructions to complete the installation. For Linux users, you can use the package manager provided for each platform to install R or build R from the source code.</p> */

/*  <h3 className="p">See also</h3>  */

/* <p className="it"> Para aquellos que planean construir R desde el código fuente, consulte R Instalación y Administración (http://cran.r-project.org/doc/manuals/R-admin.html), que ilustra cómo instalar R en una variedad De plataformas.</p>  */

/* <p className="p"> For those planning to build R from the source code, refer to R Installation and Administration (http://cran.r-project.org/doc/manuals/R-admin.html), which illustrates how to install R on a variety of platforms.</p> */


/*  <h2 className="p">Downloading and installing RStudio</h2>  */


/* <p className="it">Para escribir un script R, se puede usar R Console, R commander, o cualquier editor de texto (EMACS, VIM o sublime). Sin embargo, la asistencia de RStudio, un entorno de desarrollo integrado (IDE) para R, puede facilitar el desarrollo.</p>  */

/* <p className="p">To  write an R script, one can use R Console, R commander, or any text editor  (EMACS, VIM, or sublime). However, the assistance of RStudio, an integrated development  environment (IDE) for R, can make development a lot easier.</p>  */


/* <p className="it">RStudio ofrece completas instalaciones para el desarrollo de software. Las funciones integradas, como el resaltado de sintaxis, la finalización de código y la sangría inteligente, maximizan la productividad. Para que la programación R sea más manejable, RStudio también integra la interfaz principal en un diseño de cuatro paneles. Incluye una consola R interactiva, un editor de código fuente con pestañas, un panel para los objetos / historial activos en la actualidad y un panel con pestañas para la ventana de ventana del explorador de archivos / ventana de trazado / paquete. Además, RStudio es de código abierto y está disponible para muchas plataformas, como Windows, Mac OS X y Linux. Esta receta muestra cómo descargar e instalar RStudio.</p>  */

/* <p className="p">RStudio provides comprehensive facilities for software development. Built-in features such as syntax highlighting, code completion, and smart indentation help maximize productivity. To make R programming more manageable, RStudio also integrates the main interface into a four-panel layout. It includes an interactive  R Console, a  tabbed  source code  editor,  a  panel for the currently active objects/history, and a tabbed panel for the file browser/plot window/package install window/R help window. Moreover, RStudio is open source and is available for many platforms, such as Windows, Mac  OS  X,  and  Linux. This  recipe  shows how to download and install RStudio.</p> */

/* <h3 className="p">Getting ready</h3>  */



/* <p className="it">RStudio requires a working R installation; when RStudio loads, it must be able to locate a version of R. You must therefore have completed the previous recipe with R installed on your OS before proceeding to install RStudio.</p>  */

/* <p className="p">RStudio requires a working R installation; when RStudio loads, it must be able to locate a version of R. You must therefore have completed the previous recipe with R installed on your OS before proceeding to install RStudio.</p> */

/* <h3 className="p">How to do it...</h3>  */



/* <p className="it">Perform the following steps to download and install RStudio for Windows and Mac users:</p>  */

/* <p className="p">Perform the following steps to download and install RStudio for Windows and Mac users:</p>  */

/* <p className="it">Access RStudio's official site by using the following URL: http://www.rstudio.com/products/RStudio/.</p>  */

/* <p className="p">Access RStudio's official site by using the following URL: http://www.rstudio.com/products/RStudio/.</p> */

/* <div className="image"><a></a><img src="/static/002_014.png" width="100%" alt="Image"/></div>  */




/* <p className="it">For a desktop version installation, click on Download RStudio Desktop (http://www.rstudio.com/products/rstudio/download/) and choose the RStudio recommended for your system. Download the relevant packages:</p>  */

/* <p className="p">For a desktop version installation, click on Download RStudio Desktop (http://www.rstudio.com/products/rstudio/download/) and choose the RStudio recommended for your system. Download the relevant packages:</p>  */



/* <div className="image"><a></a><img src="/static/002_015.png" width="100%" alt="Image"/></div>  */

/* <p className="it">Install RStudio by double-clicking on the downloaded packages. For Windows users, follow the onscreen instruction to install the application:</p>  */

/* <p className="p">Install RStudio by double-clicking on the downloaded packages. For Windows users, follow the onscreen instruction to install the application:</p>  */

/* <div className="image"><a></a><img src="/static/002_016.png" width="100%" alt="Image"/></div> */

/* <p className="it">Para usuarios de Mac, simplemente arrastre el ícono de RStudio a la carpeta Aplicaciones:</p>  */

/* <p className="p">For Mac users, simply drag the RStudio icon to the Applications folder:</p>  */

/* <div className="image"><a></a><img src="/static/002_017.png" width="100%" alt="Image"/></div>  */

/* <p className="it">Iniciar RStudio:</p>  */

/* <p className="p">Start RStudio:</p>  */


/* <div className="image"><a></a><img src="/static/002_018.png" width="100%" alt="Image"/></div>  */


/* <div className="summary">The RStudio console</div>  */

/* <p className="it">Realice los siguientes pasos para descargar e instalar RStudio para usuarios de Ubuntu / Debian y RedHat / Centos:</p>  */

/* <p className="p">Perform the following steps for downloading and installing RStudio for Ubuntu/Debian and RedHat/Centos users:</p>  */

/* <p className="it">Para Debian (6 +) / Ubuntu (10.04+) de 32 bits:</p>  */

/* <p className="p">For Debian(6+)/Ubuntu(10.04+) 32-bit:</p>  */

/* <code>$ wget http://download1.rstudio.org/rstudio- 0.98.1091- i386.deb</code>  */

/* <code>$ sudo gdebi rstudio- 0.98. 1091- i386.deb</code>  */


/* <p className="it">Para Debian (6 +) / Ubuntu (10.04+) 64-bit:</p>  */

/* <p className="p">For Debian(6+)/Ubuntu(10.04+) 64-bit:</p>  */

/* <code>$ wget http://download1.rstudio.org/rstudio- 0.98. 1091- amd64.deb</code>  */

/* <code>$ sudo gdebi rstudio- 0.98. 1091- amd64.deb</code>  */


/* <p className="it">Para RedHat / CentOS (5,4+) 32 bits:</p>  */

/* <p className="p">For RedHat/CentOS(5,4+) 32 bit:</p>  */

/* <code>$ wget http://download1.rstudio.org/rstudio- 0.98. 1091- i686.rpm</code>  */

/* <code>$ sudo yum install -- nogpgcheck rstudio- 0.98. 1091- i686.rpm</code>  */


/* <p className="it">Para RedHat / CentOS (5,4+) 64 bits:</p>  */

/* <p className="p">For RedHat/CentOS(5,4+) 64 bit:</p>  */

/* <code>$ wget http://download1.rstudio.org/rstudio- 0.98. 1091- x86_64.rpm</code>  */

/* <code>$ sudo yum install -- nogpgcheck rstudio- 0.98. 1091- x86_64.rpm</code><h3 className="p">How it works</h3>  */
/* <p className="it">El programa RStudio se puede ejecutar en el escritorio o mediante un navegador web. La versión de escritorio está disponible para Windows, Mac OS X y plataformas Linux con operaciones similares en todas las plataformas. Para los usuarios de Windows y Mac, después de descargar el paquete precompilado de RStudio, siga las instrucciones en pantalla, mostradas en los pasos anteriores, para completar la instalación. Los usuarios de Linux pueden usar el sistema de administración de paquetes proporcionado para la instalación.</p>  */

/* <p className="p">The RStudio program can be run on the desktop or through a web browser. The desktop version is available for Windows, Mac OS X, and Linux platforms with similar operations across all platforms. For Windows and Mac users, after downloading the precompiled package of RStudio, follow the onscreen instructions, shown in the preceding steps, to complete the installation. Linux users may use the package management system provided for installation.</p><h3 className="p">See also</h3>  */

/* <p className="it">Además de la versión de escritorio, los usuarios pueden instalar una versión de servidor para proporcionar acceso a varios usuarios. La versión del servidor proporciona una URL a la que los usuarios pueden acceder para usar los recursos de RStudio. Para instalar RStudio, consulte el siguiente enlace: http://www.rstudio.com/ide/download/server.html. Esta página proporciona instrucciones de instalación para las siguientes distribuciones de Linux: Debian (6+), Ubuntu (10.04+), RedHat y CentOS (5.4+).</p>  */

/* <p className="p"> In addition to the desktop version, users may install a server version to provide access to multiple users. The server version provides a URL that users can  access  to  use  the RStudio resources. To install RStudio, please refer to the following link: http://www.rstudio.com/ide/download/server.html. This page provides installation instructions for the following Linux distributions: Debian (6+), Ubuntu (10.04+), RedHat, and CentOS (5.4+).</p>  */
/* <p className="it"> Para otras distribuciones de Linux, puede crear RStudio a partir del código fuente.</p>  */
/* <p className="p"> For other Linux distributions, you can build RStudio from the source code.</p>  */


<h2 className="p">Installing and loading packages</h2>

<p className="it">Después de instalar correctamente R, los usuarios pueden descargar, instalar y actualizar paquetes desde los repositorios. Como R permite a los usuarios crear sus propios paquetes, se proporcionan repositorios oficiales y no oficiales para administrar estos paquetes creados por los usuarios. CRAN es el repositorio oficial de paquetes de R. Actualmente, el repositorio del paquete CRAN cuenta con 6.379 paquetes disponibles (a partir del 27/02/2015). A través del uso de los paquetes proporcionados en CRAN, los usuarios pueden extender la funcionalidad de R al machine learning, estadísticas y propósitos relacionados. CRAN es una red de FTP y servidores web en todo el mundo que almacenan versiones idénticas y actualizadas de código y documentación para R. Puede seleccionar el espejo CRAN más cercano a su ubicación para descargar paquetes.</p>

<p className="p">After successfully installing R, users can download, install, and update packages from the repositories. As R allows users to create their own packages, official and non-official repositories are provided to manage these user-created packages. CRAN is the official R package repository. Currently, the CRAN package  repository  features  6,379  available packages (as of 02/27/2015). Through the use of the packages provided on CRAN, users may extend the functionality of R to machine learning, statistics, and related purposes. CRAN is a network of FTP and web servers around the world that store identical, up-to-date versions of code and documentation for R. You may select the closest CRAN mirror to your location to download packages.</p>

<h3 className="p">Getting ready</h3>

<p className="it">Inicie una sesión R en el host del equipo.</p>

<p className="p">Start an R session on your host computer.</p>

<h3 className="p">How to do it...</h3>
<p className="it">Realice los pasos siguientes para instalar y cargar paquetes R:</p>
<p className="p">Perform the following steps to install and load R packages:</p>
<p className="it">Para cargar una lista de paquetes instalados:</p>
<p className="p">To load a list of installed packages:</p>
<code>&#62; library()</code>
<p className="it">Configuración del espejo CRAN predeterminado:</p>
<p className="p">Setting the default CRAN mirror:</p>
<code>&#62; chooseCRANmirror()</code>

<p className="it">R devolverá una lista de CRAN mirrors y, a continuación, solicitará al usuario que escriba un ID de espejo para seleccionarlo o que ingrese cero para salir:</p>

<p className="p">R will return a list of CRAN mirrors, and then ask the user to  either  type a mirror ID to  select it, or enter zero to exit:</p>

<p className="it">Instale un paquete de CRAN; Tomar el paquete <code>e1071</code> como ejemplo:</p>

<p className="p">Install a package from CRAN; take package <code>e1071</code> as an example:</p>

<code>&#62; install.packages("e1071")</code>

<p className="it">Actualizar un paquete de CRAN; Tomar el paquete e1071 como ejemplo:</p>

<p className="p">Update a package from CRAN; take package e1071 as an example:</p>

<code>&#62; update.packages("e1071")</code>

<p className="it">Cargue el paquete en el paquete:</p>

<p className="p">Load the package the package:</p>

<code>&#62; library(e1071)</code>

<p className="it">Si desea ver la documentación del paquete, puede utilizar la función <code>help</code>:</p>

<p className="p">If you would like to view the documentation of the package, you can use the <code>help</code> function:</p>

<code>&#62; help(package ="e1071")</code>

<p className="it">Si desea ver la documentación de la función, puede utilizar la función <code>help</code>:</p>

<p className="p">If you would like to view the documentation of the function, you can use the <code>help</code> function:</p>

<code>&#62; help(svm, e1071)</code>

<p className="it">Como alternativa, puede utilizar el shorcut de ayuda, <code>?</code>, Para ver el documento de ayuda para esta función:</p>

<p className="p">Alternatively, you can use the help shortcut, <code>?</code>, to view the help document for this function:</p>

<code>&#62; ?e1071::svm</code>

<p className="it">Si la función no proporciona ninguna documentación, es posible que desee buscar en la documentación suministrada una palabra clave determinada. Por ejemplo, si desea buscar documentación relacionada con <code>svm</code>:</p>

<p className="p">If the function does not provide any documentation, you may want to search the supplied documentation for  a given keyword. For  example, if you wish to  search for documentation related to <code>svm</code>:</p>

<code>&#62; help.search("svm")</code>

<p className="it">Como alternativa, puede utilizar <code>??</code> como el shortcut para <code>help.search</code>:</p>

<p className="p">Alternatively, you can use <code>??</code> as the shortcut for <code>help.search</code>:</p>

<code>&#62; ??svm</code>

<p className="it">Para ver el argumento tomado para la función, simplemente use la función <code>args</code>. Por ejemplo, si desea conocer el argumento tomado para la función lm:</p>

<p className="p">To view the argument taken for  the function, simply use the <code>args</code> function. For  example, if you would like to know the argument taken for the lm function:</p>

<code>&#62; args(lm)</code>

<p className="it">Algunos paquetes proveerán ejemplos y demostraciones; Puede usar ejemplo o demo para ver un ejemplo o una demostración. Por ejemplo, puede ver un ejemplo del paquete <code>lm</code> y una demo del paquete gráfico escribiendo los siguientes comandos:</p>

<p className="p">Some packages will provide examples and demos; you can use example or demo to view an example or demo. For example, one can view an example of the <code>lm</code> package and a demo of the graphics package by typing the following commands:</p>

<pre><code>&#62; example(lm)<br></br>
&#62; demo(graphics)</code></pre>

<p className="it">Para ver todas las demos disponibles, puede usar la función de demostración para listar todas ellas:</p>

<p className="p">To view all the available demos, you may use the demo function to list all of them:</p>
<pre>
<code>&#62; demo()</code></pre>

<h3 className="p">How it works</h3>

<p className="it">Esta receta presenta primero cómo ver los paquetes cargados, instalar paquetes de CRAN y cargar nuevos paquetes. Antes de instalar los paquetes, aquellos de ustedes que estén interesados ​​en la lista del paquete CRAN pueden consultar <code>http://cran.r- project.org/web/packages/available_packages_by_name.html</code>.</p>

<p className="p">This recipe first introduces how to view loaded packages, install packages from CRAN, and load new packages. Before installing packages, those of you who are interested in the listing of the CRAN package can refer to <code>http://cran.r- project.org/web/packages/available_packages_by_name.html</code>.</p>

<p className="it">Cuando se instala un paquete, también se proporciona documentación relacionada con el paquete. Por lo tanto, puede ver la documentación o las páginas de ayuda relacionadas de paquetes y funciones instalados. Además, las demostraciones y los ejemplos se proporcionan mediante paquetes que pueden ayudar a los usuarios a comprender la capacidad del paquete instalado.</p>

<p className="p">When a package is installed, documentation related to the package is also provided. You are, therefore, able to view the documentation or the related help pages of installed packages and functions. Additionally, demos and examples are provided by packages that can help users understand the capability of the installed package.</p>

<h3 className="p">See also</h3>

<p className="it"> Además de instalar paquetes de CRAN, hay otros repositorios de paquetes R, incluyendo Crantastic, un sitio de comunidad para calificación y revisión de paquetes CRAN, y R-Forge, una plataforma central para el desarrollo colaborativo de paquetes R. Además de esto, Bioconductor proporciona paquetes R para el análisis de datos genómicos.</p>

<p className="p"> Besides installing packages from CRAN, there  are  other  R  package  repositories, including Crantastic, a community site for rating and reviewing CRAN packages, and R- Forge, a central platform for the collaborative development of R packages. In addition to this, Bioconductor provides R packages for the analysis of genomic data.</p>

<p className="it"> Si desea encontrar funciones y paquetes relevantes, visite la lista de vistas de tareas en <code>http://cran.r-project.org/web/views/</code>, o busque palabras clave en <code>http://rseek.org</code>.</p>

<p className="p"> If  you would like to  find relevant functions and packages, please visit the list of task  views at <code>http://cran.r-project.org/web/views/</code>, or search for keywords at <code>http://rseek.org</code>.</p>

<h2 className="p">Reading and writing data</h2>

<p className="it">Antes de comenzar a explorar datos, debe cargar los datos en la sesión R. Esta receta introducirá métodos para cargar datos ya sea de un archivo en la memoria o utilizar los datos predefinidos dentro de R.</p>

<p className="p">Before starting to explore data, you must load the data into the R session. This recipe will introduce methods to load data either from a file into the memory or use the predefined data within R.</p>

<h3 className="p">Getting ready</h3>

<p className="it">Primero, inicie una sesión R en su máquina. Como esta receta implica pasos hacia el archivo IO, si el usuario no especifica la ruta completa, la actividad de lectura y escritura tendrá lugar en el directorio de trabajo actual.</p>

<p className="p">First, start an R session on your machine. As this recipe involves steps toward the file IO, if the user does not specify the full path, read and write activity will take place in the current working directory.</p>


<p className="it">Simplemente puede escribir getwd () en la sesión R para obtener la ubicación actual del directorio de trabajo. Sin embargo, si desea cambiar el directorio de trabajo actual, puede usar setwd ("<code>&#60;path&#62;</code>"), donde <code>&#60;path&#62;</code>, Para especificar el directorio de trabajo.</p>

<p className="p">You can simply type getwd() in the R session to obtain the current working directory location. However, if you would like to change the current working directory, you can use setwd("<code>&#60;path&#62;</code>"), where <code>&#60;path&#62;</code> can be replaced as your desired path, to specify the working directory.</p>


<h3 className="p">How to do it...</h3>

<p className="it">Realice los siguientes pasos para leer y escribir datos con R:</p>

<p className="p">Perform the following steps to read and write data with R:</p>

<p className="it">1- Para ver los conjuntos de datos integrados de R, escriba el siguiente comando:</p>

<p className="p">1- To view the built-in datasets of R, type the following command:</p>

<pre><code>&#62; data()</code></pre>

<p className="it">2- R devolverá una lista de conjuntos de datos en un paquete de dataset y la lista comprenderá el nombre y la descripción de cada conjunto de datos.</p>

<p className="p">2- R will return a list of datasets in a dataset package, and the list comprises the name and description of each dataset.</p>

<p className="it">3- Para cargar el iris del conjunto de datos en una sesión R, escriba el siguiente comando:</p>

<p className="p">3- To load the dataset iris into an R session, type the following command:</p>

<pre><code>&#62; data(iris)</code></pre>

<p className="it">4- El iris de conjunto de datos se carga ahora en el formato de trama de datos, que es una estructura de datos común en R para almacenar una tabla de datos.</p>

<p className="p">4- The dataset iris is now loaded into the data frame format, which is a common data structure in R to store a data table.</p>

<p className="it">5- Para ver el tipo de datos del iris, simplemente use la función class:</p>

<p className="p">5- To view the data type of iris, simply use the class function:</p>
<pre><code>
&#62; class(iris)<br></br>
[1] "data.frame"</code></pre>

<p className="it">6- La impresión de la consola <code>data.frame</code> muestra que el conjunto de datos del iris está en la estructura del marco de datos.</p>

<p className="p">6- The <code>data.frame</code> console print shows that the iris dataset is in the structure of data frame.</p>

<p className="it">7- Utilice la función de guardar para almacenar un objeto en un archivo. Por ejemplo, para guardar los datos cargados del iris en <code>myData.RData</code>, utilice el siguiente comando:</p>

<p className="p">7- Use the save function to store an object in a file. For example, to save the loaded iris data into <code>myData.RData</code>, use the following command:</p>

<pre><code>
&#62; save(iris, file="myData.RData")
</code></pre>

<p className="it">8- Utilice la función de carga para leer un objeto guardado en una sesión R. Por ejemplo, para cargar los datos del iris desde <code>myData.RData</code>, utilice el siguiente comando:</p>

<p className="p">8- Use the load function to read a saved object into an R session. For example, to load iris data from <code>myData.RData</code>, use the following command:</p>

<pre><code>
&#62; load("myData.RData")
</code></pre>

<p className="it">9- Además de utilizar conjuntos de datos integrados, R también proporciona una función para importar datos de texto en un marco de datos. Por ejemplo, la función <code>read.table</code> puede formatear un texto dado en un marco de datos:</p>

<p className="p">9- In addition to using built-in datasets, R also provides a function to import data from text into a data frame. For example, the <code>read.table</code> function can format a given text into  a data frame:</p>

<pre><code>
&#62; test.data = read.table(header = TRUE, text = "<br></br>
+ a b<br></br>
+ 1 2<br></br>
+ 3 4<br></br>
+ ")
</code></pre>
<p className="it">10- También puede utilizar <code>row.names</code> y <code>col.names</code> para especificar los nombres de columnas y filas:</p>

<p className="p">10- You can also use <code>row.names</code> and <code>col.names</code> to specify the names of columns and rows:</p>

<pre><code>
&#62; test.data = read.table(text = "<br></br>
+ 1 2<br></br>
+ 3 4",<br></br>
+ col.names=c("a","b"),<br></br>
+ row.names = c("first","second"))
</code></pre>

<p className="it">11- Ver la clase de la variable test.data:</p>

<p className="p">11- View the class of the test.data variable:</p>

<pre><code>
&#62; class(test.data)<br></br>
data.frame"
</code></pre>

<p className="it">12- La función de clase muestra que la variable <code>test.data</code> contiene un marco de datos.</p>
<p className="p">12- The class function shows that the <code>test.data</code> variable contains a data frame.</p>
<p className="it">13- Además de importar datos mediante la función <code>read.table</code>, puede utilizar la Write.table para exportar datos a un archivo de texto:</p>

<p className="p">13- In addition to importing data by using the <code>read.table</code> function, you can use the <code>write.table</code> function to export data to a text file:</p>
<pre><code>
&#62; write.table(test.data, file = "test.txt" , sep = " ")
</code></pre>
<p className="it">14- La función write.table escribirá el contenido de test.data en test.txt (el camino escrito se puede encontrar escribiendo <code>getwd()</code>), con un delimitador de separación como espacio en blanco.</p>

<p className="p">14- The write.table function will write the content of test.data into test.txt (the written path can be found by typing <code>getwd()</code>), with a separation delimiter as white space.</p>

<p className="it">15- Similar a <code>write.table</code>, write.csv también puede exportar datos a un archivo. Sin embargo, write.csv</p>

<p className="p">15- Similar to <code>write.table</code>, write.csv can also export data to a file. However, write.csv</p>

<p className="it">Utiliza una coma como el delimitador predeterminado:</p>

<p className="p">uses a comma as the default delimiter:</p>

<pre><code>
&#62; write.csv(test.data, file = "test.csv")
</code></pre>

<p className="it">16- Con la función read.csv, el archivo csv se puede importar como un marco de datos. Sin embargo, el último ejemplo escribe los nombres de columna y fila del marco de datos en el archivo test.csv. Por lo tanto, especificar encabezado a TRUE y nombres de fila como la primera columna dentro de la función puede garantizar que el marco de datos de lectura no tratará el encabezado y la primera columna como valores:</p>

<p className="p">16- With the read.csv function, the csv file can be imported as a data frame. However, the last example writes column and row names of the data frame to the test.csv file. Therefore, specifying header to TRUE and row names as the first column within the function can ensure the read data frame will not treat the header and the first column as values:</p>

<pre><code>
&#62; csv.data = read.csv("test.csv", header = TRUE, row.names=1)<br></br>
&#62; head(csv.data)<br></br>
a b<br></br>
1 1 2<br></br>
2 3 4
</code></pre>

<h3 className="p">How it works</h3>

<p className="it">Generalmente, los datos para la recopilación pueden estar en varios archivos y formatos diferentes. Para intercambiar datos entre archivos y <code>RData</code>, R proporciona muchas funciones integradas, como <code>save</code>, <code>load</code>, <code>read.csv</code>, <code>read.table</code>, <code>write.csv</code> y <code>write.table</code>.</p>

<p className="p">Generally, data for collection may be in multiple files and different formats. To exchange data between files and <code>RData</code>, R provides many <code>built-in</code> functions, such as <code>save</code>, <code>load</code>, <code>read.csv</code>, <code>read.table</code>, <code>write.csv</code>, and <code>write.table</code>.</p>

<p className="it">En este ejemplo se muestra cómo cargar el iris de dataset incorporado en una sesión R. El conjunto de datos del iris es el conjunto de datos más famoso y comúnmente utilizado en el campo del machine learning. Aquí, utilizamos el conjunto de datos del iris como ejemplo. La receta muestra cómo guardar RData y cargarla con la guardar y cargar funciones. Además, el ejemplo explica cómo utilizar <code>read.table</code>, <code>write.table</code>, <code>read.csv</code> y <code>write.csv</code> para intercambiar datos de archivos en un marco de datos. El uso de la función <code>R IO</code> para leer y escribir datos es muy importante ya que la mayoría de las fuentes de datos son externas. Por lo tanto, debe utilizar estas funciones para cargar datos en una sesión R.</p>

<p className="p">This example first demonstrates how to load the built-in dataset iris into an R session. The iris dataset is the most famous and commonly used dataset in the field of machine learning. Here, we use the iris dataset as an example. The recipe shows how to save RData and load it with the save and load functions. Furthermore, the example explains how to use <code>read.table</code>, <code>write.table</code>, <code>read.csv</code> and <code>write.csv</code> to exchange data from files to a data frame. The use of the <code>R IO</code> function to read and write data is very important as most of the data sources are external. Therefore, you have to use these functions to load data into an R session.</p>

<h3 className="p">See also</h3>

<p className="it">Para las funciones <code>load</code>, <code>read.table</code> y <code>read.csv</code>, el archivo a leer también puede ser una URL completa (para las URL soportadas, use url para obtener más información).</p>

<p className="p">For the <code>load</code>, <code>read.table</code> and <code>read.csv</code> functions, the file to be read can also be a complete URL (for supported URLs, use ?url for more information).</p>

<p className="it">En algunas ocasiones, los datos pueden estar en un archivo de Excel en lugar de un archivo de texto plano. El paquete <code>WriteXLS</code> permite escribir un objeto en un archivo de Excel con una variable dada en el primer argumento y el archivo que se escribirá en el segundo argumento:</p>

<p className="p">On some occasions, data may be in an Excel file instead of a flat text file. The <code>WriteXLS</code> package allows writing an object into an Excel file with a given variable in the first argument and the file to be written in the second argument:</p>

<p className="it">Instale el paquete <code>WriteXLS</code>:</p>

<p className="p">Install the <code>WriteXLS</code> package:</p>

<pre><code>&#62; install.packages("WriteXLS")</code></pre>

<p className="it">Cargue el paquete WriteXLS:</p>

<p className="p">Load the WriteXLS package:</p>

<pre><code>&#62; library("WriteXLS")</code></pre>

<p className="it">Utilice la función WriteXLS para escribir el iris de marco de datos en un archivo llamado <code>iris.xls</code>:</p>

<p className="p">Use the WriteXLS function to write the data frame iris into a file named <code>iris.xls</code>:</p>

<pre><code>&#62; WriteXLS("iris", ExcelFileName="iris.xls")</code></pre>

<h2 className="p">Using R to manipulate data</h2>

<p className="it">Esta receta discutirá cómo utilizar las funciones incorporadas de R para manipular datos. Dado que la manipulación de datos es la parte que más tiempo consume de la mayoría de los procedimientos de análisis, debe obtener conocimientos sobre cómo aplicar estas funciones a los datos.</p>

<p className="p">This recipe will discuss how to use the built-in R functions to manipulate data. As data manipulation is the most time consuming part of most analysis procedures, you should gain knowledge of how to apply these functions on data.</p><h3 className="p">Getting ready</h3>

<p className="it">Asegúrese de haber completado las recetas anteriores instalando R en su sistema operativo.</p>

<p className="p">Ensure you have completed the previous recipes by installing R on your operating system.</p>

<h3 className="p">How to do it...</h3>

<p className="it">Realice los siguientes pasos para manipular los datos con R. Subconjunto los datos utilizando la notación de pulsera:</p>

<p className="p">Perform the following steps to manipulate the data with R. Subset the data using the bracelet notation:</p>

<p className="it">Cargue el iris del conjunto de datos en la sesión R:</p>

<p className="p">Load the dataset iris into the R session:</p>

<pre><code> data(iris)</code></pre>

<p className="it">Para seleccionar valores, puede utilizar una notación de paréntesis que designa los índices del conjunto de datos. El primer índice es para las filas y el segundo para las columnas:</p>

<p className="p">To select values, you may use a bracket notation that designates the indices of the dataset. The first index is for the rows and the second for the columns:</p>

<pre><code> iris[1,"Sepal.Length"]<br></br>
[1] 5.1</code></pre>

<p className="it">También puede seleccionar varias columnas utilizando <code>c()</code>:</p>

<p className="p">You can also select multiple columns using <code>c()</code>:</p>

<pre><code>

&#62; Sepal.iris = iris[, c("Sepal.Length", "Sepal.Width")]
</code></pre>

<p className="it">You can then use <code>str()</code> to summarize and display the internal structure of <code>Sepal.iris</code>:</p>

<p className="p">You can then use <code>str()</code> to summarize and display the internal structure of <code>Sepal.iris</code>:</p>

<pre><code>
str(Sepal.iris)<br></br>
'data.frame':	150 obs. of	2 variables:<br></br>
$ Sepal.Length: num	5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...<br></br>
$ Sepal.Width : num	3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ..
</code></pre>

<p className="it">To subset data with the rows of given indices, you can specify the indices at the first index with the bracket notation. In this example, we show you how to subset data with the top five records with the Sepal.Length column and the Sepal.Width selected:</p>

<p className="p">To subset data with the rows of given indices, you can specify the indices at the first index with the bracket notation. In this example, we show you how to subset data with the top five records with the <code>Sepal.Length</code> column and the <code>Sepal.Width</code> selected:</p>

<pre><code>
&#62; Five.Sepal.iris = iris[1:5, c("Sepal.Length", "Sepal.Width")]<br></br>
&#62; str(Five.Sepal.iris)
</code></pre>

<p className="it">'data.frame':	5 obs. of	2 variables:</p>

<p className="p">'data.frame':	5 obs. of	2 variables:</p>

<pre><code>
$ Sepal.Length: num	5.1 4.9 4.7 4.6 5<br></br>
$ Sepal.Width : num	3.5 3 3.2 3.1 3.6
</code></pre>

<p className="it">It is also possible to set conditions to filter the data. For example, to filter  returned records containing the setosa data with all five variables. In the following example, the first index specifies the returning criteria, and the second index specifies the range of indices of the variable returned:</p>

<p className="p">It is also possible to set conditions to filter the data. For example, to filter  returned records containing the setosa data with all five variables. In the following example, the first index specifies the returning criteria, and the second index specifies the range of indices of the variable returned:</p>

<pre><code>
&#62; setosa.data = iris[iris$Species=="setosa",1:5]<br></br>
&#62; str(setosa.data)<br></br>
</code></pre>
<p className="it">'data.frame':	50 obs. of	5 variables:</p>

<p className="p">'data.frame':	50 obs. of	5 variables:</p>
<pre><code>
&#62;$ Sepal.Length: num	5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...<br></br>
&#62;$ Sepal.Width : num	3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...<br></br>
&#62;$ Petal.Length: num	1.4 1.4 1.3 1.5 1.4 1.7 1.4 1.5 1.4 1.5 ...<br></br>
&#62;$ Petal.Width : num	0.2 0.2 0.2 0.2 0.2 0.4 0.3 0.2 0.2 0.1 ...<br></br>
&#62;$ Species	: Factor w/ 3 levels "setosa","versicolor",..: 1 1 1 1 1 1<br></br>
1 1 1 1 ...<br></br>
</code></pre>


<p className="it">Alternatively, the which function returns the indexes of satisfied data. The following example returns indices of the iris data containing species equal to setosa:</p>

<p className="p">Alternatively, the which function returns the indexes of satisfied data. The following example returns indices of the iris data containing species equal to setosa:</p>

<pre><code>
&#62; which(iris$Species=="setosa")<br></br>
[1]	1	2	3	4	5	6	7	8	9 10 11 12 13 14 15 16 17 18<br></br>
[19]  19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36<br></br>
[37] 37 38 39 40 41 42 43 44 45 46 47 48 49 50<br></br>
</code></pre>

<p className="it">The indices returned by the operation can then be applied as the index to select the iris containing the setosa species. The following example returns the setosa with all five variables:</p>

<p className="p">The indices returned by the operation can then be applied as the index to select the iris containing the setosa species. The following example returns the setosa with all five variables:</p>
<pre><code>
&#62; setosa.data = iris[which(iris$Species=="setosa"),1:5]<br></br>
&#62; str(setosa.data)<br></br>
&#62; str(setosa.data)
</code></pre>

<p className="it">'data.frame':	50 obs. of	5 variables:</p>

<p className="p">'data.frame':	50 obs. of	5 variables:</p>

<pre><code>
$ Sepal.Length: num	5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...<br></br>
$ Sepal.Width : num	3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...<br></br>
$ Petal.Length: num	1.4 1.4 1.3 1.5 1.4 1.7 1.4 1.5 1.4 1.5 ...<br></br>
$ Petal.Width : num	0.2 0.2 0.2 0.2 0.2 0.4 0.3 0.2 0.2 0.1 ...<br></br>
$ Species	: Factor w/ 3 levels "setosa","versicolor",..: 1 1 1 1 1 1<br></br>
1 1 1 1 ...
</code></pre>


<p className="it">Subset data using the subset function:</p>

<p className="p">Subset data using the subset function:</p>

<p className="it">Besides using the bracket notation, R provides a subset function that enables users to subset the data frame by observations with a logical statement.</p>

<p className="p">Besides using the bracket notation, R provides a subset function that enables users to subset the data frame by observations with a logical statement.</p>

<p className="it">First, subset species, sepal length, and sepal width out of the iris data. To select the sepal length and width out of the iris data, one should specify the column to be subset in the select argument:</p>

<p className="p">First, subset species, sepal length, and sepal width out of the iris data. To select the sepal length and width out of the iris data, one should specify the column to be subset in the select argument:</p>

<pre><code>
&#62; Sepal.data = subset(iris, select=c("Sepal.Length", "Sepal.Width"))<br></br>
&#62; str(Sepal.data)
</code></pre>
<p className="it">'data.frame': 150 obs. of	2 variables:</p>

<p className="p">'data.frame': 150 obs. of	2 variables:</p>

<pre><code>
$ Sepal.Length: num	5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...<br></br>
$ Sepal.Width : num	3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...<br></br>
</code></pre>


<p className="it">Esto revela que <code>Sepal.data</code> contiene 150 objetos con la variable <code>Sepal.Length</code> y <code>Sepal.Width</code>.</p>

<p className="p">This reveals that <code>Sepal.data</code> contains 150 objects with the <code>Sepal.Length</code> variable and <code>Sepal.Width</code>.</p>

<p className="it">Por otro lado, puede utilizar un argumento de subconjunto para obtener datos de subconjuntos que contengan <code>setosa</code> solamente. En el segundo argumento de la función de subconjunto, puede especificar los criterios de subconjunto:</p>

<p className="p">On the other hand, you can use a subset argument to get subset data containing <code>setosa</code> only. In  the  second argument of the  subset function, you can specify the  subset criteria:</p>

<pre><code>
&#62; setosa.data = subset(iris, Species =="setosa")<br></br>
&#62; str(setosa.data)<br></br>
'data.frame': 50 obs. of	5 variables:)<br></br>
$ Sepal.Length: num	5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...<br></br>
$ Sepal.Width : num	3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...<br></br>
$ Petal.Length: num	1.4 1.4 1.3 1.5 1.4 1.7 1.4 1.5 1.4 1.5 ...<br></br>
$ Petal.Width : num	0.2 0.2 0.2 0.2 0.2 0.4 0.3 0.2 0.2 0.1 ...<br></br>
$ Species	: Factor w/ 3 levels "setosa","versicolor",..: 1 1 1 1 1 1<br></br>
1 1 1 1 ...
</code></pre>

<p className="it">La mayoría de las veces, es posible que desee aplicar una unión o intersecar una condición mientras subconjunto de datos. Las operaciones OR y AND pueden emplearse adicionalmente para este fin. Por ejemplo, si desea recuperar datos con <code>Petal.Width >=0.2 and Petal.Length &#60;= 1.4</code>:</p>

<p className="p">Most of the time, you may want to apply a union or intersect a condition while subsetting data. The OR and AND operations can be further  employed for  this  purpose. For example, if you would like to retrieve data with <code>Petal.Width >=0.2 and Petal.Length &#60;= 1.4</code>:</p>
<pre><code>
&#62; example.data= subset(iris, Petal.Length &#60;=1.4 & Petal.Width &#62;= 0.2,<br></br>
select=Species )<br></br>
&#62; str(example.data)<br></br>
'data.frame': 21 obs. of	1 variable:<br></br>
$ Species: Factor w/ 3 levels "setosa","versicolor",..: 1 1 1 1 1 1 1 1 1<br></br>
1 ...
</code></pre>


<p className="it">Merging data: (Fusión de datos) la fusión de datos implica la unión de dos marcos de datos en un data frames fusionado por una columna común o nombre de fila. El siguiente ejemplo muestra cómo combinar el marco de datos flower.type y las tres primeras filas del iris con un nombre de fila común dentro de la columna Species:</p>

<p className="p">Merging data: merging data involves joining two data frames into a merged data frame by a common column or row name. The following example shows how to merge the flower.type data frame and the first three rows of the iris with a common row name within the Species column:</p>

<pre><code>
&#62; flower.type = data.frame(Species = "setosa", Flower = "iris")<br></br>
&#62; merge(flower.type, iris[1:3,], by ="Species")<br></br>
Species Flower Sepal.Length Sepal.Width Petal.Length Petal.Width<br></br>
<br></br>
1	setosa	iris	5.1	3.5	1.4	0.2	   <br></br>
2	setosa	iris	4.9	3.0	1.4	0.2	   <br></br>
3	setosa	iris	4.7	3.2	1.3	0.2	 <br></br>
</code></pre>

<p className="it">Datos de pedido: la función de <code>order</code> devolverá el <code>index</code> de un marco de datos ordenado con una columna especificada. El siguiente ejemplo muestra los resultados de los primeros seis registros con la longitud del sepal ordenada (de grande a pequeño) los datos del iris</p>

<p className="p">Ordering data: the <code>order</code> function will return the index of a  sorted  data  frame  with  a specified column. The following example shows the results from the first six records with the sepal length ordered (from big to small) iris data</p>

<pre><code>
&#62; head(iris[order(iris$Sepal.Length, decreasing = TRUE),]) Sepal.Length Sepal.Width Petal.Length Petal.Width	Species<br></br>
<br></br>
132	7.9	3.8	6.4	2.0 virginica<br></br>
118	7.7	3.8	6.7	2.2 virginica<br></br>
119	7.7	2.6	6.9	2.3 virginica<br></br>
123	7.7	2.8	6.7	2.0 virginica<br></br>
136	7.7	3.0	6.1	2.3 virginica<br></br>
106	7.6	3.0	6.6	2.1 virginica<br></br>
</code></pre>

<h3 className="p">How it works</h3>

<p className="it">Antes de realizar el análisis de datos, es importante organizar los datos recopilados en un formato estructurado. Por lo tanto, podemos simplemente usar el marco de datos R para subconjugar, fusionar y ordenar un conjunto de datos. Esta receta introduce primero dos métodos para subconjunto de datos: uno utiliza la notación de corchete, mientras que el otro utiliza la función de subconjunto. Puede utilizar ambos métodos para generar los datos del subconjunto seleccionando columnas y filtrando datos con los criterios dados. La receta a continuación, introduce la función de combinación para combinar marcos de datos. Por último, la receta introduce cómo utilizar orden para ordenar los datos.</p>

<p className="p">Before conducting data analysis, it is important to organize collected data into a structured format. Therefore, we can simply use the R data frame to subset, merge, and order a dataset. This recipe first introduces two methods to  subset data: one uses  the  bracket notation, while the other uses the subset function. You can use both methods to generate the subset data by selecting columns and filtering data with the given criteria. The recipe then introduces the merge function to merge data frames. Last, the recipe introduces how to use order to sort the data.</p>
<h3 className="p">There's more...</h3>

<p className="it">Las funciones <code>sub</code> y <code>gsub</code> permiten utilizar la expresión regular para sustituir una cadena. El <code>sub</code> y</p>

<p className="p">The <code>sub</code> and <code>gsub</code> functions allow using regular expression to substitute a string. The <code>sub</code> and</p>

<p className="it">Las funciones <code>gsub</code> realizan la sustitución de la primera y de todas las demás coincidencias, respectivamente:</p>

<p className="p"><code>gsub</code> functions perform the replacement of the first and all the other matches, respectively:</p>

<pre><code>
&#62; sub("e", "q", names(iris))<br></br>
[1] "Sqpal.Length" "Sqpal.Width"	"Pqtal.Length" "Pqtal.Width"	"Spqcies"<br></br>
&#62; gsub("e", "q", names(iris))<br></br>
[1] "Sqpal.Lqngth" "Sqpal.Width"	"Pqtal.Lqngth" "Pqtal.Width"	"Spqciqs"<br></br>
</code></pre>

<h2 className="p">Applying basic statistics</h2>

<p className="it">R proporciona una amplia gama de funciones estadísticas, lo que permite a los usuarios obtener estadísticas resumidas de datos, generar tablas de frecuencia y contingencia, producir correlaciones y realizar inferencias estadísticas. Esta receta cubre estadísticas básicas que se pueden aplicar a un conjunto de datos.</p>

<p className="p">R provides a wide range of statistical functions, allowing users to obtain the summary statistics of data, generate frequency and contingency tables, produce correlations, and conduct statistical inferences. This recipe covers basic statistics that can be applied to a dataset.</p>

<h3 className="p">Getting ready</h3>
<p className="it">Asegúrese de haber completado las recetas anteriores instalando R en su sistema operativo.</p>

<p className="p">Ensure you have completed the previous recipes by installing R on your operating system.</p><h3 className="p">How to do it...</h3>
<p className="it">Realice los pasos siguientes para aplicar estadísticas en un conjunto de datos:</p>

<p className="p">Perform the following steps to apply statistics on a dataset:</p>

<p className="it">1- Cargue los datos del iris en una sesión R:</p>

<p className="p">1- Load the iris data into an R session:</p>

<pre><code>
&#62; data(iris)
</code></pre>

<p className="it">2- Observe el formato de los datos:</p>

<p className="p">2- Observe the format of the data:</p>

<pre><code>
&#62; class(iris)<br></br>
"data.frame"<br></br>
</code></pre>

<p className="it">3- El conjunto de datos del iris es un marco de datos que contiene cuatro atributos numéricos: longitud del pétalo, anchura del pétalo, ancho del sepal y longitud del sepal. Para valores numéricos, puede realizar estadísticas descriptivas, como media, sd, var, min, max, mediana, rango y cuantil. Estos pueden aplicarse a cualquiera de los cuatro atributos del conjunto de datos:</p>

<p className="p">3- The iris dataset is a data frame containing four numeric attributes: petal length, petal width, sepal width, and sepal length. For  numeric values, you can perform   descriptive statistics, such as mean, sd, var, min, max, median, range, and quantile. These can be applied to any of the four attributes in the dataset:</p>

<pre><code>
&#62; mean(iris$Sepal.Length) [1] 5.843333<br></br>
&#62; sd(iris$Sepal.Length) [1] 0.8280661<br></br>
&#62; var(iris$Sepal.Length) [1] 0.6856935<br></br>
&#62; min(iris$Sepal.Length) [1] 4.3<br></br>
&#62; max(iris$Sepal.Length) [1] 7.9<br></br>
&#62; median(iris$Sepal.Length) [1] 5.8<br></br>
&#62; range(iris$Sepal.Length) [1] 4.3 7.9<br></br>
&#62; quantile(iris$Sepal.Length) 0%	25%	50%	75% 100%<br></br>
4.3	5.1	5.8	6.4	7.9<br></br>
</code></pre>
<p className="it">4- El ejemplo anterior muestra cómo aplicar estadísticas descriptivas en una sola variable. Para obtener estadísticas resumidas sobre cada atributo numérico del marco de datos, se puede usar <code>sapply</code>. Por ejemplo, para aplicar la media en los primeros cuatro atributos en el marco de datos del iris, ignore el valor na estableciendo na.rm como TRUE:</p>

<p className="p">4- The preceding example demonstrates how to apply descriptive statistics  on a single variable. In order  to  obtain summary statistics on every numeric attribute of the data frame, one may use <code>sapply</code>. For example, to apply the mean on the first four attributes in the iris data frame, ignore the na value by setting na.rm as TRUE:</p>
<pre><code>
&#62; sapply(iris[1:4], mean, na.rm=TRUE)<br></br>
Sepal.Length	Sepal.Width Petal.Length	Petal.Width 5.843333		3.057333	3.758000		1.199333<br></br>
</code></pre>

<p className="it">5- Como alternativa al uso de <code>sapply</code> para aplicar estadísticas descriptivas sobre determinados atributos, R ofrece la función de resumen que proporciona una gama completa de estadísticas descriptivas. En el ejemplo siguiente, la función de resumen proporciona la media, la mediana, los cuartos 25 y 75, min y max de cada atributo numérico del conjunto de datos del iris:</p>

<p className="p">5- As an alternative to using <code>sapply</code> to apply descriptive statistics on given attributes, R offers the summary function that provides a full range of descriptive statistics. In the following example, the summary function provides the mean, median, 25th and 75th quartiles, min, and max of every iris dataset numeric attribute:</p>

<pre><code>
&#62; summary(iris)<br></br>
Sepal.Length	Sepal.Width	Petal.Length	Petal.Width	Species Min.	:4.300		Min.	:2.000		Min.	:1.000		Min.	:0.100		setosa<br></br>
:50<br></br>
1st Qu.:5.100	1st Qu.:2.800	1st Qu.:1.600	1st Qu.:0.300<br></br>
versicolor:50<br></br>
Median :5.800	Median :3.000	Median :4.350	Median :1.300<br></br>
virginica :50<br></br>
<br></br>
Mean	:5.843	Mean	:3.057	Mean	:3.758	Mean	:1.199<br></br>
3rd Qu.:6.400	3rd Qu.:3.300	3rd Qu.:5.100	3rd Qu.:1.800<br></br>
Max.	:7.900	Max.	:4.400	Max.	:6.900	Max.	:2.500<br></br>
</code></pre>
<p className="it">6- El ejemplo anterior muestra cómo generar la estadística descriptiva de una sola variable. R también proporciona la correlación para que los usuarios investiguen la relación entre variables. El ejemplo siguiente genera una matriz 4x4 calculando la correlación de cada par de atributos dentro del iris:</p>

<p className="p">6- The preceding example shows how to output the descriptive statistics of a single variable. R also provides the correlation for users to investigate the relationship between variables. The following example generates a 4x4 matrix by computing the correlation of each attribute pair within the iris:</p>
<pre><code>
&#62; cor(iris[,1:4])<br></br>
Sepal.Length Sepal.Width Petal.Length Petal.Width<br></br>
<br></br>
Sepal.Length	1.0000000	- 0.1175698	0.8717538	0.8179411	   <br></br>
Sepal.Width	- 0.1175698	1.0000000	- 0.4284401	- 0.3661259	   <br></br>
Petal.Length	0.8717538	- 0.4284401	1.0000000	0.9628654	   <br></br>
Petal.Width	0.8179411	- 0.3661259	0.9628654	1.0000000	 <br></br>
</code></pre>
<p className="it">7- R también proporciona una función para calcular la covarianza de cada par de atributos dentro del iris:</p>

<p className="p">7- R also provides a function to compute the covariance of each attribute pair within the iris:</p>

<pre><code>
&#62; cov(iris[,1:4])<br></br>
Sepal.Length Sepal.Width Petal.Length Petal.Width<br></br>
<br></br>
>Sepal.Length	0.6856935	- 0.0424340	1.2743154	0.5162707	   <br></br>
Sepal.Width	- 0.0424340	0.1899794	- 0.3296564	- 0.1216394	   <br></br>
Petal.Length	1.2743154	- 0.3296564	3.1162779	1.2956094	   <br></br>
Petal.Width	0.5162707	- 0.1216394	1.2956094	0.5810063	 <br></br>
</code></pre>
<p className="it">8- Se realizan pruebas estadísticas para acceder a la significación de los resultados; Aquí se demuestra cómo utilizar un t-test para determinar las diferencias estadísticas entre dos muestras. En este ejemplo, realizamos un t.test sobre la anchura del pétalo de un iris en la especie setosa o versicolor. Si obtenemos un valor de p inferior a 0,5, podemos estar seguros de que el ancho de los pétalos entre la setosa y el versicolor variará significativamente:</p>

<p className="p">8- Statistical tests are performed to access the significance of the results; here we demonstrate how to use a t-test to determine the statistical differences between two samples. In this example, we perform a t.test on the petal width an of an iris in either the setosa or versicolor species. If we obtain a p-value less than 0.5, we can be certain that the petal width between the setosa and versicolor will vary significantly:</p>

<pre><code>
&#62; t.test(iris$Petal.Width[iris$Species=="setosa"],<br></br>
+	iris$Petal.Width[iris$Species=="versicolor"])<br></br>
<br></br>	
Welch Two Sample t- test<br></br>
<br></br>
data:	iris$Petal.Width[iris$Species == "setosa"] and<br></br>
iris$Petal.Width[iris$Species == "versicolor"]<br></br>
t = - 34.0803, df = 74.755, p- value &#60; 2.2e- 16<br></br>
alternative hypothesis: true difference in means is not equal to 0<br></br>
>95 percent confidence interval:<br></br>
- 1.143133 - 1.016867<br></br>
sample estimates:<br></br> 
mean of x mean of y<br></br>
0.246	1.326
</code></pre>
<p className="it">9- Alternativamente, puede realizar una prueba de correlación en la longitud del sepal con el ancho sepal de un iris, y luego recuperar un puntaje de correlación entre las dos variables. Cuanto más fuerte es la correlación positiva, más cerca está el valor de 1. Cuanto más fuerte es la correlación negativa, cuanto más cerca esté el valor de -1:</p>

<p className="p">9- Alternatively, you can perform a correlation test on the sepal length to the sepal  width of an iris, and then retrieve a correlation score between the two variables. The stronger the positive correlation, the closer the value is to 1. The stronger the negative correlation, the closer the value is to -1:</p>

<pre><code>
&#62; cor.test(iris$Sepal.Length, iris$Sepal.Width)<br></br>
Pearson's product- moment correlation<br></br>
data:	iris$Sepal.Length and iris$Sepal.Width t = - 1.4403, df = 148, p- value = 0.1519<br></br>
alternative hypothesis: true correlation is not equal to 0<br></br>
95 percent confidence interval:<br></br>
- 0.27269325	0.04351158<br></br>
sample estimates:<br></br> 
cor<br></br>
- 0.1175698
</code></pre>

<h3 className="p">How it works...</h3>

<p className="it">R tiene una función de estadísticas incorporada, que permite al usuario realizar estadísticas descriptivas sobre una sola variable. La receta presenta primero cómo aplicar media, sd, var, min, max, mediana, rango y cuantil en una sola variable. Además, para aplicar las estadísticas sobre las cuatro variables numéricas, se puede usar la función <code>sapply</code>. Con el fin de determinar las relaciones entre múltiples variables, se puede realizar correlación y covarianza. Finalmente, la receta muestra cómo determinar las diferencias estadísticas de dos muestras dadas realizando una prueba estadística.</p>
<p className="p">R has a built-in statistics function, which enables the user to perform descriptive statistics on a single variable. The recipe first introduces how to  apply mean,  sd, var, min, max,  median, range, and quantile on a single variable. Moreover, in order to apply the statistics on all four numeric variables, one can use the <code>sapply</code> function. In order to determine the relationships between multiple variables, one can conduct correlation and covariance. Finally, the  recipe shows how to determine the statistical differences of two given samples by performing a statistical test.</p>
<h3 className="p">There's more...</h3>
<p className="it">Si necesita calcular estadísticas agregadas de resumen con datos en diferentes grupos, puede utilizar las funciones de agregación y reconfiguración para calcular las estadísticas de resumen de los subconjuntos de datos:</p>
<p className="p">If you need to compute an aggregated summary statistics against data in different groups, you can use the aggregate and reshape functions to compute the summary statistics of data subsets:</p>
<p className="it">Use el agregado para calcular la media de cada grupo de atributos del iris por la especie:</p>
<p className="p">Use aggregate to calculate the mean of each iris attribute group by the species:</p>

<pre><code>
&#62; aggregate(x=iris[,1:4],by=list(iris$Species),FUN=mean)
</code></pre>

<p className="it">Use remodelar para calcular la media de cada grupo de atributos del iris por la especie:</p>

<p className="p">Use reshape to calculate the mean of each iris attribute group by the species:</p>

<pre><code>
&#62;	library(reshape)<br></br>
&#62;	iris.melt &#60;- melt(iris,id='Species')<br></br>
&#62;	cast(Species~variable,data=iris.melt,mean,<br></br>
subset=Species %in% c('setosa','versicolor'), margins='grand_row')
</code></pre>

<p className="it">Para obtener información sobre remodelación y agregado, consulte los documentos de ayuda mediante <code>?reshape</code> o <code>?aggregate</code>.</p>

<p className="p">For information on reshape and aggregate, refer to the help documents by using <code>?reshape</code> or <code>?aggregate</code>.</p>

<h2 className="p">Visualizing data</h2>

<p className="it">La visualización es una forma poderosa de comunicar información a través de medios gráficos. Las presentaciones visuales facilitan la comprensión de los datos. Esta receta presenta algunas funciones básicas para trazar gráficos y demuestra cómo las visualizaciones son útiles en la exploración de datos.</p>

<p className="p">Visualization is a powerful way to communicate information through graphical means. Visual presentations make data easier to comprehend. This recipe  presents  some basic  functions  to plot charts, and demonstrates how visualizations are helpful in data exploration.</p>

<h3 className="p">Getting ready</h3>

<p className="it">Asegúrese de haber completado las recetas anteriores instalando R en su sistema operativo.</p>

<p className="p">Ensure that you have completed the previous recipes by installing R on your operating system.</p>
<h3 className="p">How to do it...</h3>

<p className="it">Realice los pasos siguientes para visualizar un conjunto de datos:</p>

<p className="p">Perform the following steps to visualize a dataset:</p>

<p className="it">1- Cargue los datos del iris en la sesión R:</p>

<p className="p">1- Load the iris data into the R session:</p>

<pre><code>
&#62; data(iris)
</code></pre>

<p className="it">2- Calcule la frecuencia de las especies dentro del iris usando el comando table:</p>

<p className="p">2- Calculate the frequency of species within the iris using the table command:</p>

<pre><code>
&#62; table.iris = table(iris$Species)<br></br>
&#62; table.iris<br></br>
<br></br>
setosa versicolor	virginica<br></br>
50	50	50
</code></pre>
<p className="it">Como muestra la frecuencia en la tabla, cada especie representa 1/3 de los datos del iris. Podemos dibujar un gráfico simple para representar la distribución de las especies dentro del iris:</p>

<p className="p">As the frequency in the table shows, each species represents 1/3 of the iris data. We can draw a simple pie chart to represent the distribution of species within the iris:</p>

<pre><code>
&#62; pie(table.iris)
</code></pre>

<div className="image"><a></a><img src="/static/002_019.png" width="100%" alt="Image"/></div>

<p className="summary">The pie chart of species distribution</p>

<p className="it">El histograma crea un gráfico de frecuencias de tipos a lo largo del eje x. El siguiente ejemplo produce un histograma de la longitud del sepal:</p>

<p className="p">The histogram creates a frequency plot of sorts along the x-axis. The following example produces a histogram of the sepal length:</p>

<pre><code>
&#62; hist(iris$Sepal.Length)
</code></pre>

<div className="image"><a></a><img src="/static/002_020.png" width="100%" alt="Image"/></div>

<h2 className="summary">The histogram of the sepal length</h2>

<p className="it">5- En el histograma, el eje x presenta la longitud del sepal y el eje y presenta el recuento para diferentes longitudes de sepal. El histograma muestra que para la mayoría de los iris, las longitudes de los sepales oscilan entre 4 cm y 8 cm.</p>

<p className="p">5- In the histogram, the x-axis presents the sepal length and the y-axis presents the count for different sepal lengths. The histogram shows that for most irises, sepal  lengths  range from 4 cm to 8 cm.</p>

<p className="it">6- Boxplots, también llamado cuadro y bigotes gráficos, le permiten transmitir una gran cantidad de información en una parcela simple. En este gráfico, la línea representa la mediana de la muestra. La caja en sí muestra los cuartiles superior e inferior. Los bigotes muestran el rango:</p>

<p className="p">6- Boxplots, also named box and whisker graphs, allow you to convey a lot of information in one simple plot. In such a graph, the line represents the median of the sample. The box itself shows the upper and lower quartiles. The whiskers show the range:</p>

<pre><code>
&#62; boxplot(Petal.Width ~ Species, data = iris)
</code></pre>

<div className="image"><a></a><img src="/static/002_021.png" width="100%" alt="Image"/></div>

<p className="summary">The boxplot of the petal width</p>

<p className="it">7- La anterior captura de pantalla muestra claramente que la mediana y el rango superior de la anchura del pétalo de la setosa es mucho más corto que versicolor y virginica. Por lo tanto, la anchura del pétalo se puede utilizar como atributo sustancial para distinguir las especies del iris.</p>

<p className="p">7- The preceding screenshot clearly shows the median and upper  range of the petal width of the  setosa is much shorter  than versicolor  and virginica. Therefore, the  petal  width can  be used as a substantial attribute to distinguish iris species.</p>

<p className="it">8- Un diagrama de dispersión se utiliza cuando hay dos variables para trazar una contra otra. Este ejemplo dibuja la longitud del pétalo contra el ancho del pétalo y puntos de color de acuerdo con la especie a la que pertenece:</p>

<p className="p">8- A scatter plot is used when there are two variables to plot against one another. This example plots the petal length against the petal width and color dots in accordance to the species it belongs to:</p>

<pre><code>
&#62; plot(x=iris$Petal.Length, y=iris$Petal.Width, col=iris$Species)
</code></pre>

<div className="image"><a></a><img src="/static/002_022.png" width="100%" alt="Image"/></div>

<p className="summary">The scatter plot of the sepal length</p>

<p className="it">9- La captura de pantalla anterior es un diagrama de dispersión de la longitud del pétalo contra el ancho del pétalo. Como hay cuatro atributos dentro del conjunto de datos del iris, se necesitan seis operaciones para representar todas las combinaciones. Sin embargo, R proporciona una función llamada pares, que puede generar cada subtrama en una figura:</p>

<p className="p">9- The preceding screenshot is a scatter plot of the petal length against the petal width. As there are four attributes within the iris dataset, it takes six operations to plot all combinations. However, R provides a function named pairs, which can generate each subplot in one figure:</p>

<pre><code>
&#62; pairs(iris[1:4], main = "Edgar Anderson's Iris Data", pch = 21, bg =<br></br>
c("red", "green3", "blue")[unclass(iris$Species)])
</code></pre>

<div className="image"><a></a><img src="/static/002_023.png" width="100%" alt="Image"/></div>


<p className="summary">Pairs scatterplot of iris data</p>

<h3 className="p">How it works...</h3>

<p className="it">R proporciona muchas funciones de trazado incorporadas, que permiten a los usuarios visualizar datos con diferentes tipos de tramas. Esta receta demuestra el uso de gráficos circulares que pueden presentar la distribución por categorías. Un gráfico circular de igual tamaño muestra que el número de cada especie es igual. Un histograma muestra la frecuencia de diferentes longitudes de sepal. Un cuadro de caja puede transmitir una gran cantidad de estadísticas descriptivas, y muestra que el ancho de los pétalos se puede utilizar para distinguir una especie de iris. Por último, se introdujeron parcelas de dispersión, que representan las variables en una sola parcela. Con el fin de generar rápidamente un diagrama de dispersión que contiene todos los pares de datos de iris, se puede usar el comando de pares.</p>

<p className="p">R provides many built-in plot functions, which enable users to visualize  data  with  different kinds of plots. This recipe demonstrates the use of pie charts that can present category distribution. A pie chart of an equal size shows that the number of each species is equal. A histogram plots the frequency of different sepal lengths. A box plot can convey a great deal of descriptive statistics, and shows that the petal width can be used to distinguish an iris species. Lastly, we introduced scatter plots, which plot variables on a single plot. In order to quickly generate a scatter plot containing all the pairs of iris data, one may use the pairs command.</p>

<h3 className="p">See also</h3>

<p className="it"><code>ggplot2</code> es otro sistema de trazado para R, basado en la implementación de la gramática gráfica de Leland Wilkinson. Permite a los usuarios agregar, eliminar o alterar componentes en una trama con una mayor abstracción. Sin embargo, el nivel de resultados de la abstracción es lento en comparación con los gráficos de celosía. Para aquellos de ustedes interesados ​​en el tema de ggplot, puede consultar este sitio: <code>http://ggplot2.org/</code>.</p>

<p className="p"><code>ggplot2</code> is another  plotting system for R, based on the implementation of Leland Wilkinson's grammar  of graphics. It allows users to  add, remove, or  alter  components in a plot with a higher abstraction. However, the level  of abstraction  results  is  slow compared to lattice graphics. For those of you interested in the topic of ggplot, you can refer to this site: <code>http://ggplot2.org/</code>.</p>

<p className="it">Obtención de un conjunto de datos para el machine learning</p>

<p className="p">Getting a dataset for machine learning</p>

<p className="it">Mientras R tiene un conjunto de datos incorporado, el tamaño de la muestra y el campo de aplicación son limitados. Aparte de generar datos dentro de una simulación, otro enfoque es obtener datos de repositorios de datos externos. Un repositorio de datos famoso es el repositorio UCI de machine learning, que contiene conjuntos de datos tanto artificiales como reales. Esta receta presenta cómo obtener un conjunto de datos de ejemplo del repositorio de aprendizaje de máquina UCI.</p>

<p className="p">While R has a built-in dataset, the sample size and field of application is limited. Apart from generating data within a simulation, another approach is to obtain data from external data repositories. A famous data repository is the UCI machine learning repository, which contains both artificial  and real datasets. This recipe introduces how to  get a sample dataset from the  UCI machine learning repository.</p>

<h3 className="p">Getting ready</h3>

<p className="it">Asegúrese de haber completado las recetas anteriores instalando R en su sistema operativo.</p>

<p className="p">Ensure that you have completed the previous recipes by installing R on your operating system.</p>

<h3 className="p">How to do it...</h3>

<p className="it">Realice los siguientes pasos para recuperar datos para el machine learning:</p>

<p className="p">Perform the following steps to retrieve data for machine learning:</p>

<p className="it">1- Acceda al repositorio de aprendizaje de UCI: http://archive.ics.uci.edu/ml/.</p>

<p className="p">1- Access the UCI machine learning repository: http://archive.ics.uci.edu/ml/.</p>
<div className="image"><a></a><img src="/static/002_024.png" width="100%" alt="Image"/></div>

<p className="summary">UCI data repository</p>

<p className="it">2- Haga clic en <strong>View ALL Data Sets</strong>. Aquí encontrará una lista de conjuntos de datos que contienen nombres de campo, como <strong>Name, Data Types, Default Task, Attribute Types, # Instances, # Attributes</strong>, y <strong>Year</strong>:</p>

<p className="p">2- Click on <strong>View ALL Data Sets</strong>. Here you will find a list of datasets containing field names, such as <strong>Name, Data Types, Default Task, Attribute Types, # Instances, # Attributes</strong>, and <strong>Year</strong>:</p>

<div className="image"><a></a><img src="/static/002_025.png" width="100%" alt="Image"/></div>

<p className="it">3- Utilice Ctrl + F para buscar <strong>Iris</strong>:</p>

<p className="p">3- Use Ctrl + F to search for <strong>Iris</strong>:</p>

<div className="image"><a></a><img src="/static/002_026.png" width="100%" alt="Image"/></div>


<p className="it">4- Haga clic en <strong>Iris</strong>. Esto mostrará la carpeta de datos y la descripción del conjunto de datos:</p>

<p className="p">4- Click on <strong>Iris</strong>. This will display the data folder and the dataset description:</p>

<div className="image"><a></a><img src="/static/002_027.png" width="100%" alt="Image"/></div>

<p className="it">5- Haga clic en <strong>Data Folder</strong>, que mostrará un directorio que contiene el conjunto de datos del iris:</p>

<p className="p">5- Click on <strong>Data Folder</strong>, which will display a directory containing the iris dataset:</p>

<div className="image"><a></a><img src="/static/002_028.png" width="100%" alt="Image"/></div>

<p className="it">6- A continuación, puede descargar <code>iris.data</code> o utilizar la función <code>read.csv</code> para leer el conjunto de datos:</p>

<p className="p">6- You can then either download <code>iris.data</code> or use the <code>read.csv</code> function to read the dataset:</p>
<pre><code>
&#62; iris.data = read.csv(url("http://archive.ics.uci.edu/ml/machine-<br></br>
learning- databases/iris/iris.data"), header = FALSE,	col.names =<br></br>
c("Sepal.Length", "Sepal.Width", "Petal.Length", "Petal.Width",<br></br>
"Species"))<br></br>
&#62; head(iris.data)<br></br>
Sepal.Length Sepal.Width Petal.Length Petal.Width	Species<br></br>
1	5.1	3.5	1.4	0.2 Iris- setosa	   <br></br>
2	4.9	3.0	1.4	0.2 Iris- setosa	   <br></br>
3	4.7	3.2	1.3	0.2 Iris- setosa	   <br></br>
4	4.6	3.1	1.5	0.2 Iris- setosa	   <br></br>
5	5.0	3.6	1.4	0.2 Iris- setosa	   <br></br>
6	5.4	3.9	1.7	0.4 Iris- setosa	 
</code></pre>

<h3 className="p">How it works...</h3>

<p className="it">Antes de realizar el análisis de datos, es importante recolectar su conjunto de datos. Sin embargo, no es fácil recolectar un conjunto de datos apropiado para su posterior exploración y análisis. Por lo tanto, podemos utilizar el conjunto de datos preparado con el repositorio UCI como fuente de datos. Aquí, primero accedemos al repositorio de conjuntos de datos UCI y luego utilizamos el conjunto de datos del iris como ejemplo. Podemos encontrar el conjunto de datos del iris usando la función de búsqueda del navegador (Ctrl + F), y luego entrar en el directorio de archivos. Por último, podemos descargar el conjunto de datos y utilizar la función <code>R IO</code>, <code>read.csv</code>, para cargar el conjunto de datos del iris en una sesión R.</p>

<p className="p">Before conducting data analysis, it is important to collect your dataset. However, to collect an appropriate dataset for further exploration and analysis is not easy. We can, therefore, use the prepared dataset with the UCI repository as our data source. Here, we first access the  UCI dataset repository and then use the iris dataset as an example. We can find the iris dataset by using the browser's find function (Ctrl + F), and then enter the file directory. Last, we can download the dataset and use the <code>R IO</code> function, <code>read.csv</code>, to load the iris dataset into an R session.</p>

<h3 className="p">See also</h3>

<p className="it">KDnuggets (<code>http://www.kdnuggets.com/datasets/index.html</code>) ofrece una lista ingeniosa de conjuntos de datos para la minería de datos y la ciencia de los datos. Puede explorar la lista para encontrar los datos que satisfagan sus necesidades.</p>

<p className="p"> KDnuggets (<code>http://www.kdnuggets.com/datasets/index.html</code>) offers a resourceful list of datasets for data mining and data science. You can explore the list to find the data that satisfies your requirements.</p>

</div>
</div>
  </Layout>
)
