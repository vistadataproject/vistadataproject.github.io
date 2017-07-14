---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM CORRECT VALIDATE<br/>
# MAG DICOM CORRECT VALIDATE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure validates the structure of the tablethat contains information about images that are "to be corrected". Any inconsistencies are corrected, any pointers to obsoleteinformation are removed, all cross-references are rebuilt.

## Properties

Property | Value
--- | ---
Label | VALIDATE
Routine | [MAGDLBV](http://code.osehra.org/dox/Routine_MAGDLBV_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MENU | LITERAL | 5 | true | The value of this parameter is a numeric value. This value indicateswhether or not the procedure is called from the VistA menu.When called from the menu (the value of this parameter is TRUE),status information is displayed interactively as the procedureis active.When called as a Remote Procedure (the value of this parameteris FALSE), only a status code is returned to the client and nointeractive output is generated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}