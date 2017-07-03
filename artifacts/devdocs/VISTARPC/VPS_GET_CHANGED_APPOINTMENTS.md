---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET CHANGED APPOINTMENTS
# VPS GET CHANGED APPOINTMENTS

This RPC will only return new, modified, or deleted appointments and should be called periodically by VetLink to update the appointment queue.

Property | Value
--- | ---
Label | GETCHG
Routine | [VPSAPPT2](http://code.osehra.org/dox/Routine_VPSAPPT2_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSQUEUE | LITERAL | 3 | true | Unique Queue ID representing Vecna Appointment Queue.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}