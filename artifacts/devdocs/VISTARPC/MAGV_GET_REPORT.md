---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET REPORT
# MAGV GET REPORT

This RPC, given the internal entry number of an entry on the IMAGINGPROCEDURE REFERENCE File (#2005.61) that references a VA procedure,returns an array containing the report text for that procedure and associated attributes.

Property | Value
--- | ---
Label | GETRPT
Routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATREFIEN | LITERAL | 10 | true | This is the internal entry number on the IMAGING PATIENT REFERENCE File(#2005.6) of the patient with whom this procedure reference isassociated.
PROCREFIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGING PROCEDUREREFERENCE File (#2005.61) for which report information is to be returned.
OVERRIDE | LITERAL | 3 |  | This parameter should be used with EXTREME CAUTION.  If valued TRUE(nonzero), it suppresses the check of the patient reference IEN againstthe value of the PARENT IEN Field (#.99) on the IMAGING PROCEDUREREFERENCE File (#2005.61).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}