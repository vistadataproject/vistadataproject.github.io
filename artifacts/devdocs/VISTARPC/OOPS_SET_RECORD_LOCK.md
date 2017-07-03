---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS SET RECORD LOCK
# OOPS SET RECORD LOCK

This broker call attempt to lock the record and if not successful, returns a message indicating that the record is in use by another user.

Property | Value
--- | ---
Label | SETLCK
Routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | This is the ASISTS Internal Record Number that will be used to lock the record.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}