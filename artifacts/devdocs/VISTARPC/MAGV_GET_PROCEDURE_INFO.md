---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET PROCEDURE INFO
# MAGV GET PROCEDURE INFO

This RPC, given the internal entry number of an entry on the IMAGING PROCEDURE REFERENCE File (#2005.61) that references a VA procedure,returns an array containing the attributes of that procedure. If the entry references a non-VA procedure, an appropriate exception message is returned.

Property | Value
--- | ---
Label | GETPROCI
Routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATREFIEN | LITERAL | 10 |  | This is the internal entry number on the IMAGING PATIENT REFERENCE File(#2005.6) of the patient with whom this procedure reference is associated.
PROCREFIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGING PROCEDUREREFERENCE File (#2005.61) for which procedure information is to bereturned.
OVERRIDE | LITERAL | 3 |  | This parameter should be used with EXTREME CAUTION.  If valued TRUE (nonzero), it suppresses the check of the patient reference IEN against the value of the PARENT IEN Field (#.99) on the IMAGING PROCEDURE REFERENCE File (#2005.61).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}