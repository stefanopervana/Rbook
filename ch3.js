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
    <h1>Chapter 3. Acquire and Prepare the Ingredients – Your Data</h1>
<p className="it">En este capítulo, cubriremos:</p>


<p className="p">In this chapter, we will cover:</p>
<ul>
<li className="it">Lectura de datos desde archivos CSV</li>

<li className="p">Reading data from CSV files</li>
<li className="it">Lectura de datos XML</li>

<li className="p">Reading XML data</li>
<li className="it">Lectura de datos JSON</li>

<li className="p">Reading JSON data</li>
<li className="it">Lectura de datos de <code>fixed-width</code> archivos formateados</li>

<li className="p">Reading data from <code>fixed-width</code> formatted files</li>
<li className="it">Lectura de datos desde archivos de datos R y bibliotecas R</li>

<li className="p">Reading data from R data files and R libraries</li>
<li className="it">Eliminar casos con valores perdidos</li>

<li className="p">Removing cases with  missing  values</li> 
<li className="it">Sustitución de los valores perdidos por la media</li>

<li className="p">Replacing missing values with the mean</li>
<li className="it">Eliminación de casos duplicados</li>

<li className="p">Removing duplicate cases</li>
<li className="it">Rescaling una variable a [0,1]</li>

<li className="p">Rescaling a variable to [0,1]</li>
<li className="it">Normalización o estandarización de datos en un data frame</li>

<li className="p">Normalizing or standardizing data in a data frame</li>
<li className="it">Binning de datos numéricos</li>

<li className="p">Binning numerical data</li>
<li className="it">Creación de variables dummy para variables categóricas</li>

<li className="p">Creating dummies for categorical variables</li>
</ul>
<h2 className="p">Introduction</h2>
<p className="it">Los analistas de datos necesitan cargar datos de muchos formatos de entrada diferentes en R. Aunque R tiene su propio formato de datos nativo, los datos normalmente existen en formatos de texto, como <strong>CSV (valores separados por comas), JSON (JavaScript Object Notation)</strong> y <strong>XML (Extensible Lenguaje de marcado)</strong>. Este capítulo proporciona recetas para cargar estos datos en su sistema R para su procesamiento.</p>


<p className="p">Data analysts need to load data from many different input formats into R. Although R has its own native data format, data usually exists in text formats, such as <strong>CSV (Comma Separated Values), JSON (JavaScript Object Notation)</strong>, and <strong>XML (Extensible Markup Language)</strong>. This chapter provides recipes to load such data into your R system for processing.</p>

<p className="it">Muy rara vez podemos comenzar a analizar los datos inmediatamente después de cargarlo. A menudo, tendremos que preprocesar los datos para limpiarlos y transformarlos antes de emprender el análisis. Este capítulo proporciona recetas para algunos pasos comunes de limpieza y preprocesamiento.</p>


<p className="p">Very rarely can we start analyzing data immediately after loading it. Often, we will need to preprocess the data to clean and transform it before embarking on analysis. This chapter provides recipes for some common cleaning and preprocessing steps.</p>

<h2 className="p">Reading data from CSV files</h2>
<p className="it">Los formatos CSV se utilizan mejor para representar conjuntos o secuencias de registros en los que cada registro tiene una lista de campos idéntica. Esto corresponde a una única relación en una base de datos relacional, oa datos (aunque no a cálculos) en una hoja de cálculo típica.</p>


<p className="p">CSV formats are best used to  represent sets or sequences of records in which each record has an identical list of fields. This corresponds to  a single relation in a relational database, or to  data (though not calculations) in a typical spreadsheet.</p>

<h3 className="p">Getting ready</h3>
<p className="it">Si aún no ha descargado los archivos de este capítulo, hágalo ahora y asegúrese de que el archivo <code>auto-mpg.csv</code> está en su directorio de trabajo R.</p>


<p className="p">If you have not already downloaded the files for this chapter, do it now and ensure that the <code>auto-mpg.csv</code> file is in your R working directory.</p>

<h3 className="p">How to do it...</h3>
<p className="it">La lectura de datos de archivos <code>.csv</code> se puede hacer usando los siguientes comandos:</p>


<p className="p">Reading data from <code>.csv</code> files can be done using the following commands:</p>
<p className="it">Lea los datos de <code>auto-mpg.csv</code>, que incluye una fila de encabezado:</p>


<p className="p">Read the data from <code>auto-mpg.csv</code>, which includes a header row:</p>
<pre><code>&#62; auto &#60;- read.csv("auto-mpg.csv", header=TRUE, sep = ",")</code></pre>
<p className="it">Verificar los resultados:</p>


<p className="p">Verify the results:</p>
<pre><code>&#62; names(auto)</code></pre>

<h3 className="p">How it works...</h3>
<p className="it">La función <code>read.csv()</code> crea un data frame a partir de los datos del archivo <code>.csv</code>. Si pasamos <code>header=TRUE</code>, entonces la función usa la primera fila para nombrar las variables en el data frame resultante:</p>


<p className="p">The <code>read.csv()</code> function creates a data frame from the data in the <code>.csv</code> file. If we pass <code>header=TRUE</code>, then the function uses the very first row to name the variables in the resulting data frame:</p>
<pre><code>
&#62; names(auto)<br></br>
<br></br>
[1] "No"	"mpg"	"cylinders"<br></br>
[4] "displacement" "horsepower"	"weight"<br></br>
[7] "acceleration" "model_year"	"car_name"
</code></pre>
<p className="it">Los parámetros <code>header</code> y <code>sep</code> nos permiten especificar si el archivo <code>.csv</code> tiene encabezados y el carácter utilizado en el archivo para separar los campos. Los parámetros <code>header=TRUE</code> y <code>sep=","</code> son los valores predeterminados para la función <code>read.csv()</code>; podemos omitirlos en el ejemplo de código.</p>


<p className="p">The <code>header</code> and <code>sep</code> parameters allow us to specify whether the <code>.csv</code> file has headers and the character used in the file to separate fields. The <code>header=TRUE</code> and <code>sep=","</code> parameters are the defaults for the <code>read.csv()</code> function—we can omit these in the code example.</p>

<h3 className="p">There's more...</h3>
<p className="it">La función <code>read.csv()</code> es una forma especializada de <code>read.table()</code>. Este último utiliza espacio en blanco como el separador de campos predeterminado. Discutimos algunos argumentos opcionales importantes para estas funciones.</p>


<p className="p">The <code>read.csv()</code> function is a specialized form of <code>read.table()</code>. The latter uses whitespace as the default field separator. We discuss a few important optional arguments to these functions.</p>
<h3 className="p">Handling different column delimiters</h3>
<p className="it">En regiones donde se usa una coma como separador decimal, los archivos <code>.csv</code> utilizan <code>";"</code> como delimitador de campos. Al tratar con tales archivos de datos, utilice <code>read.csv2()</code> para cargar datos en R.</p>


<p className="p">In regions where a comma is used as the decimal separator, <code>.csv</code> files use <code>";"</code> as the field delimiter. While dealing with such data files, use <code>read.csv2()</code> to load data into R.</p>
<p className="it">Como alternativa, puede utilizar el comando <code>read.csv("&lt;file name&gt;", sep=";", dec=",")</code>. Utilice <code>sep="\t"</code> para archivos delimitados por tabuladores.</p>


<p className="p">Alternatively, you can use the <code>read.csv("&#60;file name&#62;", sep=";", dec=",")</code> command. Use <code>sep="\t"</code> for tab-delimited files.</p>
<h3 className="p">Handling column headers/variable names</h3>
<p className="it">Si el archivo de datos no tiene encabezados de columna, establezca <code>header=FALSE</code>.</p>


<p className="p">If your data file does not have column headers, set <code>header=FALSE</code>.</p>

<p className="it">El archivo <code>auto-mpg-noheader.csv</code> no incluye una fila de encabezado. El primer comando del siguiente fragmento lee este archivo. En este caso, R asigna los nombres de variable predeterminados V1, V2, etc.:</p>


<p className="p">The <code>auto-mpg-noheader.csv</code> file does not include a header row. The first command in the following snippet reads this file. In this case, R assigns default variable names V1, V2, and so on:</p>
<pre><code>
&#62; auto	&#60;- read.csv("auto-mpg-noheader.csv", header=FALSE)<br></br>
&#62; head(auto,2)<br></br>
<br></br>
V1 V2 V3	V4 V5	V6	V7 V8	V9<br></br>
1	1 28	4 140 90 2264 15.5 71 chevrolet vega 2300<br></br>
2	2 19	3	70 97 2330 13.5 72	mazda rx2 coupe<br></br>
</code></pre>
<p className="it">Si su archivo no tiene una fila de encabezado y omite el argumento opcional <code>header = FALSE</code>, la función <code>read.csv()</code> utiliza la primera fila para los nombres de variables y termina construyendo nombres de variables agregando X a los valores de datos reales en la primera fila. Observe los nombres de variables sin sentido en el siguiente fragmento:</p>


