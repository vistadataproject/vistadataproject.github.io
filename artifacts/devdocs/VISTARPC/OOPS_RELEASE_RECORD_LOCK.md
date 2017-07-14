---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS RELEASE RECORD LOCK<br/>
# OOPS RELEASE RECORD LOCK

This broker call will release the previously locked ASISTS record.

## Properties

Property | Value
--- | ---
Label | CLRLCK
Routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This input parameter contains the ASISTS Internal Record Number that will beused to attempt to unlock a previously locked record.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}