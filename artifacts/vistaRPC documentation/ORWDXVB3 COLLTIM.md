---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB3 COLLTIM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB3 COLLTIM{:/}
 tag | {::nomarkdown}COLLTIM{:/}
 routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC checks the value of the parameter OR VBECS REMOVE COLL TIMEto determine if a default collection time should be presented on theVBECS order dialog.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | COLLTIM^[ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 Method comment | Get Collection Time Default Parameter Value
 Code | {::nomarkdown}  S OROOT=+$$GET^XPAR("ALL","OR VBECS REMOVE COLL TIME",1,"I"){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}