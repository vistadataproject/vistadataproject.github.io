---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGRPC ITEMS<br/>
# ORWGRPC ITEMS



## Properties

Property | Value
--- | ---
Label | ITEMS
Routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ITEMS^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - get items of a type of data on patient (lab tests)
Input Parameters | DFN, TYPE
Code | {::nomarkdown}<pre><code> D ITEMS^ORWGAPI("ORWGRPC",DFN,TYPE)<br/> S ITEMS=$NA(^TMP("ORWGRPC",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}