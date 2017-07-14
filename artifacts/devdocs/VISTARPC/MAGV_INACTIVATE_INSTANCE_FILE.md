---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV INACTIVATE INSTANCE FILE<br/>
# MAGV INACTIVATE INSTANCE FILE

This RPC inactivates an instance file entry.

## Properties

Property | Value
--- | ---
Label | INFILE
Routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILEIEN | LITERAL |  |  | This is the IEN of the instance file entry to be inactivated.
SOPIEN | LITERAL |  |  | This is the IEN of the related SOP entry.
OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}