---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD TMG MON DATA<br/>
# KMPD TMG MON DATA

Return Timing Monitor data.

## Properties

Property | Value
--- | ---
Label | TMGMON
Routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MONITOR START TIME | LITERAL | 25 | true | Time the Timing Monitor started, in internal fileman format. This will be used to determine the Running Time (how long the system monitor has been running for this user. If not defined then $$NOW^XLFDT will be used.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}