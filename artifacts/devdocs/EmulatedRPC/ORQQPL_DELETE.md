---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQPL DELETE<br/>
# ORQQPL DELETE

DELETES A PROBLEM

**Native RPC Documentation:** [ORQQPL DELETE](../VISTARPC/ORQQPL_DELETE)

**MUMPS Implementation:** [DELETE^ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Problems
Class | CHANGE
Complexity | MEDIUM
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [9000011](../VDM/Problem-9000011), [125.8](../VDM/Problem_List_Audit-125_8)
Parameters Used | GMPIFN, GMPROV, GMPVAMC, REASON


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMPIFN | REFERENCE | true | record ifn | 1
GMPROV | REFERENCE | true | provider | 57
GMPVAMC | REFERENCE | true | facility id | 2957
REASON | LITERAL |  | reason for removal | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}