<p className="p">If your file does not have a header row, and you omit the <code>header = FALSE</code> optional argument, the <code>read.csv()</code> function uses the first row for variable names and ends up constructing variable names by adding X to the actual data values in the first row. Note the meaningless variable names in the following fragment:</p>
<pre><code>
&#62; auto	&#60;- read.csv("auto-mpg-noheader.csv")<br></br>
&#62; head(auto,2)<br></br>
<br></br>
X1 X28 X4 X140 X90 X2264 X15.5 X71 chevrolet.vega.2300<br></br>
1	2	19	3	70	97	2330	13.5	72	mazda rx2 coupe<br></br>
2	3	36	4	107	75	2205	14.5	82	honda accord
</code></pre>
<p className="it">Podemos usar el argumento opcional <code>col.names</code> para especificar los nombres de las columnas. Si se da <code>col.names</code> explicitamente, los nombres de la fila de encabezado se ignoran incluso si se especifica <code>header=TRUE</code>:</p>


<p className="p">We can use the optional <code>col.names</code> argument to specify the column names. If <code>col.names</code> is given explicitly, the names in the header row are ignored even if <code>header=TRUE</code> is specified:</p>

<pre><code>
&#62; auto &#60;- read.csv("auto-mpg-noheader.csv", header=FALSE, col.names = c("No", "mpg",<br></br>"cyl", "dis","hp", "wt", "acc", "year", "car_name"))<br></br>
<br></br>
&#62; head(auto,2)<br></br>
<br></br>
No mpg cyl dis hp	wt	acc year	car_name<br></br>
<br></br>
1	1	28	4 140 90 2264 15.5	71 chevrolet vega 2300<br></br>
2	2	19	3	70 97 2330 13.5	72	mazda rx2 coupe<br></br>
</code></pre>

<h3 className="p">Handling missing values</h3>
<p className="it">Al leer datos de archivos de texto, R trata blancos en variables numéricas como NA (significando datos faltantes). De forma predeterminada, se leen espacios en blanco en atributos categóricos como espacios en blanco y no como NA. Para tratar los espacios en blanco como NA para variables categóricas y de caracteres, establezca <code>na.strings=""</code>:</p>


<p className="p">When reading data from text files, R treats blanks in numerical variables as NA (signifying missing data). By default, it reads blanks in categorical attributes just as blanks and not as NA. To treat blanks as NA for categorical and character variables, set <code>na.strings=""</code>:</p>
<p className="it">&gt; Auto &lt;- read.csv ("auto-mpg.csv", na.strings = "")</p>


<p className="p">&#62; auto	&#60;- read.csv("auto-mpg.csv", na.strings="")</p>

<p className="it">Si el archivo de datos utiliza una cadena especificada (como <code>"N/A"</code> o <code>"NA"</code>, por ejemplo) para indicar los valores faltantes, puede especificar esa cadena como argumento <code>na.strings</code>, como en <code>na.strings= "N/A"</code> o <code>na.strings = "NA"</code>.</p>


<p className="p">If the data file uses a specified string (such as <code>"N/A"</code> or <code>"NA"</code> for example) to indicate the missing values, you can specify that string as the <code>na.strings</code> argument, as in <code>na.strings= "N/A"</code> or <code>na.strings = "NA"</code>.</p>
<h3 className="p">Reading strings as characters and not as factors</h3>
<p className="it">De forma predeterminada, R trata las cadenas como factores (variables categóricas). En algunas situaciones, puede que quiera dejarlas como cadenas de caracteres. Use <code>stringsAsFactors=FALSE</code> para lograr esto:</p>


<p className="p">By default, R treats strings as factors (categorical variables). In some situations, you may want to leave them as character strings. Use <code>stringsAsFactors=FALSE</code> to achieve this:</p>
<pre><code>&#62; auto &#60;- read.csv("auto-mpg.csv",stringsAsFactors=FALSE)</code></pre>

<p className="it">Sin embargo, para tratar selectivamente variables como caracteres, puede cargar el archivo con los valores predeterminados (es decir, leer todas las cadenas como factores) y luego usar <code>as.character()</code> para convertir en caracteres las variables factor requeridas.</p>


<p className="p">However, to selectively treat variables as characters, you can load the file with the defaults (that is, read all strings as factors) and then use <code>as.character()</code> to convert the requisite factor variables to characters.</p>
<h3 className="p">Reading data directly from a website</h3>
<p className="it">Si el archivo de datos está disponible en la Web, puede cargarlo directamente en R en lugar de descargarlo y guardarlo localmente antes de cargarlo en R:</p>


<p className="p">If the data file is available on the Web, you can load it into R directly instead of downloading and saving it locally before loading it into R:</p>
<pre><code>
&#62; dat &#60;- read.csv("http://www.exploredata.net/ftp/WHO.csv")
</code></pre>

<h2 className="p">Reading XML data</h2>
<p className="it">Es posible que a veces necesite extraer datos de sitios web. Muchos proveedores también proporcionan datos en formatos XML y JSON. En esta receta, aprendemos sobre la lectura de datos XML.</p>


<p className="p">You may sometimes need to extract data from websites. Many providers also supply data in XML and JSON formats. In this recipe, we learn about reading XML data.</p>


<p className="it">Si el paquete XML ya no está instalado en su entorno R, instale el paquete de la siguiente manera:</p>


<p className="p">If the XML package is not already installed in your R environment, install the package now as follows:</p>
<pre><code>
&#62; install.packages("XML")
</code></pre>
<h3 className="p">How to do it...</h3>

<p className="it">Los datos XML se pueden leer siguiendo estos pasos:</p>


<p className="p">XML data can be read by following these steps:</p>
<p className="it">1- Cargar la biblioteca e inicializar:</p>


<p className="p">1- Load the library and initialize:</p>
<pre><code>
&#62; library(XML)<br></br>
&#62; url &#60;- "http://www.w3schools.com/xml/cd_catalog.xml"
</code></pre>
<p className="it">2- Analizar el archivo XML y obtener el root node:</p>


<p className="p">2- Parse the XML file and get the root node:</p>
<pre><code>
&#62; xmldoc &#60;- xmlParse(url)<br></br>
&#62; rootNode &#60;- xmlRoot(xmldoc)<br></br>
&#62; rootNode[1]
</code></pre>

<p className="it">3- Extraer datos XML:</p>


<p className="p">3- Extract XML data:</p>
<pre><code>
&#62; data &#60;- xmlSApply(rootNode,function(x) xmlSApply(x, xmlValue))
</code></pre>

<p className="it">4- Convierta los datos extraídos en un data frame:</p>


<p className="p">4- Convert the extracted data into a data frame:</p>
<pre><code>
&#62; cd.catalog &#60;- data.frame(t(data),row.names=NULL)
</code></pre>

<p className="it">5- Verificar los resultados:</p>


<p className="p">5- Verify the results:</p>
<pre><code>
&#62; cd.catalog[1:2,]
</code></pre>
<h3 className="p">How it works...</h3>
<p className="it">La  función<code>xmlParse</code> devuelve un objeto de la clase <code>XMLInternalDocument</code>, que es una estructura de datos interna de nivel C.</p>


<p className="p">The <code>xmlParse</code> function returns an object of the <code>XMLInternalDocument</code> class, which is a C-level internal data structure.</p>
<p className="it">La función <code>xmlRoot()</code> obtiene acceso al root node y sus elementos. Comprobamos el primer elemento del root node:</p>


<p className="p">The <code>xmlRoot()</code> function gets access to the root node and its elements. We check the first element of the root node:</p>
<pre><code>
&#62; rootNode[1]<br></br>
<br></br>
$CD<br></br>
&#60;CD&#62;<br></br>
&#60;TITLE&#62;Empire Burlesque&#60;/TITLE&#62;<br></br>
&#60;ARTIST&#62;Bob Dylan&#60;/ARTIST&#62;<br></br>
&#60;COUNTRY&#62;USA&#60;/COUNTRY&#62;<br></br>
&#60;COMPANY&#62;Columbia&#60;/COMPANY&#62;<br></br>
&#60;PRICE&#62;10.90&#60;/PRICE&#62;<br></br>
&#60;YEAR&#62;1985&#60;/YEAR&#62;<br></br>
&#60;/CD&#62;<br></br>
attr(,"class")<br></br>
[1] "XMLInternalNodeList" "XMLNodeList"
</code></pre>

<p className="it">Para extraer datos del root node, utilizamos la función <code>xmlSApply()</code> iterativamente sobre todos los hijos del root node. La función <code>xmlSApply</code> devuelve una matriz.</p>


<p className="p">To extract data from the root node, we use the <code>xmlSApply()</code> function iteratively over all the children of the root node. The <code>xmlSApply</code> function returns a matrix.</p>
<p className="it">Para convertir la matriz anterior en una trama de datos, transponemos la matriz usando la función <code>t()</code>. Luego extraemos las dos primeras filas del data frame <code>cd.catalog</code>:</p>


<p className="p">To convert the preceding matrix into a data frame, we transpose the matrix using the <code>t()</code> function. We then extract the first two rows from the <code>cd.catalog</code> data frame:</p>
<pre><code>
&#62; cd.catalog[1:2,]<br></br>
TITLE	ARTIST COUNTRY	COMPANY PRICE YEAR<br></br>
Empire Burlesque	Bob Dylan	USA	Columbia 10.90 1985<br></br>
Hide your heart Bonnie Tyler	UK CBS Records	9.90 1988
</code></pre>

<h3 className="p">There´s more...</h3>

