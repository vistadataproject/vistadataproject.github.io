---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQPL DETAIL<br/>
# ORQQPL DETAIL

Function returns a string of detailed information for a problem.

**Native RPC Documentation:** [ORQQPL DETAIL](../VISTARPC/ORQQPL_DETAIL)

**MUMPS Implementation:** [DETAIL^ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Problems
Class | UNSTRUCTURED READ
Complexity | HIGH
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [9000011](../VDM/Problem-9000011)
Parameters Used | DFN, PROBLEM_ID, ID


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | REFERENCE | true | Patient IEN | 25
PROBLEM_ID | REFERENCE | true | The record number of the problem from the Problem File (#9000011). | 1
ID | LITERAL |  | undocumented parameter, source code marks this as ID but never used in M code | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}