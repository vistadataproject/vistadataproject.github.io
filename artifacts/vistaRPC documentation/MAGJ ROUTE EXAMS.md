---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ ROUTE EXAMS 

 property | value 
--- | --- 
 label | MAGJ ROUTE EXAMS
 tag | RTEXAM
 routine | [MAGJRT](http://code.osehra.org/dox/Routine_MAGJRT_source.html)
 return value type | GLOBAL ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+For input list of exams, queue corresponding image files to be routed toindicated destinations (according to Network Location file entries).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST | 50 | true | Each entry in the list contains:   Network Location ^ Priority | RADFN ^ RADTI ^ RACNI ^ RARPT Network Location is IEN to Network Location file.Priority is a number; higher numbers indicate higher priority.  ThePriority is specific to the Routing Queue Manager. | 




 ###### Generated on January 11th 2017, 6:39:43 am