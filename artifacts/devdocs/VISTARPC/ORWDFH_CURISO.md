---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDFH CURISO
# ORWDFH CURISO

Return a patient's current isolation.

Property | Value
--- | ---
Label | CURISO
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CURISO^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | Return a patient&#x27;s current isolation
Input Parameters | ORVP
Code | {::nomarkdown}<pre><code> S ORVP=ORVP_";DPT(" S VAL=$P($$IP^ORMBLD,U,2)<br/> I '$L(VAL) S VAL="<none>"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}