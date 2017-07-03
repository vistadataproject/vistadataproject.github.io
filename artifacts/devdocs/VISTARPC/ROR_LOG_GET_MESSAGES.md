---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LOG GET MESSAGES
# ROR LOG GET MESSAGES

The ROR LOG GET MESSAGES remote procedure returns a list of messages fromthe log defined by the parameter.

Property | Value
--- | ---
Label | MSGLIST
Routine | [RORRP007](http://code.osehra.org/dox/Routine_RORRP007_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOGIEN | LITERAL |  | true | The LOGIEN parameter defines the log. It should contain a valid IEN of thelog record in the ROR LOG file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}