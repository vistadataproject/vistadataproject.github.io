---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ RADACTIVEEXAMS 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ RADACTIVEEXAMS{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [MAGJLS2](http://code.osehra.org/dox/Routine_MAGJLS2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to displaylistings of radiology exams:  1) UNREAD Exams--list all Active exams for selected modalities (Rad     Imaging Types) having an Exam Status of \Examined\ (or its     equivalent).  2) RECENT Exams--list all Active exams for selected modalities (Rad     Imaging Types) EXCEPT those having an Exam Status of \Examined\ (or     its equivalent).  3) ALL ACTIVE--Lists the union of the above two lists.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The input string supplies two parameters: LIST_TYPE ^ MODALITY  LIST_TYPE:  \U\--UNREAD Exams List; or,               \R\--RECENT Exams List               \ALL\--All Active Exams  MODALITY:   \ALL\--list for all modalities; or,              ABB[^ABB^...] where ABB is the Radiology Imaging Type                Abbreviation (Imaging Types will correspond to modalities){:/} | 




 Generated on January 13th 2017, 6:15:57 am