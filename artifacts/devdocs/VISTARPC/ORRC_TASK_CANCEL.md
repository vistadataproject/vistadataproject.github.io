---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC TASK CANCEL
# ORRC TASK CANCEL

This call accepts a list of patient task ID's to be marked as canceled.

Property | Value
--- | ---
Label | CANC
Routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
TASKS | LIST |  | true | This is a list of task identifiers in the form TSK:##, where ## is thepointer to the Patient Task file #102.3.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}