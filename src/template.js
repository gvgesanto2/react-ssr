export default ({ markup }) => {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        >
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${markup}</div>
        <script type="text/javascript" src="bundle.js"></script>
      </body>
    </html>`
}