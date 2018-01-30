(function(){
	// var outside = [];
	var myMain = document.createElement('main'); 
	document.body.append(myMain);

	var first = json.face1,
		second = json.face2,
		third = json.face3,
		forth = json.face4,
		five = json.face5,
		six = json.face6;

		var cont = document.createElement('div');
		myMain.append(cont);
		cont.setAttribute('class', 'cont')
		
		
		var Div1 = document.createElement('div');
		cont.append(Div1);
		Div1.setAttribute('class', 'Div1')

		var Div2 = document.createElement('div');
		cont.append(Div2);
		Div2.setAttribute('class', 'Div2');

		var Div3 = document.createElement('div');
		cont.append(Div3);
		Div3.setAttribute('class', 'Div3');

		var Div4 = document.createElement('div');
		cont.append(Div4);
		Div4.setAttribute('class', 'Div4');

		var Div5 = document.createElement('div');
		cont.append(Div5);
		Div5.setAttribute('class', 'Div5');

		var Div6 = document.createElement('div');
		cont.append(Div6);
		Div6.setAttribute('class', 'Div6');



	for(var m in first){
		console.log()
		var firstDiv = document.createElement('div');
		Div1.append(firstDiv);

		texts = first[m].text;

		for(var n in texts) {

			var inner = document.createElement('p');
			firstDiv.append(inner);

			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class) ;
		} 
	} 
	for(var m in second) {
		var secondDiv = document.createElement('div');
		Div2.append(secondDiv)
		
		texts = second[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			secondDiv.append(inner);

			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class) ;
		}
	}
	for(var m in third) {
		var thirdDiv = document.createElement('div');
		Div3.append(thirdDiv)
		
		texts = third[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			thirdDiv.append(inner);

			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class) ;
		}
	}
	for(var m in forth) {
		var forthDiv = document.createElement('div');
		Div4.append(forthDiv)
		
		texts = forth[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			forthDiv.append(inner);

			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class) ;
		}
	}
		for(var m in five) {
		var fiveDiv = document.createElement('div');
		Div5.append(fiveDiv)
		
		texts = five[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			fiveDiv.append(inner);

			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class) ;
		}
	}
		for(var m in six) {
		var sixDiv = document.createElement('div');
		Div6.append(sixDiv)
		
		texts = six[m].text;

		for(var n in texts) {
			var inner = document.createElement('p');
			sixDiv.append(inner);

			inner.textContent = texts[n].content;
			inner.setAttribute('class', texts[n].class) ;
		}
	}

})();