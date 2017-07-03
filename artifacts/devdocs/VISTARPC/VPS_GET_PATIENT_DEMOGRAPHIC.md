---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET PATIENT DEMOGRAPHIC
# VPS GET PATIENT DEMOGRAPHIC

Called by the Vetlink Kiosk system.  The RPC will accept a single inputvalue whic is the patient SSN.  The RPC returns the patient demographics,insurance, and up-coming appointments.returns the patient demographics, insurance, and up-coming appointments.

Property | Value
--- | ---
Label | GETDATA
Routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SSN | LITERAL | 12 | true | Social Security Number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}