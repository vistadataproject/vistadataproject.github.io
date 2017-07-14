---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DDR KEY VALIDATOR<br/>
# DDR KEY VALIDATOR

Validates that values passed in do not violate key integrity.  UnderlyingDBS call is KEYVAL^DIE.

## Properties

Property | Value
--- | ---
Label | KEYVAL
Routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VALUES TO VALIDATE | LIST | 512 | true | Array of data used to create FDA for KEYVAL^DIE call.  Alternating linescontain file#^IENS^field# and value associated with preceding file, record,and field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}