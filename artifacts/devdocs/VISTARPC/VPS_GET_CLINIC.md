---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS GET CLINIC
# VPS GET CLINIC

Called by the Vetlink Kiosk system.  The RPC will accept a single inputvalue representing the name of the clinic (full or partial name); and theoutput produced will be an array that returns all the possible matches forthe clinic (one to many clinics).  Values returned will be the name of theclinic and the ien of the clinic.

Property | Value
--- | ---
Label | GETCLN
Routine | [VPSRPC1](http://code.osehra.org/dox/Routine_VPSRPC1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLINICNAME | LITERAL | 70 | true | The input would represent a full or partial name of a given clinic.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}