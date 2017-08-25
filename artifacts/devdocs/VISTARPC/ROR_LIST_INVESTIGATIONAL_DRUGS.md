---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST INVESTIGATIONAL DRUGS<br/>
# ROR LIST INVESTIGATIONAL DRUGS

[ROR LIST INVESTIGATIONAL DRUGS] returns a list of drugs that areclassified as investigational in file ^PS(50.605 and have a drug classof IN140 for HEPC or IN150 for HIV

## Properties

Property | Value
--- | ---
Label | RORINV
MUMPS Implementation | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PART | LITERAL |  | true | A string that is passed in to filter the number of drugs returned.If the string is ?? then the call will return all drugs that qualify.
FLAGS | LITERAL |  | true | If equal to 1 this will work with the HEPC Registry.  If equal to 2 willwork with the HIV Registry
NUMBER | LITERAL |  | true | DEPRECATED
FROM | LITERAL |  | true | DEPRECATED



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}