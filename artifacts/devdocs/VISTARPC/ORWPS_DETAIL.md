---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPS DETAIL<br/>
# ORWPS DETAIL

Returns text of details for a specific mediction order.

## Properties

Property | Value
--- | ---
Label | DETAIL
Routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DETAIL^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
Method Comment | show details for a med order
Input Parameters | DFN, ID
Code | {::nomarkdown}<pre><code> K ^TMP("ORXPND",$J)<br/> N LCNT,ORVP<br/> S LCNT=0,ORVP=DFN_";DPT("<br/> D MEDS^ORCXPND1<br/> S ROOT=$NA(^TMP("ORXPND",$J))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}