---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR PKISITE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR PKISITE{:/}
 tag | {::nomarkdown}PKISITE{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC determines if PKI is turned on at the site
 Lines | ```
 N ORPKIS,ORSITE,IEN
 S RETURN=0
 Q:'$L($T(STORESIG^XUSSPKI))  ;Check for Kernel piece
 Q:'$L($T(OIDEA^PSSOPKI))  ;Check for Pharmacy piece
 S ORPKIS=0,ORSITE=+$$SITE^VASITE() I $D(^ORD(100.7,"B",ORSITE)) D
 . S IEN=$O(^ORD(100.7,"B",ORSITE,"")),ORPKIS=$P(^ORD(100.7,IEN,0),"^",2)
 I ORPKIS S RETURN=1```




 Generated on January 13th 2017, 6:55:29 am