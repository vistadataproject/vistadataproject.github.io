---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM LOOKUP RAD STUDY<br/>
# MAG DICOM LOOKUP RAD STUDY

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC queries the VistA system for the details on aRadiology Study, given the casenumber (either the date+numberor just the number) and the study date.

## Properties

Property | Value
--- | ---
Label | RADLKUP
MUMPS Implementation | [MAGDRPC3](http://code.osehra.org/dox/Routine_MAGDRPC3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CASENUMB | LITERAL | 30 | true | The value of this parameter is a string. This value identifiesthe &quot;case number&quot; for the study. The case number may be specifiedas a &quot;date + case number&quot; or as just an integer number.In the former case, the date is formatted as &quot;mmddyy&quot;.
STUDYDAT | LITERAL | 20 | true | The value of this parameter is a (FileMan) date.This value represents the date on which the study took place.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}