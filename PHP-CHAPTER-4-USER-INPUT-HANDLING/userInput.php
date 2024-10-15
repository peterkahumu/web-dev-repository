<?php 
if (isset($_POST["submit"])) { 
    $studentName = $_POST["studentName"];
    $regNumber = $_POST["regNumber"];
    $class = $_POST["class"];
    $section = $_POST["section"];


    $feedback = "
    This is the information that you submitted:
        <ul>
            <li>Name: $studentName</li><br>
            <li> G.R #: $regNumber</li><br>
            <li>Class: $class</li><br>
            <li>Section: $section</li><br>
        </ul>
    ";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Input</title>
    <link rel="stylesheet" href="../styles/styles.css">
</head>

<body>
    <form action="" method="post" id="form" name="form">
        <h1>Student Details</h1>
        <div class="form-item">
            <label for="studentName">Student Name</label>
            <input type="text" name="studentName" id="studentName" required>
        </div>

        <div class="form-item">
            <label for="regNumber">G.R Number</label>
            <input type="text" name="regNumber" id="regNumber" required>
        </div>

        <div class="form-item">
            <label for="class">Class</label>
            <input type="text" name="class" id="class" required>
        </div>

        <div class="form-item">
            <label for="section">Section</label>
            <input type="text" name="section" id="section" required>
        </div>

        <input type="submit" value="Submit form" id="submit" name="submit">

        <div class="feedback" id="feedback"><?php if(isset($feedback)) {
            echo "<span>".$feedback."<span>";
        } ?></div>
    </form>
    <script src="../js/script.js"></script>
</body>

</html>