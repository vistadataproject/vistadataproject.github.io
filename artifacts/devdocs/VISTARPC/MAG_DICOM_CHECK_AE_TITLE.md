---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM CHECK AE TITLE<br/>
# MAG DICOM CHECK AE TITLE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure checks whether an Application Entityis specified on a DICOM Gateway that has the specified name.

## Properties

Property | Value
--- | ---
Label | AETITLE
Routine | [MAGVRS52](http://code.osehra.org/dox/Routine_MAGVRS52_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TITLE | LITERAL | 16 | true | The value of this parameter is a string. This string isconstrained by the definition in the DICOM Standardfor the &quot;title&quot; of an Application Entity, that is: non-emptyand at most 16 characters in length.
SERVICE | LITERAL | 20 | true | The value of this parameter is a string. This stringidentifies a DICOM DIMSE Service.The procedure will validate that the specified ApplicationEntity is permitted to perform the service specified inthis parameter.
ROLE | LITERAL | 3 | true | The value of this parameter is a string. This string shouldbe equal to either &quot;SCU&quot; (Service Class User) or&quot;SCP&quot; (Service Class Provider).The procedure will validate that the specified ApplicationEntity is permitted to operate in the specified role.
LOCATION | LITERAL | 6 | true | The value of this parameter is a string.  This string should be equal to a value from the INSTITUTION File (#4).  This is needed to return the appropriate AETitle.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}