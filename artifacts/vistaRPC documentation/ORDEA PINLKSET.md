---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA PINLKSET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA PINLKSET{:/}
 tag | {::nomarkdown}PINLKSET{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PINLKSET^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | set a PIN lock on the current user
 Code | {::nomarkdown}  S ^XTMP("OR DEA PIN LOCK",0)=$$FMADD^XLFDT($$NOW^XLFDT,2)_U_$$NOW^XLFDT<br> S ^XTMP("OR DEA PIN LOCK",DUZ)=$$NOW^XLFDT<br> S ORY=^XTMP("OR DEA PIN LOCK",DUZ){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}