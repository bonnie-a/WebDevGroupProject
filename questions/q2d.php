<?php
    setcookie ("correct","The Thinker",time()+ 86400 / 24, "/");
    setcookie ("points",200,time()+ 86400 / 24, "/");
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
    
    <h1>This is a bronze sculpture by Augeste Rodin, it shows a nude male figure sitting on a rock with his chin resting on his right hand, it is often used as an image to represent philosophy.</h1>
    
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