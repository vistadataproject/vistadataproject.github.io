---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS4 CPINFO
# ORWDPS4 CPINFO

Save outpatient med order co-pay information.

Property | Value
--- | ---
Label | CPINFO
Routine | [ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CPINFO^ORWDPS4](http://code.osehra.org/dox/Routine_ORWDPS4_source.html)
Method Comment | Save reponses to CP questions
Input Parameters | ORINFO
Code | {::nomarkdown}<pre><code> Q:'$D(ORINFO)<br/> N ORIFN,ORI,ORX,ANS S ORI=0<br/> F  S ORI=$O(ORINFO(ORI)) Q:'ORI  D<br/> .S ORIFN=$P($P(ORINFO(ORI),U,1),";",1)<br/> .S ANS=$P(ORINFO(ORI),U,2)<br/> .D REFMT(.ORX,ANS)<br/> .D SC^ORCSAVE2(.ORX,ORIFN)<br/> S Y=1<br/> K ORIFN,ORX,ORI,ANS</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}