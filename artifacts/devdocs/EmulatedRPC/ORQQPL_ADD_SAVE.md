---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORQQPL ADD SAVE<br/>
# ORQQPL ADD SAVE

Add new problem record

**Native RPC Documentation:** [ORQQPL ADD SAVE](../VISTARPC/ORQQPL_ADD_SAVE)

**MUMPS Implementation:** [ADDSAVE^ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)

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
File Types Used | [9000011](../VDM/Problem-9000011), 8925.9, [9999999.27](../VDM/Provider_Narrative-9999999_27), 9000010.07
Parameters Used | GMPDFN, GMPROV, GMPVAMC, ADDARRAY, GMPSRCH


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMPDFN | LITERAL | true |  | 25^CARTER,DAVID^0113^
GMPROV | REFERENCE | true |  | 57
GMPVAMC | REFERENCE | true |  | 2957
ADDARRAY | LIST | true | ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET | 
GMPSRCH | LITERAL |  |  | hypertension

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}