---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWGRPC TYPES
# ORWGRPC TYPES



Property | Value
--- | ---
Label | TYPES
Routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [TYPES^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - get all the types of data on a patient (SUB&#x3D;1, gets subtypes, DFN&#x3D;0 gets all types), 
Input Parameters | DFN, SUB
Code | {::nomarkdown}<pre><code> D TYPES^ORWGAPI("ORWGRPC",DFN,+$G(SUB))<br/> S TYPES=$NA(^TMP("ORWGRPC",$J))<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}