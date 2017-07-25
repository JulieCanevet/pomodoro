var tempsBreak = $('#timeBreak');
var tempsTaf = $('#timeWork');
var initBreak = 00;
var initTaf = 00;
var tailleSabWk = 0;
var tailleSabBr = 0;

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
		
		var decompteWork = initTaf;
		var decompteBreak = initBreak;
		$('#sablier').height(initTaf+ "em");
		var interval = setInterval(function (){
			
			if(decompteWork >= 0) {
				$('#sablier').height(initTaf + 1 + "em");
				$('#temps').html('temps de travail : ' + decompteWork + ' secondes');
				decompteWork--;
				tailleSabWk ++;
				$('#sablierWork').css('background-color', 'rgba(240, 95, 55)');
				$('#sablierBreak').height(tailleSabBr + 'em');
				$('#sablierWork').height(tailleSabWk + 'em');
			}
		
			else if ((decompteWork < 0) && (decompteBreak >= 0)){

				tailleSabWk = 0;
				$('#sablierWork').height(tailleSabWk + 'em');
				$('#sablier').height(initBreak + 1 + "em");

				$('#temps').html('temps de break : ' + decompteBreak + ' secondes');
				decompteBreak--;
	
				tailleSabBr ++;
				$('#sablierBreak').height(tailleSabBr + 'em');
				$('#sablierBreak').css('background-color', 'rgba(240, 151, 55)');

				if (decompteBreak < 0) {
					tailleSabBr = 0;
					decompteWork = initTaf;
					decompteBreak = initBreak;
				}
			}
			
		}, 1000);
			

	$('#stop').click(function () {
		clearInterval(interval);
	});

});



















