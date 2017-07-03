---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORCHECK ISMONO
# ORCHECK ISMONO



Property | Value
--- | ---
Label | ISMONO
Routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ISMONO^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Method Comment | returns 1 if there is monograph data for the orderchecks being presented to the user
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:'$$PATCH^XPDUTL("OR*3.0*272")<br/> I $D(^TMP($J,"ORMONOGRAPH")) S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}