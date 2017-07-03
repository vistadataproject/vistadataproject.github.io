---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDRA32 APPROVAL
# ORWDRA32 APPROVAL



Property | Value
--- | ---
Label | APPROVAL
Routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [APPROVAL^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Method Comment | RETURNS LIST OF RADIOLOGISTS WHO MAY APPROVE A
Input Parameters | DUMMY
First Comment | {::nomarkdown}<pre><code>                       PROCEDURE WHEN REQUIRED</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORX,I<br/> S I="" F  S I=$O(^VA(200,"ARC","S",I)) Q:I=""  D<br/> . ;I $P($G(^VA(200,I,"PS")),U,4),$P(^VA(200,I,"PS"),U,4)'>DT Q<br/> . I '$$ACTIVE^XUSER(I) Q<br/> . I $P($G(^VA(200,I,"RA")),U,3),$P(^VA(200,I,"RA"),U,3)'>DT Q<br/> . S ORX=$P($G(^VA(200,I,0)),U)<br/> . S Y(I)=I_U_ORX</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}