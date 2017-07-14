---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU MED GET PATIENT DATA<br/>
# TIU MED GET PATIENT DATA

Returns patient data.

## Properties

Property | Value
--- | ---
Label | GETPATDT
Routine | [TIUMED1](http://code.osehra.org/dox/Routine_TIUMED1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDFN | LITERAL |  | true | This is the patient IEN.
TIUSEC | LITERAL |  | true | This BOOLEAN value allows sensitive patient data to be displayed or hidden.
TIUGHS | LITERAL |  | true | This BOOLEAN value determines whether or not HEALTH SUMMARY information will included after the patient data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}