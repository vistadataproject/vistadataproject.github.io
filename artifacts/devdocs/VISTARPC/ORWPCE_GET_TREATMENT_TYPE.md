---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE GET TREATMENT TYPE
# ORWPCE GET TREATMENT TYPE

Returns the list of active treatments.

Property | Value
--- | ---
Label | TRTTYPE
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [TRTTYPE^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | get the list of active treatments
Code | {::nomarkdown}<pre><code> N IEN,CNT,BINDEX S (IEN,CNT,BINDEX)=0<br/> F  S BINDEX=$O(^AUTTTRT("B",BINDEX)) Q:BINDEX']""  F  S IEN=$O(^(BINDEX,IEN)) Q:'+IEN  I $D(^AUTTTRT(IEN,0))#2,+$P(^(0),"^",4)=0 S CNT=CNT+1,ORWLST(CNT)=IEN_"^"_$P(^(0),"^")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}