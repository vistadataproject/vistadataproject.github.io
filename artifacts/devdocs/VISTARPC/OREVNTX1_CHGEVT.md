---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OREVNTX1 CHGEVT
# OREVNTX1 CHGEVT



Property | Value
--- | ---
Label | CHGEVT
Routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CHGEVT^OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
Method Comment | Change order&#x27;s event
Input Parameters | NEWEVT, ORIDS
Code | {::nomarkdown}<pre><code> N ORI<br/> S ORI=0<br/> F  S ORI=$O(ORIDS(ORI)) Q:'+ORI  D<br/> . D CHGEVT^OREVNTX(+$G(ORIDS(ORI)),NEWEVT)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}