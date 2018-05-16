$(document).ready(function(){
	var template = $("#template").html();
	Mustache.parse(template);

	var rendered = Mustache.render(template, {
			text: {
					questionOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answerOne:"Mauris ac suscipit dolor, sed ullamcorper metus. Curabitur \
					venenatis elementum lobortis. Fusce suscipit tellus augue \
					ut malesuada turpis sollicitudin in. Sed sit amet sapien tellus \
					Praesent fermentum massa in lectus aliquam, et iaculis enim \
					fermentum. Morbi posuere nisi id diam lacinia scelerisque ",
										
					questionTwo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answerTwo: "Mauris ac suscipit dolor, sed ullamcorper metus. Curabitur \
					venenatis elementum lobortis. Fusce suscipit tellus augue \
					ut malesuada turpis sollicitudin in. Sed sit amet sapien tellus \
					Praesent fermentum massa in lectus aliquam, et iaculis enim \
					fermentum. Morbi posuere nisi id diam lacinia scelerisque",

					questionThree:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answerThree: "Mauris ac suscipit dolor, sed ullamcorper metus. Curabitur \
					venenatis elementum lobortis. Fusce suscipit tellus augue \
					ut malesuada turpis sollicitudin in. Sed sit amet sapien tellus \
					Praesent fermentum massa in lectus aliquam, et iaculis enim \
					fermentum. Morbi posuere nisi id diam lacinia scelerisque",

					questionFour:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answerFour: "Mauris ac suscipit dolor, sed ullamcorper metus. Curabitur \
					venenatis elementum lobortis. Fusce suscipit tellus augue \
					ut malesuada turpis sollicitudin in. Sed sit amet sapien tellus \
					Praesent fermentum massa in lectus aliquam, et iaculis enim \
					fermentum. Morbi posuere nisi id diam lacinia scelerisque",

					questionFive:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answerFive: "Mauris ac suscipit dolor, sed ullamcorper metus. Curabitur \
					venenatis elementum lobortis. Fusce suscipit tellus augue \
					ut malesuada turpis sollicitudin in. Sed sit amet sapien tellus \
					Praesent fermentum massa in lectus aliquam, et iaculis enim \
					fermentum. Morbi posuere nisi id diam lacinia scelerisque",
					
					
			},
			

			show: false
	})
	$("#target").html(rendered);
});