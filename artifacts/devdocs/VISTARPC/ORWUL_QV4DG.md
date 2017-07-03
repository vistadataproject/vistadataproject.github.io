---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWUL QV4DG
# ORWUL QV4DG



Property | Value
--- | ---
Label | QV4DG
Routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [QV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Method Comment | return the quick order list, given a display group name
Input Parameters | DGRP
Code | {::nomarkdown}<pre><code> N NM<br/> S VAL="0^0"<br/> I 'DGRP S DGRP=+$O(^ORD(100.98,"B",DGRP,0))<br/> S NM=$$GET^XPAR("ALL","ORWDQ QUICK VIEW",DGRP,"I")<br/> Q:'$L(NM)<br/> D QV4NM(.VAL,NM)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}