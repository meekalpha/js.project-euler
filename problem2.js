function p2() {
	var $solutionLabel = $('#p2-solution');
	var n = $('#p2-n').val();

	var a = 1;
	var b = 2;
	var sum = 2;
	var temp = 0;

	while (temp <= n){
		temp = a + b;
		if (temp < n){
			a = b;
			b = temp;
			if (b%2==0){
				sum += b;
			}
		}
	}

	$solutionLabel.text(sum);
	return false;
};

$('#p2-form-container').submit(p2);