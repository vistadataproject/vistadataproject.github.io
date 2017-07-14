---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGRPC SETPREF<br/>
# ORWGRPC SETPREF



## Properties

Property | Value
--- | ---
Label | SETPREF
Routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [SETPREF^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - set a graph setting
Input Parameters | SETTING, PUBLIC
Code | {::nomarkdown}<pre><code> D SETPREF^ORWGAPI("ORWGRPC",SETTING,+$G(PUBLIC))<br/> S ERR=$NA(^TMP("ORWGRPC",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}