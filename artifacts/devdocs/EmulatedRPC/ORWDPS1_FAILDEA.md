---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWDPS1 FAILDEA<br/>
# ORWDPS1 FAILDEA

return 1 if DEA check fails for this provider

**Native RPC Documentation:** [ORWDPS1 FAILDEA](../VISTARPC/ORWDPS1_FAILDEA)

**MUMPS Implementation:** [FAILDEA^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | UTILITY
Complexity | DIFFICULT
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [50](../VDM/Drug-50), [50.68](../VDM/VA_Product-50_68), [50.7](../VDM/Pharmacy_Orderable_Item-50_7), [50.606](../VDM/Dosage_Form-50_606), [101.43](../VDM/Orderable_Items-101_43), [200](../VDM/New_Person-200), [4](../VDM/Institution-4), [4.05](../VDM/Institution_Association_Types-4_05)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
OI | LITERAL | false | IV Orderable Item | 1234
ORNP | LITERAL | false | Provider | 62
PSTYPE | LITERAL | false | pharmacy type (U=unit dose, F=IV fluids, O=outpatient) | O

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}