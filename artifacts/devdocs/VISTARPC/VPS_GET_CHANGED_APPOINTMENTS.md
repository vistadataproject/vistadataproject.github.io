---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET CHANGED APPOINTMENTS<br/>
# VPS GET CHANGED APPOINTMENTS

This RPC will only return new, modified, or deleted appointments and should be called periodically by VetLink to update the appointment queue.

## Properties

Property | Value
--- | ---
Label | GETCHG
MUMPS Implementation | [VPSAPPT2](http://code.osehra.org/dox/Routine_VPSAPPT2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSQUEUE | LITERAL | 3 | true | Unique Queue ID representing Vecna Appointment Queue.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}