---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWDPS2 QOGRP
# ORWDPS2 QOGRP

If quick order belong to Inpatient Med Order Display Group: return 1, else return 0

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWDPS2 QOGRP](../VISTARPC/ORWDPS2_QOGRP)
MUMPS Implementation | [QOGRP^ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [100.98](../VDM/Display_Group-100_98), [101.41](../VDM/Order_Dialog-101_41)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
QOIFN | LITERAL | false | Type of Display Group to be returned | 202

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}