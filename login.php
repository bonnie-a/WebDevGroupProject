<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <title>Jeopardy</title>
    <link rel="stylesheet" href="./stylesheet.css" type="text/css">
</head>

<body>
    <form action="gameboard.php" method="post">
		Username: <input name="username" type="text" value="<?php if(isset($_COOKIE["username"])) { echo $_COOKIE["username"]; } ?>" class="input-field">
        <?php setcookie ("score",0,time()+ 86400 / 24); ?>
        
        <input type="submit" value="Login">
    </form>
</body>
</html>