<p className="it">Los datos XML pueden anidarse profundamente y por lo tanto pueden llegar a ser complejos de extraer. El conocimiento de <code>XPath</code> será útil para acceder a etiquetas XML específicas. R proporciona varias funciones tales como <code>xpathSApply</code> y <code>getNodeSet</code> para localizar elementos específicos.</p>


<p className="p">XML data can be deeply nested and hence can become complex to extract. Knowledge of <code>XPath</code> will be helpful to access specific XML tags. R provides several functions such as <code>xpathSApply</code> and <code>getNodeSet</code> to locate specific elements.</p>
<h3 className="p">Extracting HTML table data from a web page</h3>
<p className="it">Aunque es posible tratar los datos HTML como una forma especializada de XML, R proporciona funciones específicas para extraer datos de las tablas HTML de la siguiente manera:</p>


<p className="p">Though it is possible to treat HTML data as a specialized form of XML, R provides specific functions to extract data from HTML tables as follows:</p>
<pre><code>
&#62; url &#60;- "http://en.wikipedia.org/wiki/World_population"<br></br>
&#62; tables &#60;- readHTMLTable(url)<br></br>
&#62; world.pop &#60;- tables[[5]]<br></br>
</code></pre>
<p className="it">La función <code>readHTMLTable()</code> analiza la página web y devuelve una lista de todas las tablas que se encuentran en la página. Para las tablas que tienen un atributo id, la función utiliza el atributo id como nombre de ese elemento de lista.</p>


<p className="p">The <code>readHTMLTable()</code> function parses the web page and returns a list of all tables that are found on the page. For tables that have an id attribute, the function uses the id attribute as the name of that list element.</p>

<p className="it">Estamos interesados ​​en extraer los "10 países más poblados", que es la quinta tabla; Por lo tanto usamos <code>tables[[5]]</code>.</p>


<p className="p">We are interested in extracting the "10 most populous countries," which is the fifth table; hence we use <code>tables[[5]]</code>.</p>
<h3 className="p">Extracting a single HTML table from a web page</h3>
<p className="it">Se puede extraer una sola tabla utilizando el siguiente comando:</p>


<p className="p">A single table can be extracted using the following command:</p>
<pre><code>
&#62; table &#60;- readHTMLTable(url,which=5)
</code></pre>
<p className="it">Especifique para qué obtener datos de una tabla específica. R devuelve un data frame.</p>


<p className="p">Specify which to get data from a specific table. R returns a data frame.</p>

<h2 className="p">Reading JSON data</h2>
<p className="it">Varios servicios web <code>RESTful</code> devuelven datos en formato JSON, de alguna manera más simples y eficientes que XML. Esta receta le muestra cómo leer los datos de JSON.</p>


<p className="p">Several <code>RESTful</code> web services return data in JSON format—in some ways simpler and more efficient than XML. This recipe shows you how to read JSON data.</p>

<h3 className="p">Getting ready</h3>
<p className="it">R proporciona varios paquetes para leer datos JSON, pero usamos el paquete <code>jsonlite</code>. Instale el paquete en su entorno R de la siguiente manera:</p>


<p className="p">R provides several packages to read JSON data, but we use the <code>jsonlite</code> package. Install the package in your R environment as follows:</p>
<pre><code>
&#62; install.packages("jsonlite")
</code></pre>

<p className="it">Si aún no ha descargado los archivos de este capítulo, hágalo ahora y asegúrese de que los archivos <code>students.json files</code> y <code>student-courses.json</code> estén en su directorio de trabajo R.</p>


<p className="p">If you have not already downloaded the files for this chapter, do it now and ensure that the <code>students.json files</code> and <code>student-courses.json</code> files are in your R working directory.</p>

<p className="it">Una vez que los archivos estén listos y cargue el paquete <code>jsonlite</code> y lea los archivos de la siguiente manera:</p>


<p className="p">Once the files are ready and load the <code>jsonlite</code> package and read the files as follows:</p>
<p className="it">1. Cargue la biblioteca:</p>


<p className="p">1. Load the library:</p>

<pre><code>
&#62; library(jsonlite)
</code></pre>
<p className="it">2. Cargue los datos JSON de los archivos:</p>


<p className="p">2. Load the JSON data from files:</p>
<pre><code>
&#62; dat.1 &#60;- fromJSON("students.json")<br></br>
&#62; dat.2 &#60;- fromJSON("student-courses.json")
</code></pre>
<p className="it">3. Cargue el documento JSON desde la Web:</p>


<p className="p">3. Load the JSON document from the Web:</p>
<pre><code>
&#62; url &#60;- "http://finance.yahoo.com/webservice/v1/symbols/allcurrencies/quote? format=json"</code></pre>
<pre><code>
&#62; jsonDoc &#60;- fromJSON(url)
</code></pre>
<p className="it">4. Extraer datos en el data frames:</p>


<p className="p">4. Extract data into data frames:</p>
<pre><code>
&#62; dat &#60;- jsonDoc$list$resources$resource$fields
</code></pre>
<p className="it">5. Verificar los resultados:</p>


<p className="p">5. Verify the results:</p>
<pre><code>
&#62; dat[1:2,]<br></br>
&#62; dat.1[1:3,]<br></br>
&#62; dat.2[,c(1,2,4:5)]
</code></pre>
<h3 className="p">How it works...</h3>
<p className="it">El paquete <code>jsonlite</code> proporciona dos funciones clave: <code>fromJSON</code> y <code>toJSON</code>.</p>


<p className="p">The <code>jsonlite</code> package provides two key functions: <code>fromJSON</code> and <code>toJSON</code>.</p>
<p className="it">La función <code>fromJSON</code> puede cargar datos directamente desde un archivo o desde una página web como muestran los pasos 2 y 3 anteriores. Si obtiene errores al descargar contenido directamente desde la Web, instale y cargue el paquete <code>httr</code>.</p>


<p className="p">The <code>fromJSON</code> function can load data either directly from a file or from a web page as the preceding steps 2 and 3 show. If you get errors in downloading content directly from the Web, install and load the <code>httr</code> package.</p>
<p className="it">Dependiendo de la estructura del documento JSON, la carga de los datos puede variar en complejidad.</p>


<p className="p">Depending on the structure of the JSON document, loading the data can vary in complexity.</p>

<p className="it">Si se le da una URL, la función <code>fromJSON</code> devuelve un objeto de lista. En la lista anterior, en el paso 4, vemos cómo extraer el data frame adjunto.</p>


<p className="p">If given a URL, the <code>fromJSON</code> function returns a list object. In the preceding list, in step 4, we see how to extract the enclosed data frame.</p>

<h2 className="p">Reading data from <code>fixed-width</code> formatted files</h2>

<p className="it">En los archivos <code>fixed-width</code> formateados, las columnas tienen anchuras fijas; Si un elemento de datos no utiliza todo el ancho de columna asignado, entonces el elemento se rellena con espacios para completar el ancho especificado. Para leer archivos <code>fixed-width</code> de texto, especifique columnas por anchos de columna o por posiciones iniciales.</p>


<p className="p">In <code>fixed-width</code> formatted files, columns have fixed widths; if a data element does not use up the entire allotted column width, then the element is padded with spaces to make up the specified width. To read <code>fixed-width</code> text files, specify columns by column widths or by starting positions.</p>

<h3 className="p">Getting ready</h3>
<p className="it">Descargue los archivos de este capítulo y guarde el archivo <code>student-fwf.txt</code> en su directorio de trabajo R.</p>


<p className="p">Download the files for this chapter and store the <code>student-fwf.txt</code> file in your R working directory.</p>


<p className="it">Lea el archivo <code>fixed-width</code> formateado de la siguiente manera:</p>


<p className="p">Read the <code>fixed-width</code> formatted file as follows:</p>
<pre><code>
&#62; student	&#60;- read.fwf("student-fwf.txt", widths=c(4,15,20,15,4),<br></br> col.names=c("id","name","email","major","year"))
</code></pre>

<h3 className="p">How it works...</h3>
<p className="it">En el archivo <code>student-fwf.txt</code>, la primera columna ocupa 4 posiciones de carácter, la segunda 15, y así sucesivamente. La expresión <code>c(4,15,20,15,4)</code> especifica los anchos de las cinco columnas del archivo de datos.</p>


<p className="p">In the <code>student-fwf.txt</code> file, the first column occupies 4 character positions, the second 15, and so on. The <code>c(4,15,20,15,4)</code> expression specifies the widths of the five columns in the data file.</p>

<p className="it">Podemos usar el argumento opcional <code>col.names</code> para suministrar nuestros propios nombres de variable.</p>


<p className="p">We can use the optional <code>col.names</code> argument to supply our own variable names.</p>

<h3 className="p">There's more...</h3>
<p className="it">La función <code>read.fwf()</code> tiene varios argumentos opcionales que resultan útiles. Discutimos algunos de estos como sigue:</p>


<p className="p">The <code>read.fwf()</code> function has several optional arguments that come in handy. We discuss a few of these as follows:</p>
<h3 className="p">Files with headers</h3>
<p className="it">Los archivos con encabezados utilizan el siguiente comando:</p>


<p className="p">Files with headers use the following command:</p>

<pre><code>
&#62; student	&#60;- read.fwf("student-fwf-header.txt", widths=c(4,15,20,15,4),<br></br>
	header=TRUE, sep="\t",skip=2)
