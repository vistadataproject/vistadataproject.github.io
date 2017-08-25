---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS GET PATIENT DEMOGRAPHIC<br/>
# VPS GET PATIENT DEMOGRAPHIC

Called by the Vetlink Kiosk system.  The RPC will accept a single inputvalue whic is the patient SSN.  The RPC returns the patient demographics,insurance, and up-coming appointments.returns the patient demographics, insurance, and up-coming appointments.

## Properties

Property | Value
--- | ---
Label | GETDATA
MUMPS Implementation | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SSN | LITERAL | 12 | true | Social Security Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}