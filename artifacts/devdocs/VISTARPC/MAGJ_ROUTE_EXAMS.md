---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGJ ROUTE EXAMS
# MAGJ ROUTE EXAMS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+For input list of exams, queue corresponding image files to be routed toindicated destinations (according to Network Location file entries).

Property | Value
--- | ---
Label | RTEXAM
Routine | [MAGJRT](http://code.osehra.org/dox/Routine_MAGJRT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 50 | true | Each entry in the list contains:   Network Location ^ Priority | RADFN ^ RADTI ^ RACNI ^ RARPT Network Location is IEN to Network Location file.Priority is a number; higher numbers indicate higher priority.  ThePriority is specific to the Routing Queue Manager.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}