</code></pre>

<p className="it">Si <code>header=TRUE</code>, la primera fila del archivo se interpreta como teniendo los encabezados de columna. Los encabezados de columna, si están presentes, deben separarse por el argumento <code>sep</code> especificado. El argumento sep sólo se aplica a la fila de encabezado.</p>


<p className="p">If <code>header=TRUE</code>, the first row of the file is interpreted as having the column headers. Column headers, if present, need to be separated by the specified <code>sep</code> argument. The sep argument only applies to the header row.</p>

<p className="it">El argumento skip indica el número de líneas a omitir; En esta receta, las primeras dos líneas se saltan.</p>


<p className="p">The skip argument denotes the number of lines to skip; in this recipe, the first two lines are skipped.</p>

<h3 className="p">Excluding columns from data</h3>
<p className="it">Para excluir una columna, haga que el ancho de columna sea negativo. Por lo tanto, para excluir la columna de correo electrónico, se especificará su ancho como -20 y también quitar el nombre de columna del vector <code>col.names</code> de la siguiente manera:</p>


<p className="p">To exclude a column, make the column width negative. Thus, to exclude the e-mail column, we will specify its width as -20 and also remove the column name from the <code>col.names</code> vector as follows:</p>
<pre><code>
&#62; student &#60;- read.fwf("student-fwf.txt",widths=c(4,15,-20,15,4),<br></br> col.names=c("id","name","major","year"))
</code></pre>

<h2 className="p">Reading data from R files and R libraries</h2>
<p className="it">Durante el análisis de datos, se crearán varios objetos R. Puede guardarlos en el formato de datos nativo R y recuperarlos más tarde según sea necesario.</p>


<p className="p">During data analysis, you will create several R objects. You can save these in the native R data format and retrieve them later as needed.</p>


<p className="it">Primero, cree y guarde objetos R de forma interactiva como se muestra en el siguiente código. Asegúrese de tener acceso de escritura al directorio de trabajo R:</p>


<p className="p">First, create and save R objects interactively as shown in the following code. Make sure you have write access to the R working directory:</p>

<pre><code>
&#62; customer &#60;- c("John", "Peter", "Jane")<br></br>
&#62; orderdate &#60;- as.Date(c('2014-10-1','2014-1-2','2014-7-6'))<br></br>
&#62; orderamount &#60;- c(280, 100.50, 40.25)<br></br>
&#62; order &#60;- data.frame(customer,orderdate,orderamount)<br></br>
&#62; names &#60;- c("John", "Joan")<br></br>
&#62; save(order, names, file="test.Rdata")<br></br>
&#62; saveRDS(order,file="order.rds")<br></br>
&#62; remove(order)
</code></pre>

<p className="it">Después de guardar el código anterior, la función <code>remove()</code> elimina el objeto de la sesión actual.</p>


<p className="p">After saving the preceding code, the <code>remove()</code> function deletes the object from the current session.</p>


<p className="it">Para poder leer datos de archivos y bibliotecas R, siga estos pasos:</p>


<p className="p">To be able to read data from R files and libraries, follow these steps:</p>
<p className="it">Cargar datos de los archivos de datos R en la memoria:</p>


<p className="p">Load data from R data files into memory:</p>

<pre><code>
&#62; load("test.Rdata")<br></br>
&#62; ord &#60;- readRDS("order.rds")
</code></pre>

<p className="it">El paquete de datasets se carga en el entorno R de forma predeterminada y contiene los conjuntos de datos de <code>iris</code> y <code>cars</code>. Para cargar los datos de estos conjuntos de datos en la memoria, utilice el código siguiente:</p>


<p className="p">The datasets package is loaded in the R environment by default and contains the <code>iris</code> and <code>cars</code> datasets. To load these datasets' data into memory, use the following code:</p>
<pre><code>
&#62; data(iris)<br></br>
&#62; data(c(cars,iris))
</code></pre>

<p className="it">El primer comando carga sólo el conjunto de datos del <code>iris</code>, y el segundo carga los conjuntos de datos de <code>cars</code> e <code>iris</code>.</p>


<p className="p">The first command loads only the <code>iris</code> dataset, and the second loads the <code>cars</code> and <code>iris</code> datasets.</p>


<p className="it">La función <code>save()</code> guarda la versión serializada de los objetos suministrados como argumentos junto con el nombre del objeto. La función <code>load()</code> posterior restaura los objetos guardados con los mismos nombres de objeto con los que se guardaron, al entorno global de forma predeterminada. Si hay objetos existentes con los mismos nombres en ese entorno, se reemplazarán sin advertencias.</p>


<p className="p">The <code>save()</code> function saves the serialized version of the objects supplied as arguments along with the object name. The subsequent <code>load()</code> function restores the saved objects with the same object names they were saved with, to the global environment by default. If there are existing objects with the same names in that environment, they will be replaced without any warnings.</p>

<p className="it">La función <code>saveRDS()</code> guarda sólo un objeto. Guarda la versión serializada del objeto y no el nombre del objeto. Por lo tanto, con la función <code>readRDS()</code> el objeto guardado se puede restaurar en una variable con un nombre diferente de cuando se guardó.</p>


<p className="p">The <code>saveRDS()</code> function saves only one object. It saves the serialized version of the object and not the object name. Hence, with the <code>readRDS()</code> function the saved object can be restored into a variable with a different name from when it was saved.</p>


<p className="it">La receta anterior le ha mostrado cómo leer objetos R guardados. Vemos más opciones en esta sección.</p>


<p className="p">The preceding recipe has shown you how to read saved R objects. We see more options in this section.</p>
<p className="it">Para guardar todos los objetos en una sesión</p>


<p className="p">To save all objects in a session</p>
<p className="it">El siguiente comando se puede utilizar para guardar todos los objetos:</p>


<p className="p">The following command can be used to save all objects:</p>
<pre><code>
&#62; save.image(file = "all.RData")
</code></pre>

<p className="it">Para guardar objetos de forma selectiva en una sesión</p>


<p className="p">To selectively save objects in a session</p>
<p className="it">Para guardar objetos de forma selectiva utilice los siguientes comandos:</p>


<p className="p">To save objects selectively use the following commands:</p>
<pre><code>
&#62; odd &#60;- c(1,3,5,7)<br></br>
&#62; even &#60;- c(2,4,6,8)<br></br>
&#62; save(list=c("odd","even"),file="OddEven.Rdata")
</code></pre>
<p className="it">El argumento lista especifica un vector de caracteres que contiene los nombres de los objetos que se van a guardar. Posteriormente, cargar datos desde el archivo <code>OddEven.Rdata</code> crea objetos pares e impares. La función <code>saveRDS()</code> puede guardar sólo un objeto a la vez.</p>


<p className="p">The list argument specifies a character vector containing the names of the objects to be saved. Subsequently, loading data from the <code>OddEven.Rdata</code> file creates both odd and even objects. The <code>saveRDS()</code> function can save only one object at a time.</p>

<h3 className="p">Attaching/detaching R data files to an environment</h3>

<p className="it">Al cargar archivos <code>Rdata</code>, si queremos que nos notifiquemos si ya existen objetos con el mismo nombre en el entorno, podemos usar:</p>


<p className="p">While loading <code>Rdata</code> files, if we want to be notified whether objects with the same name already exist in the environment, we can use:</p>
<pre><code>
&#62; attach("order.Rdata")
</code></pre>

<p className="it">El archivo <code>order.Rdata</code> contiene un objeto denominado order. Si ya existe un objeto denominado order en el entorno, obtendremos el siguiente error:</p>


<p className="p">The <code>order.Rdata</code> file contains an object named order. If an object named order already exists in the environment, we will get the following error:</p>
<p className="it">El siguiente objeto es <code>masked _by_ .GlobalEnv</code>:</p>


<p className="p">The following object is <code>masked _by_ .GlobalEnv</code>:</p>

<pre><code>
order
</code></pre>
<h3 className="p">Listing all datasets in loaded packages</h3>
<p className="it">Todos los paquetes cargados se pueden listar usando el siguiente comando:</p>


<p className="p">All the loaded packages can be listed using the following command:</p>

<pre><code>
&#62; data()
</code></pre>

<h2 className="p">Removing cases with missing values</h2>
<p className="it">Los conjuntos de datos vienen con cantidades variables de datos faltantes. Cuando tenemos datos abundantes, a veces (no siempre) queremos eliminar los casos que tienen valores faltantes para una o más variables. Esta receta se aplica cuando queremos eliminar casos que tienen valores faltantes, así como cuando queremos eliminar selectivamente casos que tienen valores faltantes para una variable específica solo.</p>


<p className="p">Datasets come with varying amounts of missing data. When we have abundant data, we sometimes (not always) want to eliminate the cases that have missing values for one or more variables. This recipe applies when we  want to  eliminate cases  that have any missing  values, as well as when we want to selectively eliminate cases that have missing values for a specific variable alone.</p>

<h3 className="p">Getting ready</h3>
<p className="it">Descargue el archivo <code>missing-data.csv</code> de los archivos de código de este capítulo a su directorio de trabajo R. Lea los datos del archivo <code>missing-data.csv</code> mientras tiene cuidado de identificar la cadena utilizada en el archivo de entrada para los valores faltantes. En nuestro archivo, los valores faltantes se muestran con cadenas vacías:</p>


