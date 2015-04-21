function is_prime(n){
	var max = Math.ceil(Math.sqrt(n));
	var i;
	for (i = 2; i <= max; i++){
		if (n%i==0){
			return false;
		}
	}
	return true;
}

function solve_p3(n){
	var i;
	for (i = 1; i <= n; i++){
		if ((n%i==0) && (is_prime(n/i))){
			return (n/i);
		}
	}
	return 0;
}

function p3() {
	var $solutionLabel = $('#p3-solution');
	var n = $('#p3-n').val();

	$solutionLabel.text(solve_p3(n));
	return false;
};

$('#p3-form-container').submit(p3);

/*
import math

def is_prime(n):
    max = math.ceil(math.sqrt(n))
    for x in range(2,max + 1):
        if (n//x)*x==n:
            return False
    return True

def solve(n):
    for i in range(1,n+1):
        if (n//i)*i==n and is_prime(n//i):
            return n//i
    return 0
    
    
for _ in range(int(input())):
    print(solve(int(input())))*/