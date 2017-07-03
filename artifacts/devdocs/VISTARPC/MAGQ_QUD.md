---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQ QUD
# MAGQ QUD

Updates the status field in the specified queue record.

Property | Value
--- | ---
Label | QUPDTE
Routine | [MAGQBTM](http://code.osehra.org/dox/Routine_MAGQBTM_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | The internal entry number of the Vista Imaging Queue file - the queue itemto be updated.
UPDATE | LITERAL |  | true | The message string result of the process:piece 1 if positive indicates the successful completion of the queue task       if negative indicates that the queue was not successfully completedpiece 2 is the process messagepiece 3 contains the network location reference (IEN) of the location    successfully copied to by the queue task



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}