<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">

    <title>Answer</title>
    <link rel="stylesheet" href="./stylesheet.css" type="text/css">
</head>

<body>
    <h2>You answered:</h2><br>
    <?php echo($_POST['answer']); ?>
    
    <br><br>
    <h2>The correct answer was:</h2><br>
    <?php echo($_POST['correct']); ?>
    
    <br><br>
    <?php
        $earned = 0;
        if(strcasecmp($_POST['answer'], $_POST['correct']) == 0){
            $earned = $_POST['points'];
        }
        setcookie ("score",$_COOKIE["score"]+$earned,time()+ 86400 / 24);
        echo("<br>You earned $" . $earned);
    ?>
    
    <br><br>
    <a href = "./gameboard.php">Back</a>
</body>
</html>