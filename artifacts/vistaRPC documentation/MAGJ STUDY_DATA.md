---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ STUDY_DATA 

 property | value 
--- | --- 
 label | MAGJ STUDY_DATA
 tag | RPCIN
 routine | [MAGJEX3](http://code.osehra.org/dox/Routine_MAGJEX3_source.html)
 return value type | GLOBAL ARRAY
 description |   +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ This rpc is used to obtain various study and/or image data.  The datais stored in blocks of free-text (word-processing) in XML format createdby the Vistarad Client.Current data items include: Key Images; Presentation State data.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMS | LITERAL | 120 | true | TXID ^ DFN ^ DTI ^ CNI ^ RARPT ^ MAGIENTXID: Required; designates action to takeDFN...RARPT: standard Vistarad Exam Identifier string (keys to  RAD Exam file and Report file).MAGIEN: Image IEN to identify the exam (Image or Group ien OK) | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 120 |  | List of image identifiers with optional Presentation State UIDsin format IMGIEN^PS_UID. | 