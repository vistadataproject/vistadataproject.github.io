---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET RADIOLOGY PROCEDURES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET RADIOLOGY PROCEDURES{:/}
 tag | {::nomarkdown}GETPROCS{:/}
 routine | [MAGVIM10](http://code.osehra.org/dox/Routine_MAGVIM10_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC returns a single Radiology Procedure, or a list of them,for the INSTITUTION of the input STATION NUMBER, and the input IMAGINGLOCATION. Updated from MAG DICOM RADIOLOGY PROCEDURES (MAG*3.0*118).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STATIONUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the STATION NUMBER (#99) of an INSTITUTION file (#4) entryused for the query.{:/} | 
| {::nomarkdown}IENMAGLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of an entry in the IMAGING LOCATIONS file (#79.1).will be filtered from the return array.{:/} | 
| {::nomarkdown}IENRAPROC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of an entry in the RAD/NUC MED PROCEDURES file (#71). If present,restricts the output to the single procedure requested.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}