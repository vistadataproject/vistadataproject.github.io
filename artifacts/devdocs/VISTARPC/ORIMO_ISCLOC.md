---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORIMO ISCLOC
# ORIMO ISCLOC



Property | Value
--- | ---
Label | ISCLOC
Routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ISCLOC^ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
Method Comment | Is it a clinical location
Input Parameters | ALOC
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:'$D(^SC(+ALOC,0))<br/> I $P(^SC(+ALOC,0),U,3)="C" S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fPrintLocation.pas">fPrintLocation.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}