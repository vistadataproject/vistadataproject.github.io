---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD FILE INQUIRY<br/>
# KMPD FILE INQUIRY

Return all data in file for specific entry.

## Properties

Property | Value
--- | ---
Label | FILEINQ
MUMPS Implementation | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM1 | LITERAL | 60 | true | File number.
PARAM2 | LITERAL | 60 | true | IEN for file in PARAM1.
PARAM3 | LITERAL | 245 | true | Array for temporary data storage.  This should be a global array, and mustbe either ^TMP or ^UTILITY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}