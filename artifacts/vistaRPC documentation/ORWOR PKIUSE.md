---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR PKIUSE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR PKIUSE{:/}
 tag | {::nomarkdown}PKIUSE{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC determines user can use PKI Digital Signature
 Lines | ```{::nomarkdown} N ORPKIU<br/> S RETURN=0<br/> S ORPKIU=0 I $D(^ORD(100.7,"C",DUZ)) S ORPKIU=1<br/> I ORPKIU S RETURN=1```{:/}




 Generated on January 13th 2017, 7:11:27 am