---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWPCE ACTIVE PROV
# ORWPCE ACTIVE PROV

This calls the PCE API $$ACTIVPRV^PXAPI(provider ien, encounter d/t) tosee if the provider can be stored by PCE.   Returns a 1 if provider is good and 0 if the provider is not active or does not have an active person class.

Property | Value
--- | ---
Domain | Non-Clinical: Others
VISTA RPC Documentation | [ORWPCE ACTIVE PROV](../VISTARPC/ORWPCE_ACTIVE_PROV)
MUMPS Implementation | [ACTIVPRV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [200](../VDM/New_Person-200), [8932.1](../VDM/Person_Class-8932_1)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORWPROV | LITERAL | true | the Provider IEN to check | 62
ORWDT | LITERAL | true | encounter date/time in Fileman format | 3170517.062721

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}