<p className="p">Download the <code>missing-data.csv</code> file from the code files for this chapter to your R working directory. Read the data from the <code>missing-data.csv</code> file while taking care to identify the string used in the input file for missing values. In our file, missing values are shown with empty strings:</p>
<pre><code>
&#62; dat &#60;- read.csv("missing-data.csv", na.strings="")
</code></pre>


<p className="it">Para obtener un data frame que sólo tiene los casos sin valores faltantes para cualquier variable, utilice la función <code>na.omit()</code>:</p>


<p className="p">To get a data frame that has only the cases with no missing values for any variable, use the <code>na.omit()</code> function:</p>

<pre><code>
&#62; dat.cleaned &#60;- na.omit(dat)
</code></pre>

<p className="it">Ahora, <code>dat.cleaned</code> contiene sólo aquellos casos de dat, que no tienen valores faltantes en ninguna de las variables.</p>


<p className="p">Now, <code>dat.cleaned</code> contains only those cases from dat, which have no missing values in any of the variables.</p>

<p className="it">La función <code>na.omit()</code> interna utiliza la <code>is.na()</code> función que nos permite encontrar si su argumento es NA. Cuando se aplica a un solo valor, devuelve un valor booleano. Cuando se aplica a una colección, devuelve un vector:</p>


<p className="p">The <code>na.omit()</code> function internally uses the <code>is.na()</code> function that allows us to find whether its argument is NA. When applied to a single value, it returns a boolean value. When applied to a collection, it returns a vector:</p>
<pre><code>
&#62; is.na(dat[4,2])<br></br>
[1] TRUE<br></br>
<br></br>
&#62; is.na(dat$Income)<br></br>
[1] FALSE FALSE FALSE FALSE FALSE TRUE FALSE FALSE FALSE<br></br>
[10] FALSE FALSE FALSE  TRUE FALSE FALSE FALSE FALSE FALSE<br></br>
[19] FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE
</code></pre>
<h3 className="p">There´s more</h3>
<p className="it">A veces necesitará hacer algo más que eliminar casos con valores faltantes. Discutimos algunas opciones en esta sección.</p>


<p className="p">You will sometimes need to do more than just eliminate cases with any missing values. We discuss some options in this section.</p>

<h3 className="p">Eliminating cases with NA for selected variables</h3>
<p className="it">A veces queremos eliminar selectivamente casos que tienen NA sólo para una variable específica. El data frame de ejemplo tiene dos valores faltantes para Ingresos. Para obtener un data frame con sólo estos dos casos eliminados, utilice:</p>


<p className="p">We might sometimes want to selectively eliminate cases that have NA only for  a specific variable. The example data frame has two missing values for Income. To get a data frame with only these two cases removed, use:</p>
<pre><code>
&#62; dat.income.cleaned &#60;- dat[!is.na(dat$Income),]<br></br>
&#62; nrow(dat.income.cleaned)<br></br>
[1] 25<br></br>
</code></pre>

<h3 className="p">Finding cases that have no missing values</h3>
<p className="it">La función <code>complete.cases()</code> toma un data frame o tabla como su argumento y devuelve un vector booleano con <code>TRUE</code> para las filas que no tienen valores faltantes y <code>FALSE</code> en caso contrario:</p>


<p className="p">The <code>complete.cases()</code> function takes a data frame or table as its argument and returns a boolean vector with TRUE for rows that have no missing values and FALSE otherwise:</p>
<pre><code>
&#62; complete.cases(dat)<br></br>
<br></br> 
[1]	TRUE	TRUE	TRUE FALSE	TRUE FALSE	TRUE	TRUE	TRUE<br></br>	   
[10]	TRUE	TRUE	TRUE FALSE	TRUE	TRUE	TRUE FALSE	TRUE<br></br>	   
[19]	TRUE	TRUE	TRUE	TRUE	TRUE	TRUE	TRUE	TRUE	TRUE	 
</code></pre>

<p className="it">Las filas 4, 6, 13 y 17 tienen al menos un valor faltante. En lugar de usar la función <code>na.omit()</code>, podríamos haber hecho lo siguiente también:</p>


<p className="p">Rows 4, 6, 13, and 17 have at least one missing value. Instead of using the <code>na.omit()</code> function, we could have done the following as well:</p>

<pre><code>
&#62; dat.cleaned &#60;- dat[complete.cases(dat),]<br></br>
&#62; nrow(dat.cleaned)<br></br>
[1] 23
</code></pre>

<h3 className="p">Converting specific values to NA</h3>
<p className="it">A veces, podemos saber que un valor específico en un data frame realmente significa que los datos no estaban disponibles. Por ejemplo, en el data frame dat un valor de 0 para el ingreso puede significar que los datos están ausentes. Podemos convertirlos a NA mediante una simple asignación:</p>


<p className="p">Sometimes, we might know that a specific value in a data frame actually means that data was not available. For example, in the dat data frame a value of 0 for income may mean that the data is missing. We can convert these to NA by a simple assignment:</p>

<pre><code>
&#62; dat$Income[dat$Income==0] &#60;- NA
</code></pre>

<h3 className="p">Excluding NA values from computations</h3>
<p className="it">Muchas funciones R devuelven <code>NA</code> cuando algunas partes de los datos en las que trabajan son NA. Por ejemplo, calcular la media o sd en un vector con al menos un valor <code>NA</code> devuelve <code>NA</code> como resultado. Para eliminar <code>NA</code> de consideración, utilice el parámetro <code>na.rm</code>:</p>


<p className="p">Many R functions return <code>NA</code> when some parts of the data they work on are NA. For example, computing the mean or sd on a vector with at least one <code>NA</code> value returns <code>NA</code> as the result. To remove <code>NA</code> from consideration, use the <code>na.rm</code> parameter:</p>

<pre><code>
&#62; mean(dat$Income)<br></br>
[1] NA<br></br>
<br></br>
&#62; mean(dat$Income, na.rm = TRUE)<br></br>
[1] 65763.64<br></br>
</code></pre>

<h2 className="p">Replacing missing values with the mean</h2>
<p className="it">Cuando desconsideramos los casos con las variables que faltan, se pierde información útil que los valores no perdidos en ese caso transmiten. Algunas veces puede querer imputar valores razonables (aquellos que no distorsionarán mucho los resultados de los análisis) para los valores perdidos.</p>


<p className="p">When you disregard cases with any missing variables, you lose useful information that the nonmissing values in that case convey. You may sometimes want to impute reasonable values (those that will not skew the results of analyses very much) for the missing values.</p>


<p className="it">Descargue el archivo <code>missing-data.csv</code> y guárdelo en el directorio de trabajo de su entorno R.</p>


<p className="p">Download the <code>missing-data.csv</code> file and store it in your R environment's working directory.</p>


<p className="it">Leer datos y reemplazar valores perdidos:</p>


<p className="p">Read data and replace missing values:</p>

<pre><code>
&#62; dat &#60;- read.csv("missing-data.csv", na.strings = "")<br></br>
&#62; dat$Income.imp.mean &#60;- ifelse(is.na(dat$Income), mean(dat$Income, na.rm=TRUE),<br></br> dat$Income)
</code></pre>
<p className="it">Después de esto, todos los valores de <code>NA</code> para el <code>Income</code> serán ahora el valor medio antes de la imputación.</p>


<p className="p">After this, all the <code>NA</code> values for <code>Income</code> will now be the mean value prior to imputation.</p>

<p className="it">La función <code>ifelse()</code> anterior devuelve el valor medio imputado si su primer argumento es <code>NA</code>. De lo contrario, devuelve el primer argumento.</p>


<p className="p">The preceding <code>ifelse()</code> function returns the imputed mean value if its first argument is <code>NA</code>. Otherwise, it returns the first argument.</p>

<p className="it">No se puede imputar la media cuando una variable categórica tiene valores perdidos, por lo que necesita un enfoque diferente. Incluso para las variables numéricas, a veces no queremos imputar la media de los valores perdidos. Aquí discutimos un enfoque muy utilizado.</p>

<h3 className="p">There's more...</h3>
<p className="p">You cannot impute the mean when a categorical variable has missing values, so you need a different approach. Even for numeric variables, we might sometimes not want to impute the mean for missing values. We discuss an often used approach here.</p>
<p className="it">Imponer valores aleatorios muestreados a partir de valores no perdidos</p>

<h3 className="p">Imputing random values sampled from nonmissing values</h3>
<p className="it">Si desea imputar valores aleatorios muestreados de los valores no perdidos de la variable, puede utilizar las dos funciones siguientes:</p>

<p className="p">If you want to impute random values sampled from the nonmissing values of the variable, you can use the following two functions:</p>
<pre><code>
rand.impute &#60;- function(a) &#123;<br></br>
missing &#60;- is.na(a)<br></br>
n.missing &#60;- sum(missing)<br></br>
a.obs &#60;- a[!missing]<br></br>
imputed &#60;- a<br></br>
imputed[missing] &#60;- sample (a.obs, n.missing, replace=TRUE)<br></br>
return (imputed)<br></br>
&#125;<br></br>
<br></br>
random.impute.data.frame &#60;- function(dat, cols) &#123;<br></br>
nms &#60;- names(dat)<br></br>
for(col in cols) &#123;<br></br>
name &#60;- paste(nms[col],".imputed", sep = "")<br></br>
dat[name] &#60;- rand.impute(dat[,col])<br></br>
&#125;<br></br>
dat<br></br>
&#125;
</code></pre>

