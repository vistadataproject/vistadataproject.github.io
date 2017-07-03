---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWCOM DETAILS
# ORWCOM DETAILS

Returns details of COM object when passed in COM IEN.

Property | Value
--- | ---
Label | DETAILS
Routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [DETAILS^ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
Method Comment | Returns Details about a specific COM Object
Input Parameters | ID
Code | {::nomarkdown}<pre><code> N NODE<br/> S ORY=0<br/> I +ID D<br/> .S NODE=$G(^ORD(101.15,+ID,0))<br/> .I NODE'="",$P(NODE,U,3)'="I" S ORY=ID_U_NODE</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rEventHooks.pas">rEventHooks.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}