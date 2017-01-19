---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ PRIOREXAMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ PRIOREXAMS{:/}
 tag | {::nomarkdown}PRIOR1{:/}
 routine | [MAGJEX2](http://code.osehra.org/dox/Routine_MAGJEX2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to fetchcase pointer information for all the cases/prior exams related to a givencase.  If the images for the prior exams are not on magnetic storage, butare on archive storage (e.g., jukebox), then the procedure initiates afetch of the image files from the archive.  This procedure can be run intwo modes: 1) to Pre-Fetch from the archive exams that are likely to be ofinterest to the radiologist--this mode would be invoked some time aftera new exam is ordered (e.g., at Register Patient for Exam);2) to Auto-Display images for prior cases atthe time the radiologist is reading a new case.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The input string has 5 pieces, delimited by \^\:  \P\ or \A\ ^ RADFN ^ RADTI ^ RACNI ^ RARPT    P--run Pre-Fetch mode    A--run Auto-Display mode    RADFN, RADTI, & RACNI are pointers to the Current Case exam in file 70    RARPT--pointer to ^RARPT (file 74) for the current caseEither RARPT or the values RADFN/RADTI/RACNI may be passed for executingthis function.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}