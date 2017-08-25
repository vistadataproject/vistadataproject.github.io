---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV UPDATE PAT REF<br/>
# MAGV UPDATE PAT REF

This RPC allows an Imaging patient reference to be updated.

## Properties

Property | Value
--- | ---
Label | UPDPAT
MUMPS Implementation | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIDATTS | LIST | 32000 | true | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDPAT^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. Input parameters used for update are the following:  IEN (required): the internal entry number of the patient reference  ID_VALUE (required): the raw value of the ID ID_TYPE (required): the type of ID (M)RN or (I)CN or (D)FN ASSIGNING_ENTITY: (V)A, (D)oD, (I)HS
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}