---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDFH NFSLOC READY
# ORWDFH NFSLOC READY

Return '1' if hospital location has been entered in NUTRITION LOCATION file for outpatient meal ordering.Return '0' if not yet entered.

Property | Value
--- | ---
Label | OPLOCOK
Routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [OPLOCOK^ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
Method Comment | OK to order OP Meals from this location
Input Parameters | ORLOC
Code | {::nomarkdown}<pre><code> I 'ORLOC S ORY=0 Q<br/> S ORY=$S($L($$NFSLOC^FHOMAPI(ORLOC))>0:1,1:0)<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}