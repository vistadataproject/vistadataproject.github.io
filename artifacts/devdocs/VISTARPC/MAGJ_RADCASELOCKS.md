---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ RADCASELOCKS<br/>
# MAGJ RADCASELOCKS

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ Manage Exam Reserve/Lock interactions.

## Properties

Property | Value
--- | ---
Label | CASLOCK
MUMPS Implementation | [MAGJEX1A](http://code.osehra.org/dox/Routine_MAGJEX1A_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 70 | true | Input string &#x3D; OPEN FLAG ^ RADFN ^ RADTI ^ RACNI ^ RARPT      OPEN_FLAG &#x3D; 3: Reserve-to-Lock; 4: Lock-to-Reserve; 5: Lock/Take      RADFN,RADTI,RACNI,RARPT &#x3D; pointers to Rad Patient File for the exam



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}