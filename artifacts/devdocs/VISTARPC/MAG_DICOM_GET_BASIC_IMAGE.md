---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET BASIC IMAGE<br/>
# MAG DICOM GET BASIC IMAGE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns information about an image.The information that is returned consists of any ofthe fields listed below. Fields that do not havea value (or that have an "empty" value) are notreturned.     OBJECT NAME    FILEREF    DISK & VOLUME, MAGNETIC    DISK & VOLUME, ABSTRACT    DISK & VOLUME, WORM    OBJECT TYPE    PATIENT    PROCEDURE    LAST ACCESS DATE    IQ    GROUP PARENT    ACQUISITION SITE    DESCRIPTIVE CATEGORY    CLINIC    ACQUISITION DEVICE    TRACKING ID    DOCUMENT DATE    DATE/TIME IMAGE SAVED    IMAGE SAVE BY    SUMMARY OBJECT    SHORT DESCRIPTION    PROCEDURE/EXAM DATE/TIME    PARENT DATA FILE#    PARENT GLOBAL ROOT D0    PARENT DATA FILE IMAGE POINTER    EXPORT REQUEST STATUS    PARENT GLOBAL ROOT D1    Full FileName    Full Path+FileName    Big FileName    Big Path+FileName    Abstract FileName    Abstract Path+FileName

## Properties

Property | Value
--- | ---
Label | IMAGE
Routine | [MAGDRPC2](http://code.osehra.org/dox/Routine_MAGDRPC2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
D0 | LITERAL | 30 | true | The value of this parameter is a pointer to ^MAG(2005).This pointer identifies the image for which informationis being requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}