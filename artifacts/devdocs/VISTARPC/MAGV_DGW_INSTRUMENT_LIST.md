---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV DGW INSTRUMENT LIST<br/>
# MAGV DGW INSTRUMENT LIST

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Return list of Instruments in DGWfrom DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911)

## Properties

Property | Value
--- | ---
Label | INSTRMNT
Routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL |  |  | The HOSTNAME is the corresponding DICOM Gateway.  If HOSTNAME is blank all settings will be returned



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}