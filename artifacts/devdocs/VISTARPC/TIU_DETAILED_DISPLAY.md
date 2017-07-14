---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU DETAILED DISPLAY<br/>
# TIU DETAILED DISPLAY

Gets details for display of a given record.

## Properties

Property | Value
--- | ---
Label | RPC
Routine | [TIUSRV](http://code.osehra.org/dox/Routine_TIUSRV_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This is the record number (IEN) in the TIU Document File (#8925).



## MUMPS Method Description

Property | Value
--- | ---
Method | [RPC^TIUSRV](http://code.osehra.org/dox/Routine_TIUSRV_source.html)
Method Comment | RPC for DT
Input Parameters | TIUDA, REASSIGN
Code | {::nomarkdown}<pre><code> N VALMAR,TIUGDATA,TIUGWHOL K ^TMP("TIUAUDIT",$J)<br/> S TIUY=$NA(^TMP("TIUAUDIT",$J))<br/> D GET(TIUDA,1,+$G(REASSIGN))<br/> K ^TMP("VALM VIDEO",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}