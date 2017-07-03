---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; IBD RECEIVE FORM DATA
# IBD RECEIVE FORM DATA

This RPC is to be used by the AICS workstation software only.  It acceptsdata in the format returned by the scanning software and converts thedata in the format expected by PCE and passes the data to PCE.

Property | Value
--- | ---
Label | RECV
Routine | [IBDFBK2](http://code.osehra.org/dox/Routine_IBDFBK2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FORMDATA | LIST | 245 | true | This is the input data.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}