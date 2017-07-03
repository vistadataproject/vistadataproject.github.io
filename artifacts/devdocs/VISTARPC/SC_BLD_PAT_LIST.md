---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SC BLD PAT LIST
# SC BLD PAT LIST

Builds a list of patients to be assigned to either a team or positionthrough the multiple assignment form.  This list is called by the actual "filer" for either the Team or the position.  The list's format is ^TMP($J,"SC PATIENT LIST",DFN)

Property | Value
--- | ---
Label | PTLSTBLD
Routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SCVAL | LITERAL | 512 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}