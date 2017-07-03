---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXA ISACTOI
# ORWDXA ISACTOI



Property | Value
--- | ---
Label | ISACTOI
Routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ISACTOI^ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
Method Comment | Is ord item active?
Input Parameters | OI
Code | {::nomarkdown}<pre><code> I $G(^ORD(101.43,+OI,.1)),^(.1)'>$$NOW^XLFDT D<br/> . S ORY=$P($G(^ORD(101.43,OI,0)),U)_" has been inactivated and may not be ordered anymore."</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}