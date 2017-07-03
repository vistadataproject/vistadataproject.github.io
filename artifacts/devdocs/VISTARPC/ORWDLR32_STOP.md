---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDLR32 STOP
# ORWDLR32 STOP

Returns a calculated stop date for a lab order.

Property | Value
--- | ---
Label | STOP
Routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [STOP^ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
Method Comment | return a calculated stop date
Input Parameters | X2
Code | {::nomarkdown}<pre><code> N X1,X<br/> S X1=DT D C^%DTC S VAL=X</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}