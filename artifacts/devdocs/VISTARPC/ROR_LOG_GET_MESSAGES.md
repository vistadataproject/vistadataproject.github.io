---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LOG GET MESSAGES<br/>
# ROR LOG GET MESSAGES

The ROR LOG GET MESSAGES remote procedure returns a list of messages fromthe log defined by the parameter.

## Properties

Property | Value
--- | ---
Label | MSGLIST
MUMPS Implementation | [RORRP007](http://code.osehra.org/dox/Routine_RORRP007_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOGIEN | LITERAL |  | true | The LOGIEN parameter defines the log. It should contain a valid IEN of thelog record in the ROR LOG file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}