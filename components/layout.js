import Link from 'next/link'
import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <header>
      <nav>
        <Link href='/'><a>Home</a></Link> |<br></br>
        <Link href='/preface'><a>Preface</a></Link> |<br></br>
        <Link href='/ch1'><a>Chapter 1</a></Link>|<br></br>
        <Link href='/ch2'><a>Chapter2</a></Link> |<br></br>
        <Link href='/ch3'><a>Chapter3</a></Link> |<br></br>
        <Link href='/ch4'><a>Chapter4</a></Link> |<br></br>
        <Link href='/ch5'><a>Chapter5</a></Link> |<br></br>
        <Link href='/ch6'><a>Chapter6</a></Link> |<br></br>
        <Link href='/ch7'><a>Chapter7</a></Link> |<br></br>
        <Link href='/ch8'><a>Chapter8</a></Link> |<br></br>
        <Link href='/ch9'><a>Chapter9</a></Link> |<br></br>
      </nav>
    </header>

    { children }

    <footer>
       <nav>
       
      </nav>
    </footer>
  </div>
)