<p className="it">Con estas dos funciones en su lugar, puede utilizar lo siguiente para imputar valores aleatorios para <code>Income</code> y <code>Phone_type</code>:</p>


<p className="p">With these two functions in place, you can use the following to impute random values for both <code>Income</code> and <code>Phone_type</code>:</p>
<pre><code>
&#62; dat &#60;- read.csv("missing-data.csv", na.strings="")<br></br>
&#62; random.impute.data.frame(dat, c(1,2))
</code></pre>
<h2 className="p">Removing duplicate cases</h2>
<p className="it">A veces terminamos con casos duplicados en nuestros conjuntos de datos y queremos retener sólo uno entre los duplicados.</p>


<p className="p">We sometimes end up with duplicate cases in our datasets and want to  retain only one among the duplicates.</p>

<h3 className="p">Getting ready</h3>
<p className="it">Crear un data frame de ejemplo:</p>


<p className="p">Create a sample data frame:</p>
<pre><code>
&#62; salary &#60;- c(20000, 30000, 25000, 40000, 30000, 34000, 30000)<br></br>
&#62; family.size &#60;- c(4,3,2,2,3,4,3)<br></br>
&#62; car &#60;- c("Luxury", "Compact", "Midsize", "Luxury", "Compact", "Compact", "Compact")<br></br>
&#62; prospect &#60;- data.frame(salary, family.size, car)
</code></pre>
<h3 className="p">How to do it...</h3>
<p className="it">La función <code>unique()</code> puede realizar el trabajo. Se toma un vector o data frame como un argumento y devuelve un objeto del mismo tipo que su argumento pero con duplicados eliminados.</p>


<p className="p">The <code>unique()</code> function can do the job. It takes a vector or data frame as an argument and returns an object of the same type as its argument but with duplicates removed.</p>
<p className="it">Obtenga valores únicos:</p>


<p className="p">Get unique values:</p>

<pre><code>
&#62; prospect.cleaned &#60;- unique(prospect)<br></br>
&#62; nrow(prospect)<br></br>
[1] 7<br></br>
&#62; nrow(prospect.cleaned)<br></br>
[1] 5
</code></pre>

<h3 className="p">How it works...</h3>
<p className="it">La función <code>unique()</code> toma un vector o data frame como un argumento y devuelve un objeto similar con el duplicado eliminado. Devuelve los casos no complicados como es. Para casos repetidos, la función <code>unique()</code> incluye una copia en el resultado devuelto.</p>


<p className="p">The <code>unique()</code> function takes a vector or data frame as an argument and returns a like object with the duplicate eliminated. It returns the nonduplicated cases as is. For repeated cases, the <code>unique()</code> function includes one copy in the returned result.</p>

<h3 className="p">There's more...</h3>
<p className="it">A veces sólo queremos identificar valores duplicados sin necesariamente eliminarlos.</p>


<p className="p">Sometimes we just want to identify duplicated values without necessarily removing them.</p>
<h3 className="p">Identifying duplicates (without deleting them)</h3>
<p className="it">Para ello, utilice la <code>duplicated()</code> función:</p>


<p className="p">For this, use the <code>duplicated()</code> function:</p>
<pre><code>
&#62; duplicated(prospect)<br></br>
[1] FALSE FALSE FALSE FALSE	TRUE FALSE	TRUE
</code></pre>

<p className="it">A partir de los datos, sabemos que los casos 2, 5 y 7 son duplicados. Tenga en cuenta que sólo los casos 5 y 7 se muestran como duplicados. En la primera aparición, el caso 2 no se marca como un duplicado.</p>


<p className="p">From the data, we know that cases 2, 5, and 7 are duplicates. Note that only cases 5 and 7 are shown as duplicates. In the first occurrence, case 2 is not flagged as a duplicate.</p>
<p className="it">Para enumerar los casos duplicados, utilice el código siguiente:</p>


<p className="p">To list the duplicate cases, use the following code:</p>
<pre><code>
&#62; prospect[duplicated(prospect), ]<br></br>
<br></br>
salary family.size	car<br></br>
5	30000	3 Compact<br></br>
7	30000	3 Compact
</code></pre>

<h2 className="p">Rescaling a variable to [0,1]</h2>
<p className="it">Los cálculos de distancia juegan un papel importante en muchas técnicas de análisis de datos. Sabemos que las variables con valores más altos tienden a dominar los cálculos de distancia y es posible que desee reescalar los valores para estar en el rango 0-1.</p>


<p className="p">Distance computations play a big role in many data analytics techniques. We know that variables with higher values tend to dominate distance computations and you may want to rescale the values to be in the range 0 - 1.</p>

<h3 className="P">Getting ready</h3>
<p className="it">Instale el paquete de escalas y lea el archivo <code>data-conversion.csv</code> de los datos del libro para este capítulo en el directorio de trabajo del entorno R:</p>


<p className="p">Install the scales package and read the <code>data-conversion.csv</code> file from the book's data for this chapter into your R environment's working directory:</p>
<pre><code>
&#62; install.packages("scales")<br></br>
&#62; library(scales)<br></br>
&#62; students &#60;- read.csv("data-conversion.csv")<br></br>
</code></pre>
<h3 className="P">How to do it...</h3>
<p className="it">Para reescalar la variable Ingreso al rango <code>[0,1]</code>:</p>


<p className="p">To rescale the Income variable to the range <code>[0,1]</code>:</p>
<pre><code>
&#62; students$Income.rescaled &#60;- rescale(students$Income)
</code></pre>

<h3 className="P">How it works...</h3>
<p className="it">De forma predeterminada, la función <code>rescale()</code> hace que el <code>lowest value(s)</code> cero y el <code>highest value(s)</code> uno. Rescala todos los demás valores proporcionalmente. Las dos expresiones siguientes proporcionan resultados idénticos:</p>


<p className="p">By default, the <code>rescale()</code> function makes the <code>lowest value(s)</code> zero and the <code>highest value(s)</code> one. It rescales all other values proportionately. The following two expressions provide identical results:</p>
<pre><code>
&#62; rescale(students$Income)<br></br>
&#62; (students$Income - min(students$Income)) / (max(students$Income) - min(students$Income))
</code></pre>
<p className="it">Para volver a escala un rango diferente <code>[0,1]</code>, utilice el argumento a. Las siguientes reescalas</p>


<p className="p">To rescale a different range than <code>[0,1]</code>, use the to argument. The following rescales</p>
<p className="it"><code>students$Income</code>A la gama <code>(0,100)</code>:</p>


<p className="p"><code>students$Income</code> to the range <code>(0,100)</code>:</p>

<pre><code>
&#62; rescale(students$Income, to = c(1, 100))
</code></pre>

<h3 className="P">There´s more...</h3>
<p className="it">Cuando utilice técnicas basadas en la distancia, es posible que deba cambiar la escala de varias variables. Puede resultar tedioso escalar una variable a la vez.</p>


<p className="p">When using distance-based techniques, you may need to rescale several variables. You may find it tedious to scale one variable at a time.</p>

<h3 className="p">Rescaling many variables at once</h3>

<p className="it">Utilice la siguiente función:</p>


<p className="p">Use the following function:</p>

<pre><code>
rescale.many &#60;- function(dat, column.nos) &#123; nms &#60;- names(dat)<br></br>
for(col in column.nos) &#123;<br></br>
name &#60;- paste(nms[col],".rescaled", sep = "") dat[name] &#60;- rescale(dat[,col])<br></br>
&#125;<br></br>
cat(paste("Rescaled ", length(column.nos), " variable(s)\n")) dat<br></br>
&#125;
</code></pre>

<p className="it">Con la función anterior definida, podemos hacer lo siguiente para cambiar la escala de la primera y cuarta variables en el data frame:</p>

<p className="p">With the preceding function defined, we can do the following to rescale the first and fourth variables in the data frame:</p>

<pre><code>
&#62; rescale.many(students, c(1,4))
</code></pre>

<h3 className="p">See also...</h3>
<ul>
<li className="it"> Receta: Normalización o estandarización de datos en un data frame en este capítulo</li>

<li className="p"> Recipe: Normalizing or standardizing data in a data frame in this chapter</li>
</ul>
<h2 className="p">Normalizing or standardizing data in a data frame</h2>

<p className="it">Los cálculos de distancia juegan un papel importante en muchas técnicas de análisis de datos. Sabemos que las variables con valores más altos tienden a dominar los cálculos de distancia y es posible que desee utilizar los valores estandarizados (o Z).</p>


<p className="p">Distance computations play a big role in many data analytics techniques. We  know that variables with higher values tend to dominate distance computations and you may want to  use the standardized (or Z) values.</p>

<h3 className="p">Getting ready</h3>
<p className="it">Descargue el archivo de datos <code>BostonHousing.csv</code> y guárdelo en el directorio de trabajo de su entorno R. A continuación, lea los datos:</p>


