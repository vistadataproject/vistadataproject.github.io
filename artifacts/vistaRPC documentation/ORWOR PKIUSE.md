---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR PKIUSE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR PKIUSE{:/}
 tag | {::nomarkdown}PKIUSE{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PKIUSE^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | RPC determines user can use PKI Digital Signature
 Code | ```  N ORPKIU
 S RETURN=0
 S ORPKIU=0 I $D(^ORD(100.7,"C",DUZ)) S ORPKIU=1
 I ORPKIU S RETURN=1```




 Generated on January 14th 2017, 7:26:35 am