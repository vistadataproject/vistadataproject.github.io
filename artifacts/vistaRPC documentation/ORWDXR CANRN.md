---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR CANRN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR CANRN{:/}
 tag | {::nomarkdown}CANRN{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CANRN^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Check conjunction for renew.
 Input parameters | {::nomarkdown}ORID{:/}
 First comment | {::nomarkdown}<pre> All conjunctioni = "And" return 1<br/> Has a "Then" return 0</pre>{:/}
 Code | {::nomarkdown}  Q:'$G(^OR(100,+ORID,0))<br> N PKG<br> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br> S PKG=$$NMSP^ORCD(PKG)<br> I PKG'="PS" Q<br> N INDX,INDY,CANRENEW<br> S INDX=0<br> S CANRENEW=1<br> N CHID<br> S CHID=0 F  S CHID=$O(^OR(100,+ORID,2,CHID)) Q:'CHID  D<br> . N ORSTS,ACTIVE S ORSTS=0<br> . S ORSTS=$P($G(^OR(100,CHID,3)),U,3)<br> . S ACTIVE=$O(^ORD(100.01,"B","ACTIVE",0))<br> . I ACTIVE'=ORSTS S CANRENEW=0<br> I 'CANRENEW S ORY=CANRENEW Q<br> F  S INDX=$O(^OR(100,+ORID,4.5,"ID","CONJ",INDX)) Q:'INDX  D<br> . S INDY=0 F  S INDY=$O(^OR(100,+ORID,4.5,INDX,INDY)) Q:'INDY  D<br> . . I $G(^(INDY))="T" S CANRENEW=0 Q<br> . I CANRENEW=0 Q<br> S ORY=CANRENEW{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}