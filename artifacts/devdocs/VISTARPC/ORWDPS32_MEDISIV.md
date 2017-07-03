---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS32 MEDISIV
# ORWDPS32 MEDISIV

Return 1 if orderable item is an IV medication, otherwise return 0.

Property | Value
--- | ---
Label | MEDISIV
Routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [MEDISIV^ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
Method Comment | return true if orderable item is IV medication
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> S VAL=0<br/> I $P($G(^ORD(101.43,IEN,"PS")),U)=2 S VAL=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}