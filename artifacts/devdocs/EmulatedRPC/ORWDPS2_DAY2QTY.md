---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWDPS2 DAY2QTY<br/>
# ORWDPS2 DAY2QTY

Return quantity for days supplied

**Native RPC Documentation:** [ORWDPS2 DAY2QTY](../VISTARPC/ORWDPS2_DAY2QTY)

**MUMPS Implementation:** [DAY2QTY^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | UTILITY
Complexity | DIFFICULT
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [51](../VDM/Medication_Instruction-51), [51.1](../VDM/Administration_Schedule-51_1)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DAY | NUMERIC | false | The number of days for the order | 3
UPD | LITERAL | false | List of dosages ordered, separated by carets | 100MG^
SCH | LITERAL | false | Order schedule list, separated by carets | Q4H^
DUR | LITERAL | false | List of Durations, separated by carets | 3 MONTHS^
PAT | NUMERIC | false | Patient IEN | 25
DRG |  | false | Drug IEN | 100

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}