---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXR CANRN 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR CANRN{:/}
 tag | {::nomarkdown}CANRN{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CANRN^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Check conjunction for renew.
 First comment | {::nomarkdown}All conjunctioni = "And" return 1<br/>Has a "Then" return 0{:/}
 Input parameters | {::nomarkdown}ORID{:/}
 Code | ```  Q:'$G(^OR(100,+ORID,0))
 N PKG
 S PKG=$P($G(^OR(100,+ORID,0)),U,14)
 S PKG=$$NMSP^ORCD(PKG)
 I PKG'="PS" Q
 N INDX,INDY,CANRENEW
 S INDX=0
 S CANRENEW=1
 N CHID
 S CHID=0 F  S CHID=$O(^OR(100,+ORID,2,CHID)) Q:'CHID  D
 . N ORSTS,ACTIVE S ORSTS=0
 . S ORSTS=$P($G(^OR(100,CHID,3)),U,3)
 . S ACTIVE=$O(^ORD(100.01,"B","ACTIVE",0))
 . I ACTIVE'=ORSTS S CANRENEW=0
 I 'CANRENEW S ORY=CANRENEW Q
 F  S INDX=$O(^OR(100,+ORID,4.5,"ID","CONJ",INDX)) Q:'INDX  D
 . S INDY=0 F  S INDY=$O(^OR(100,+ORID,4.5,INDX,INDY)) Q:'INDY  D
 . . I $G(^(INDY))="T" S CANRENEW=0 Q
 . I CANRENEW=0 Q
 S ORY=CANRENEW```




 Generated on January 14th 2017, 7:26:35 am