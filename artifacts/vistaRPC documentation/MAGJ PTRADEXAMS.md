---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ PTRADEXAMS 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ PTRADEXAMS{:/}
 tag | {::nomarkdown}PTLIST{:/}
 routine | [MAGJLST1](http://code.osehra.org/dox/Routine_MAGJLST1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to display alisting of all, or a subset of all, radiology exams for a selectedpatient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN ^ #_YRS_LIMIT ^ #_EXAMS_LIMIT #_YRS_LIMIT -- optional; an integer value, used to limit the returned listto include only exams within the most recent # of years specified #_EXAMS_LIMIT -- optiona; integer value to limit the number of listentries returned{:/} | 




 Generated on January 13th 2017, 6:44:47 am