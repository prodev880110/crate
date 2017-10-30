const index = (helmet = {}, appHtml = '', styles = '', initialState = {}) => (
`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">

    ${ helmet.title.toString() }
    
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    
    <!-- Reset CSS -->
    <style type="text/css">
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
    </style>
    
    <!-- Global CSS -->
    <style type="text/css">
        html, body { font-family: 'Roboto', sans-serif; background-color: #fafafa; }
        a { text-decoration: none; }
    </style>
    
    <!-- Generated CSS -->
    ${ styles }
</style>
</head>
<body>
    <main id="app">${ appHtml }</main>
    
    <script>
        window.__INITIAL_STATE__ = ${ JSON.stringify(initialState) }
    </script>
    
    <script type="text/javascript" src="/js/bundle.js?${ Math.random() }"></script>
</body>
</html>`
)

export default index