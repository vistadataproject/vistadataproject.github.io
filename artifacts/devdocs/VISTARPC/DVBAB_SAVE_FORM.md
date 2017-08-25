---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB SAVE FORM<br/>
# DVBAB SAVE FORM

Set DVBIEN to the internal entry number of the form Set DVBLINES to the lines to be saved Set DVBLINEN to the starting line # in the global.  This allows for formsto be sent in chunks.

## Properties

Property | Value
--- | ---
Label | SAVE
MUMPS Implementation | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBIEN | LITERAL |  | true | 
DVBLINES | LIST |  | true | 
DVBLINECOUNT | LITERAL |  | true | 
DVBLINEN | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}