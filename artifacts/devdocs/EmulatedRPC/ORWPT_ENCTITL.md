---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWPT ENCTITL<br/>
# ORWPT ENCTITL

Returns external values to display for encounter in format: LOCNAME^LOCABBR^ROOMBED^PROVNAME

**Native RPC Documentation:** [ORWPT ENCTITL](../VISTARPC/ORWPT_ENCTITL)

**MUMPS Implementation:** [ENCTITL^ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Patients
Class | Unknown
Complexity | Unknown
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [2](../VDM/Patient-2), [44](../VDM/Hospital_Location-44), [200](../VDM/New_Person-200)
Parameters Used | DFN, LOC, PROV


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | LITERAL | true | Patient id (DFN) | 
LOC | LITERAL | true | Hospital location identifier | 
PROV | LITERAL | true | Provider/User identifier | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}