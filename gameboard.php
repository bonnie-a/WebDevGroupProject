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
        <div class = category>Category 1</div>
        <div class = category>Category 2</div>
        <div class = category>Category 3</div>
        <div class = category>Category 4</div>
        
        <div class = box><a href = ./questions/q1a.php>$100</a></div>
        <div class = box><a href = ./questions/q2a.php>$100</a></div>
        <div class = box><a href = ./questions/q3a.php>$100</a></div>
        <div class = box><a href = ./questions/q4a.php>$100</a></div>
        
        <div class = box><a href = ./questions/q1b.php>$200</a></div>
        <div class = box><a href = ./questions/q2b.php>$200</a></div>
        <div class = box><a href = ./questions/q3b.php>$200</a></div>
        <div class = box><a href = ./questions/q4b.php>$200</a></div>
        
        <div class = box><a href = ./questions/q1b.php>$300</a></div>
        <div class = box><a href = ./questions/q2b.php>$300</a></div>
        <div class = box><a href = ./questions/q3b.php>$300</a></div>
        <div class = box><a href = ./questions/q4b.php>$300</a></div>
        
        <div class = box><a href = ./questions/q1d.php>$400</a></div>
        <div class = box><a href = ./questions/q2b.php>$400</a></div>
        <div class = box><a href = ./questions/q3d.php>$400</a></div>
        <div class = box><a href = ./questions/q4d.php>$400</a></div>
    </div>
    
    <div class="scorebox">
        <div class="scores">
            <h1><?php echo $_COOKIE["username"]?></h1>
            <hr>
        </div>

        <div class="scores">
            <?php echo $_COOKIE["score"]?>
        </div>
    </div>
    
    <a href=./leaderboard.php>leaderboard</a>
    
</body>
</html>