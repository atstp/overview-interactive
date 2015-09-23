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

> gets you this
>
> ![gets you this](https://gist.githubusercontent.com/atstp/0a0c7c1a0eeb9ba7d578/raw/50a36500041c34d6bde022d436e6340e76f7d32d/interactive.gif)

