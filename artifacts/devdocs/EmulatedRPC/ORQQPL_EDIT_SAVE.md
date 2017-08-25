---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQPL EDIT SAVE<br/>
# ORQQPL EDIT SAVE

Saves edited problem record

**Native RPC Documentation:** [ORQQPL EDIT SAVE](../VISTARPC/ORQQPL_EDIT_SAVE)

**MUMPS Implementation:** [EDSAVE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)

## Properties

Property | Value
--- | ---
Type | Clinical
Domain | Problems
Class | CHANGE
Complexity | HIGH
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [9000011](../VDM/Problem-9000011), [125.8](../VDM/Problem_List_Audit-125_8)
Parameters Used | GMPIFN, GMPROV, GMPVAMC, UT, EDARRAY, GMPSRCH


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMPIFN | REFERENCE | true | record ifn | 1
GMPROV | REFERENCE | true | provider | 57
GMPVAMC | REFERENCE | true | facility id | 2957
UT | LITERAL | true | GMPLUSER? | 1
EDARRAY | LIST | true | array used for indirect sets of GMPORIG() and GMPFLDS() | 
GMPSRCH | LITERAL |  |  | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}