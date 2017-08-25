---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; GMV GET VITAL TYPE IEN<br/>
# GMV GET VITAL TYPE IEN

Returns the IEN if the value is found in the GMRV VITAL TYPE (#120.51)file.This remote procedure call is documented in Integration Agreement 4357.

**Native RPC Documentation:** [GMV GET VITAL TYPE IEN](../VISTARPC/GMV_GET_VITAL_TYPE_IEN)

**MUMPS Implementation:** [TYPE^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | LOW
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [120.51](../VDM/Gmrv_Vital_Type-120_51)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMVTYPE | LITERAL | true | GMVTYPE = Name of Vital Type (from FILE 120.51) (e.g., WEIGHT) | HEIGHT

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}