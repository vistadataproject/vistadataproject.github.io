---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWUL QVSUB
# ORWUL QVSUB



Property | Value
--- | ---
Label | QVSUB
Routine | [ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [QVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Method Comment | return subset of orders in view
Input Parameters | IEN, FIRST, LAST
Code | {::nomarkdown}<pre><code> N I,J,ID ;117<br/> I $L(FIRST),$L(LAST) D<br/> . F I=+FIRST:1:+LAST D<br/> .. I $D(^ORD(101.44,IEN,10,I,0))>0 D<br/> ... I '$$QODIS(IEN,I) S LST(I)=^ORD(101.44,IEN,10,I,0)<br/> E  D<br/> . S (I,J)=0 F  S I=$O(^ORD(101.44,IEN,10,I)) Q:'+I  I '$$QODIS(IEN,I) S J=J+1,LST(J)=^ORD(101.44,IEN,10,I,0) ;117</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}