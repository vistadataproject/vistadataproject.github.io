---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ ROUTE REQUEST<br/>
# MAGJ ROUTE REQUEST

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This rpc processes a list of input exams to configure the dialog by whichthe user will request exams to be routed.  The rpc returns the exam listand information used to prompt the user for routing destination andpriority for each exam.

## Properties

Property | Value
--- | ---
Label | RTREQ
MUMPS Implementation | [MAGJRT](http://code.osehra.org/dox/Routine_MAGJRT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 50 | true | List of Radiology Exam pointers.  Each entry in the list contains:    RADFN ^ RADTI ^ RACNI ^ RARPT



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}