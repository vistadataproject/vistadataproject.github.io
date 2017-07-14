---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWDAL32 SAVE ALLERGY<br/>
# ORWDAL32 SAVE ALLERGY

Add new allergy record

**Native RPC Documentation:** [ORWDAL32 SAVE ALLERGY](../VISTARPC/ORWDAL32_SAVE_ALLERGY)

**MUMPS Implementation:** [EDITSAVE^ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Allergies
Class | CHANGE
Complexity | HIGH
Uses | EIE,NKA,CREATE
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [120.8](../VDM/Patient_Allergies-120_8), [120.85](../VDM/Adverse_Reaction_Reporting-120_85), [120.86](../VDM/Adverse_Reaction_Assessment-120_86), [8925](../VDM/Tiu_Document-8925), [9000010](../VDM/Visit-9000010), 9000010.06, 9000010.07, 409.68
Parameters Used | ORALIEN, ORDFN, OREDITED


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORALIEN | LITERAL | true | Allergy IEN | 0
ORDFN | REFERENCE | true | Patient IEN | 25
OREDITED | LIST | true | ARRAY OF VALUE STRINGS | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}