<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


  <!-- Twitter -->
  <meta name="twitter:site" content="@themepixels">
  <meta name="twitter:creator" content="@themepixels">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Bracket">
  <meta name="twitter:description" content="Premium Quality and Responsive UI for Dashboard.">
  <meta name="twitter:image" content="http://themepixels.me/bracket/img/bracket-social.png">

  <!-- Facebook -->
  <meta property="og:url" content="http://themepixels.me/bracket">
  <meta property="og:title" content="Bracket">
  <meta property="og:description" content="Premium Quality and Responsive UI for Dashboard.">

  <meta property="og:image" content="http://themepixels.me/bracket/img/bracket-social.png">
  <meta property="og:image:secure_url" content="http://themepixels.me/bracket/img/bracket-social.png">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="600">

  <!-- Meta -->
  <meta name="description" content="Premium Quality and Responsive UI for Dashboard.">
  <meta name="author" content="ThemePixels">

  <title>Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu</title>

  <!-- vendor css -->
  <link href="{{url('public/admin/lib/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
  <link href="{{url('public/admin/lib/Ionicons/css/ionicons.css')}}" rel="stylesheet">
  <link href="{{url('public/admin/lib/perfect-scrollbar/css/perfect-scrollbar.css')}}" rel="stylesheet">
  <link href="{{url('public/admin/lib/jquery-switchbutton/jquery.switchButton.css')}}" rel="stylesheet">
  <link href="{{url('public/admin/lib/rickshaw/rickshaw.min.css')}}/" rel="stylesheet">
  <link href="{{url('public/admin/lib/chartist/chartist.css')}}" rel="stylesheet">

  <!-- Bracket CSS -->
  <link rel="stylesheet" href="{{url('public/admin/css/bracket.css')}}">
</head>

<body>
  <div id="app">

    <router-view :key="$route.fullPath"></router-view>
  </div>
  <script src="{{url('public/js/app.js')}}"></script>
</body>

</html>