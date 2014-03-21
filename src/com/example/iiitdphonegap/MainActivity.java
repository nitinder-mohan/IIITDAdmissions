package com.example.iiitdphonegap;

import org.apache.cordova.DroidGap;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.os.Environment;
import android.view.Menu;

public class MainActivity extends DroidGap {
	TextFileHelper TextFileH;
	String filePath = Environment.getExternalStorageDirectory() + "/IIITD/";

	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
       
        boolean haveConnectedWifi = false;
        boolean haveConnectedMobile = false;
        
        ConnectivityManager cm = (ConnectivityManager) getSystemService(Context.CONNECTIVITY_SERVICE);
		
        NetworkInfo[] netInfo = cm.getAllNetworkInfo();
        for (NetworkInfo ni : netInfo) {
            if (ni.getTypeName().equalsIgnoreCase("WIFI"))
                if (ni.isConnected())
                    haveConnectedWifi = true;
            if (ni.getTypeName().equalsIgnoreCase("MOBILE"))
                if (ni.isConnected())
                    haveConnectedMobile = true;
        }
        if(haveConnectedWifi || haveConnectedMobile){
			             	
    		try {

    			// initialize our TextFileHelper here
    			TextFileH = new TextFileHelper(MainActivity.this);

    			// first, make sure the path to your text file is created
    			TextFileH.createPath(filePath);
    		    
    			String  fileName ;
    			String actualFile;
    			
    			
    			String url;
    			
    			 fileName = "code1.txt";
    			 actualFile = filePath + fileName;
    			 
    			url="http://www.iiitd.ac.in/admission";
    		    TextFileH.createTextFile(actualFile,url);
    		
    		    
    		    fileName = "phd_main.txt";
    		    url="http://www.iiitd.ac.in/admission/phd";
    		    
    		    actualFile = filePath + fileName;
    		   
    		    TextFileH.createTextFile(actualFile,url);
   		    
    		    ////////////////
    		    
    		    fileName = "phd_roll_add.txt";
    		    url="http://www.iiitd.ac.in/admission/phd/rolling/2013";
    		    
    		    actualFile = filePath + fileName;
    		   
    		    TextFileH.createTextFile(actualFile,url);
  ////////////////
    		    
      		    fileName = "phd_roll.txt";
      		    url="http://www.iiitd.ac.in/admission/phd/rolling";
      		    
      		    actualFile = filePath + fileName;
      		   
      		    TextFileH.createTextFile(actualFile,url);
  ////////////////
    		    
      		    fileName = "mtech_main.txt";
      		    url="http://www.iiitd.ac.in/admission/mtech/2013";
      		    
      		    actualFile = filePath + fileName;
      		   
      		    TextFileH.createTextFile(actualFile,url);
  ////////////////
    		    
      		    fileName = "mtech_faq.txt";
      		    url="http://www.iiitd.ac.in/admission/mtech/faq";
      		    
      		    actualFile = filePath + fileName;
      		   
      		    TextFileH.createTextFile(actualFile,url);
      		
 ////////////////
    		    
      		    fileName = "phd_colab.txt";
      		    url="http://www.iiitd.ac.in/admission/phd/collaborative";
      		    
      		    actualFile = filePath + fileName;
      		   
      		    TextFileH.createTextFile(actualFile,url);
 ////////////////
    		    
      		    fileName = "phd_spon.txt";
      		    url="http://www.iiitd.ac.in/admission/phd/sponsored";
      		    
      		    actualFile = filePath + fileName;
      		   
      		    TextFileH.createTextFile(actualFile,url);
  ////////////////
    		    
        		    fileName = "phd_faq.txt";
        		    url="http://www.iiitd.ac.in/admission/phd/faq";
        		    
        		    actualFile = filePath + fileName;
        		   
        		    TextFileH.createTextFile(actualFile,url);
        		    
      ////////////////
        		    
          		    fileName = "btech_main.txt";
          		    url="http://www.iiitd.ac.in/admission/btech/2013";
          		    
          		    actualFile = filePath + fileName;
          		   
          		    TextFileH.createTextFile(actualFile,url);
          		    
  ////////////////
        		    
          		    fileName = "btech_cuto.txt";
          		    url="http://www.iiitd.ac.in/admission/btech/cutoffs";
          		    
          		    actualFile = filePath + fileName;
          		   
          		    TextFileH.createTextFile(actualFile,url);
  ////////////////
        		    
          		    fileName = "btech_faq.txt";
          		    url="http://www.iiitd.ac.in/admission/btech/2013/faq";
          		    
          		    actualFile = filePath + fileName;
          		   
          		    TextFileH.createTextFile(actualFile,url);
          }
    		catch (NullPointerException e) {
    			e.printStackTrace();
    		} catch (Exception e) {
    			e.printStackTrace();
    		}
    		
    	       	super.loadUrl("file:///android_asset/www/index.html");
        }
        	
        else{   
        	AlertDialog.Builder b = new AlertDialog.Builder(this);
				b.setMessage("You are accessing an archived version of the app!!")
						.setCancelable(false)
						.setTitle("You are not connected to Internet!")
						.setNegativeButton("Back",new DialogInterface.OnClickListener() {
									public void onClick(DialogInterface dialog, int id) {
										dialog.dismiss();
								} 	
								});
				super.loadUrl("file:///android_asset/www/index.html");
				
				AlertDialog alert = b.create();
				alert.show();
		}
	  
    }
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
