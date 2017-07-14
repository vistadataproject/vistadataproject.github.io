---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG STUDY UID QUERY<br/>
# MAG STUDY UID QUERY

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns information about the images that wereacquired for a specific study.

## Properties

Property | Value
--- | ---
Label | STUDY
Routine | [MAGDQR04](http://code.osehra.org/dox/Routine_MAGDQR04_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UID | LITERAL | 64 | true | The value of this parameter is a string.This string is a DICOM UID (unique identifier) that specifiesthe study for which the image information is to be retrieved. A DICOM UID is a string consisting of only digits and periods,and may be up to 64 characters long.
PRMUID | LITERAL | 1 | true | The primary UID flag determines what type of error checks will beperformed on the UID provided. There are two UID checks that may be performed depending on the valueof the primary UID flag. A duplicate UID check can be performed which will check to see if the PACS UID is associated with multiple patients. If duplicateUIDs are found a &quot;-13&quot; error message will be returned. A multiple UID check can be performed which will check to see ifthe PACS UID is associated with multiple entries in the IMAGE(#2005) file. If multiple UIDs are found a &quot;-14&quot; error willbe returned. A PRMUID value of 0 will perform a duplicate and multipleUID check. A PRMUID value of 1 will perform neither a duplicate nor multipleUID check. A PRMUID value of 2 will perform a duplicate UID check, butwill not perform a multiple UID check.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}