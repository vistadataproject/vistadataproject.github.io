---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS UPDATE LAST MRAR TIU IEN
# VPS UPDATE LAST MRAR TIU IEN

This RPC will update the last Allergy and Modication review (MRAR) fora patient with TIU Document IEN.The last MRAR is defined as the last transaction date for a patient infile 853.5 (VPS MRAR PDO)

Property | Value
--- | ---
Label | UPDATE
Routine | [VPSMRARU](http://code.osehra.org/dox/Routine_VPSMRARU_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSNUM | LITERAL | 10 | true | This input parameter is the patient ID of the last MRAR record to be updated. Patient ID could be value of DFN, ICN, SSN, or VIC/CAC.
VPSTIEN | LITERAL | 10 | true | This input parameter is the TIU Document IEN which is the value to store in the TIU NOTE IEN field of the last MRAR record for the patient in VPSMRAR PDO File (#853.5).
VPSTYP | LITERAL | 7 | true | This input parameter is the Patient Type. Valid Value is DFN, SSN, VIC/CAC, or ICN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}