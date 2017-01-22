---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORB SETSORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORB SETSORT{:/}
 tag | {::nomarkdown}SETSORT{:/}
 routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets the GUI alert sort method for the user.  This is set when a user clicks on the GUI alert columns to change the display sorting.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SETSORT^[ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
 Method comment | set notification sort method^direction for user
 Input parameters | {::nomarkdown}SORT, DIR{:/}
 Code | {::nomarkdown}  D EN^XPAR(DUZ_";VA(200,","ORB SORT METHOD",1,SORT,.ORERR)<br> I $L($G(DIR)) D EN^XPAR(DUZ_";VA(200,","ORB SORT DIRECTION",1,DIR,.ORERR)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}