---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMRC LIST CONSULT REQUESTS
# GMRC LIST CONSULT REQUESTS

This RPC will return a list of active and pending consult requests toassociate a result with.

Property | Value
--- | ---
Label | RPCLIST
Routine | [GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | Record Number of patient in file 2.



### MUMPS Method Description

Property | Value
--- | ---
Method | [RPCLIST^GMRCTIU](http://code.osehra.org/dox/Routine_GMRCTIU_source.html)
Method Comment | Get consult list and return in GMRCY for GUI
Input Parameters | DFN
Code | {::nomarkdown}<pre><code> N GMRCI<br/> I '+$G(DFN) S GMRCY(0)=0<br/> D GETCONSL(DFN,1) ;1=returns GUI format in GMRCY array<br/> S GMRCY(0)=+$G(GMRCI)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}