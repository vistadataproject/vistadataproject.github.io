---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWPCE ACTIVE PROV<br/>
# ORWPCE ACTIVE PROV

This calls the PCE API $$ACTIVPRV^PXAPI(provider ien, encounter d/t) tosee if the provider can be stored by PCE.   Returns a 1 if provider is good and 0 if the provider is not active or does not have an active person class.

**Native RPC Documentation:** [ORWPCE ACTIVE PROV](../VISTARPC/ORWPCE_ACTIVE_PROV)

**MUMPS Implementation:** [ACTIVPRV^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | READ
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [200](../VDM/New_Person-200), [8932.1](../VDM/Person_Class-8932_1)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORWPROV | LITERAL | true | the Provider IEN to check | 62
ORWDT | LITERAL | true | encounter date/time in Fileman format | 3170517.062721

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}