---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWUL FV4DG
# ORWUL FV4DG



Property | Value
--- | ---
Label | FV4DG
Routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [FV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Method Comment | return the current full list &amp; item count
Input Parameters | DGNM
Code | {::nomarkdown}<pre><code> S VAL=$O(^ORD(101.44,"B","ORWDSET "_DGNM,0))<br/> I 'VAL D<br/> . N UPDTIME,ATTEMPT<br/> . S UPDTIME=$G(^ORD(101.43,"AH","S."_DGNM)),ATTEMPT=0<br/> . I UPDTIME="" S UPDTIME=$H,^ORD(101.43,"AH","S."_DGNM)=UPDTIME<br/> . D FVBLD<br/> . S VAL=$O(^ORD(101.44,"B","ORWDSET "_DGNM,0))<br/> I ($P(^ORD(101.44,+VAL,0),U,6)'=$G(^ORD(101.43,"AH","S."_DGNM))) D<br/> . ; -- see if a task is already queued to rebuild this<br/> . L +^XTMP("ORWDSET "_DGNM):2 E  Q<br/> . N ZTSK S ZTSK=+$G(^XTMP("ORWDSET "_DGNM,"TASK"))<br/> . I ZTSK D ISQED^%ZTLOAD S ZTSK=+ZTSK(0)<br/> . I ZTSK L -^XTMP("ORWDSET "_DGNM) Q<br/> . ; -- create a task to rebuild the list<br/> . D FVBLDQ(DGNM)<br/> . L -^XTMP("ORWDSET "_DGNM)<br/> S $P(VAL,U,2)=$P($G(^ORD(101.44,+VAL,20,0)),U,4)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}