---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGG OFFLINE IMAGE ACCESSED<br/>
# MAGG OFFLINE IMAGE ACCESSED

This sends a message when an image has been accessed from a Jukeboxplatter that is offline, as determined by having an entry in the file ^MAGQUEUE(2006.033.

## Properties

Property | Value
--- | ---
Label | MAIL
MUMPS Implementation | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGFILE | LITERAL | 90 | true | The full path and file name of the Image accessed.
MAGIEN | LITERAL | 30 | true | The Internal entry number in file MAG(2005.  



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}