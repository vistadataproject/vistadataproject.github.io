---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWUL FVSUB<br/>
# ORWUL FVSUB

Return subset of orders in view

**Native RPC Documentation:** [ORWUL FVSUB](../VISTARPC/ORWUL_FVSUB)

**MUMPS Implementation:** [FVSUB^ORWUL](http://code.osehra.org/dox/Routine_ORWUL_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | LOW
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [101.44](../VDM/Order_Quick_View-101_44)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
IEN | NUMBER | true | IEN of order | 1
FIRST | NUMBER | true | First element subset to be returned | 1
LAST | NUMBER | true | Last element subset to be returned | 99

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}