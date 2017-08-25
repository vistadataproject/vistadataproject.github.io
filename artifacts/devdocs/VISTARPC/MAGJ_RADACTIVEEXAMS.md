---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ RADACTIVEEXAMS<br/>
# MAGJ RADACTIVEEXAMS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to displaylistings of radiology exams:  1) UNREAD Exams--list all Active exams for selected modalities (Rad     Imaging Types) having an Exam Status of "Examined" (or its     equivalent).  2) RECENT Exams--list all Active exams for selected modalities (Rad     Imaging Types) EXCEPT those having an Exam Status of "Examined" (or     its equivalent).  3) ALL ACTIVE--Lists the union of the above two lists.

## Properties

Property | Value
--- | ---
Label | ACTIVE
MUMPS Implementation | [MAGJLS2](http://code.osehra.org/dox/Routine_MAGJLS2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 50 | true | The input string supplies two parameters: LIST_TYPE ^ MODALITY  LIST_TYPE:  &quot;U&quot;--UNREAD Exams List; or,               &quot;R&quot;--RECENT Exams List               &quot;ALL&quot;--All Active Exams  MODALITY:   &quot;ALL&quot;--list for all modalities; or,              ABB[^ABB^...] where ABB is the Radiology Imaging Type                Abbreviation (Imaging Types will correspond to modalities)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}