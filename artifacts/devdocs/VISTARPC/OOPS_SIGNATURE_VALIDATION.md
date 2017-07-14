---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SIGNATURE VALIDATION<br/>
# OOPS SIGNATURE VALIDATION

This broker call will return the SIGNATURE BLOCK PRINTED NAME from the NewPerson File (#200) if the validation logic for signing the case passes.

## Properties

Property | Value
--- | ---
Label | DECODE
Routine | [OOPSGUIS](http://code.osehra.org/dox/Routine_OOPSGUIS_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 10 | true | This parameter contains the internal record number for the case.
CALL | LITERAL | 1 | true | This parameter contains the letter that cooresponds to the menu that wasused to access the option passing in the data.
FORM | LITERAL | 10 | true | This paramter contains the type of form that is being accessed.  As of ASISTS version 2, patch 5, the only value expected is CA7.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}