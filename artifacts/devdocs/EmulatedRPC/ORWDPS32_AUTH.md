---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWDPS32 AUTH<br/>
# ORWDPS32 AUTH

Checks restrictions for entering inpatient meds.  If no restrictions, a 0is returned.  If there is a restriction, it is returned in the format:     1^restriction text

**Native RPC Documentation:** [ORWDPS32 AUTH](../VISTARPC/ORWDPS32_AUTH)

**MUMPS Implementation:** [AUTH^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | File/Parameters
Class | READ
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [100](../VDM/Order-100), [101.41](../VDM/Order_Dialog-101_41), [100.98](../VDM/Display_Group-100_98), [200](../VDM/New_Person-200)
Parameters Used | [OR OREMAS MED ORDERS](../Parameters/OR_OREMAS_MED_ORDERS)


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
PRV | NUMERIC | true | User DUZ | 62
ORDLOG | LITERAL | false | Order Dialog Number | X1;2

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}