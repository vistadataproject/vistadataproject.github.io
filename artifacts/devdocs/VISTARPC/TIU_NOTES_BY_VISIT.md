---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU NOTES BY VISIT<br/>
# TIU NOTES BY VISIT

This API gets lists of Progress Notes by visit from TIU.

## Properties

Property | Value
--- | ---
Label | NOTES
MUMPS Implementation | [TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VISIT | LITERAL | 20 | true | This is the pointer to the VISIT File.



## MUMPS Method Description

Property | Value
--- | ---
Method | [NOTES^TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
Method Comment | Gets list of Notes
Input Parameters | VISIT, STATUS
Code | {::nomarkdown}<pre><code> I $S(+$G(VISIT)'>0:1,'$D(^AUPNVSIT(+$G(VISIT),0)):1,1:0) Q<br/> D LIST(.TIUY,VISIT,3,$G(STATUS))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}