---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBA CHECK PATCH<br/>
# DVBA CHECK PATCH

This RPC is a wrapper for the supported $$PATCH^XPDUTL API to determinewhether a given patch is installed or not.  "1^Patch Is Installed" is returned on success; otherwise "0^Patch Is Not Installed" is returned.

## Properties

Property | Value
--- | ---
Label | CHECK
MUMPS Implementation | [DVBAB1B](http://code.osehra.org/dox/Routine_DVBAB1B_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBPATCH | LITERAL | 20 | true | This parameter contains the patch designation (ex. DVBA*2.7*142).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}