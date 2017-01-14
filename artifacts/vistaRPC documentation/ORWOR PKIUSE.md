---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR PKIUSE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR PKIUSE{:/}
 tag | {::nomarkdown}PKIUSE{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PKIUSE^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | RPC determines user can use PKI Digital Signature
 Code | {::nomarkdown}  N ORPKIU<br> S RETURN=0<br> S ORPKIU=0 I $D(^ORD(100.7,"C",DUZ)) S ORPKIU=1<br> I ORPKIU S RETURN=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}