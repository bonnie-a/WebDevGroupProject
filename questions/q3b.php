<?php
    setcookie ("correct","This is the correct answer",time()+ 86400 / 24);
    setcookie ("points",100,time()+ 86400 / 24);
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
    
    <h1>Around 2550 B.C.E., this Pharaoh started constructing the first and biggest pyramid in the world, the Pyramids of Giza. Who is this Pharaoh?</h1>
    
    <br><br>

    <form action="../answer.php" method="post"> 
        <div>
            <b>Answer:</b> 
        </div>
        <input name="answer" type="text" size="20">
        <input type="hidden" name="correct" value="Pharaoh Khufu">
        <input type="hidden" name="points" value="300">
        <input type="submit" value="Submit Answer">
    </form>
    
</body>
</html>