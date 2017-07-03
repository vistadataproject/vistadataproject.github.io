---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPS PATIENT WRISTBAND PRINT
# VPS PATIENT WRISTBAND PRINT

This RPC prints patient wristband to VistA printer using VistA standard patPatient Wristband Print routine (DGPWB).

Property | Value
--- | ---
Label | PRINT
Routine | [VPSWRIST](http://code.osehra.org/dox/Routine_VPSWRIST_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VPSIO | LITERAL | 50 | true | This is the device name where the wristband label to print on.
VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Input parameter: DFN, SSN, ICN, VIC/CAC
VPSNUM | LITERAL | 50 | true | Patient ID. This could be DFN, SSN, ICN, VIC/CAC



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}