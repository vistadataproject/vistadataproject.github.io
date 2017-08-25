---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC ALERTS BY PATIENT<br/>
# ORRC ALERTS BY PATIENT

This call returns a list of the patient's non-ADT alerts.

## Properties

Property | Value
--- | ---
Label | PAT
MUMPS Implementation | [ORRCXQ](http://code.osehra.org/dox/Routine_ORRCXQ_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT | LITERAL |  | true | This is the pointer to the patient in the Patient file #2.
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}