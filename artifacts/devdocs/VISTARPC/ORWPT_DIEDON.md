---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPT DIEDON
# ORWPT DIEDON

Returns date of death if patient has expired.  Otherwise returns 0.

Property | Value
--- | ---
Label | DIEDON
Routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [DIEDON^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
Method Comment | Check for a date of death
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> S VAL=+$G(^DPT(DFN,.35))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}