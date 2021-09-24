const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>GoIndex - Extended | Demos</title>
    <!-- Meta Data -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicons -->
    <link rel="shortcut icon" href="https://raw.githubusercontent.com/cheems/goindex-extended/master/images/favicon-x.png" type="image/png">

    <!-- Styles -->
    <link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/cheems/GDIndex/e6eabcf1e0ee3b232fa218be51d35ff62100144f/css/demo-preview/style-demo.css"/>
    <link rel="stylesheet" type="text/css" href="https://rawcdn.githack.com/cheems/GDIndex/e6eabcf1e0ee3b232fa218be51d35ff62100144f/css/demo-preview/style.css"/>

</head>
<body style="margin: 0;">
<!-- Preloader -->
<div class="preloader">
    <div class="preloader__wrap">
        <div class="circle-pulse">
            <div class="circle-pulse__1"></div>
            <div class="circle-pulse__2"></div>
        </div>
        <div class="preloader__progress"><span></span></div>
    </div>
</div>

<!-- Intro -->
<header class="header-half-demo">
    <div class="header-half-demo__left">
        <a class="underlineNone" href="https://dark-demo.dudoo.workers.dev" target="_blank">
            <img class="cover demo-image" src="https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-1.png" alt="Dark Theme">
            <h2 class="title title--h6 title__demo">Dark Theme</h2>
        </a>
    </div>
    <div class="header-half-demo__right">
        <a class="underlineNone" href="https://light-demo.dudoo.workers.dev" target="_blank">
            <img class="cover demo-image" src="https://raw.githubusercontent.com/cheems/goindex-extended/master/images/ss-5.png" alt="Light Theme">
            <h2 class="title title--h6 title__demo">Light Theme</h2>
        </a>
    </div>
</header>
<!-- /Intro -->

<div class="cursor"></div>
<canvas class="elastic-border"></canvas>

<!-- JavaScripts -->
<script src="https://rawcdn.githack.com/cheems/GDIndex/e6eabcf1e0ee3b232fa218be51d35ff62100144f/js/demo-preview/jquery-3.4.1.min.js"></script>
<script src="https://rawcdn.githack.com/cheems/GDIndex/e6eabcf1e0ee3b232fa218be51d35ff62100144f/js/demo-preview/plugins.js"></script>
<script src="https://rawcdn.githack.com/cheems/GDIndex/e6eabcf1e0ee3b232fa218be51d35ff62100144f/js/demo-preview/common.js"></script>
<script src="https://rawcdn.githack.com/cheems/GDIndex/e6eabcf1e0ee3b232fa218be51d35ff62100144f/js/demo-preview/plugins-demo.js"></script>

</body>
</html>`
async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
