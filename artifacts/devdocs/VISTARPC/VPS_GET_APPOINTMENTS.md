---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET APPOINTMENTS<br/>
# VPS GET APPOINTMENTS

This RPC will return appointments for a given data range for a specific Appointment Queue. This RPC will refresh an existing queue with the current appointments and typically need to be called only once a day.

## Properties

Property | Value
--- | ---
Label | GET
Routine | [VPSAPPT](http://code.osehra.org/dox/Routine_VPSAPPT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSQUEUE | LITERAL | 3 | true | Unique Queue ID representing Vecna Appointment Queue.
VPSFRDT | LITERAL | 14 | true | Appointment From Date
VPSTODT | LITERAL | 14 | true | Appointment Through Date



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}