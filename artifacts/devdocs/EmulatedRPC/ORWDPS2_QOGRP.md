---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWDPS2 QOGRP<br/>
# ORWDPS2 QOGRP

If quick order belong to Inpatient Med Order Display Group: return 1, else return 0

**Native RPC Documentation:** [ORWDPS2 QOGRP](../VISTARPC/ORWDPS2_QOGRP)

**MUMPS Implementation:** [QOGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [100.98](../VDM/Display_Group-100_98), [101.41](../VDM/Order_Dialog-101_41)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
QOIFN | LITERAL | false | Type of Display Group to be returned | 202

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}