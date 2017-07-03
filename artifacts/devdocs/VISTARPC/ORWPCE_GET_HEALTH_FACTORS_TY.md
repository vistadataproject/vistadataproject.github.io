---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE GET HEALTH FACTORS TY
# ORWPCE GET HEALTH FACTORS TY

Returns a list of active health factor types.

Property | Value
--- | ---
Label | HFTYPE
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [HFTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | get the list of active  health factors
Input Parameters | ADDCATS
Code | {::nomarkdown}<pre><code> N IEN,CNT,BINDEX,REC<br/> S (IEN,CNT,BINDEX)=0,ADDCATS=+$G(ADDCATS)<br/> F  S BINDEX=$O(^AUTTHF("B",BINDEX)) Q:BINDEX']""  D<br/> .F  S IEN=$O(^AUTTHF("B",BINDEX,IEN)) Q:'+IEN  D<br/> ..S REC=$G(^AUTTHF(IEN,0))<br/> ..I +$P(REC,U,11) S REC=""<br/> ..I 'ADDCATS,$P(REC,U,10)="C" S REC=""<br/> ..I REC'="" D<br/> ...S CNT=CNT+1,ORWLST(CNT)=IEN_U_$P(REC,U)<br/> ...I ADDCATS S ORWLST(CNT)=ORWLST(CNT)_U_$P(REC,U,10)_U_$P(REC,U,3)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}