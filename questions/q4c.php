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
    
    <h1>This term refers to organisms that rely on others to raise their young. It is a strategy that appears among birds, insects and fish.</h1>
    
    <br><br>

    <form action="../answer.php" method="post"> 
        <div>
            <b>Answer:</b> 
        </div>
        <input name="answer" type="text" size="20">
        <input type="hidden" name="correct" value="Brood parasite">
        <input type="hidden" name="points" value="400">
        <input type="submit" value="Submit Answer">
    </form>
    
</body>
</html>