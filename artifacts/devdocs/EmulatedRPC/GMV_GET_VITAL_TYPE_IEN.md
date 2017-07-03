---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; GMV GET VITAL TYPE IEN
# GMV GET VITAL TYPE IEN

Returns the IEN if the value is found in the GMRV VITAL TYPE (#120.51)file.This remote procedure call is documented in Integration Agreement 4357.

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [GMV GET VITAL TYPE IEN](../VISTARPC/GMV_GET_VITAL_TYPE_IEN)
MUMPS Implementation | [TYPE^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Type | READ
Complexity | LOW
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [120.51](../VDM/Gmrv_Vital_Type-120_51)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMVTYPE | LITERAL | true | GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT) | HEIGHT

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}