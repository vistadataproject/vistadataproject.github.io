---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORQQPL PROBLEM LIST
# ORQQPL PROBLEM LIST

Problem list for CPRS GUI client

Property | Value
--- | ---
Domain | Problems
VISTA RPC Documentation | [ORQQPL PROBLEM LIST](../VISTARPC/ORQQPL_PROBLEM_LIST)
MUMPS Implementation | [PROBL^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Type | CHANGE
Complexity | HIGH
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [9000011](../VDM/Problem-9000011)
Parameters Used | DFN, GMPSTAT, ORIDT


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | REFERENCE | true | Patient IEN | 25
GMPSTAT | LITERAL |  | Problem status filter: A - active, I - inactive, B - Both active and inactive, R - removed | A
ORIDT | DATE |  | Problem date filter? This parameter is typically passed in as zero | 0

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}