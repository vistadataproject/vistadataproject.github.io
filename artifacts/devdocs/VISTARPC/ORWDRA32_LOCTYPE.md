---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDRA32 LOCTYPE
# ORWDRA32 LOCTYPE



Property | Value
--- | ---
Label | LOCTYPE
Routine | [ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [LOCTYPE^ORWDRA32](http://code.osehra.org/dox/Routine_ORWDRA32_source.html)
Method Comment | Returns type of location (C,W)
Input Parameters | ORLOC
Code | {::nomarkdown}<pre><code> S Y=-1<br/> Q:$G(ORLOC)=""<br/> S Y=$P($G(^SC(+$G(ORLOC),0)),U,3)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODRad.pas">Orders/rODRad.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}