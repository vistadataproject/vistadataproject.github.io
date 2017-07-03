---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXR CANRN
# ORWDXR CANRN



Property | Value
--- | ---
Label | CANRN
Routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CANRN^ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
Method Comment | Check conjunction for renew.
Input Parameters | ORID
First Comment | {::nomarkdown}<pre><code> All conjunctioni = "And" return 1<br/> Has a "Then" return 0</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'$G(^OR(100,+ORID,0))<br/> N PKG<br/> S PKG=$P($G(^OR(100,+ORID,0)),U,14)<br/> S PKG=$$NMSP^ORCD(PKG)<br/> I PKG'="PS" Q<br/> N INDX,INDY,CANRENEW<br/> S INDX=0<br/> S CANRENEW=1<br/> N CHID<br/> S CHID=0 F  S CHID=$O(^OR(100,+ORID,2,CHID)) Q:'CHID  D<br/> . N ORSTS,ACTIVE S ORSTS=0<br/> . S ORSTS=$P($G(^OR(100,CHID,3)),U,3)<br/> . S ACTIVE=$O(^ORD(100.01,"B","ACTIVE",0))<br/> . I ACTIVE'=ORSTS S CANRENEW=0<br/> I 'CANRENEW S ORY=CANRENEW Q<br/> F  S INDX=$O(^OR(100,+ORID,4.5,"ID","CONJ",INDX)) Q:'INDX  D<br/> . S INDY=0 F  S INDY=$O(^OR(100,+ORID,4.5,INDX,INDY)) Q:'INDY  D<br/> . . I $G(^(INDY))="T" S CANRENEW=0 Q<br/> . I CANRENEW=0 Q<br/> S ORY=CANRENEW</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}