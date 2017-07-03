---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE PED
# ORWPCE PED

Returns list of education topics for a clinic.

Property | Value
--- | ---
Label | PED
Routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [PED^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | get list of education topices for clinic
Input Parameters | CLINIC
Code | {::nomarkdown}<pre><code> D GETLST^IBDF18A(CLINIC,"PX SELECT EDUCATION TOPICS","LST")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}