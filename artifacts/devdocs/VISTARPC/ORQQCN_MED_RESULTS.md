---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQCN MED RESULTS
# ORQQCN MED RESULTS

Returns a display of Medicine Package results, followed by any TIUresults.

Property | Value
--- | ---
Label | MEDRSLT
Routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Consult ID | LITERAL | 16 | true | Internal entry number of the consults request in file 123,REQUESTS/CONSULTS.



### MUMPS Method Description

Property | Value
--- | ---
Method | [MEDRSLT^ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
Method Comment | Returns Medicine results plus TIU results
Input Parameters | GMRCO
Code | {::nomarkdown}<pre><code> S ORY=$NA(^TMP("ORRSLT",$J))<br/> D RT^GMRCGUIA(GMRCO,ORY)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}