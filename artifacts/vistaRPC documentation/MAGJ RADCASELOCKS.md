---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ RADCASELOCKS 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ RADCASELOCKS{:/}
 tag | {::nomarkdown}CASLOCK{:/}
 routine | [MAGJEX1A](http://code.osehra.org/dox/Routine_MAGJEX1A_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}  +---------------------------------------------------------------+   Property of the US Government.                                   No permission to copy or redistribute this software is given.    Use of unreleased versions of this software requires the user    to execute a written test agreement with the VistA Imaging       Development Office of the Department of Veterans Affairs,        telephone (301) 734-0100.                                                                                                         The Food and Drug Administration classifies this software as     a medical device.  As such, it may not be changed in any way.    Modifications to this software may result in an adulterated      medical device under 21CFR820, the use of which is considered    to be a violation of US Federal Statutes.                       +---------------------------------------------------------------+ Manage Exam Reserve/Lock interactions.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}70{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input string = OPEN FLAG ^ RADFN ^ RADTI ^ RACNI ^ RARPT      OPEN_FLAG = 3: Reserve-to-Lock; 4: Lock-to-Reserve; 5: Lock/Take      RADFN,RADTI,RACNI,RARPT = pointers to Rad Patient File for the exam{:/} | 




 Generated on January 13th 2017, 7:15:28 am