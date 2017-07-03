---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPS1 PICKUP
# ORWPS1 PICKUP

Returns default for refill location (mail or window).

Property | Value
--- | ---
Label | PICKUP
Routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [PICKUP^ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
Method Comment | Return default for refill location
Code | {::nomarkdown}<pre><code> I $D(^PSX(550,"C")) S Y="M"<br/> E  S Y="W"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}