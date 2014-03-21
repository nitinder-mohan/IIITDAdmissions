package com.example.iiitdphonegap;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;

import java.lang.Object;

import android.content.Context;
import android.widget.Toast;

public class TextFileHelper {
	// context is used for toasts
		Context mContext;

		/*
		 * Constructor
		 */
		public TextFileHelper(Context mContext) {
			this.mContext = mContext;
		}

		/*
		 * Create a text file.
		 */
		public void createTextFile(String actualFile,String url_here) {
			try {

				
				File file = new File(actualFile);

				if (file.exists()) {
					flashMessage("Text file already exists.");
					updateTextFile( actualFile,  url_here);
					
					
				} else {

					// create the text file
					if (file.createNewFile()) {
						flashMessage("Text file was created.");
						updateTextFile( actualFile,  url_here);
						
						
					} else {
						flashMessage("Unable to create text file.");
					}

				}
				
				updateTextFile( actualFile,  url_here);
				
				
				
			} catch (NullPointerException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		/*
		 * Read a text file.
		 */

		public void updateTextFile(String actualFile, String url_here) {
	        String contents;
			
		    URL url=null;
	        try {
	            url = new URL(url_here);    //"http://iiitd.ac.in/admission"
	        } catch (MalformedURLException e) {
	            // TODO Auto-generated catch block
	            e.printStackTrace();
	        }
	        try{
	            InputStream is = (InputStream) url.getContent();
	            BufferedReader br = new BufferedReader(new InputStreamReader(is));
	            String line = null;
	            StringBuffer sb = new StringBuffer();
	            while((line = br.readLine()) != null){
	                sb.append(line);
	            }
	            contents = sb.toString();
	        
	        	File textFile = new File(actualFile);

				if (textFile.exists()) {

					// set to true if you want to append contents to text file
					// set to false if you want to remove previous content of text
					// file
					FileWriter textFileWriter = new FileWriter(textFile, false);

					BufferedWriter out = new BufferedWriter(textFileWriter);

					// create the content string
					String contentString = new String(contents);
                    // write the updated content
					out.write(contentString);
					out.close();

					flashMessage("File was updated.");

				
				} else {
					flashMessage("Cannot update. File does not exist.");
				}

			} catch (NullPointerException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
			
		}

		/*
		 * Delete a text file.
		 */
		public void deleteTextFile(String actualFile) {
			try {

				File file = new File(actualFile);

				if (file.exists()) {

					if (file.delete()) {
						flashMessage("Text file was deleted!");
					} else {
						flashMessage("Unable to delete text file.");
					}

				} else {
					flashMessage("Unable to delete. File does not exist.");
				}

			} catch (NullPointerException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		/*
		 * Method to create path where our text file will be created.
		 */
		public void createPath(String filePath) {
			try {

				File file = new File(filePath);

				if (file.isDirectory()) {
					flashMessage("Path exists.");
				}

				// create the directory
				else {
					flashMessage("Path was created.124134");
					if (file.mkdirs()) {
						flashMessage("Path was created.");
					} else {
						flashMessage("Unable to create path.");
					}

				}

			} catch (NullPointerException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		/*
		 * Just an extra method for displaying toasts.
		 */
		public void flashMessage(String customText) {
			try {

			//	Toast.makeText(mContext, customText, Toast.LENGTH_SHORT).show();

			} catch (NullPointerException e) {
				e.printStackTrace();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

}
