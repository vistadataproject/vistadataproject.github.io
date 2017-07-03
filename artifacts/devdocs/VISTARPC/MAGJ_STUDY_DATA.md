---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGJ STUDY DATA
# MAGJ STUDY DATA

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ This rpc is used to obtain various study and/or image data.  The datais stored in blocks of free-text (word-processing) in XML format createdby the Vistarad Client.Current data items include: Key Images; Presentation State data.

Property | Value
--- | ---
Label | RPCIN
Routine | [MAGJEX3](http://code.osehra.org/dox/Routine_MAGJEX3_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMS | LITERAL | 120 | true | TXID ^ DFN ^ DTI ^ CNI ^ RARPT ^ MAGIENTXID: Required; designates action to takeDFN...RARPT: standard Vistarad Exam Identifier string (keys to  RAD Exam file and Report file).MAGIEN: Image IEN to identify the exam (Image or Group ien OK)
DATA | LIST | 120 |  | List of image identifiers with optional Presentation State UIDsin format IMGIEN^PS_UID.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}