<p className="p">Download the <code>BostonHousing.csv</code> data file and store it in your R environment's working directory. Then read the data:</p>
<pre><code>
&#62; housing &#60;- read.csv("BostonHousing.csv")
</code></pre>

<p className="it">Cómo hacerlo...</p>


<p className="p">How to do it...</p>
<p className="it">Para estandarizar todas las variables en un data frame que contiene sólo variables numéricas, utilice:</p>


<p className="p">To standardize all the variables in a data frame containing only numeric variables, use:</p>
<pre><code>
&#62; housing.z &#60;- scale(housing)
</code></pre>

<p className="it">Sólo puede utilizar la función <code>scale()</code> en los data frames que contienen todas las variables numéricas. De lo contrario, obtendrá un error.</p>


<p className="p">You can only use the <code>scale()</code> function on data frames containing all numeric variables. Otherwise, you will get an error.</p>

<h3 className="p">How it works...</h3>
<p className="it">Cuando se invoca como anteriormente, la función <code>scale()</code> calcula la puntuación Z estándar para cada valor (ignorando NAs) de cada variable. Es decir, de cada valor substrae la media y divide el resultado por la desviación estándar de la variable asociada.</p>


<p className="p">When invoked as above, the <code>scale()</code> function computes the standard Z score for each value (ignoring NAs) of each variable. That is, from each value it subtracts the mean and divides the result by the standard deviation of the associated variable.</p>

<p className="it">La función <code>scale()</code> toma dos argumentos opcionales, center y scale, cuyos valores por defecto son TRUE. La siguiente tabla muestra el efecto de estos argumentos:</p>


<p className="p">The <code>scale()</code> function takes two optional arguments, center and scale, whose default values are TRUE. The following table shows the effect of these arguments:</p>

<p className="it">Efecto de argumento de imagen</p>


<p className="p">image argument effect</p>

<p className="it">Comportamiento predeterminado descrito anteriormente	   </p>


<p className="p">Default behavior described earlier	   </p>

<p className="it">De cada valor, restar la media de la variable afectada	   </p>


<p className="p">From each value, subtract the mean of the concerned variable	   </p>

<p className="it">Dividir cada valor por el cuadrado medio de la variable asociada, donde el cuadrado medio es sqrt (suma (x ^ 2) / (n-1))	   </p>


<p className="p">Divide each value by the root mean square of the associated variable, where root mean square is sqrt(sum(x^2)/(n-1))	   </p>

<p className="it">Devolver los valores originales sin cambios	 </p>


<p className="p">Return the original values unchanged	 </p>

<h3 className="p">There´s more...</h3>
<p className="it">Cuando utilice técnicas basadas en la distancia, es posible que deba cambiar la escala de varias variables. Usted puede encontrar tedioso estandarizar una variable a la vez.</p>


<p className="p">When using distance-based techniques, you may need to rescale several variables. You may find it tedious to standardize one variable at a time.</p>
<h3 className="p">Standardizing several variables simultaneously</h3>
<p className="it">Si tiene un data frame con algunas variables numéricas y algunas no numéricas, o desea estandarizar sólo algunas de las variables en un data frame totalmente numérico, puede manejar cada variable por separado -lo que sería engorroso- o usar una función Tal como el siguiente para manejar un subconjunto de variables:</p>


<p className="p">If you have a data frame with some numeric and some non-numeric variables, or want to standardize only some of the  variables in a fully numeric data  frame, then  you can either handle each variable separately—which would be cumbersome—or use a function such as the following to handle a subset of variables:</p>
<pre><code>
scale.many &#60;- function(dat, column.nos) &#123; nms &#60;- names(dat)<br></br>
for(col in column.nos) &#123;<br></br>
name &#60;- paste(nms[col],".z", sep = "") dat[name] &#60;- scale(dat[,col])<br></br>
&#125;<br></br>
cat(paste("Scaled ", length(column.nos), " variable(s)\n")) dat<br></br>
&#125;
</code></pre>

<p className="it">Con esta función, ahora puede hacer cosas como:</p>


<p className="p">With this function, you can now do things like:</p>
<pre><code>
&#62; housing &#60;- read.csv("BostonHousing.csv")<br></br>
&#62; housing &#60;- scale.many(housing, c(1,3,5:7))
</code></pre>

<p className="it">Esto agregará los valores z para las variables 1, 3, 5, 6 y 7 con .z añadido a los nombres de columnas originales:</p>


<p className="p">This will add the z values for variables 1, 3, 5, 6, and 7 with .z appended to the original column names:</p>
<pre><code>
&#62; names(housing)<br></br>
<br></br>
[1] "CRIM"<br></br>
[7] "AGE"	"ZN"<br></br>
"DIS"	"INDUS"	"CHAS"	"NOX"	"RM"<br></br>
"RAD"	"TAX"	"PTRATIO" "B"	   <br></br>
[13] "LSTAT"	"MEDV"	"CRIM.z"	"INDUS.z" "NOX.z"	"RM.z"	   <br></br>
[19] "AGE.z"			 <br></br>
</code></pre>

<h3 className="p">See also...</h3>
<ul>
<li className="it"> Receta: Reescalar una variable a [0,1] en este capítulo</li>

<li className="p"> Recipe: Rescaling a variable to [0,1] in this chapter</li>
</ul>
<h3 className="p">Tip</h3>
<p className="it"><strong>Descargando el código de ejemplo y los datos</strong></p>


<p className="p"><strong>Downloading the example code and data</strong></p>

<p className="it">Puede descargar los archivos de código de ejemplo de su cuenta en <code>http://www.packtpub.com</code>todos los libros de Packt Publishing que haya comprado. Si ha comprado este libro en otro lugar, puede visitarlo <code>http://www.packtpub.com/support</code>y registrarse para que los archivos se envíen por correo electrónico directamente a usted.</p>


<p className="p">You can download the example code files from your  account at <code>http://www.packtpub.com</code> for all the Packt Publishing books you have purchased. If you purchased this book elsewhere, you can visit <code>http://www.packtpub.com/support</code> and register to have the files e- mailed directly to you.</p>

<h2 className="p">Binning numerical data</h2>
<p className="it">A veces, necesitamos convertir datos numéricos a datos categóricos o un factor. Por ejemplo, la     clasificación <strong>Naïve Bayes</strong> requiere que todas las variables (independientes y dependientes) sean categóricas. En otras situaciones, es posible que desee aplicar un método de clasificación a un problema en el que la variable dependiente es numérica, pero debe ser categórica.</p>


<p className="p">Sometimes, we need to convert numerical data to categorical data or a factor. For example,  <strong>Naïve Bayes</strong>  classification requires all variables (independent and dependent) to be categorical. In other situations, we may want to apply a classification method to a problem where the dependent variable is numeric but needs to be categorical.</p>


<p className="it">Desde los archivos de código de este capítulo, guarde el <code>data-conversion.csv</code>archivo en el directorio de trabajo de su entorno R. A continuación, lea los datos:</p>


<p className="p">From the code files for this chapter, store the <code>data-conversion.csv</code> file in the working directory of your R environment. Then read the data:</p>
<pre><code>
&#62; students &#60;- read.csv("data-conversion.csv")
</code></pre>

<p className="it">Ingreso es una variable numérica, y es posible que desee crear una variable categórica a partir de ella mediante la creación de contenedores. Suponga que desea etiquetar ingresos de $ 10.000 o menos como Bajo, ingresos entre $ 10.000 y $ 31.000 como Medio y el resto como Alto. Podemos hacer lo siguiente:</p>


<p className="p">Income is a numeric variable, and you may want to create a categorical variable from it by creating bins. Suppose you want to label incomes of $10,000 or below as Low, incomes between $10,000 and $31,000 as Medium, and the rest as High. We can do the following:</p>
<p className="it">1. Crear un vector de puntos de quiebre:</p>


<p className="p">1. Create a vector of break points:</p>
<pre><code>
&#62; b &#60;- c(-Inf, 10000, 31000, Inf)>
</code></pre>
<p className="it">2. Cree un vector de nombres para puntos de ruptura:</p>


<p className="p">2. Create a vector of names for break points:</p>
<pre><code>
&#62; names &#60;- c("Low", "Medium", "High")
</code></pre>
<p className="it">3. Corte el vector utilizando los puntos de rotura:</p>


<p className="p">3. Cut the vector using the break points:</p>
<pre><code>
&#62; students$Income.cat &#60;- cut(students$Income, breaks = b, labels = names)<br></br>
&#62; students<br></br>
<br></br>
<p className="it">Age State Gender Height Income Income.cat</p>


<p className="p">Age State Gender Height Income Income.cat</p>
1	23	NJ	F	61	5000	Low<br></br>
<br></br>
2	13	NY	M	55	1000	Low	   <br></br>
3	36	NJ	M	66	3000	Low	   <br></br>
4	31	VA	F	64	4000	Low	   <br></br>
5	58	NY	F	70	30000	Medium	   <br></br>
6	29	TX	F	63	10000	Low	   <br></br>
7	39	NJ	M	67	50000	High	   <br></br>
8	50	VA	M	70	55000	High	   <br></br>
9	23	TX	F	61	2000	Low	   <br></br>
10	36	VA	M	66	20000	Medium	 <br></br>
</code></pre>

