---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGGLISTPROC
# MAGGLISTPROC

Return a list of Medicine procedures/subspecialities.List can be subset of whole if site uses Imaging Capture Security Keys to limit the users access to only Medicine Procedures that they have a MAGCAP ... Key for.

Property | Value
--- | ---
Label | LIST
Routine | [MAGGTMC](http://code.osehra.org/dox/Routine_MAGGTMC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGGZY | LITERAL | 10 |  | Not using this input for any processing in Version 2.5It might be used for a future version.Kept in the parameter list, for backward compatibility.---If MAGGZY&#x3D;1, then add procedure PRINT NAME (full name) in output.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}