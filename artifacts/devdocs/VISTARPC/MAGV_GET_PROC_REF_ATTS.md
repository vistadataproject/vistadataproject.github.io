---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV GET PROC REF ATTS<br/>
# MAGV GET PROC REF ATTS

This RPC, given the internal entry number of an entry on the IMAGING PROCEDURE REFERENCE File (#2005.61), returns an array containing the field names and values that are defined for that entry.

## Properties

Property | Value
--- | ---
Label | GETPROCA
MUMPS Implementation | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATREFIEN | LITERAL | 10 |  | This is the internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6) of the patient with whom this procedure reference is associated.
PROCREFIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGING PROCEDURE REFERENCE File (#2005.61) for which attribute values are to be returned.
OVERRIDE | LITERAL | 3 |  | This parameter should be used with EXTREME CAUTION.  It suppresses the check of the patient reference IEN against the value of the PARENT IEN Field (#.99) on the IMAGING PROCEDURE REFERENCE File (#2005.61).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}