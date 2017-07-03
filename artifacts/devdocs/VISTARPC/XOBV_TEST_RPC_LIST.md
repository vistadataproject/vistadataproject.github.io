---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XOBV TEST RPC LIST
# XOBV TEST RPC LIST

This RPC returns a list of RPC names that begin with the characters indicated in the one input parameter. This RPC is used as part of the test and learning application distributedas part of VistALink.

Property | Value
--- | ---
Label | RPCRP
Routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PREFIX | LITERAL | 20 | true | This parameter indicates the starting characters for the RPCs desired. (ie. the namespace prefix)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}