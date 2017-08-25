---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ ELOGR<br/>
# MAGQ ELOGR

This provides a method of capturing errors logged during the purgeprocess.  This function provides a list which can be examined at a laterdate and will be rolled into the purge log file on the BP Server which performed the purge.

## Properties

Property | Value
--- | ---
Label | ELOGR
MUMPS Implementation | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NULL |  |  | true | No input parameter is defined.
LIMIT | LITERAL | 5 | true | This value is used to control the array size.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}