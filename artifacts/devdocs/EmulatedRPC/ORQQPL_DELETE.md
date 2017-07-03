---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORQQPL DELETE
# ORQQPL DELETE

DELETES A PROBLEM

Property | Value
--- | ---
Domain | Problems
VISTA RPC Documentation | [ORQQPL DELETE](../VISTARPC/ORQQPL_DELETE)
MUMPS Implementation | [DELETE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
Type | CHANGE
Complexity | MEDIUM
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [9000011](../VDM/Problem-9000011), [125.8](../VDM/Problem_List_Audit-125_8)
Parameters Used | GMPIFN, GMPROV, GMPVAMC, REASON


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMPIFN | REFERENCE | true | record ifn | 1
GMPROV | REFERENCE | true | provider | 57
GMPVAMC | REFERENCE | true | facility id | 2957
REASON | LITERAL |  | reason for removal | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}