---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGRPC ITEMDATA<br/>
# ORWGRPC ITEMDATA



## Properties

Property | Value
--- | ---
Label | ITEMDATA
Routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [ITEMDATA^ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
Method Comment | RPC - get data of an item on patient (glucose results)
Input Parameters | ITEM, START, DFN
Code | {::nomarkdown}<pre><code> D ITEMDATA^ORWGAPI("ORWGRPC",ITEM,START,DFN)<br/> S DATA=$NA(^TMP("ORWGRPC",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas">rGraphs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}