---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VPR GET PATIENT DATA JSON
# VPR GET PATIENT DATA JSON

This RPC retrieves the requested data from VistA, and returns it in^TMP("VPR",$J,n) as JSON.

Property | Value
--- | ---
Label | GET
Routine | [VPRDJ](http://code.osehra.org/dox/Routine_VPRDJ_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILTER | LIST |  | true | List of name-value pairs defining the search.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}