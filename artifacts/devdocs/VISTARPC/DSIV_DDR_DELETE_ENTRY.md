---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV DDR DELETE ENTRY<br/>
# DSIV DDR DELETE ENTRY

This will delete a record from a file or subfile.

## Properties

Property | Value
--- | ---
Label | KILL
MUMPS Implementation | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file or subfile of the record to be deleted
IENS | LITERAL | 50 | true | This is the Fileman IENS input parameter.  Its value must be applicable to the file or subfile for which a record is being deleted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}