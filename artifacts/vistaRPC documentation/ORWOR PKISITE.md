---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR PKISITE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR PKISITE{:/}
 tag | {::nomarkdown}PKISITE{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | PKISITE^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | RPC determines if PKI is turned on at the site
 Code | {::nomarkdown}  N ORPKIS,ORSITE,IEN<br> S RETURN=0<br> Q:'$L($T(STORESIG^XUSSPKI))  ;Check for Kernel piece<br> Q:'$L($T(OIDEA^PSSOPKI))  ;Check for Pharmacy piece<br> S ORPKIS=0,ORSITE=+$$SITE^VASITE() I $D(^ORD(100.7,"B",ORSITE)) D<br> . S IEN=$O(^ORD(100.7,"B",ORSITE,"")),ORPKIS=$P(^ORD(100.7,IEN,0),"^",2)<br> I ORPKIS S RETURN=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}