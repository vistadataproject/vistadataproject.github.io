---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWSR SHOW SURG TAB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWSR SHOW SURG TAB{:/}
 tag | {::nomarkdown}SHOWSURG{:/}
 routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check for presence of SR*3.0*100 (Surgery Electronic Signature) patch, andalso for parameter value.  If both TRUE, surgery tab will be displayed inCPRS.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SHOWSURG^[ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
 Method comment | is Surgery ES patch installed?
 Code | {::nomarkdown}  S ORY=$$PATCH^XPDUTL("SR*3.0*100")<br> Q:+ORY=0<br> S ORY=$$GET^XPAR("ALL","ORWOR SHOW SURGERY TAB",1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}