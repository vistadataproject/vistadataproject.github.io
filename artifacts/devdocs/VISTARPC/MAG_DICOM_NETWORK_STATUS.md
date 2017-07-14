---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM NETWORK STATUS<br/>
# MAG DICOM NETWORK STATUS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Mark a Network Location as being either on-line or off-line.

## Properties

Property | Value
--- | ---
Label | ONOFLINE
Routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DEST | LITERAL | 30 | true | The value of this parameter is a pointer to ^MAG(2005.2).This pointer identifies the network location for which theoperational status is being defined.
STATUS | LITERAL | 10 | true | The value of this parameter is a Boolean value that indicatesthe new operational status of the network location:   0 &#x3D; off-line   1 &#x3D; on-line



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}