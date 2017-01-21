---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ ROUTE REQUEST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ ROUTE REQUEST{:/}
 tag | {::nomarkdown}RTREQ{:/}
 routine | [MAGJRT](http://code.osehra.org/dox/Routine_MAGJRT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+This rpc processes a list of input exams to configure the dialog by whichthe user will request exams to be routed.  The rpc returns the exam listand information used to prompt the user for routing destination andpriority for each exam.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Radiology Exam pointers.  Each entry in the list contains:    RADFN ^ RADTI ^ RACNI ^ RARPT{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}