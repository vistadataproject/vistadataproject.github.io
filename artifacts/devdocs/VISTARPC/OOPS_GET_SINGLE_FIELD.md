---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS GET SINGLE FIELD
# OOPS GET SINGLE FIELD

This broker call will return a single data element from the file and field that is passed in as a parameter.

Property | Value
--- | ---
Label | GETFLD
Routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | This parameter is the internal record number of the file that the data elementwill be extracted from.
FLD | LITERAL | 50 | true | This parameter contains the file and field number where the data element shouldbe extracted from in the format FILE NUMBER^FIELD NUMBER.  An example wouldbe 2260^119.  This would &#x27;pull&#x27; field 119 from the ASISTS Accident ReportingFile (#2260).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}