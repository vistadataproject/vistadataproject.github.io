---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; DG SENSITIVE RECORD ACCESS<br/>
# DG SENSITIVE RECORD ACCESS

This Remote Procedure Call (RPC) will: - Verify user is not accessing his/her own Patient file record ifthe Restrict Patient Record Access (#1201) field in the MAS parameters(#43) file is set to yes and the user does not hold the DG RECORD ACCESSsecurity key. If parameter set to yes and user is not a key holder , asocial security number must be defined in the New Person file for the userto access any Patient file record. - Determine if user accessing a sensitive record or an employee'srecord.

**Native RPC Documentation:** [DG SENSITIVE RECORD ACCESS](../VISTARPC/DG_SENSITIVE_RECORD_ACCESS)

**MUMPS Implementation:** [PTSEC^DGSEC4](http://code.osehra.org/dox/Routine_DGSEC4_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Patients
Class | Unknown
Complexity | Unknown
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [2](../VDM/Patient-2), 43
Parameters Used | DFN, DGMSG, DGOPT


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | LITERAL | true | DFN = Patient (#2) file DFN. | 
DGMSG | LITERAL |  | DGMSG = 1 - if message should be generated when a user's SSN is undefined 0 - message will not be generated If not defined, defaults to 1. | 
DGOPT | LITERAL |  | Contains Option name^Menu text for DG Security Log update. | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}