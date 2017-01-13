---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ ROUTE EXAMS 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ ROUTE EXAMS{:/}
 tag | {::nomarkdown}RTEXAM{:/}
 routine | [MAGJRT](http://code.osehra.org/dox/Routine_MAGJRT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+For input list of exams, queue corresponding image files to be routed toindicated destinations (according to Network Location file entries).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Each entry in the list contains:   Network Location ^ Priority  RADFN ^ RADTI ^ RACNI ^ RARPT Network Location is IEN to Network Location file.Priority is a number; higher numbers indicate higher priority.  ThePriority is specific to the Routing Queue Manager.{:/} | 




 Generated on January 13th 2017, 7:11:27 am