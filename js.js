document.onclick = function() {
    
};

    
    window.onload= function ()
    {
        //*****************************  select the PF or Gen required   **************************** 
                
                $("[name='standard']").on('click',clickedPF);
                $("#checkGen").on('click',clickedPF);
                $("#checkPF").on('click',clickedPF);
                function clickedPF()
                {
                    var standardSelected = document.querySelector("input[name='standard']:checked").value;
                    if(document.querySelector('#checkPF:checked'))
                    {
                        
                        //path images
                        $("#pahtGen").css("width","145");
                        $("#pathPF").css({"visibility":"visible", "display":"inline-block"});

                        //text 
                        $("#genTex").css("width","145");
                        $("#Textpf").css({"visibility":"visible", "display":"inline-block"});

                        //secondText
                        $("#divFormPf2").css({"visibility":"visible", "display":"inline-block"});
                        

                        console.log('PF[' + standardSelected + ']' + ' ' + 'Gen[' + standardSelected + ']');
                            
                               
                    }
                    else if(document.querySelector('#checkGen:checked'))
                    {
                        if(standardSelected == 1)//standard 1Gen
                            {
                                console.log('gen + std1');
                                //path images
                                $("#pahtGen").css("width","310");
                                $("#pathPF").css({"visibility":"hidden", "display":"none"});

                                //text 
                                $("#genTex").css("width","310");
                                $("#Textpf").css({"visibility":"hidden", "display":"none"});

                                //secondText
                                $("#divFormPf2").css({"visibility":"hidden", "display":"none"});
                                
                            }
                        console.log('PF[' + standardSelected + ']' + ' ' + 'Gen[' + standardSelected + ']');
                    }
                };
          //*****************************  select the PF or Gen required  ****************************  
          //
          //
          //
          //*****************************  Load the Template    **************************** 

        $(".myButton.preview").on('click',standardResponsive1);

        function standardResponsive1()
        {
                console.log('hola');

        
                var merchantName = document.getElementById('Merchant').value;
                var preview = document.getElementById('preview').value;
                var links = document.getElementById('links').value;
                var imagesGen = document.getElementById('pahtGen').value;
                var imagesPF = document.getElementById('pathPF').value;
                //var colorBg =  document.getElementById('background').value;
                var textGen = document.getElementById('genTex').value;
                var textPF = document.getElementById('Textpf').value;
                var textPF2 = document.getElementById('Textpf2').value;
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
                    text = compiled({HOMEPAGELINK: links,PREVIEWTEXT: preview, MERCHANTNAME: merchantName, ImageKey: imagesGen, TEXTCONTENT: textGen,PFTEXTCONTENT1: textPF,PFTEXTCONTENT2: textPF2,DISCLAIMER: disclaimer,SOCIALLINK1: socialLink1,SOCIALLINK2:socialLink2,SOCIALLINK3:socialLink3});
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
		
		//*****************************  Template loaded    **************************** 
		//
		////*****************************  Template loaded    **************************** 
		//
		//
		$(".myButton.download").on('click',downloadFile);
		
		function downloadFile (){
			var merchantName = document.getElementById('Merchant').value;
			var html = "data:text/html; charset=utf-8";
			html+= $("#GenText").text();
			var encodeTemplate = encodeURI(html);
			var link = document.createElement("a");
			link.setAttribute("href", encodeTemplate);
			link.setAttribute("download","Generic"+merchantName+".html");
			link.click();
		}
    };
    


    
    
