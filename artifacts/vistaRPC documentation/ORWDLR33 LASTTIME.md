---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR33 LASTTIME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR33 LASTTIME{:/}
 tag | {::nomarkdown}LASTTIME{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}When entering quick orders from an order menu, the ^TMP(\ORECALL\,$J)array contains the last responses entered.  This RPC allows retrieval ofthe previous order's collection time from that array.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LASTTIME^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Get last collection time used from ^TMP("ORECALL",$J) array
 Code | {::nomarkdown}  N ORDIALOG,ORTYPE,ORTIME<br> S ORDIALOG=$O(^ORD(101.41,"B","LR OTHER LAB TESTS",0))<br> S ORTYPE=$O(^ORD(101.41,"B","OR GTX COLLECTION TYPE",0))<br> S ORTIME=$O(^ORD(101.41,"B","OR GTX START DATE/TIME",0))<br> S ORY=$$RECALL^ORCD(ORTYPE,1)_U_$$RECALL^ORCD(ORTIME,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}