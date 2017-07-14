---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XOBV TEST MULTIPLE SUBSCRIPTS<br/>
# XOBV TEST MULTIPLE SUBSCRIPTS

This RPC receives an array set up by a client. The client code indicatesthat the array should be presented to the RPC as multiple M subscripts(ex: DATA("TEXT",1,0) and not the usual DATA(1). It sets the array into a local array and returns the local arrayinformation back to the client. This RPC is used as part of the test and learning application distributed as part of VistALink.

## Properties

Property | Value
--- | ---
Label | MSUBS
Routine | [XOBVLT](http://code.osehra.org/dox/Routine_XOBVLT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARRAY | LIST |  | true | An array of information.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}