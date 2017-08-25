---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU SUMMARIES BY VISIT<br/>
# TIU SUMMARIES BY VISIT

This API returns lists of Discharge Summaries by visit.

## Properties

Property | Value
--- | ---
Label | SUMMARY
MUMPS Implementation | [TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VISIT | LITERAL | 20 | true | This is the pointer to the visit file.



## MUMPS Method Description

Property | Value
--- | ---
Method | [SUMMARY^TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
Method Comment | Gets list of Summaries
Input Parameters | VISIT, STATUS
Code | {::nomarkdown}<pre><code> I $S(+$G(VISIT)'>0:1,'$D(^AUPNVSIT(+$G(VISIT),0)):1,1:0) Q<br/> D LIST(.TIUY,VISIT,244,$G(STATUS))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}