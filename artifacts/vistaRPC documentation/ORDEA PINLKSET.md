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

 property | value 
 --- | --- 
 Method | PINLKSET^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | set a PIN lock on the current user
 Code | {::nomarkdown}  S ^XTMP("OR DEA PIN LOCK",0)=$$FMADD^XLFDT($$NOW^XLFDT,2)_U_$$NOW^XLFDT<br> S ^XTMP("OR DEA PIN LOCK",DUZ)=$$NOW^XLFDT<br> S ORY=^XTMP("OR DEA PIN LOCK",DUZ){:/}


### CPRS

[fReview.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas)

[Orders/fOrdersSign.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}