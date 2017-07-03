---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN ASSIGNABLE MED RESULTS
# ORQQCN ASSIGNABLE MED RESULTS

Returns a list of medicine results that can be attached to a procedure.

Property | Value
--- | ---
Label | GETMED
Routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CONSULT IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETMED^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Method Comment | Return available med results for proc request
Input Parameters | GMRCO
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCO)=0<br/> D GETMED^GMRCGUIU(GMRCO,.ORY)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}