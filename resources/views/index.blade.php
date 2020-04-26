<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Single Page App</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div id="canvas"></div>
        </div>
    </div>
</div>
<div id="app">
    <app></app>
</div>


<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
