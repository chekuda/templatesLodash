document.onclick = function() {
	
}
	//function to choice Gen o PF template
	window.onload= function (){
		var radios = document.getElementsByName("type");
		for(var i = 0;i < radios.length;i++){
			radios[i].onclick = function(){
				var val = this.value
				//1 = Gen
				//2 = PF
				if (val == 2)
					{
						//path images
						$("#pahtGen").css("width","145");
						$("#pathPF").css({"visibility":"visible", "display":"inline-block"});
						
						//text 
						$("#genTex").css("width","145");
						$("#Textpf").css({"visibility":"visible", "display":"inline-block"});
						
					}
				else
					{
						//path images
						$("#pahtGen").css("width","310");
						$("#pathPF").css({"visibility":"hidden", "display":"none"});
						
						//text 
						$("#genTex").css("width","310");
						$("#Textpf").css({"visibility":"hidden", "display":"none"});
					}
				};
		}
	}
	


    function standardResponsive1()
    {
        
		var merchantName = document.getElementById('Merchant').value;
		var links = document.getElementById('links').value;
		var imagesGen = document.getElementById('pahtGen').value;
		var imagesPF = document.getElementById('pathPF').value;
		//var colorBg =  document.getElementById('background').value;
		var textGen = document.getElementById('genTex').value;
		//var textPF = document.getElementById('genTex').value;
		var disclaimer = document.getElementById('disclaimer').value;
		var socialLink1 = document.getElementById('social1').value;
		var socialLink2 = document.getElementById('social2').value;
		var socialLink3 = document.getElementById('social3').value;
                
                 var selection = document.querySelector("input[name='standard']:checked").value;
                var selectionKeyGen = {
                    '1': 'standard1Gen.html',
                    '2': 'standard2Gen.html',
                    '3': 'standard3Gen.html',
                    '4': 'dach.html'};
		
				var selectionKeyPF = {
                    '1': 'standard1pf.html',
                    '2': 'standard2pf.html',
                    '3': 'standard3pf.html',
                    '4': 'dachpf.html'};
                    
		//llamo al servidor donde tengo el archivo Gen
		$.ajax({
                    //esta URL me cojera la url donde tengo el archivo ./standard.html
                    url: './Gen/'+ selectionKeyGen[selection],
                    //si la conexion esta bien hecha entro en success
                    success: function(data)
                    {
                    //primero paso el el archivo a compiled y luego lo sustituyo por los datos
			var compiled = _.template(data);
			text = compiled({HOMEPAGELINK: links, MERCHANTNAME: merchantName, ImageKey: imagesGen, TEXTCONTENT: textGen,DISCLAIMER: disclaimer,SOCIALLINK1: socialLink1,SOCIALLINK2:socialLink2,SOCIALLINK3:socialLink3});
			document.getElementById('GenText').innerHTML = text;
                    }, 
                    error: function() {
			console.log(arguments);
			document.getElementById('GenText').innerHTML = 'IDIOTA!'
                    }
                });
		
		//llamo al servidor donde tengo el archivo PF
		$.ajax({
                    //esta URL me cojera la url donde tengo el archivo ./standard.html
                    url: './PF/'+ selectionKeyPF[selection],
                    //si la conexion esta bien hecha entro en success
                    success: function(data)
                    {
                    //primero paso el el archivo a compiled y luego lo sustituyo por los datos
			var compiled = _.template(data);
			text = compiled({HOMEPAGELINK: links, MERCHANTNAME: merchantName, ImageKey: imagesGen, TEXTCONTENT: textGen,DISCLAIMER: disclaimer,SOCIALLINK1: socialLink1,SOCIALLINK2:socialLink2,SOCIALLINK3:socialLink3});
			document.getElementById('PFText').innerHTML = text;
                    }, 
                    error: function() {
			console.log(arguments);
			document.getElementById('PFText').innerHTML = 'IDIOTA!'
                    }
                });
                
    };
	    
    //var file = fopen("templates/Standard_Responsive_1.html",3);
    
	
    /*document.getElementById('GenText').innerHTML = part1 + part2 + merchantName + part3 + part4 + part5 + part6 +part7 +part8 + colorBg + part9 + part10tabla + part11 + part12 +part13 + part14 + colorBg + part15 + part16 + colorBg + part17 + part10tabla + part18 + part19 + part20 + merchantName + part21 + links + part22 + part23 + merchantName + part24 + imagesGen + part25 + part26 + merchantName + part27 + part28 + merchantName + part29 + links + part30 + part31 + merchantName + part32 + imagesGen + part33 + part34 + part35 + merchantName + part36 + links + part37 + part38 + merchantName + part39 + imagesGen + part40 + part41 + merchantName + part42 + links + part43 + part44 + merchantName + part45 + imagesGen + part46 + merchantName + part47 + links + part48 + part49 + merchantName + part50 + imagesGen + part51 + part52 + part53 + textGen + part53;*/
