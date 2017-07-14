---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM IMAGE AUDIT GET<br/>
# MAG DICOM IMAGE AUDIT GET

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC call fetches the statistical informationthat is collected about the acquisition of images.

## Properties

Property | Value
--- | ---
Label | GET2
Routine | [MAGDRPC7](http://code.osehra.org/dox/Routine_MAGDRPC7_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOCATION | LITERAL | 10 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.
START | LITERAL | 10 | true | The value of this parameter is a (FileMan) date.This date, if specified, indicates the first day for which statisticsare to be returned.
STOP | LITERAL | 10 | true | The value of this parameter is a (FileMan) date.This date, if specified, indicates the last day for which statisticsare to be returned.
MAX | LITERAL | 10 | true | The value of this parameter is an integer number. This numberindicates the maximum number of audit-data records that isto be returned in each call to this RPC. When this parameter is not specified, a default value of 100will be assumed.
OFFSET | LITERAL | 10 | true | The value of this parameter is a positive integer number.This number indicates the point in the retrieval sequence wherea previous call to this RPC &quot;left off&quot;. On the initial call of a series to obtain audit information,the value of this parameter should be equal to 0. On each subsequent call, the value that should be specified forthe OFFSET should be equal to the value that was returned inthe previous call as the second (comma-separated) piece ofthe value in the first element of the OUT array.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}