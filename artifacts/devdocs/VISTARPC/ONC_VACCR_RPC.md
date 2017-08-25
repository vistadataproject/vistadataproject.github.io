---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ONC VACCR RPC<br/>
# ONC VACCR RPC

This REMOTE PROCEDURE outputs OncoTrax data in the VACCR record layoutformat.

## Properties

Property | Value
--- | ---
Label | EN1
MUMPS Implementation | [ONCRPC](http://code.osehra.org/dox/Routine_ONCRPC_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATEUSED | LITERAL | 1 | true | DATEUSED specifies the date field which will be searched for casesto be extracted: 1 &#x3D; DATE CASE COMPLETED2 &#x3D; DATE CASE LAST CHANGED
START | LITERAL | 7 | true | This parameter specifies the start date of DATE parameter.
END | LITERAL | 7 | true | This parameter specifies the end date of DATE parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}