---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; KMPD TMG MON DATA
# KMPD TMG MON DATA

Return Timing Monitor data.

Property | Value
--- | ---
Label | TMGMON
Routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MONITOR START TIME | LITERAL | 25 | true | Time the Timing Monitor started, in internal fileman format. This will be used to determine the Running Time (how long the system monitor has been running for this user. If not defined then $$NOW^XLFDT will be used.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}