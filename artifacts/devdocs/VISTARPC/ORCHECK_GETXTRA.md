---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORCHECK GETXTRA
# ORCHECK GETXTRA



Property | Value
--- | ---
Label | GETXTRA
Routine | [ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETXTRA^ORCHECK](http://code.osehra.org/dox/Routine_ORCHECK_source.html)
Method Comment | get extra text for an order check
Input Parameters | ORGL, ORRULE
First Comment | {::nomarkdown}<pre><code>^TMP($J,"ORK XTRA TXT") stores the text of order checks that are longer than a single line (reminder order checks)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:'$D(^TMP($J,"ORK XTRA TXT",ORGL,ORRULE))<br/> M ORY=^TMP($J,"ORK XTRA TXT",ORGL,ORRULE)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}