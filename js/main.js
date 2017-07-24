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

		var interval = setInterval(function (){
			
			if(decompteWork >= 0) {
			
				$('#temps').html('temps de travail : ' + decompteWork + ' secondes');
				decompteWork--;
				tailleSabWk ++;
				$('#sablierWork').css('background-color', 'yellow');
				$('#sablierBreak').height(tailleSabBr + 'px');
				$('#sablierWork').height(tailleSabWk + 'px');
			}
		
			else if ((decompteWork < 0) && (decompteBreak >= 0)){

				tailleSabWk = 0;
				$('#sablierWork').height(tailleSabWk + 'px');

				$('#temps').html('temps de break : ' + decompteBreak + ' secondes');
				decompteBreak--;
	
				tailleSabBr ++;
				console.log(tailleSabBr + 'px');
				$('#sablierBreak').height(tailleSabBr + 'px');
				console.log($('#sablierBreak').height() + 'px');		
				$('#sablierBreak').css('background-color', 'orange');
				console.log("ici");

				if (decompteBreak < 0) {
					console.log("et ici");
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



















