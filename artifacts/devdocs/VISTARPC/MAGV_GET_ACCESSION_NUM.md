---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV GET ACCESSION NUM
# MAGV GET ACCESSION NUM

This RPC returns an accession number given a patient reference internal entry number and procedure reference internal entry number.

Property | Value
--- | ---
Label | GETACCNO
Routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATREFIEN | LITERAL | 10 | true | This is the internal entry number of the entry on the IMAGING PATIENT REFERENCE File (#2005.6) with which the procedure reference is associated.
PROCREFIEN | LITERAL | 10 | true | This is the procedure&#x27;s internal entry number on the IMAGING PROCEDUREREFERENCE File (#2005.61).
OVERRIDE | LITERAL | 3 | true | This parameter should be used with EXTREME CAUTION.  If set TRUE(nonzero), will suppress the validation of the procedure reference IENagainst the patient reference IEN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}