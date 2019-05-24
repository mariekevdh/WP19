<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap Year',
    'items' => Array(
        'News' => 'index.php',
        'Add news item' => 'news_add.php',
        'Leap Year' => 'leapyear.php',
        'Simple Form' => 'simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<script src="scripts/leapyear.js"></script>
<div class="row">
	<div class="col-md-12">
		<?php
        if (isset($_POST["name"])){
            $name = $_POST["name"];
            echo "<h1>Welcome, $name!</h1>";
        }
        if (isset($_POST["place"])){
            $place = $_POST["place"];
            if ($place == "Groningen") {
                echo "<p>Nice, you're living in Groningen!</p>";
            }
        }
        /*Check what the next leap year is and build a table*/
        if (isset($_POST["age"])) {
            $age = $_POST["age"];
            $year = date("Y");
            while ($year%4 != 0) {
                $year++;
            }
            echo "<p>The next 5 leap years, this will be your age!</p>";
            echo "<table class='table table-sm'>";
            echo "<thead><tr><th scope='col'>Year</th><th scope='col'>Age</th></tr><tbody>";
            $age += $year - date("Y");
            for($i=0; $i<5; $i++) {
                echo "<tr><td>$year</td><td>$age</td></tr>";
                $age += 4;
                $year += 4;
            };
            echo "</tbody></table>";
        }
        ?>

	  <form action="leapyear.php" method="post">
	    <div class="form-group">
	      <label for="text">Name:</label>
	      <input type="text" class="form-control" placeholder="Name" name="name"  id="name">
	      <div class="valid-feedback">
	      	Looks good!
	      </div>
	      <div class="invalid-feedback">
	      	Enter a valid name
	      </div>
	    </div>
	    <div class="form-group">
	      <label for="text">Age:</label>
	      <input type="text" class="form-control" placeholder="Age" name="age" id="age">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Enter a valid age
            </div>
	    </div>
	    <div class="form-group">
	      <label for="text">Mail address:</label>
	      <input type="text" class="form-control" placeholder="mail" name="mail" id="mail">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Enter a valid mail address
            </div>
	    </div>
	    <div class="form-group">
	      <label for="place">Place:</label>
	      <input type="text" class="form-control" placeholder="Place" name="place" id="place">
            <div class="valid-feedback">
                Looks good!
            </div>
            <div class="invalid-feedback">
                Enter a valid place
            </div>
	    </div>
	    <div class="form-group">
	      <div id="submit" class="btn btn-primary">Submit</div>
	    </div>
	  </form>
	</div>
</div>

<?php
include __DIR__ . '/tpl/body_end.php';
?>