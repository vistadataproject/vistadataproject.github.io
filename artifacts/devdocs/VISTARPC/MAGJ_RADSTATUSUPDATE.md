---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ RADSTATUSUPDATE<br/>
# MAGJ RADSTATUSUPDATE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to update theRadiology Exam Status code for the current exam to "Interpreted" (or anequivalent value).  Also, the case is closed by this procedure, andKey Image and/or Presentation State data is stored, if required.  Note: This procedure will only update the Exam Status if the current        value is "Examined".

## Properties

Property | Value
--- | ---
Label | STATUS
Routine | [MAGJUPD1](http://code.osehra.org/dox/Routine_MAGJUPD1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMS | LITERAL | 50 | true | Input string &#x3D; UPDFLAG ^ RARPT ^ RADFN ^ RADTI ^ RACNI ^ UPDPSKEY             UPDFLAG &#x3D; 1/0 -- 1 to perform update; else no update made             RARPT &#x3D; pointer to Rad Exam Report file             RADFN,RADTI,RACNI &#x3D; pointers to Rad Patient File for the exam            UPDPSKEY &#x3D; 1 if updating Pres State or Key Image data
DATA | WORD PROCESSING | 120 | true | optional array of text containing Key Image and/orImage Presentation State data. The format of the messagecontained in DATA is:*IMAGEImage_IEN ^ KEY*PSPS_UID ^ KEYxml text lines 1xml text lines 2:N (as needed)*END_PS[*PS . . . *END_PS] (as many as for this image)*END_IMAGE[*IMAGE . . . *END_IMAGE] (as many as for the exam)*END



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}