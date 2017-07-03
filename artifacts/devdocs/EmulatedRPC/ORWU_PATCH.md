---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWU PATCH
# ORWU PATCH

Determines whether or not a specified patch was installed. (1: true, 0: false)

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | [ORWU PATCH](../VISTARPC/ORWU_PATCH)
MUMPS Implementation | [PATCH^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | NUMBER
Return Description | N/A
File Types Used | [9.4](../VDM/Package-9_4)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
patch_name | LITERAL | true | the name of the patch to check for | SR*3.0*100

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}