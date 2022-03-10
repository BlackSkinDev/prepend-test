
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <title>Task Manager React</title>


    <style>
        body {
            background-color:#8798ad;            ;
        }
        h1,h2,h3,h4,h5,h6{
            color:#2e384d;
        }
    </style>

</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
