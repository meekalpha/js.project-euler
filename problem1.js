

function p1() {
	var $solutionLabel = $('#p1-solution');
	var n = $('#p1-n').val();

	var a = Math.floor((n-1)/3);		//number of multiples of 3
	var s1 = a*(a+1)/2 * 3;  		//sum of these
	var b = Math.floor((n-1)/5);		//number of multiples of 5
	var s2 = b*(b+1)/2 * 5;  		//sum of these
	var c = Math.floor((n-1)/15); 		//number of multiples of 15
	var s3 = c*(c+1)/2 * 15; 		//sum of these

	var sum = s1 + s2 - s3;  		//inclusion/exclusion

	$solutionLabel.text(sum);
	return false;
};

$('#p1-form-container').submit(p1);