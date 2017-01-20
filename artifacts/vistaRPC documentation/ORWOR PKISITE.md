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

 Property | Value 
 --- | --- 
 Method | PKISITE^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | RPC determines if PKI is turned on at the site
 Code | {::nomarkdown}  N ORPKIS,ORSITE,IEN<br> S RETURN=0<br> Q:'$L($T(STORESIG^XUSSPKI))  ;Check for Kernel piece<br> Q:'$L($T(OIDEA^PSSOPKI))  ;Check for Pharmacy piece<br> S ORPKIS=0,ORSITE=+$$SITE^VASITE() I $D(^ORD(100.7,"B",ORSITE)) D<br> . S IEN=$O(^ORD(100.7,"B",ORSITE,"")),ORPKIS=$P(^ORD(100.7,IEN,0),"^",2)<br> I ORPKIS S RETURN=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}