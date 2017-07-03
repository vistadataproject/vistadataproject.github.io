---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XOBV TEST MULTIPLE SUBSCRIPTS
# XOBV TEST MULTIPLE SUBSCRIPTS

This RPC receives an array set up by a client. The client code indicatesthat the array should be presented to the RPC as multiple M subscripts(ex: DATA("TEXT",1,0) and not the usual DATA(1). It sets the array into a local array and returns the local arrayinformation back to the client. This RPC is used as part of the test and learning application distributed as part of VistALink.

Property | Value
--- | ---
Label | MSUBS
Routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARRAY | LIST |  | true | An array of information.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}