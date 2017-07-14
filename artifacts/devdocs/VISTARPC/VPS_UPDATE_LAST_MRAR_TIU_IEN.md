---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VPS UPDATE LAST MRAR TIU IEN<br/>
# VPS UPDATE LAST MRAR TIU IEN

This RPC will update the last Allergy and Modication review (MRAR) fora patient with TIU Document IEN.The last MRAR is defined as the last transaction date for a patient infile 853.5 (VPS MRAR PDO)

## Properties

Property | Value
--- | ---
Label | UPDATE
Routine | [VPSMRARU](http://code.osehra.org/dox/Routine_VPSMRARU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSNUM | LITERAL | 10 | true | This input parameter is the patient ID of the last MRAR record to be updated. Patient ID could be value of DFN, ICN, SSN, or VIC/CAC.
VPSTIEN | LITERAL | 10 | true | This input parameter is the TIU Document IEN which is the value to store in the TIU NOTE IEN field of the last MRAR record for the patient in VPSMRAR PDO File (#853.5).
VPSTYP | LITERAL | 7 | true | This input parameter is the Patient Type. Valid Value is DFN, SSN, VIC/CAC, or ICN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}