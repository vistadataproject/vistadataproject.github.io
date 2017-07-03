---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; GMV DLL VERSION
# GMV DLL VERSION

Returns YES or NO response to indicate if Dynamic Link Library (DLL) file should be used. This RPC is documented in Integration Agreement 4420.

Property | Value
--- | ---
Domain | Non-Clinical: Parameters
VISTA RPC Documentation | [GMV DLL VERSION](../VISTARPC/GMV_DLL_VERSION)
MUMPS Implementation | [DLL^GMVUTL8](http://code.osehra.org/dox/Routine_GMVUTL8_source.html)
Type | READ
Complexity | LOW
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | None
Parameters Used | [GMV DLL VERSION](../Parameters/GMV_DLL_VERSION)


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMVX | LITERAL | true | This value is the name of the file and the date/time associated with it | MV_VITALSVIEWENTER.DLL:v. 01/21/11 12:52

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}