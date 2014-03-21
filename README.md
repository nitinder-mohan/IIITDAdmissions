IIITDAdmissions
===============

IIITD Admissions application (built using jQuery Mobile) and compiled to android using the Phonegap Library.

The main idea of the application is to makes a similar frontend for all the platforms without coding in native language that much. Currently the app only works in Android as the parsing code is written in JAVA. 

The project consists of following main files :

1. index.html: contains the main souce code od jQuery mobile. stored in assets/wwww.
2. MainActivity.java: contains the source android code which initiates the index.htmnl at application startup and also initializes the javascript code for fetching source HTML code from remote webpage.
3. TextFileHelper.java: saves the content of the remote webpage in textfiles stored at location InternalMemory/IIITD which is automatically created at startup. Also the application parses the code in these text files to display them in suitable manner.

How to run: The .apk file is located in the folder 'bin'. just install it in any android phone (or emulator) to get it to work.

The code was compiled using Eclipse IDE. If the code is to be imported in any IDE, proper phonegap libraries need to be added to the project source. 

