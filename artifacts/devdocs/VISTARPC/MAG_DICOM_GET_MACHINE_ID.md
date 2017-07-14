---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET MACHINE ID<br/>
# MAG DICOM GET MACHINE ID

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure returns the internal entry number ofthe entry for the specified computer in the table of registeredDICOM Gateways.

## Properties

Property | Value
--- | ---
Label | GETID
Routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL | 30 | true | The value of this parameter is a string. This string is the&quot;host name&quot; of a computer. Many sites follow the standardto use names like VHAxxxabcde, where xxx is a three-letterabbreviation for the name of the site, and abcde is theactual name of the computer.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}