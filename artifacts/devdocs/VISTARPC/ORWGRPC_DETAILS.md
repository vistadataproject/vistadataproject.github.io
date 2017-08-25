---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGRPC DETAILS<br/>
# ORWGRPC DETAILS



## Properties

Property | Value
--- | ---
Label | DETAILS
MUMPS Implementation | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DETAILS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - get report for type of data for a date or date range
Input Parameters | DFN, DATE1, DATE2, TYPE, COMP
Code | {::nomarkdown}<pre><code> D DETAILS^ORWGAPI("ORWGRPC",DFN,DATE1,DATE2,TYPE,$G(COMP))<br/> S ITEMS=$NA(^TMP("ORWGRPC",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}