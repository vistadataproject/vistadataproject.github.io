---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM LOOKUP STUDY<br/>
# MAG DICOM LOOKUP STUDY

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC looks up a study that might be a Radiology Studyor a Clinical Specialty, based on the specified (case) number.

## Properties

Property | Value
--- | ---
Label | LOOKUP
MUMPS Implementation | [MAGDRPC4](http://code.osehra.org/dox/Routine_MAGDRPC4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NUMBER | LITERAL | 30 | true | The value of this parameter is a number that identifies astudy. Such a number would be a date-case number for a Radiologystudy, or just a number for a Consult.The value of this parameter may also be a string that consists ofa &quot;tick-mark&quot; (&#x60;), followed by the internal entry number ofan image.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}