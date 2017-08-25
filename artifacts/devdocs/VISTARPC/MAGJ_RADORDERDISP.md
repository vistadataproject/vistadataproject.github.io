---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ RADORDERDISP<br/>
# MAGJ RADORDERDISP

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+Returns the Detailed Request Display for the radiology exam.

## Properties

Property | Value
--- | ---
Label | ORD
MUMPS Implementation | [MAGJRPT](http://code.osehra.org/dox/Routine_MAGJRPT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 40 | true | Input is pointers to the Radiology exam--Can be either the RARPT value (pointer to the Rad Reports file), or thevalues of RADFN, RADTI, RACNI (pointers to the Rad Patient File).   Format is:  RADFN^RADTI^RACNI^RARPT



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}