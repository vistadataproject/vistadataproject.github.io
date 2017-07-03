---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWDPS1 FAILDEA
# ORWDPS1 FAILDEA

return 1 if DEA check fails for this provider

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWDPS1 FAILDEA](../VISTARPC/ORWDPS1_FAILDEA)
MUMPS Implementation | [FAILDEA^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Type | UTILITY
Complexity | DIFFICULT
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [50](../VDM/Drug-50), [50.68](../VDM/VA_Product-50_68), [50.7](../VDM/Pharmacy_Orderable_Item-50_7), [50.606](../VDM/Dosage_Form-50_606), [101.43](../VDM/Orderable_Items-101_43), [200](../VDM/New_Person-200), [4](../VDM/Institution-4), [4.05](../VDM/Institution_Association_Types-4_05)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
OI | LITERAL | false | IV Orderable Item | 1234
ORNP | LITERAL | false | Provider | 62
PSTYPE | LITERAL | false | pharmacy type (U=unit dose, F=IV fluids, O=outpatient) | O

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}