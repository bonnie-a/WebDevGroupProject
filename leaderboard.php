<?php
    ini_set('display_errors', 1);
    $final_score = "\n" . $_COOKIE['username'] . "," . $_COOKIE['score'];
    file_put_contents("leaderboard.txt", $final_score, FILE_APPEND);
?>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Leaderboard</title>
    <link rel="stylesheet" href="./stylesheet.css" type="text/css">
</head>

<body>
    <div class="banner">
        Leader Board
    </div>
    
    <div class="scorebox">
        <?php
            $leaders;
            $file = fopen("leaderboard.txt", "r");
            $max;
            
            //create array of scores
            while(!feof($file)) {
                $line = fgets($file);
                $info = explode(",", $line);
                $name = $info[0];
                $score = (int)$info[1];
                $max["$name"] = $score;
            }
            
            //select the five highest scores and put them in the leaders array
            for ($i = 0; $i < 5; $i++) {
                $next = max($max);
                $key = array_search($next, $max);
                $leaders[$key] = $next;
                unset($max[$key]);
            }
            
            //print out the high scores
            foreach($leaders as $x => $x_value) {
                echo $x . " -- " . $x_value;
                echo "<br>";
            }
        ?>
    </div>
    
    <?php echo ("Your final score was: $" . $_COOKIE['score'] . "<br>");?>
    
    <div>
        <a href=./login.php>Play Again?</a>
    </div>
    
</body>
</html>