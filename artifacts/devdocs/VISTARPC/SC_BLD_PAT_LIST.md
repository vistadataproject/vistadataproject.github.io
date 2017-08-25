---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC BLD PAT LIST<br/>
# SC BLD PAT LIST

Builds a list of patients to be assigned to either a team or positionthrough the multiple assignment form.  This list is called by the actual "filer" for either the Team or the position.  The list's format is ^TMP($J,"SC PATIENT LIST",DFN)

## Properties

Property | Value
--- | ---
Label | PTLSTBLD
MUMPS Implementation | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SCVAL | LITERAL | 512 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}