---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SET RECORD LOCK<br/>
# OOPS SET RECORD LOCK

This broker call attempt to lock the record and if not successful, returns a message indicating that the record is in use by another user.

## Properties

Property | Value
--- | ---
Label | SETLCK
MUMPS Implementation | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the ASISTS Internal Record Number that will be used to lock the record.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}