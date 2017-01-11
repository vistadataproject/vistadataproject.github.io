---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ RADCASELOCKS 

 property | value 
--- | --- 
 label | MAGJ RADCASELOCKS
 tag | CASLOCK
 routine | [MAGJEX1A](http://code.osehra.org/dox/Routine_MAGJEX1A_source.html)
 return value type | GLOBAL ARRAY
 description |   +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ Manage Exam Reserve/Lock interactions.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 70 | true | Input string = OPEN FLAG ^ RADFN ^ RADTI ^ RACNI ^ RARPT      OPEN_FLAG = 3: Reserve-to-Lock; 4: Lock-to-Reserve; 5: Lock/Take      RADFN,RADTI,RACNI,RARPT = pointers to Rad Patient File for the exam | 




 Generated on January 11th 2017, 7:15:04 am