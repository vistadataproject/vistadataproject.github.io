---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORDDPAPI CLOZMSG
# ORDDPAPI CLOZMSG



Property | Value
--- | ---
Label | CLOZMSG
Routine | [ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
Return Type | WORD PROCESSING




### MUMPS Method Description

Property | Value
--- | ---
Method | [CLOZMSG^ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
Code | {::nomarkdown}<pre><code> N ERR,I<br/> D GETWP^XPAR(.X,"SYS","OR CLOZ INPT MSG",,.ERR)<br/> S I=0  F  S I=$O(X(I)) Q:I'>0  S ORARRAY(I)=$G(X(I,0))<br/></code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}