<?php
    setcookie ("correct","Avant-garde",time()+ 86400 / 24, "/");
    setcookie ("points",400,time()+ 86400 / 24, "/");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Question</title>
    <link rel="stylesheet" href="../stylesheet.css" type="text/css">
</head>

<body>
    <div class="banner">
        Jeopardy
    </div>
    
    <h1>Originally came from the French term 'advance guard', it refers to works, movements, people that are experimental, radical, or unorthodox with respect to art, culture, or society.</h1>
    
    <br><br>

    <form action="../answer.php" method="post"> 
        <div>
            <b>Answer:</b> 
        </div>
        <input name="answer" type="text" size="20">
        <input type="submit" value="Submit Answer">
    </form>
    
</body>
</html>