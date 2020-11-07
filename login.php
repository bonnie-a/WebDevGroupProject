<?php
    setcookie("username", "", time()-3600);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">

    <title>Jeopardy</title>
    <link rel="stylesheet" href="./stylesheet.css" type="text/css">
</head>

<body>
    <div class="banner">
        Jeopardy
    </div>
    
    <h1>Welcom to Jeopardy! Please enter a username to play!</h1>
    
    <form action="gameboard.php" method="post">
		Username: <input name="username" type="text" value="<?php if(isset($_COOKIE["username"])) { echo $_COOKIE["username"]; } ?>" class="input-field">
        <?php
            setcookie ("score",0,time()+ 1800);
            setcookie ("username","",time()+ 1800);
        ?>
        
        <input type="submit" value="Login">
    </form>
</body>
</html>