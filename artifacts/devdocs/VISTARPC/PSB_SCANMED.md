---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB SCANMED<br/>
# PSB SCANMED

Takes the scanned valued from the medication and does a lookup on file 50 for an exact match.  If more than one or less than one entry are found for the lookup an error is returned to the client.

## Properties

Property | Value
--- | ---
Label | SCANMED
Routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SCANVAL | LITERAL | 30 | true | This is the data received from the client scanning the medication.
PSBDIEN | LITERAL |  | true | Takes the scanned valued from the medication and does a lookup on file50 for an exact match.  If more than one or less than one entry arefound for the lookup an error is returned to the client.
PSBTAB | LITERAL | 20 | true | This is the current tab the user is on.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}