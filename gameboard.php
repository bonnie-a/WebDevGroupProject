<?php
    setcookie ("username",$_POST["username"],time()+ 86400 / 24);
?>
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Jeopardy</title>
    <link rel="stylesheet" href="./stylesheet.css" type="text/css">
</head>

<body>
    <div class="banner">
        Jeopardy
    </div>

    <div class = board>
        <div class = category>Computer Science</div>
        <div class = category>World History</div>
        <div class = category>Animals</div>
        <div class = category>Art</div>
        
        <a class = box href = ./questions/q1a.php>$100</a>
        <a class = box href = ./questions/q1b.php>$100</a>
        <a class = box href = ./questions/q1c.php>$100</a>
        <a class = box href = ./questions/q1d.php>$100</a>
        
        <a class = box href = ./questions/q2a.php>$200</a>
        <a class = box href = ./questions/q2b.php>$200</a>
        <a class = box href = ./questions/q2c.php>$200</a>
        <a class = box href = ./questions/q2d.php>$200</a>
        
        <a class = box href = ./questions/q3a.php>$300</a>
        <a class = box href = ./questions/q3b.php>$300</a>
        <a class = box href = ./questions/q3c.php>$300</a>
        <a class = box href = ./questions/q3d.php>$300</a>
        
        <a class = box href = ./questions/q4a.php>$400</a>
        <a class = box href = ./questions/q4b.php>$400</a>
        <a class = box href = ./questions/q4c.php>$400</a>
        <a class = box href = ./questions/q4d.php>$400</a>
    </div>
    
    <div class="scorebox">
        <div class="scores">
            <h1><?php echo $_COOKIE["score"]?></h1>
        </div>
    </div>
    <br>
    <a href=./leaderboard.php>Submit your score</a>
    <br>
</body>
</html>