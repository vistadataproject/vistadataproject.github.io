---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC BLD PAT SCDE LIST<br/>
# SC BLD PAT SCDE LIST

Buils a list of patients who are associated with a particular stop code.Only those patients within the specified date range will appear in the list.Screens out inactive stop codes.  Format of the list is ^TMP($J,"SCSCDE",DFN)

## Properties

Property | Value
--- | ---
Label | PTSCBLD
MUMPS Implementation | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETER LIST | LIST | 512 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}