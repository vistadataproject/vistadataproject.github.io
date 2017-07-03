---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWUL FVSUB
# ORWUL FVSUB

Return subset of orders in view

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWUL FVSUB](../VISTARPC/ORWUL_FVSUB)
MUMPS Implementation | [FVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)
Type | READ
Complexity | LOW
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [101.44](../VDM/Order_Quick_View-101_44)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
IEN | NUMBER | true | IEN of order | 1
FIRST | NUMBER | true | First element subset to be returned | 1
LAST | NUMBER | true | Last element subset to be returned | 99

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}