---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SC BLD PAT SCDE LIST
# SC BLD PAT SCDE LIST

Buils a list of patients who are associated with a particular stop code.Only those patients within the specified date range will appear in the list.Screens out inactive stop codes.  Format of the list is ^TMP($J,"SCSCDE",DFN)

Property | Value
--- | ---
Label | PTSCBLD
Routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETER LIST | LIST | 512 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}