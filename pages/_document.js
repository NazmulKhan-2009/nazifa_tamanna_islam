import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
         <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Nazifa Tamanna Islam</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />

          <link
            rel="shortcut icon"
            // href="/img/logo.png"
            href="/img/khan3.png"
            type="image/x-icon"
          />
        {/* <!-- Bootstrap CSS --> */}
            <link rel="stylesheet" href="/css/bootstrap.min.css" />

        {/* <!-- Icon -->    */}
            <link rel="stylesheet" href="/fonts/line-icons.css"/>

        {/* <!-- Owl carousel -->     */}
            <link rel="stylesheet" href="/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="/css/owl.theme.css"/>
            
        {/* <!-- Animate -->  */}
            <link rel="stylesheet" href="/css/animate.css"/>

        {/* <!-- Main Style --> */}
            {/* <link rel="stylesheet" href="/css/main.css"/> */}
            <link rel="stylesheet" href="/css/globalStyle.css"/>
            <link rel="stylesheet" href="/css/globalResponsiveStyle.css"/>

        {/* <!-- Responsive Style --> */}
            <link rel="stylesheet" href="/css/responsive.css"/>

            {/* animated skill header  */}
            <link rel="stylesheet" href="/css/jquery.animatedheadline.css"/>

            {/* font for brand title */}

            {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
            {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap" rel="stylesheet"/> */}
          <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@700&display=swap" rel="stylesheet"></link>
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>


            
        </Head>

        <body>
          <Main />
          <NextScript />
          {/* <script src="/js/jquery-min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/wow.js"></script>
          <script src="/js/jquery.nav.js"></script>
          <script src="/js/scrolling-nav.js"></script>
          <script src="/js/jquery.easing.min.js"></script>  
          <script src="/js/main.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.min.js"></script>
          <script src="/js/jquery.animatedheadline.min.js"></script> */}

        </body>
        
      </Html>
    )
  }
}

export default MyDocument

