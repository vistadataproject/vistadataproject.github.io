---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET SINGLE FIELD<br/>
# OOPS GET SINGLE FIELD

This broker call will return a single data element from the file and field that is passed in as a parameter.

## Properties

Property | Value
--- | ---
Label | GETFLD
MUMPS Implementation | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 30 | true | This parameter is the internal record number of the file that the data elementwill be extracted from.
FLD | LITERAL | 50 | true | This parameter contains the file and field number where the data element shouldbe extracted from in the format FILE NUMBER^FIELD NUMBER.  An example wouldbe 2260^119.  This would &#x27;pull&#x27; field 119 from the ASISTS Accident ReportingFile (#2260).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}