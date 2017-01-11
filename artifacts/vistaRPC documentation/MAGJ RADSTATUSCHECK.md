---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ RADSTATUSCHECK 

 property | value 
--- | --- 
 label | MAGJ RADSTATUSCHECK
 tag | STATCHK
 routine | [MAGJUTL4](http://code.osehra.org/dox/Routine_MAGJUTL4_source.html)
 return value type | SINGLE VALUE
 description |   +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ Function to determine if the exam has been Tech-Verified (at least).Images are assumed to be verified if Exam Status is Examined, or higher status

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 50 | true | String consisting: RADFN^RADTI^RACNI^RARPTInput is either RADFN, RADTI, and RACNI; or, RARPT only may be input in piece 4Patient DFN^Exam Internal Date^Exam Number^Rad Report IEN | 




 ###### Generated on January 11th 2017, 6:39:43 am