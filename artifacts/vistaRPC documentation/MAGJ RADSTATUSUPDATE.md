---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ RADSTATUSUPDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ RADSTATUSUPDATE{:/}
 tag | {::nomarkdown}STATUS{:/}
 routine | [MAGJUPD1](http://code.osehra.org/dox/Routine_MAGJUPD1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to update theRadiology Exam Status code for the current exam to \Interpreted\ (or anequivalent value).  Also, the case is closed by this procedure, andKey Image and/or Presentation State data is stored, if required.  Note: This procedure will only update the Exam Status if the current        value is \Examined\.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input string = UPDFLAG ^ RARPT ^ RADFN ^ RADTI ^ RACNI ^ UPDPSKEY             UPDFLAG = 1/0 -- 1 to perform update; else no update made             RARPT = pointer to Rad Exam Report file             RADFN,RADTI,RACNI = pointers to Rad Patient File for the exam            UPDPSKEY = 1 if updating Pres State or Key Image data{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}WORD PROCESSING{:/} | {::nomarkdown}120{:/} | {::nomarkdown}true{:/} | {::nomarkdown}optional array of text containing Key Image and/orImage Presentation State data. The format of the messagecontained in DATA is:*IMAGEImage_IEN ^ KEY*PSPS_UID ^ KEYxml text lines 1xml text lines 2:N (as needed)*END_PS[*PS . . . *END_PS] (as many as for this image)*END_IMAGE[*IMAGE . . . *END_IMAGE] (as many as for the exam)*END{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}