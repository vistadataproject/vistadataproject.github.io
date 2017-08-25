---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQPL PROBLEM LIST<br/>
# ORQQPL PROBLEM LIST

Problem list for CPRS GUI client

**Native RPC Documentation:** [ORQQPL PROBLEM LIST](../VISTARPC/ORQQPL_PROBLEM_LIST)

**MUMPS Implementation:** [PROBL^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Problems
Class | CHANGE
Complexity | HIGH
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [9000011](../VDM/Problem-9000011)
Parameters Used | DFN, GMPSTAT, ORIDT


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | REFERENCE | true | Patient IEN | 25
GMPSTAT | LITERAL |  | Problem status filter: A - active, I - inactive, B - Both active and inactive, R - removed | A
ORIDT | DATE |  | Problem date filter? This parameter is typically passed in as zero | 0

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}