<h3 className="p">How it works...</h3>
<p className="it">La función <code>cut()</code> utiliza los rangos implicados por el argumento breaks para inferir los contenedores y los nombra de acuerdo con las cadenas proporcionadas en el argumento labels. En nuestro ejemplo, la función coloca los ingresos inferiores o iguales a 10.000 en el primer contenedor, los ingresos superiores a 10.000 y menores o iguales a 31.000 en el segundo compartimiento, y los ingresos superiores a 31.000 en el tercer contenedor. En otras palabras, el primer número en el intervalo no está incluido y el segundo es. El número de contenedores será un menos que el número de elementos en los descansos. Las cadenas de nombres se convierten en los niveles de factor de los contenedores.</p>


<p className="p">The <code>cut()</code> function uses the ranges implied by the breaks argument to infer  the  bins, and names them according to the strings provided in the labels argument. In our example, the function places incomes less than or equal  to  10,000 in the  first bin, incomes greater  than 10,000 and less than or equal to  31,000 in the  second bin, and incomes greater  than  31,000 in the third bin. In other words, the first number  in the interval is not included and the second one  is. The number of bins will be one less than the number of elements in breaks. The strings in names become the factor levels of the bins.</p>
<p className="it">Si dejamos fuera los nombres, <code>cut()</code> utiliza los números en el segundo argumento para construir los nombres de intervalos como se puede ver aquí:</p>


<p className="p">If we leave out names, <code>cut()</code> uses the numbers in the second argument to construct interval names as you can see here:</p>
<pre><code>
&#62; b &#60;- c(-Inf, 10000, 31000, Inf)<br></br>
&#62; students$Income.cat1 &#60;- cut(students$Income, breaks = b)<br></br>
&#62; students<br></br>
<br></br>
Age State Gender Height Income Income.cat	Income.cat1<br></br>
1	23	NJ	F	61	5000	Low	(-Inf,1e+04]<br></br>
<p className="it"> </p>


<p className="p"> </p>
2	13	NY	M	55	1000	Low	(-Inf,1e+04]	   <br></br>
3	36	NJ	M	66	3000	Low	(-Inf,1e+04]	   <br></br>
4	31	VA	F	64	4000	Low	(-Inf,1e+04]	   <br></br>
5	58	NY	F	70	30000	Medium	(1e+04,3.1e+04]	   <br></br>
6	29	TX	F	63	10000	Low	(-Inf,1e+04]	   <br></br>
7	39	NJ	M	67	50000	High	(3.1e+04, Inf]	   <br></br>
8	50	VA	M	70	55000	High	(3.1e+04, Inf]	   <br></br>
9	23	TX	F	61	2000	Low	(-Inf,1e+04]	   <br></br>
10	36	VA	M	66	20000	Medium	(1e+04,3.1e+04]	 
</code></pre>

<h3 className="p">There´s more...</h3>
<p className="it">Es posible que no siempre esté en una posición para identificar las roturas manualmente y en su lugar desee confiar en R para hacerlo automáticamente.</p>


<p className="p">You might not always be in a position to identify the breaks manually and may instead want to rely on R to do this automatically.</p>
<h3 className="p">Creating a specified number of intervals automatically</h3>
<p className="it">En lugar de determinar los intervalos y, por lo tanto, los intervalos manualmente como anteriormente, podemos especificar el número de contenedores que queremos, digamos n, y dejar que la función <code>cut()</code> maneje el resto automáticamente. En este caso, <code>cut()</code> crea <code>n</code> intervalos de aproximadamente el mismo ancho como sigue:</p>


<p className="p">Rather  than determining the breaks and hence the intervals manually as above, we can specify the number of bins we want, say n, and let the <code>cut()</code> function handle the rest automatically. In this case, <code>cut()</code> creates <code>n</code> intervals of approximately equal width as follows:</p>
<pre><code>
&#62; students$Income.cat2 &#60;- cut(students$Income,<span className="cut">(/)</span><br></br> breaks = 4, labels = c("Level1", "Level2", "Level3","Level4"))
</code></pre>

<h2 className="p">Creating dummies for categorical variables</h2>
<p className="it">En situaciones donde tenemos variables categóricas (factores) pero necesitamos usarlas en métodos analíticos que requieren números (por ejemplo, <strong>K nearest  neighbors (KNN), Linear Regression</strong>), necesitamos crear variables dummy.</p>


<p className="p">In situations where we have categorical variables (factors) but need to use them in analytical methods that require numbers (for  example, <strong>K nearest  neighbors (KNN), Linear Regression</strong>), we need to create dummy variables.</p>

<h3 className="p">Getting ready</h3>
<p className="it">Lea el <code>data-conversion.csv</code>archivo y guárdelo en el directorio de trabajo de su entorno R. Instale el paquete <code>dummies</code>. A continuación, lea los datos:</p>


<p className="p">Read the <code>data-conversion.csv</code> file and store it in the working directory of your R environment. Install the <code>dummies</code> package. Then read the data:</p>
<pre><code>
&#62; install.packages("dummies")<br></br>
&#62; library(dummies)<br></br>
&#62; students &#60;- read.csv("data-conversion.csv")
</code></pre>

<h3 className="p">How to do it...</h3>
<p className="it">Crear dummies para todos los factores en el data frame:</p>


<p className="p">Create dummies for all factors in the data frame:</p>
<pre><code>
&#62; students.new &#60;- dummy.data.frame(students, sep = ".")<br></br>
&#62; names(students.new)<br></br>
<br></br>
[1] "Age"	"State.NJ" "State.NY" "State.TX" "State.VA"<br></br>
[6] "Gender.F" "Gender.M" "Height"	"Income"
</code></pre>

<p className="it">El data frame <code>students.new</code> ahora contiene todas las variables originales y las variables dummy recién agregadas. La función <code>dummy.data.frame()</code> ha creado variables ficticias para los cuatro niveles del <code>State</code> y dos niveles de factores de <code>Gender</code>. Sin embargo, generalmente omitiremos una de las variables dummy para <code>State</code> y una para <code>Gender</code> cuando usemos técnicas de aprendizaje automático.</p>


<p className="p">The <code>students.new</code> data frame now contains all the original variables and the newly added dummy variables. The <code>dummy.data.frame()</code> function has created dummy variables for all four levels of the <code>State</code> and two levels of <code>Gender</code> factors. However, we will  generally omit one of the dummy variables for <code>State</code> and one for <code>Gender</code> when we use machine-learning techniques.</p>
<p className="it">Podemos utilizar el argumento opcional <code>all = FALSE</code>para especificar que el data frame resultante debe contener sólo las variables dummy generadas y ninguna de las variables originales.</p>


<p className="p">We can use the optional argument <code>all = FALSE</code> to specify that the resulting data frame should contain only the generated dummy variables and none of the original variables.</p>


<p className="it">La función <code>dummy.data.frame()</code> crea dummies para todos los factores en el data frame suministrado. Internamente, utiliza otra función <code>dummy()</code> que crea variables dummy para un solo factor. La función <code>dummy()</code> crea una nueva variable para cada nivel del factor para el que estamos creando maniquíes. Añade el nombre de la variable con el nombre del nivel del factor para generar nombres para las variables dummy. Podemos usar el argumento sep para especificar el carácter que los separa: una cadena vacía es la predeterminada:</p>


<p className="p">The <code>dummy.data.frame()</code> function creates dummies for all the factors in the data frame supplied. Internally, it uses another <code>dummy()</code> function which creates dummy variables for a single factor. The <code>dummy()</code> function creates one new variable for every level of the factor for which we are creating dummies. It appends the variable name with the factor level name to generate names for the dummy variables. We can use  the  sep argument to  specify  the character that separates them—an empty string is the default:</p>

<pre><code>
&#62; dummy(students$State, sep = ".")<br></br>
<br></br>
 State.NJ State.NY State.TX State.VA<br></br>

[1,]	1	0	0	0	   <br></br>
[2,]	0	1	0	0	   <br></br>
[3,]	1	0	0	0	   <br></br>
[4,]	0	0	0	1	   <br></br>
[5,]	0	1	0	0	   <br></br>
[6,]	0	0	1	0	   <br></br>
[7,]	1	0	0	0	   <br></br>
[8,]	0	0	0	1	   <br></br>
[9,]	0	0	1	0	   <br></br>
[10,]	0	0	0	1	 
</code></pre>

<h3 className="p">There´s more...</h3>

<p className="it">En situaciones donde un data frame tiene varios factores, y usted planea usar sólo un subconjunto de éstos, creará maniquíes solamente para el subconjunto elegido.</p>


<p className="p">In situations where a data frame has several factors, and you plan on using only a subset of these, you will create dummies only for the chosen subset.</p>

<h3 className="p">Choosing which variables to create dummies for</h3>
<p className="it">Para crear dummies sólo para una variable o un subconjunto de variables, podemos usar el argumento names para especificar los nombres de columna de las variables que queremos que sean dummies para:</p>


<p className="p">To create dummies only for one variable or a subset of variables, we can use the names argument to specify the column names of the variables we want dummies for:</p>

<pre><code>
&#62; students.new1 &#60;- dummy.data.frame<span className="cut">(/)</span><br></br>
(students, names = c("State","Gender") , sep = ".")
</code></pre>

</div>
</div>
  </Layout>
)