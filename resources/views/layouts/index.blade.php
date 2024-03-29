<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ProgProgBlog</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <script src="{{ mix('/js/app.js') }}" defer></script>
    @include('helpers.scripts')
    @yield('style')
</head>
<body>
<div id="particles-js"></div>

<div id="app">
    <app></app>
</div>

@yield('script')
</body>
</html>
