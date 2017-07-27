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

                    .bl {
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #9090F5;
                        line-height: 1.1;
                        }
                    .or {
                        background-color: #E2A225;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        line-height: 1.1;
                        padding: .4px;
                        }
                        .bl1 {
                        background-color: #9090F5;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        line-height: 1.1;
                        padding: .4px;
                        }


                `}</style>

    <div className="col-md-6">              
   <header>
<h1 className="p">Part 1. Module 1</h1>

<p className="p"><strong>R Data Analysis Cookbook</strong></p>
 <p className="it">Más de 80 recetas para ayudarle a brisa a través de sus proyectos de análisis de datos utilizando R</p>

 <p className="p">Over 80 recipes to help you breeze through your data analysis projects using R</p>
</header>

<h2 className="p">Chapter 1. A Simple Guide to R</h2>
<p className="it">En este capítulo, cubriremos las siguientes recetas:</p>
<p className="p">In this chapter, we will cover the following recipes:</p>
<ul>
<li className="p">  Installing packages and getting help in R</li>
<li className="p">  Data types in R</li>
<li className="p">  Special values in R</li>
<li className="p">  Matrices in R</li>
<li className="p">  Editing a matrix in R</li>
<li className="p">  Data frames in R</li>
<li className="p">  Editing a data frame in R</li>
<li className="p">  Importing data in R</li>
<li className="p">  Exporting data in R</li>
<li className="p">  Writing a function in R</li>
<li className="p">  Writing if else statements in R</li>
<li className="p">  Basic loops in R</li>
<li className="p">  Nested loops in R</li>
<li className="p">  The apply, lapply, sapply, and tapply functions</li>
<li className="p">  Using par to beautify a plot in R</li>
<li className="p">  Saving plots</li>
</ul>



<h3 className="p">Installing packages and getting help in R</h3>
<p className="it">Si eres un nuevo usuario y nunca has lanzado R, definitivamente debes iniciar el proceso de aprendizaje mediante la comprensión del uso de <code>install.packages()</code>, <code>library()</code>, y obtener ayuda en R. R viene cargado con algunos paquetes básicos, pero R está creciendo rápidamente y los usuarios activos de R están constantemente desarrollando nuevos paquetes para R.</p>


<p className="p">If you are a new user and have never launched R, you must definitely start the learning process by understanding the use of <code>install.packages()</code>, <code>library()</code>, and getting help in R. R comes loaded with some basic packages, but the R community is rapidly growing and active R users are constantly developing new packages for R.</p>

<p className="it">A medida que lea este libro de cocina, observará que hemos utilizado muchos paquetes para crear diferentes visualizaciones. Así que la pregunta ahora es, ¿cómo sabemos qué paquetes están disponibles en R? Con el fin de mantenerme al día con todos los cambios que están sucediendo en la comunidad R, sigo diligentemente estos blogs:</p>


<p className="p">As you read through this cookbook, you will observe that we have used a lot of packages to create different visualizations. So the question now is, how do we know what packages are available in R? In order to keep myself up-to-date with all the changes that are happening in the R community, I diligently follow these blogs:</p>
<ul>
<li className="p">  Rblogger</li>
<li className="p">  Rstudio blog</li>
</ul>
<p className="it">Hay muchos blogs, sitios web y mensajes a los que me referiré a medida que pasamos por el libro. Podemos ver una lista de todos los paquetes disponibles en R visitando <code>http://cran.r-project.org/</code>. Y también <code>http://www.inside-r.org/packages</code> proporciona una lista, así como una breve descripción de todos los paquetes.</p>


<p className="p">There are many blogs, websites, and posts that I will refer to as we go through the book. We can view a list of all the packages available in R by going to <code>http://cran.r-project.org/</code>. and also <code>http://www.inside-r.org/packages</code> provides a list as well as a short description of all the packages.</p>



<h3 className="p">Getting ready</h3>
<p className="it">Podemos comenzar encendiendo nuestro estudio R, que es un entorno de desarrollo integrado (IDE) para R. Si no ha descargado Rstudio, entonces recomendaría encarecidamente ir a <code>http://www.rstudio.com/</code> y descargarlo.</p>


<p className="p">We can start by powering up our R studio, which is an Integrated Development Environment (IDE) for R. If you have not downloaded Rstudio, then I would highly recommend going to <code>http://www.rstudio.com/</code> and downloading it.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Para instalar un paquete en R, utilizaremos la instalación. <code>packages()</code>. Una vez que instalamos un paquete, tendremos que cargar el paquete en nuestra sesión R activa; Si no, obtendremos un error. La función <code>library()</code> nos permite cargar el paquete en R.</p>


<p className="p">To install a package in R, we will use the install. <code>packages()</code> function. Once we install a package, we will have to load the package in our active R session; if not, we will get an error. The <code>library()</code> function allows us to load the package in R.</p>
<h4 className="p">How it works...</h4>
<p className="it">La instalación. La función <code>packages()</code> viene con algunos argumentos adicionales pero, para el propósito de este libro, usaremos solamente el primer argumento, es decir, el nombre del paquete. También podemos cargar varios paquetes utilizando <code>install.packages(c( "plotrix", "RColorBrewer"))</code>. El nombre del paquete es el único argumento que usaremos en la función <code>library()</code>. Tenga en cuenta que sólo puede cargar un paquete a la vez con la función <code>library()</code> a diferencia de la instalación. <code>packages()</code>.</p>


<p className="p">The install. <code>packages()</code> function comes with some additional arguments but, for the purpose of this book, we will only use the first argument, that is, the name of the package. We can also load multiple packages by using <code>install.packages(c( "plotrix", "RColorBrewer"))</code>. The name of the package is the only argument we will use in the <code>library()</code> function. Note that you can only load one package at a time with the <code>library()</code> function unlike the install. <code>packages()</code> function.</p>


<h3 className="p">There's more...</h3>
<p className="it">Es difícil recordar todas las funciones y sus argumentos en R, a menos que los usemos todo el tiempo, y estamos obligados a obtener errores y mensajes de advertencia. La mejor manera de aprender R es usar la comunidad R activa y el manual de ayuda disponible en R.</p>


<p className="p">It is hard to remember all the functions and their arguments in R, unless we use them all the time, and we are bound to get errors and warning messages. The best way to learn R is to use the active R community and the help manual available in R.</p>
<p className="it">Para entender cualquier función en R o para aprender sobre los diversos argumentos, podemos escribir <code>?&#60;name of the function&#62;</code>. Por ejemplo, puedo aprender sobre todos los argumentos relacionados con la función <code>plot()</code> simplemente escribiendo <code>?plot</code> o <code>?plot()</code> en la ventana de la consola R. Ahora verá la página de ayuda en el lado derecho de la pantalla. También podemos aprender más sobre el comportamiento de la función usando algunos de los ejemplos en la parte inferior de la página de ayuda.</p>


<p className="p">To understand any function in R or to learn about the various arguments, we can type <code>?&#60;name of the function&#62;</code>. For example, I can learn about all the arguments related to the <code>plot()</code> function by simply typing <code>?plot</code> or <code>?plot()</code> in the R console window. You will now view the help page on the right side of the screen. We can also learn more about the behavior of the function using some of the examples at the bottom of the help page.</p>
<p className="it">Si todavía no podemos entender la función o su uso e implementación, podríamos ir a Google y escribir la pregunta o usar el sitio web de Stack Overflow. Siempre soy capaz de resolver mis errores mediante la búsqueda en Internet. Recuerde, cada problema tiene una solución, y las posibilidades con R son infinitas.</p>


<p className="p">If we are still unable to understand the function or its use and implementation, we could go to Google and type the question or use the Stack Overflow website. I am always able to resolve my errors by searching on the Internet. Remember, every problem has a solution, and the possibilities with R are endless.</p>
<p className="it">Ver también</p>


<h3 className="p">See also</h3>
<ul>
<li className="p">  Flowing Data (<code>http://flowingdata.com/</code>): This is a good resource to learn visualization tools and R. The tutorials are based on an annual subscription.</li>
<li className="p">  Stack Overflow (<code>http://stackoverflow.com/</code>): This is a great place to get help regarding R functions.</li>
<li className="p">  Inside-R (<code>http://www.inside-r.org/</code>): This lists all the packages along with a small description.</li>
<li className="p">  Rblogger (<code>http://www.r-bloggers.com/</code>): This is a great webpage to learn about new R packages, books, tutorials, data scientists, and other data-related jobs.</li>
<li className="p">  R forge (<code>https://r-forge.r-project.org/</code>).</li>
<li className="p">  R journal (<code>http://journal.r-project.org/archive/2014-1/</code>).</li>
</ul>



<h3 className="p">Data types in R</h3>
<p className="it">Todo en R está en forma de objetos. Los objetos pueden ser manipulados en R. Algunos de los objetos comunes en R son vectores numéricos, vectores de caracteres, vectores complejos, vectores lógicos y vectores enteros.</p>


<p className="p">Everything in R is in the form of objects. Objects can be manipulated in R. Some of the common objects in R are numeric vectors, character vectors, complex vectors, logical vectors, and integer vectors.</p>
<pre><code>
&#62; x = c(1:5) # Numeric Vector<br></br>
&#62; y = "I am Home" # Character Vector<br></br>
&#62; c = c(1+3i) # Complex Vector<br></br>
&#62; <br></br>
&#62; x = c(1:5) # Numeric Vector<br></br>
&#62; x<br></br>
[1] 1 2 3 4 5 <br></br>
&#62;<br></br>
&#62; y = "I am Home" # Character Vector<br></br><br></br>
&#62; y<br></br>
[1] "I am Home" <br></br>
&#62; <br></br>
&#62; c = c(1+3i) # Complex Vector<br></br>
&#62; <br></br>
&#62; c<br></br>
[1] 1+3i<br></br>
</code>
</pre>
<h4 className="p">How to do it...</h4>
<p className="it">Para generar un vector numérico en R, podemos usar la notación <code>C()</code> para especificarlo como sigue:</p>


<p className="p">In order to generate a numeric vector in R, we can use the <code>C()</code> notation to specify it as follows:</p>
<pre><code>
 x = c(1:5) # Numeric Vector   

</code></pre>
<p className="it">Para generar un vector de caracteres, podemos especificar lo mismo dentro de comillas <code>("")</code> de la siguiente manera:</p>


<p className="p">To generate a character vector, we can specify the same within quotes <code>("")</code> as follows:</p>
<pre><code>
y ="I am Home" # Character Vector    

</code></pre>
<p className="it">Para generar un vector complejo, podemos usar la notación <code>i</code> como sigue:</p>


<p className="p">To generate a complex vector, we can use the <code>i</code> notation as follows:</p>
<pre><code>
c = c(1+3i) #complex vector   

</code></pre>
<p className="it">Una lista es una combinación de un carácter y un vector numérico y se puede especificar usando la anotación <code>list()</code>:</p>


<p className="p">A list is a combination of a character and a numeric vector and can be specified using the <code>list()</code> notation:</p>
<pre><code>
z = list(c(1:5), "I am Home") # List    

</code></pre>
<h2 className="p">Special values in R</h2>
<p className="it">R viene con algunos valores especiales. Algunos de los valores especiales en R son <code>NA, Inf, -Inf</code> y <code>NaN</code>.</p>


<p className="p">R comes with some special values. Some of the special values in R are <code>NA, Inf, -Inf</code> are <code>NaN</code>.</p>
<pre><code>
&#62; z = c( 1,2,3, NA,5,NA) # NA in R is missing Data<br></br>
&#62; z <br></br>
[1]  1,2,3, NA,5,NA<br></br>
&#62;<span className="bl">complete.cases(z) # function to detected NA</span><br></br>
[1] TRUE TRUE TRUE FALSE TRUE <span className="or">FALSE</span><br></br>
&#62;<br></br>
&#62;<span className="bl">is.na(z) # function to detected NA</span><br></br>
[1] FALSE FALSE FALSE <span className="or">TRUE</span> FALSE <span className="or">TRUE</span><br></br>
&#62;<span className="or">0/0</span><br></br>
<span className="or">[1] NaN</span><br></br>
&#62;<span className="bl">m = c(2/3,3/3,0/0)</span><br></br>
&#62;<span className="bl">m</span><br></br>
[1] 0.6666667 1.0000000       <span className="or">Nan</span><br></br>
&#62;<br></br>
&#62;<span className="bl">is.finite(m)</span><br></br>
[1] TRUE TRUE <span className="or">FALSE</span><br></br>
&#62;<span className="bl">is.finite(m)</span><br></br>
[1] FALSE FALSE FALSE<br></br>
&#62;<span className="bl">is.nan(m)</span><br></br>
[1] FALSE FALSE <span className="or">TRUE</span><br></br>
&#62;<span className="bl">k = 1/0</span><br></br>
&#62;<span className="bl">k</span><br></br>
[1] <span className="or">Inf</span><br></br>
&#62; | 
</code></pre>

<h4 className="p">How to do it...</h4>
<p className="it">Los valores faltantes están representados en R por <code>NA</code>. Cuando descargamos datos, puede haber datos perdidos y esto está representado en R por NA:</p>


<p className="p">The missing values are represented in R by <code>NA</code>. When we download data, it may have missing data and this is represented in R by NA:</p>
<pre><code>
z = c( 1,2,3, NA,5,NA) # NA in R is missing Data<br></br>
</code></pre>
<p className="it">Para detectar valores faltantes, podemos usar la función <code>install.packages()</code> o <code>is.na()</code>, como se muestra:</p>


<p className="p">To detect missing values, we can use the <code>install.packages()</code> function or <code>is.na()</code>, as shown:</p>
<pre><code>
complete.cases(z) # function to detect NA<br></br>
is.na(z) # function to detect NA<br></br>
</code></pre>
<p className="it">Para eliminar los valores <code>NA</code> de nuestros datos, podemos escribir lo siguiente en nuestra ventana de sesión R activa:</p>


<p className="p">To remove the <code>NA</code> values from our data, we can type the following in our active R session console window:</p>
<pre><code>
clean &#60;- complete.cases(z)<br></br>
z[clean] # used to remove NA from data<br></br>
</code></pre>
<p className="it">Tenga en cuenta el uso de corchetes <code>([ ])</code> en lugar de paréntesis.</p>


<p className="p">Please note the use of square brackets <code>([ ])</code> instead of parentheses.</p>
<p className="it">En R, no un número es abreviado como NaN. Las siguientes líneas generarán valores NaN:</p>


<p className="p">In R, not a number is abbreviated as <code>NaN</code>. The following lines will generate NaN values:</p>
<pre><code>
##NaN<br></br>
0/0<br></br>
m &#60;- c(2/3,3/3,0/0)<br></br>
m<br></br>
</code></pre>

<p className="it">Las funciones <code>is.finite</code>, <code>is.infinite</code>, or <code>is.nan</code> generarán valores lógicos (TRUE o FALSE).</p>


<p className="p">The <code>is.finite</code>, <code>is.infinite</code>, or <code>is.nan</code> functions will generate logical values (TRUE or FALSE).</p>
<pre><code>
is.finite(m)<br></br>
is.infinite(m)<br></br>
is.nan(m)<br></br>
</code></pre>
<p className="it">La línea siguiente generará <code>inf</code> como un valor especial en R:</p>


<p className="p">The following line will generate <code>inf</code> as a special value in R:</p>
<pre><code>
## infinite<br></br>
k = 1/0</code></pre>



<h3 className="p"><strong>Tip</strong></h3>



<p className="p"><strong>Downloading the example code</strong></p>
<p className="it">Puede descargar los archivos de código de ejemplo de todos los libros Packt que haya comprado en su cuenta en el <code>http://www.packtpub.com</code>. Si compró este libro en otro lugar, puede visitar <code>http://www.packtpub.com/support</code> y registrarse para que los archivos se envíen por correo electrónico directamente a usted.</p>


<p className="p">You can download the example code files for all Packt books you have purchased from your account at <code>http://www.packtpub.com</code>. If you purchased this book elsewhere, you can visit <code>http://www.packtpub.com/support</code> and register to have the files e-mailed directly to you.</p>


<h4 className="p">How it works...</h4>
<p className="it"><code>complete.cases(z)</code> es un vector lógico que indica casos completos que no tienen valor faltante <code>(NA)</code>. Por otro lado, es. Na (z) indica qué elementos faltan. En ambos casos, el argumento es nuestro dato, un vector o una matriz.</p>


<p className="p"><code>complete.cases(z)</code> is a logical vector indicating complete cases that have no missing value <code>(NA)</code>. On the other hand, is. na(z) indicates which elements are missing. In both cases, the argument is our data, a vector, or a matrix.</p>

<pre><code>
&#62;<span className="bl">z = c( 1,2,3, NA,5,NA)</span><br></br>
&#62;<span className="bl">complete.cases(z)</span><br></br>
[1] TRUE TRUE TRUE <span className="or">FALSE</span> TRUE <span className="or">FALSE</span><br></br>
&#62;<span className="bl">is.na(z)</span><br></br>
[1] FALSE FALSE FALSE <span className="or">TRUE</span> FALSE <span className="or">TRUE</span><br></br>
&#62;<span className="bl"> dk = c(1,45,67,20)</span><br></br>
&#62;<span className="bl"> anyNA(dk)</span><br></br>
[1] FALSE<br></br>
&#62;<span className="bl"> dk[3] = NA</span><br></br>
&#62;<span className="bl"> dk</span><br></br>
[1] 1 45 NA 20<br></br>
&#62;<span className="bl"> anyNA(dk)</span><br></br>
[1] TRUE<br></br>
&#62; | 

</code></pre>

<p className="it">R también permite a sus usuarios comprobar si cualquier elemento de una matriz o un vector es <code>NA</code> utilizando la función <code>anyNA()</code>. Podemos coaccionar o asignar <code>NA</code> a cualquier elemento de un vector usando los corchetes <code>([ ])</code>. La entrada <code>[3]</code> indica a R que asigne <code>NA</code> al tercer elemento del vector <code>dk</code>.</p>


<p className="p">R also allows its users to check if any element in a matrix or a vector is <code>NA</code> by using the <code>anyNA()</code> function. We can coerce or assign <code>NA</code> to any element of a vector using the square brackets <code>([ ])</code>. The <code>[3]</code> input instructs R to assign <code>NA</code> to the third element of the <code>dk</code> vector.</p>
<h2 className="p">Matrices in R</h2>
<p className="it">En esta receta, nos sumergiremos en la capacidad de R con respecto a las matrices.</p>
<p className="p">In this recipe, we will dive into R's capability with regard to matrices.</p>
<pre><code>
&#62;<span className="bl">mat - matrix(c(1,2,3,4,5,6,7,8,9,10),nrow - 2, ncol - 5)</span><br></br>
&#62;<span className="bl">mat</span><br></br>
<span>     [,1] [,2] [,3] [,4] [,5]</span><br></br>
[,1]    1    3    5    7    9<br></br>
[,2]    2    4    6    8   10<br></br>
&#62;<span className="bl">t(mat)</span><br></br>
<span>      [,1] [,2]</span><br></br>
[,1]     1    2<br></br>
[,2]     3    4<br></br>
[,3]     5    6<br></br>
[,4]     7    8<br></br>
[,5]     9   10<br></br>
<span className="or">t() function in R generates a transposed matrix Rows are transposed into columns.</span><br></br>
&#62;<span className="bl">d = diag(3)</span><br></br>
&#62;<span className="bl">d</span><br></br>
<span>     [,1] [,2] [,3]</span><br></br>
[,1]    <span className="or">1</span>    0    0<br></br>
[,2]    0    <span className="or">1</span>    0<br></br>
[,3]    0    0    <span className="or">1</span><br></br>
&#62;<span className="bl">mat = matrix(c(1:10),nrow = 2, ncol = 5</span><br></br>
&#62;<span className="bl">mat</span><br></br>
<span>     [,1] <span className="bl1">[,2]</span> <span className="or">[,3]</span> [,4] [,5]</span><br></br>
[,1]    1 <span className="bl1">   3</span>    5    7    9<br></br>
<span className="or">[,2]</span>    2 <span className="bl1">   4</span>   <span className="or"> 6 </span>   8   10<br></br>
&#62;<span className="or">mat[2,3)</span><br></br>
&#62;[1]<span className="or"> 6 </span><br></br>
&#62;<span className="bl">mat = mat[,-2]</span><br></br>
&#62;<span className="bl">mat</span><br></br>
<span className="bl1">     [,1] [,2] [,3] [,4]</span><br></br>
<span className="bl1">[,1]    1    5    7    9<br></br></span>
<span className="bl1">[,2]    2    6    8   10<br></br></span>

</code></pre>


<h4 className="p">How to do it...</h4>
<p className="it">Un vector en R se define usando la notación <code>c()</code> como sigue:</p>
<pre><code>
vec = c(1:10)
</code></pre>
<p className="p">A vector in R is defined using the <code>c()</code> notation as follows:</p>
<p className="it">Un vector es un arreglo unidimensional. Una matriz es una matriz multidimensional. Podemos definir una matriz en R usando la función <code>matrix()</code>. Alternativamente, también podemos forzar un conjunto de valores para que sea una matriz usando la función <code>as.matrix()</code>:</p>
<p className="p">A vector is a one-dimensional array. A matrix is a multidimensional array. We can define a matrix in R using the <code>matrix()</code>  function. Alternatively, we can also coerce a set of values to be a matrix using the <code>as.matrix()</code> function:</p>
<pre><code>
mat = matrix(c(1,2,3,4,5,6,7,8,9,10), nrow = 2, ncol = 5)<br></br>
mat
</code></pre>

<p className="it">Para generar una transposición de una matriz, podemos utilizar la función <code>t()</code>:</p>

<p className="p">To generate a transpose of a matrix, we can use the <code>t()</code> function:</p>
<pre><code>
t(mat) # transpose a matrix<br></br>
</code></pre>

<p className="it">En R, también podemos generar una matriz de identidad utilizando la función <code>diag()</code>:</p>
<pre><code>
d = diag(3) # generate and identity matrix<br></br>
</code></pre>
<p className="p">In R, we can also generate an identity matrix using the <code>diag()</code> function:</p>
<p className="it">Podemos anidar la función <code>rep()</code> dentro de <code>matrix()</code> generar una matriz con todos los ceros de la siguiente manera:</p>

<p className="p">We can nest the <code>rep()</code>  function within <code>matrix()</code> to generate a matrix with all zeroes as follows:</p>

<pre><code>
zro = matrix(rep(0,6), ncol = 2, nrow  3 # generate a matrix of Zeros<br></br>
zro
</code></pre>
<h4 className="p">How it works...</h4>
<p className="it">Podemos definir nuestros datos en la función <code>matrix()</code> especificando nuestros datos como su primer argumento. Los argumentos <code>nrow</code> y <code>ncol</code> se utilizan para especificar el número de filas y la columna en una matriz. La función matriz en R viene con otros argumentos útiles y se puede estudiar escribiendo <code>?matrix</code> en la ventana de comandos R.</p>

<p className="p">We can define our data in the <code>matrix()</code>  function by specifying our data as its first argument. The <code>nrow</code> and <code>ncol</code> arguments are used to specify the number of rows and column in a matrix. The matrix function in R comes with other useful arguments and can be studied by typing <code>?matrix</code> in the R command window.</p>
<p className="it">La <code>rep()</code>  función anidada en la <code>matrix()</code>función se utiliza para repetir un determinado valor o cadena de caracteres un cierto número de veces.</p>

<p className="p">The <code>rep()</code>  function nested in the <code>matrix()</code> function is used to repeat a particular value or character string a certain number of times.</p>
<p className="it">La función <code>diag()</code> se puede utilizar para generar una matriz de identidad, así como extraer los elementos diagonales de una matriz. Se pueden explorar más usos de la función <code>diag()</code> escribiendo <code>?diag</code> en la ventana de la consola R.</p>

<p className="p">The <code>diag()</code> function can be used to generate an identity matrix as well as extract the diagonal elements of a matrix. More uses of the <code>diag()</code> function can be explored by typing <code>?diag</code> in the R console window.</p>
<p className="it">El archivo de código proporciona muchas más funciones que pueden usarse junto con matrices-por ejemplo, funciones relacionadas con la búsqueda de un determinante o inverso de una matriz y multiplicación matricial.</p>

<p className="p">The code file provides a lot more functions that can used along with matrices—for example, functions related to finding a determinant or inverse of a matrix and matrix multiplication.</p>
<h3 className="p">Editing a matrix in R</h3>
<p className="it">R nos permite editar (agregar, eliminar o reemplazar) elementos de una matriz utilizando la notación de corchete, como se muestra en las siguientes líneas de código:</p>

<p className="p">R allows us to edit (add, delete, or replace) elements of a matrix using the square bracket notation, as depicted in the following lines of code:</p>
<pre><code>
mat = matrix(c(1:10), nrow = 2, ncol = 5)<br></br>
mat<br></br>
mat[2,3]

</code></pre>

<h4 className="p">How to do it...</h4>
<p className="it">Para extraer cualquier elemento de una matriz, podemos especificar la posición de ese elemento en R usando corchetes. Por ejemplo, <code>mat[2, 3]</code> extraerá el elemento bajo la segunda fila y la tercera columna. El primer valor numérico corresponde a la fila y el segundo valor numérico corresponde a una columna <code>[row, column]</code>.</p>

<p className="p">In order to extract any element of a matrix, we can specify the position of that element in R using square brackets. For example, <code>mat[2, 3]</code> will extract the element under the second row and the third column. The first numeric value corresponds to the row and the second numeric value corresponds to a column <code>[row, column]</code>.</p>
<p className="it">De forma similar, para reemplazar un elemento, podemos escribir las siguientes líneas en R:</p>
<pre><code>
mat[2,3] = 16
</code></pre>

<p className="p">Similarly, to replace an element, we can type the following lines in R:</p>

<p className="it">Para seleccionar todos los elementos de la segunda fila, podemos usar <code>mat [2, ]</code>. Si no especificamos ningún valor numérico para una columna, R asumirá automáticamente todas las columnas.</p>

<p className="p">To select all the elements of the second row, we can use <code>mat [2, ]</code>. If we do not specify any numeric value for a column, R will automatically assume all columns.</p>
<p className="it">Marcos de datos en R</p>

<h3 className="p">Data frames in R</h3>
<p className="it">Una de las funciones útiles y ampliamente utilizadas en R es la función <code>data.frame()</code>. Data frame, de acuerdo con el manual R, es una estructura de matriz cuyas columnas pueden ser de tipos diferentes, como numeric, logical, factor, o character.</p>

<p className="p">One of the useful and widely used functions in R is the <code>data.frame()</code> function. Data frame, according to the R manual, is a matrix structure whose columns can be of differing types, such as numeric, logical, factor, or character.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Un data frame en R es una colección de variables. Una manera simple de construir un data frame es usar la función <code>data.frame()</code> en R:</p>

<p className="p">A data frame in R is a collection of variables. A simple way to construct a data frame is using the <code>data.frame()</code> function in R:</p>
<p className="it">Muchas veces, encontraremos funciones de trazado que requieren que los datos estén en un data frame. Con el fin de coaccionar nuestros datos en un data frame, podemos utilizar la función <code>data.frame()</code>. En el ejemplo siguiente, creamos una matriz y la convertimos en un data frame:</p>

<p className="p">Many times, we will encounter plotting functions that require data to be in a data frame. In order to coerce our data into a data frame, we can use the <code>data.frame()</code> function. In the following example, we create a matrix and convert it into a data frame:</p>
<p className="it">La <code>data.frame()</code>función viene con varios argumentos y se puede explorar escribiendo <code>?data.frame</code> en la ventana de la consola R. El archivo de código bajo el título Data Frames - 2 proporciona funciones adicionales que pueden ayudar a comprender la estructura subyacente de nuestros datos. Siempre podemos obtener ayuda adicional usando la documentación R.</p>

<p className="p">The <code>data.frame()</code> function comes with various arguments and can be explored by typing <code>?data.frame</code> in the R console window. The code file under the title Data Frames - 2 provides additional functions that can help in understanding the underlying structure of our data. We can always get additional help by using the R documentation.</p>

<h3 className="p">Editing a data frame in R</h3>
<p className="it">Una vez que hemos generado un dato y lo hemos convertido en un marco de datos, podemos editar cualquier fila o columna de un marco de datos.</p>

<p className="p">Once we have generated a data and converted it into a data frame, we can edit any row or column of a data frame.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Podemos agregar o extraer cualquier columna de un marco de datos usando el dólar el código siguiente:</p>

<p className="p">We can add or extract any column of a data frame using the dollar the following code:</p>
<p className="it">Datos de data = data.frame (x = c (1: 4), y = c ("tom", "jerry", "luke", datos $ age = c (2,2,3,5)</p>

<p className="p">data = data.frame(x = c(1:4), y = c("tom","jerry","luke", data$age = c(2,2,3,5) data</p>
<p className="it">En el ejemplo anterior, hemos añadido una nueva columna llamada edad. Alternativamente, también podemos agregar columnas y filas usando rbind (</p>

<p className="p">In the preceding example, we have added a new column called age Alternatively, we can also add columns and rows using the rbind(</p>
<p className="it">R como sigue:</p>

<p className="p">R as follows:</p>
<p className="it">Edad = c (2,2,3,5) datos = cbind (datos, edad)</p>

<p className="p">age = c(2,2,3,5) data = cbind(data, age)</p>
<p className="it">Las funciones <code>cbind</code>y <code>rbind</code>también se pueden utilizar para agregar columnas o filas a una matriz existente.</p>

<p className="p">The <code>cbind</code>and <code>rbind</code> functions can also be used to add columns or rows to an existing matrix.</p>
<p className="it">Para eliminar una columna o una fila de una matriz o un marco de datos, podemos simplemente usar el signo negativo antes de la columna o fila que se va a eliminar, de la siguiente manera:</p>

<p className="p">To remove a column or a row from a matrix or data frame, we can simply use the negative sign before the column or row to be deleted, as follows:</p>
<p className="it">Datos = datos [, - 2]</p>

<p className="p">data = data[,-2]</p>
<p className="it">La línea de datos [, -2] eliminará la segunda columna de nuestros datos.</p>

<p className="p">The data[, -2] line will delete the second column from our data.</p>
<p className="it">Para volver a ordenar las columnas de un marco de datos, podemos escribir las siguientes líneas en la ventana de comandos R:</p>

<p className="p">To re-order the columns of a data frame, we can type the following lines in the R command window:</p>
<p className="it">Data = data.frame (x = c (1: 4), y = c (tom, jerry, luke, brian)</p>

<p className="p">data = data.frame(x = c(1:4), y = c("tom","jerry","luke","brian"))</p>
<p className="it">Data = data [c (2,1)] # reordenará las columnas</p>

<p className="p">data = data[c(2,1)]# will reorder the columns</p>
<p className="it">datos</p>

<p className="p">data</p>
<p className="it">Para ver los nombres de columnas de un marco de datos, podemos usar la función names (): names (data)</p>

<p className="p">To view the column names of a data frame, we can use the names() function: names(data)</p>
<p className="it">Para cambiar el nombre de nuestros nombres de columnas, podemos usar la función colnames (): colnames (data) = c ("Number", "Names")</p>

<p className="p">To rename our column names, we can use the colnames() function: colnames(data) = c("Number","Names")</p>
<p className="it">($), Como se representa en "brian"))</p>

<p className="p">($) symbol, as depicted in "brian"))</p>
<p className="it">Utilizando el operador $.</p>

<p className="p">using the $ operator.</p>
<p className="it">) Y cbind () funciones en</p>

<p className="p">) and cbind() functions in</p>
<p className="it">Importación de datos en R</p>

<p className="p">Importing data in R</p>
<p className="it">Los datos vienen en varios formatos. La mayoría de los datos disponibles en línea se pueden descargar en forma de documentos de texto (extensión .txt) o como valores separados por comas (.csv). También encontramos datos en el formato delimitado por tabulaciones, XLS, HTML, JSON, XML, etc. Si está interesado en trabajar con datos, ya sea en JSON o XML, refiérase a la receta Construir un diagrama de barras usando XML en R en Capítulo, Crear aplicaciones en R.</p>

<p className="p">Data comes in various formats. Most of the data available online can be downloaded in the form of text documents (. txt extension) or as comma-separated values (. csv). We also encounter data in the tab-delimited format, XLS, HTML, JSON, XML, and so on. If you are interested in working with data, either in JSON or XML, refer to the recipe Constructing a bar plot using XML in R in Chapter, Creating Applications in R.</p>
<p className="it">Cómo hacerlo</p>

<p className="p">How to do it</p>
<p className="it">Para importar un archivo CSV en R, podemos usar la <code>read.csv()</code>función: test = read.csv ("raw.csv", sep = ",", header = TRUE)</p>

<p className="p">In order to import a CSV file in R, we can use the <code>read.csv()</code> function: test = read.csv("raw.csv", sep = ",", header = TRUE)</p>
<p className="it">Como alternativa, lea. <code>table()</code>Nos permite importar datos con diferentes separadores y formatos. A continuación se presentan algunos de los métodos utilizados para importar datos en R:</p>

<p className="p">Alternatively, read . <code>table()</code>function allows us to import data with different separators and formats. Following are some of the methods used to import data in R:</p>
<p className="it">    I a             </p>

<p className="p">    I a             </p>
<p className="it">    fila. Nombres, edad, sexo, puntuación   </p>

<p className="p">    row. names  age gender  score   </p>
<p className="it">    Tom está en 60  </p>

<p className="p">    tom IS  in  60  </p>
<p className="it">2 muchos 17 f 60  </p>

<p className="p">2   many    17  f   60  </p>
<p className="it">3 kin 19 f 7S  </p>

<p className="p">3   kin 19  f   7S  </p>
<p className="it">4 falta es m 39  </p>

<p className="p">4   lack    IS  m   39  </p>

<p className="it">Consola C: / U sers / agohil / B o ok / chapter10 / ■ O</p>

<p className="p">Console C :/U sers/a g o h i l/B o ok/chapter10/    ■O</p>
<p className="it">Setwd (c: l             </p>

<p className="p">&#62; setwd ( "c :l             </p>
<p className="it">&gt; Data = read.table ["raw.csv" header = TRUE, sep = ",")</p>

<p className="p">&#62; data = read.table["raw.csv"   header= TRUE, sep =",")</p>
<p className="it">&gt; Row.names (data)       </p>

<p className="p">&#62; row.names(data)       </p>
<p className="it">[1] "1" "2" "3" "4"      </p>

<p className="p">[1] "1" "2" "3" '   4"      </p>
<p className="it">&gt; Data = read, tabl e (, rraw. Csv "header = VERDADERO, sep row.names = c (" Nombres "))</p>

<p className="p">&#62; data = read, tabl e (,rraw. csv"  header= TRUE, sep row.names = c("Names"))</p>
<p className="it">&gt; Row.names (data)       </p>

<p className="p">&#62; row.names(data)       </p>
<p className="it">[1] "tom" "mary" "ki m" "jack"</p>

<p className="p">[1] "tom" ' mary'   "ki m"  "jack"</p>
<p className="it">&gt; Vi ew (datos)               </p>

<p className="p">&#62; Vi ew(data)               </p>
<p className="it">&gt;                   </p>

<p className="p">&#62;                   </p>
<h4 className="p">How it works...</h4>
<p className="it">El primer argumento en la <code>read.csv()</code>función es el nombre de archivo, seguido por el separador utilizado en el archivo. El argumento header = TRUE se utiliza para indicar a R que el archivo contiene encabezados. Tenga en cuenta que R buscará este archivo en su directorio actual. Tenemos que especificar el directorio que contiene el archivo usando la <code>setwd()</code>función. Alternativamente, podemos navegar y configurar nuestro directorio de trabajo navegando a <strong>Sesiones | Configuración del directorio de trabajo | Elija directorio</strong> .</p>

<p className="p">The first argument in the <code>read.csv()</code> function is the filename, followed by the separator used in the file. The header = TRUE argument is used to instruct R that the file contains headers. Please note that R will search for this file in its current directory. We have to specify the directory containing the file using the <code>setwd()</code> function. Alternatively, we can navigate and set our working directory by navigating to <strong>Sessions | Set working directory | Choose directory</strong>.</p>
<p className="it">El primer argumento en la <code>read.table()</code>función es el nombre de archivo que contiene los datos, el segundo argumento indica que los datos contienen el encabezado y el tercer argumento está relacionado con el separador. Si nuestros datos consisten en un punto medio (;), una pestaña delimitada o el símbolo @ como separador, podemos especificar esto bajo el argumento sep = "". Tenga en cuenta que, para especificar un separador como una pestaña delimitada, los usuarios tendrían que sustituir sep = "," con sep = "\ t" en la <code>read.table()</code>función.</p>

<p className="p">The first argument in the <code>read.table()</code>function is the filename that contains the data, the second argument states that the data contains the header, and the third argument is related to the separator. If our data consists of a semi colon (;), a tab delimited, or the @ symbol as a separator, we can specify this under the sep ="" argument. Note that, to specify a separator as a tab delimited, users would have to substitute sep = "," with sep ="\t" in the <code>read.table()</code> function.</p>
<p className="it">Uno de los otros argumentos útiles es el <code>row.names</code>argumento. Si omitimos fila. Nombres, R utilizará los números de serie de la columna como fila. Nombres Podemos asignar <code>row.names</code>para nuestros datos especificándolo como <code>row.names = c("Name")</code>.</p>

<p className="p">One of the other useful arguments is the <code>row.names</code> argument. If we omit row. names, R will use the column serial numbers as row. names. We can assign <code>row.names</code> for our data by specifying it as <code>row.names = c("Name")</code>.</p>
<p className="it">Exportación de datos en R</p>

<p className="p">Exporting data in R</p>
<p className="it">Una vez que hayamos procesado nuestros datos, debemos guardarlo en un dispositivo externo o enviarlo a nuestros colegas. Es posible exportar datos en R en muchos formatos diferentes.</p>

<p className="p">Once we have processed our data, we need to save it to an external device or send it to our colleagues. It is possible to export data in R in many different formats.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Para exportar datos desde R, podemos utilizar la <code>write.table()</code>  función. Tenga en cuenta que R exportará los datos a nuestro directorio actual oa la carpeta que hemos asignado utilizando la <code>setwd()</code>función:</p>

<p className="p">To export data from R, we can use the <code>write.table()</code>  function. Please note that R will export the data to our current directory or the folder we have assigned using the <code>setwd()</code> function:</p>
<p className="it">Write.table (datos, "mydata.csv", sep = ",")</p>

<p className="p">write.table(data, "mydata.csv", sep=",")</p>

<h4 className="p">How it works...</h4>
<p className="it">El primer argumento en la <code>write.table()</code>función son los datos en R que queremos exportar. El segundo argumento es el nombre del archivo. Podemos exportar datos en el. Xls o. Txt, simplemente reemplazando los mydatos. Extensión de archivo csv con mydata. Txt o mydata. Xls en la <code>write.table()</code>  función.</p>

<p className="p">The first argument in the <code>write.table()</code> function is the data in R that we would like to export. The second argument is the name of the file. We can export data in the . xls or . txt format, simply by replacing the mydata. csv file extension with mydata. txt or mydata. xls in the <code>write.table()</code>  function.</p>
<h3 className="p">Writing a function in R</h3>
<p className="it">La mayoría de las tareas en R se realizan utilizando funciones. Una función en R tiene la misma utilidad que las funciones en Aritmética.</p>

<p className="p">Most of the tasks in R are performed using functions. A function in R has the same utility as functions in Arithmetic.</p>
<h3 className="p">Getting ready</h3>
<p className="it">Para escribir una función simple en R, primero debemos abrir un nuevo script R navegando a <strong>File | Nuevo archivo</strong> .</p>

<p className="p">In order to write a simple function in R, we must first open a new R script by navigating to <strong>File | New file</strong>.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Escribimos una función muy simple que acepta dos valores y los agrega juntos. Copie y pegue el código en el nuevo script en blanco R:</p>

<p className="p">We write a very simple function that accepts two values and adds them together. Copy and paste the code in the new blank R script:</p>
<p className="it">Add = función (x, y) &#123;x + y</p>

<p className="p">add = function (x,y)&#123; x+y</p>
<p className="it">&#125;</p>

<p className="p">&#125;</p>

<h4 className="p">How it works...</h4>
<p className="it">Una función en R debe ser definida por <code>function()</code>. Una vez que definimos nuestra función, necesitamos guardarla como una. R archivo. Tenga en cuenta que el nombre del archivo debe ser el mismo que la función; Por lo tanto, guardar nuestra función con el nombre añadir. R</p>

<p className="p">A function in R should be defined by <code>function()</code>. Once we define our function, we need to save it as a . r file. Note that the name of the file should be the same as the function; hence we save our function with name add. r.</p>
<p className="it">Para utilizar la <code>add()</code>función en la ventana de comandos R, necesitamos generar el archivo utilizando la <code>source()</code>función de la siguiente manera:</p>

<p className="p">In order to use the <code>add()</code> function in the R command window, we need to source the file by using the <code>source()</code> function as follows:</p>

<p className="it">Ahora, podemos escribir add (2,15) en la ventana de comandos R. Usted consigue 17 impreso como una salida.</p>

<p className="p">Now, we can type add(2,15) in the R command window. You get 17 printed as an output.</p>
<p className="it">La función en sí toma dos argumentos en nuestra receta pero, en realidad, puede tomar muchos argumentos. Cualquier cosa definida dentro de las llaves se ejecuta cuando llamamos <code>add()</code>. En nuestro caso, pedimos al usuario que ingrese dos variables, y la salida es una suma simple.</p>

<p className="p">The function itself takes two arguments in our recipe but, in reality, it can take many arguments. Anything defined inside curly braces gets executed when we call <code>add()</code>. In our case, we request the user to input two variables, and the output is a simple sum.</p>
<p className="it">Ver también</p>

<p className="p">See also</p>
<ul>
<li className="it">  Las funciones pueden ser útiles para realizar tareas repetitivas, como generar gráficos o realizar cálculos complicados. Felix Schonbrodt ha implementado parcelas acuarela visualmente ponderados en I usando una función en su blog en http: //www.nicebr ead.de/visually- Acuarela parcelas ponderado nuevas variantes-favor-voto /.</li>

<li className="p">  Functions can be helpful in performing repetitive tasks such as generating plots or perform complicated calculations. Felix Schonbrodt has implemented visually weighted watercolor plots in R using a function on his blog at http ://www.nicebr ead.de/visually- weighted-watercolor-plots-new-variants-please-vote/.</li>
<li className="it">  Podemos generar gráficos similares simplemente copiando la función creada por Felix en nuestra sesión R y ejecutándola. La función de trazado creada por Felix también proporciona a los usuarios diferentes formas en las que la capacidad de la función R puede ser apalancada para realizar tareas repetitivas.</li>
<li className="p">  We can generate similar plots simply by copying the function created by Felix in our R session and executing it. The plotting function created by Felix also provides users with different ways in which the R function's ability could be leveraged to perform repetitive tasks.</li>
</ul>
<p className="it">Escribir si else declaraciones en R</p>

<p className="p">Writing if else statements in R</p>
<p className="it">A menudo utilizamos las sentencias if en MS Excel, pero también podemos escribir un código pequeño para realizar tareas sencillas en R.</p>

<p className="p">We often use if statements in MS Excel, but we can also write a small code to perform simple tasks in R.</p>
<h4 className="p">How to do it...</h4>
<p className="it">La lógica de las sentencias if else es muy simple y es la siguiente:</p>

<p className="p">The logic for if else statements is very simple and is as follows:</p>

<p className="it">Podemos copiar y pegar la sentencia anterior en la consola R o escribir una función que haga uso de la lógica if else.</p>

<p className="p">We can copy and paste the preceding statement in the R console or write a function that makes use of the if else logic.</p>
<h4 className="p">How it works...</h4>
<p className="it">La lógica detrás de las sentencias else es muy simple. Las líneas siguientes indican claramente la lógica:</p>

<p className="p">The logic behind if else statements is very simple. The following lines clearly state the logic:</p>

<p className="it">El código anterior comprobará si x es mayor o menor que 3, y simplemente imprima. Para obtener el valor, tecleamos lo siguiente en la ventana de comandos R:</p>

<p className="p">The preceding code will check whether x is greater than or less than 3, and simply print it. In order to get the value, we type the following in the R command window:</p>

<p className="it">Loops básicos en R</p>

<p className="p">Basic loops in R</p>
<p className="it">Si queremos realizar una acción repetidamente en R, podemos utilizar la funcionalidad de bucle.</p>

<p className="p">If we want to perform an action repeatedly in R, we can utilize the loop functionality.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Las siguientes líneas de código multiplican cada elemento de x e y y los almacenan como un vector z:</p>

<p className="p">The following lines of code multiply each element of x and y and store them as a vector z:</p>

<h4 className="p">How it works...</h4>
<p className="it">En el código anterior, se ejecuta un cálculo 10 veces. R realiza cualquier cálculo especificado dentro de &#123;&#125;. Estamos instruyendo R a multiplicar cada elemento de x (usando la notación x [i]) por cada elemento en y y almacenar el resultado en z.</p>

<p className="p">In the preceding code, a calculation is executed 10 times. R performs any calculation specified within &#123;&#125;. We are instructing R to multiply each element of x (using the x[i] notation) by each element in y and store the result in z.</p>
<p className="it">Anidados bucles en R</p>

<p className="p">Nested loops in R</p>
<p className="it">Podemos anidar bucles, así como declaraciones si, para realizar algunas tareas más complicadas. En esta receta, primero definiremos una matriz cuadrada y luego escribiremos un bucle anidado para imprimir solamente aquellos valores donde I = J, a saber, los valores en la matriz colocados en (1,1), (2,2), y pronto.</p>

<p className="p">We can nest loops, as well as if statements, to perform some more complicated tasks. In this recipe, we will first define a square matrix and then write a nested for loop to print only those values where I = J, namely, the values in the matrix placed in (1,1), (2,2), and so on.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Primero definimos una matriz en R usando la siguiente <code>matrix()</code>  función:</p>

<p className="p">We first define a matrix in R using the following <code>matrix()</code>  function:</p>

<p className="it">Ahora, usamos el siguiente código para generar sólo aquellos elementos donde I = J:</p>

<p className="p">Now, we use the following code to output only those elements where I = J:</p>

<p className="it">La sentencia if está anidada dentro de dos para las sentencias de bucle. Como tenemos una matriz, tenemos que usar dos bucles for en lugar de uno solo. La salida de la matriz sería valores tales como 1, 7, 13 y 19.</p>

<p className="p">The if statement is nested inside two for loop statements. As we have a matrix, we have to use two for loops instead of just one. The output of the matrix would be values such as 1, 7, 13, and 19.</p>
<p className="it">Las funciones <code>apply</code>código&gt;, <code>lapply</code>código&gt;, <code>sapply</code>código&gt; y <code>tapply</code>código&gt;</p>

<p className="p">The <code>apply</code>code>, <code>lapply</code>code>, <code>sapply</code>code>, and <code>tapply</code>code> functions</p>
<p className="it">R tiene algunas funciones muy útiles como aplicar, sapply, tapply, y mapply, que se puede utilizar para reducir la tarea de escribir declaraciones complicadas. Además, su uso hace que nuestro código se vea más limpio. La <code>apply()</code>función es similar a escribir una instrucción de bucle.</p>

<p className="p">R has some very handy functions such as apply, sapply, tapply, and mapply, that can be used to reduce the task of writing complicated statements. Also, using them makes our code look cleaner. The <code>apply()</code> function is similar to writing a loop statement.</p>
<p className="it">La <code>tapply()</code>función es muy similar a la <code>apply()</code>función, pero puede utilizarse en listas; Esto devolverá una lista. La función sapply () es muy similar a <code>tapply()</code>pero devuelve un vector y no una lista.</p>

<p className="p">The <code>tapply()</code> function is very similar to the <code>apply()</code> function but can be used on lists; this will return a list. The sapply() function is very similar to <code>tapply()</code> but returns a vector and not a list.</p>
<h4 className="p">How to do it...</h4>
<p className="it">La función apply () se puede utilizar de la siguiente manera:</p>

<p className="p">The apply() function can be used as follows:</p>

<p className="it">La <code>tapply()</code>función se puede utilizar de la siguiente manera:</p>

<p className="p">The <code>tapply()</code> function can be used in the following way:</p>

<p className="it">La <code>tapply()</code>función es útil cuando hemos roto un vector en factores, grupos o categorías:</p>

<p className="p">The <code>tapply()</code> function is useful when we have broken a vector into factors, groups, or categories:</p>

<h4 className="p">How it works...</h4>
<p className="it">El primer argumento en la <code>apply()</code>función son los datos. El segundo argumento toma dos valores: 1 y 2; Si decimos 1, R realizará un cálculo en fila; Si mencionamos 2, R realizará un cálculo en columnas. El tercer argumento es la función. Nos gustaría calcular la desviación estándar de cada fila en R; Por lo tanto, usamos la función sd como el tercer argumento. Tenga en cuenta que podemos definir nuestra propia función y reemplazarla por la función sd.</p>

<p className="p">The first argument in the <code>apply()</code> function is the data. The second argument takes two values: 1 and 2; if we state 1, R will perform a row-wise computation; if we mention 2, R will perform a column-wise computation. The third argument is the function. We would like to calculate the standard deviation of each row in R; hence we use the sd function as the third argument. Note that we can define our own function and replace it with the sd function.</p>
<p className="it">Con respecto a la <code>tapply()</code>función, hemos definido J como una lista y nos gustaría calcular la media. El primer argumento en la <code>tapply()</code>función es los datos y el segundo argumento es la función utilizada para procesar los datos.</p>

<p className="p">With regard to the <code>tapply()</code> function, we have defined J as a list and would like to calculate the mean. The first argument in the <code>tapply()</code> function is the data and the second argument is the function used to process the data.</p>
<p className="it">El primer argumento en la <code>tapply()</code>función son los datos; En nuestro caso es mpg. El segundo argumento es el factor o el agrupamiento; En este caso sería engranajes. El último argumento es la función utilizada para procesar los datos. Nos gustaría calcular la media de mpg para cada engranaje único (3, 4 y 5 marchas) en los datos de mtcars.</p>

<p className="p">The first argument in the <code>tapply()</code> function is the data; in our case it is mpg. The second argument is the factor or the grouping; in this case it would be gears. The last argument is the function used to process the data. We would like to calculate the mean of mpg for each unique gear (3, 4, and 5 gears) in the mtcars data.</p>
<p className="it">Usando el par para embellecer una trama en R</p>

<p className="p">Using par to beautify a plot in R</p>
<p className="it">Una manera rápida y fácil de editar una trama es generando la trama en R y luego usando Inkspace o cualquier otro software para editarlo. Podemos ahorrar un tiempo valioso si conocemos algunas ediciones básicas que se pueden aplicar en una trama configurándolas en una <code>par()</code>función. Todas las opciones disponibles para editar un gráfico se pueden estudiar en detalle escribiendo? Par en la ventana de comandos.</p>

<p className="p">One quick and easy way to edit a plot is by generating the plot in R and then using Inkspace or any other software to edit it. We can save some valuable time if we know some basic edits that can be applied on a plot by setting them in a <code>par()</code> function. All the available options to edit a plot can be studied in detail by typing ?par in the command window.</p>
<p className="it">Cómo hacerlo</p>

<p className="p">How to do it</p>
<p className="it">En el siguiente código, he resaltado algunos parámetros comúnmente utilizados:</p>

<p className="p">In the following code, I have highlighted some commonly used parameters:</p>

<h4 className="p">How it works...</h4>
<p className="it">Bajo la <code>par()</code>función, hemos establecido el color de fondo utilizando el argumento bg =. El argumento las = cambia la orientación de las etiquetas. El col. Laboratorio y col. Los argumentos del eje se utilizan para especificar el color de las etiquetas, así como el eje. El argumento cex se utiliza para especificar el tamaño de las etiquetas y el eje. El argumento bty se utiliza para especificar el estilo de caja en R.</p>

<p className="p">Under the <code>par()</code> function, we have set the background color using the bg = argument. The las = argument changes the orientation of the labels. The col. lab and col. axis arguments are used to specify the color of the labels as well as the axis. The cex argument is used to specify the size of the labels and axis. The bty argument is used to specify the box style in R.</p>
<p className="it">Guardando parcelas</p>

<p className="p">Saving plots</p>
<p className="it">Podemos ahorrar una parcela en varios formatos, tales como <code>.jpeg</code>, <code>.svg</code>, <code>.pdf</code>, o <code>.png</code>. Prefiero guardar un gráfico como un <code>.png</code>archivo, ya que es más fácil editar un gráfico con Espacio de impresión si se guardan en el formato PNG.</p>

<p className="p">We can save a plot in various formats, such as <code>.jpeg</code>, <code>.svg</code>, <code>.pdf</code>, or <code>.png</code>. I prefer saving a plot as a <code>.png</code> file, as it is easier to edit a plot with Inkspace if saved in the PNG format.</p>
<h4 className="p">How to do it...</h4>
<p className="it">Para guardar una trama en formato <code>.png</code>, podemos utilizar la <code>png()</code>función de la siguiente manera:</p>

<p className="p">To save a plot in the <code>.png</code> format, we can use the <code>png()</code> function as follows:</p>

<h4 className="p">How it works...</h4>
<p className="it">Hemos utilizado la <code>png()</code>función para guardar la trama como un <code>PNG</code>. Para guardar una parcela como <code>PDF</code>, <code>SVG</code>o <code>JPEG</code>, podemos utilizar los <code>pdf()</code>, <code>svg()</code>o <code>jpeg()</code>funciones, respectivamente.</p>

<p className="p">We have used the <code>png()</code> function to save the plot as a <code>PNG</code>. To save a plot as a <code>PDF</code>, <code>SVG</code>, or <code>JPEG</code>, we can use the <code>pdf()</code>, <code>svg()</code>, or <code>jpeg()</code> functions, respectively.</p>
<p className="it">El primer argumento en la <code>png()</code>función es el nombre del archivo con la extensión, seguido por el ancho y la altura de la trama. Ahora podemos usar la <code>plot()</code>función para generar una trama; Las parcelas subsiguientes también se guardarán con una. Png, a menos <code>dev. off ()</code>que se pase la función. La <code>dev. off ()</code>función indica a R que no es necesario guardar las tramas.</p>

<p className="p">The first argument in the <code>png()</code> function is the name of the file with the extension, followed by the width and height of the plot. We can now use the <code>plot()</code> function to generate a plot; any subsequent plots will also be saved with a . png extension, unless the <code>dev. off ()</code> function is passed. The <code>dev. off ()</code> function instructs R that we do not need to save the plots.</p>


</div>
</div>

  </Layout>
)
