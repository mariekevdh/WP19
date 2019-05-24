<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
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

<div class="row">
	<div class="col-md-12">
		<?php 
		if (isset($_GET["name"]) && $_GET["name"] != ""){
			$name = $_GET["name"];
			echo "<h1>Welcome $name!</h1>";
			}
		if (isset($_GET["place"]) && $_GET["place"] != ""){
			$place = $_GET["place"];
			if ($place == "Amsterdam") {
				echo "<p>You're from the capital of the Netherlands!</p>";
			} else {
				echo "<p>You're from $place!</p>";
		}
		} ?>
	  <form action="simple_form.php" method="get">
	    <div class="form-group">
	      <label for="text">Name:</label>
	      <input type="text" class="form-control" placeholder="Name" name="name">
	    </div>
	    <div class="form-group">
	      <label for="place">Place:</label>
	      <input type="text" class="form-control" placeholder="Place" name="place">
	    </div>
	    <div class="form-group">
	      <button class="btn btn-primary">Submit</button>
	    </div>
	  </form>
	</div>
</div>

<?php
include __DIR__ . '/tpl/body_end.php';
?>