var tempsBreak = $('#timeBreak');
var tempsTaf = $('#timeWork');
var initBreak = 00;
var initTaf = 00;
var tailleSab = 00;
	
	tempsBreak.html(initBreak);
	tempsTaf.html(initTaf);

$('#plusWork').click(function(){
	initTaf += 2;
	tempsTaf.html(initTaf +' secondes');
	});

$('#moinsWork').click(function(){
	initTaf -= 2;
	tempsTaf.html(initTaf +' secondes');
	});

$('#plusBreak').click(function(){
	initBreak += 2;
	tempsBreak.html(initBreak + ' secondes');
	});

$('#moinsBreak').click(function(){	
	initBreak -= 2;
	tempsBreak.html(initBreak +' secondes');
	});


$('#go').click(function() {
		
		var decompte = initTaf;
		var decompteBreak = initBreak;
		$('#temps').html(decompte + ' secondes');
		console.log(decompte);
		
		setInterval(function (){
			
			if(decompte > 0) {
			decompte--;
			$('#temps').html(decompte + ' secondes');
			tailleSab ++;
			$('#sablier').height(tailleSab + 'px');
		}
		
		else if (decompte == 0){
		$('#temps').html(decompteBreak)
			decompteBreak--;
			// $('#temps').html(initBreak);
			$('#sablier').css("background-color", "blue");

			if (decompteBreak < 0) {
				decompte = initTaf;
				decompteBreak = initBreak;
				console.log(decompte);
			}
		}

	}, 1000);
});


















