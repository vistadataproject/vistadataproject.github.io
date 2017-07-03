---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN REMOVE MED RESULTS
# ORQQCN REMOVE MED RESULTS

Allows removal of medicine results from a  procedure.

Property | Value
--- | ---
Label | REMOVE
Routine | [ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult IEN | LITERAL | 16 | true | Consult (procedure) IEN in file 123.
Med Result | LITERAL | 24 | true | Variable pointer to medicine result.
Date | LITERAL | 16 |  | Date the result was removed.
Resp Person | LITERAL | 16 |  | Pointer to file 200 for the person removing the result.



### MUMPS Method Description

Property | Value
--- | ---
Method | [REMOVE^ORQQCN3](http://code.osehra.org/dox/Routine_ORQQCN3_source.html)
Method Comment | Remove a medicine result from a consult
Input Parameters | GMRCO, GMRCRSLT, GMRCAD, GMRCORNP
First Comment | {::nomarkdown}<pre><code>GMRCO - Internal file number of consult from File 123<br/>GMRCRSLT - pointer to medicine result<br/>GMRCAD - Date/Time medicine result was removed<br/>GMRCORNP - Provider who removed the result from the consult</code></pre>{:/}
Code | {::nomarkdown}<pre><code> Q:+$G(GMRCO)=0<br/> D REMOVE^GMRCDIS(GMRCO,GMRCRSLT,GMRCAD,GMRCORNP)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}