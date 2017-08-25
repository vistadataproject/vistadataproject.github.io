---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET POINTED TO<br/>
# OOPS GET POINTED TO

The broker call passes the file and field number back to the variable FLD onthe M side.  The M code will return the code (pointer) and the description forset of codes or table files to be used in lookups.

## Properties

Property | Value
--- | ---
Label | GETLIST
MUMPS Implementation | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
single | LITERAL | 256 |  | This must contain the File and Field number separated by the caret character.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}