---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV INACTIVATE INSTANCE FILE
# MAGV INACTIVATE INSTANCE FILE

This RPC inactivates an instance file entry.

Property | Value
--- | ---
Label | INFILE
Routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILEIEN | LITERAL |  |  | This is the IEN of the instance file entry to be inactivated.
SOPIEN | LITERAL |  |  | This is the IEN of the related SOP entry.
OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}