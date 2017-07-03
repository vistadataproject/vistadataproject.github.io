---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDX AGAIN
# ORWDX AGAIN

Returns a 1 if the dialog should be kept for another order, otherwise 0.

Property | Value
--- | ---
Label | AGAIN
Routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [AGAIN^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Method Comment | return true to keep dlg for another order
Input Parameters | DLG
Code | {::nomarkdown}<pre><code> S VAL=''$P($G(^ORD(101.41,DLG,0)),U,9)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}