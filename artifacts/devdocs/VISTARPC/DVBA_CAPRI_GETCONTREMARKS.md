---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBA CAPRI GETCONTREMARKS
# DVBA CAPRI GETCONTREMARKS

This gets the remarks sent to the contractor concerning the 2507 REQUEST in file 396.3. The remarks are stored in the word processing field #103 ofthe 2507 EXAM file 396.4.

Property | Value
--- | ---
Label | WPGET
Routine | [DVBACREM](http://code.osehra.org/dox/Routine_DVBACREM_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBEIEN | LITERAL |  | true | This is the Exam Ien to get the comments from



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}