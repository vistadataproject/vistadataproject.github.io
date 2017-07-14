---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQ LOGV<br/>
# MAGQ LOGV

This provides a method of capturing errors logged during the BP Verifierprocess.  This function provides a list which can be examined at a laterdate and will be rolled into verifier log file on the BP Server or networklog file share.

## Properties

Property | Value
--- | ---
Label | ELOGRV
Routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NULL |  |  | true | No input parameter is defined.
LIMIT | LITERAL | 5 | true | This value is used to control the array size.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}