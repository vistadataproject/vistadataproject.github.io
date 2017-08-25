---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC TASK COMPLETE<br/>
# ORRC TASK COMPLETE

This call accepts a list of patient task ID's to be marked as completed.

## Properties

Property | Value
--- | ---
Label | COMP
MUMPS Implementation | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
TASKS | LIST |  | true | This is a list of task identifiers in the form TSK:##, where ## is thepointer to the Patient Task file #102.3.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}