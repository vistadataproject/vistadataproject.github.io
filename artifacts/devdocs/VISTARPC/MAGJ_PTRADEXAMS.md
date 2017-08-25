---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ PTRADEXAMS<br/>
# MAGJ PTRADEXAMS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to display alisting of all, or a subset of all, radiology exams for a selectedpatient.

## Properties

Property | Value
--- | ---
Label | PTLIST
MUMPS Implementation | [MAGJLST1](http://code.osehra.org/dox/Routine_MAGJLST1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 30 | true | Patient DFN ^ #_YRS_LIMIT ^ #_EXAMS_LIMIT #_YRS_LIMIT -- optional; an integer value, used to limit the returned listto include only exams within the most recent # of years specified #_EXAMS_LIMIT -- optiona; integer value to limit the number of listentries returned



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}