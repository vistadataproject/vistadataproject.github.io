---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGRPC ALLVIEWS<br/>
# ORWGRPC ALLVIEWS



## Properties

Property | Value
--- | ---
Label | ALLVIEWS
Routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ALLVIEWS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - get all graph views
Input Parameters | VIEW, USER
Code | {::nomarkdown}<pre><code> D ALLVIEWS^ORWGAPI("ORWGRPC",+$G(VIEW),+$G(USER))<br/> S DATA=$NA(^TMP("ORWGRPC",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}