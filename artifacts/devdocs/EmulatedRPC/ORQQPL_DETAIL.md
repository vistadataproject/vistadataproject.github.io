---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORQQPL DETAIL
# ORQQPL DETAIL

Function returns a string of detailed information for a problem.

Property | Value
--- | ---
Domain | Problems
VISTA RPC Documentation | [ORQQPL DETAIL](../VISTARPC/ORQQPL_DETAIL)
MUMPS Implementation | [DETAIL^ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
Type | UNSTRUCTURED READ
Complexity | HIGH
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [9000011](../VDM/Problem-9000011)
Parameters Used | DFN, PROBLEM_ID, ID


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | REFERENCE | true | Patient IEN | 25
PROBLEM_ID | REFERENCE | true | The record number of the problem from the Problem File (#9000011). | 1
ID | LITERAL |  | undocumented parameter, source code marks this as ID but never used in M code | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}