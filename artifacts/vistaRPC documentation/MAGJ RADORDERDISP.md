---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ RADORDERDISP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ RADORDERDISP{:/}
 tag | {::nomarkdown}ORD{:/}
 routine | [MAGJRPT](http://code.osehra.org/dox/Routine_MAGJRPT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+Returns the Detailed Request Display for the radiology exam.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input is pointers to the Radiology exam--Can be either the RARPT value (pointer to the Rad Reports file), or thevalues of RADFN, RADTI, RACNI (pointers to the Rad Patient File).   Format is:  RADFN^RADTI^RACNI^RARPT{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}