---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE VISIT
# ORWPCE VISIT

Returns a list of visit types for a clinic.

Property | Value
--- | ---
Label | VISIT
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [VISIT^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | get list of visit types for clinic
Input Parameters | CLINIC, ORDATE
Code | {::nomarkdown}<pre><code> S:'+$G(ORDATE) ORDATE=DT<br/> D GETLST^IBDF18A(CLINIC,"DG SELECT VISIT TYPE CPT PROCEDURES","LST",,,,ORDATE)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}