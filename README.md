# overview-interactive

this is a concise ES6 project for fetching an `OVERVIEW` file
and rendering an intuitive interface for it in the browser.

basically, in addition to a sweet project overview living inside
your project as a text file, this can bring that file to life in
your docs.

    npm install overview-interactive

-----

minimal example

    <html>
      <h1> overview-interactive demo </h1>
      <div id="demo-here"></div>
      <script src="overview-interactive.js"></script>
      <script>
        var overviewFileURL = 'https://raw.githubusercontent.com' +
                     '/atstp/overview-interactive/master/OVERVIEW';
        overview(overviewFileURL, proj => proj.into('#demo-here'));
      </script>

