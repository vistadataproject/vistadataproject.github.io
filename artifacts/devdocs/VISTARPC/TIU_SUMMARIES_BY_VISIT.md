---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU SUMMARIES BY VISIT
# TIU SUMMARIES BY VISIT

This API returns lists of Discharge Summaries by visit.

Property | Value
--- | ---
Label | SUMMARY
Routine | [TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VISIT | LITERAL | 20 | true | This is the pointer to the visit file.



### MUMPS Method Description

Property | Value
--- | ---
Method | [SUMMARY^TIUSRVLV](http://code.osehra.org/dox/Routine_TIUSRVLV_source.html)
Method Comment | Gets list of Summaries
Input Parameters | VISIT, STATUS
Code | {::nomarkdown}<pre><code> I $S(+$G(VISIT)'>0:1,'$D(^AUPNVSIT(+$G(VISIT),0)):1,1:0) Q<br/> D LIST(.TIUY,VISIT,244,$G(STATUS))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}