
 $(document).bind("mobileinit", function(){
                $.mobile.touchOverflowEnabled = false;
                $.mobile.defaultPageTransition = 'none';
                $.mobile.useFastClick = false;
                $.mobile.buttonMarkup.hoverDelay = 0;
                $.mobile.allowCrossDomainPages = true;
                $.support.cors=true;
            });
            
  window.onload = function(){
                       $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/code1.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try   //Opera, Firefox, Chrome
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc = document.getElementById("code1");
                       abc.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 }); 
                  
                  
                $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/btech_main.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("btech_main");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                      }
                 }); 
                 
                 $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/btech_cuto.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("btech_cuto");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                      }
                 });
                 
              $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/btech_faq.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
						var abc1 = document.getElementById("btech_faq");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 }); 
                 
                $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/mtech_main.txt',
                       dataType: 'html',
                       success: function(data) {

                        try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("mtech_main");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 }); 
                 
               $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/mtech_faq.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("mtech_faq");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 });
                 
                $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/phd_main.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("phd_main");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 });
                 
                    $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/phd_roll.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("phd_roll");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 }); 
                 
                     $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/phd_roll_add.txt',
                       dataType: 'html',
                       success: function(data) {

                         //cross platform xml object creation from w3schools
                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("phd_roll_add");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 }); 
                 
                    $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/phd_colab.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("phd_colab");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 }); 
                 
                     $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/phd_spon.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("phd_spon");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 }); 
                 
                     $.ajax({
                       type: 'GET', 
                       url: 'file:///storage/sdcard0/iiitd/phd_faq.txt',
                       dataType: 'html',
                       success: function(data) {

                         try //Internet Explorer
                           {
                           xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
                           xmlDoc.async="false";
                           xmlDoc.loadXML(data);
                           }
                         catch(e)
                           {
                           try // Firefox, Mozilla, Opera, etc.
                             {
                             parser=new DOMParser();
                             xmlDoc=parser.parseFromString(data,"text/xml");
                             }
                           catch(e)
                             {
                             alert(e.message);
                             return;
                             }
                           }
                       var abc1 = document.getElementById("phd_faq");
                       abc1.innerHTML = (xmlDoc.getElementById("main-content-inner").innerHTML);
                       }
                 });        
                }     


