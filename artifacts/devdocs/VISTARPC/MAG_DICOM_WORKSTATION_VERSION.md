---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM WORKSTATION VERSION<br/>
# MAG DICOM WORKSTATION VERSION

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ For the purposes of "Mag Enterprise", each DICOM Gatewaywill report its current software version each day to the VistASystem. This RPC is called to register the current version information.

## Properties

Property | Value
--- | ---
Label | STATION
Routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STATION | LITERAL | 30 | true | The value of this parameter is a text string (upper case only).This string uniquely identifies the &quot;station name&quot; of theDICOM Gateway that is reporting its version information.
VERSION | LITERAL | 30 | true | The value of this parameter is a text string.This text string represents the version identification for theversion of the DICOM Gateway software that is running on the currentcomputer.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}