---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN REMOVABLE MED RESULTS
# ORQQCN REMOVABLE MED RESULTS

Returns list of medicine results that are currently attached to aprocedure.

Property | Value
--- | ---
Label | GETRES
Routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETRES^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Method Comment | return array of associated med results
Input Parameters | GMRCO
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCO)=0<br/> D GETRES^GMRCGUIU(GMRCO,.ORY)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}