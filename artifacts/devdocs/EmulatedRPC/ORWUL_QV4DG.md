---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWUL QV4DG
# ORWUL QV4DG

Return Quick order list, given a display group name.Output represents ListIEN^ItemCount

Property | Value
--- | ---
Domain | Non-Clinical: File/Parameters
VISTA RPC Documentation | [ORWUL QV4DG](../VISTARPC/ORWUL_QV4DG)
MUMPS Implementation | [QV4DG^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | SINGLE VALUE
Return Description | N/A
File Types Used | [100.98](../VDM/Display_Group-100_98), [101.41](../VDM/Order_Dialog-101_41), [101.44](../VDM/Order_Quick_View-101_44)
Parameters Used | [ORWDQ QUICK VIEW](../Parameters/ORWDQ_QUICK_VIEW)


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DGRP | LITERAL | false | Display group name | NV RX

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}