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

    <div class="d-flex align-items-center justify-content-center bg-br-primary ht-100v">
      <div class="login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base">
        <div class="signin-logo tx-center tx-28 tx-bold tx-inverse">
          <span class="tx-normal">[</span> Penelitian Panel
          <span class="tx-normal">]</span>
        </div>
        <div class="tx-center mg-b-60">DPMPTSP KEPRI</div>
        <form method="POST" action="{{ route('login') }}">
          @csrf

          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter your username" name="email" />
          </div>
          <!-- form-group -->
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Enter your password" name="password" />
            <a href class="tx-info tx-12 d-block mg-t-10">Forgot password?</a>
          </div>
          <!-- form-group -->
          <button type="submit" class="btn btn-info btn-block">Sign In</button>
        </form>
        <div class="mg-t-60 tx-center">
          Belum Punya akun ?
          <a href class="tx-info">Daftar</a>
        </div>
      </div>
      <!-- login-wrapper -->
    </div>
  </div>
  <script src="{{url('public/js/app.js')}}"></script>
</body>

</html>