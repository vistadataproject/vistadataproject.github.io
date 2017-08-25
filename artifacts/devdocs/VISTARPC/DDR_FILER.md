---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DDR FILER<br/>
# DDR FILER

Generic call to file edits into FM file.

## Properties

Property | Value
--- | ---
Label | FILEC
MUMPS Implementation | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
EDIT RESULTS | LIST | 512 | true | Results of editing to be placed in FDA array by broker.
EDIT MODE | LITERAL | 3 | true | Is processing in edit or add data mode.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}