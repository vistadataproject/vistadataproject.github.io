---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM SET PACS PARAMS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM SET PACS PARAMS{:/}
 tag | {::nomarkdown}SETPACS{:/}
 routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC ensures that proper values are stored for a numberof Imaging Site Parameters for the current \place\.If proper values are already present, no change is made to the database.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PLACE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^MAG(2006.1)This pointer identifies the \place\ for which parameters areto be entered.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}