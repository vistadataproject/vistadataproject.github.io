---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ PRIOREXAMS<br/>
# MAGJ PRIOREXAMS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to fetchcase pointer information for all the cases/prior exams related to a givencase.  If the images for the prior exams are not on magnetic storage, butare on archive storage (e.g., jukebox), then the procedure initiates afetch of the image files from the archive.  This procedure can be run intwo modes: 1) to Pre-Fetch from the archive exams that are likely to be ofinterest to the radiologist--this mode would be invoked some time aftera new exam is ordered (e.g., at Register Patient for Exam);2) to Auto-Display images for prior cases atthe time the radiologist is reading a new case.

## Properties

Property | Value
--- | ---
Label | PRIOR1
Routine | [MAGJEX2](http://code.osehra.org/dox/Routine_MAGJEX2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 50 | true | The input string has 5 pieces, delimited by &quot;^&quot;:  &quot;P&quot; or &quot;A&quot; ^ RADFN ^ RADTI ^ RACNI ^ RARPT    P--run Pre-Fetch mode    A--run Auto-Display mode    RADFN, RADTI, &amp; RACNI are pointers to the Current Case exam in file 70    RARPT--pointer to ^RARPT (file 74) for the current caseEither RARPT or the values RADFN/RADTI/RACNI may be passed for executingthis function.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}