---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET2 PATIENT DEMOGRAPHIC
# VPS GET2 PATIENT DEMOGRAPHIC

Called by the Vetlink Kiosk system. The RPC will accept two input parameters which are the patient SSN or DFN and the patient type. The RPC returns the patient demographics,insurance, and up-coming appointments.

Property | Value
--- | ---
Label | GETDATA2
Routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSNUM | LITERAL | 12 | true | Patient Social Security Number or Patient IEN.
VPSTYP | LITERAL | 10 | true | SSN or DFN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}