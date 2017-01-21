---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XWB GET VARIABLE VALUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XWB GET VARIABLE VALUE{:/}
 tag | {::nomarkdown}VARVAL{:/}
 routine | [XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC accepts the name of a variable which will be evaluated and itsvalue returned to the server.  For example, this RPC may be called witha parameter like DUZ which will be returned as 123456.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VARVAL^[XWBLIB](http://code.osehra.org/dox/Routine_XWBLIB_source.html)
 Method comment | returns value of passed in variable
 Input parameters | {::nomarkdown}VARIABLE{:/}
 Code | {::nomarkdown}  S RESULT=VARIABLE ;can do this with the REFERENCE type parameter{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}