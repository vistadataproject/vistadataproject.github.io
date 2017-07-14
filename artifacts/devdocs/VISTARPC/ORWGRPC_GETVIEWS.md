---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGRPC GETVIEWS<br/>
# ORWGRPC GETVIEWS



## Properties

Property | Value
--- | ---
Label | GETVIEWS
Routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - get graph views
Input Parameters | ALL, PUBLIC, EXT, USER
Code | {::nomarkdown}<pre><code> D GETVIEWS^ORWGAPI("ORWGRPC",ALL,+$G(PUBLIC),+$G(EXT),+$G(USER))<br/> S DATA=$NA(^TMP("ORWGRPC",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}