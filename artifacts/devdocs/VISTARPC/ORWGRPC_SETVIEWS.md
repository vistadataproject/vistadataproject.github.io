---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWGRPC SETVIEWS
# ORWGRPC SETVIEWS



Property | Value
--- | ---
Label | SETVIEWS
Routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [SETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - set a graph view
Input Parameters | NAME, PUBLIC, VAL
Code | {::nomarkdown}<pre><code> D SETVIEWS^ORWGAPI("ORWGRPC",NAME,+$G(PUBLIC),.VAL)<br/> S ERR=$NA(^TMP("ORWGRPC",$J))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}