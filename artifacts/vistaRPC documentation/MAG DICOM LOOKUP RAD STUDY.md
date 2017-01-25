---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM LOOKUP RAD STUDY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM LOOKUP RAD STUDY{:/}
 tag | {::nomarkdown}RADLKUP{:/}
 routine | [MAGDRPC3](http://code.osehra.org/dox/Routine_MAGDRPC3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC queries the VistA system for the details on aRadiology Study, given the casenumber (either the date+numberor just the number) and the study date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CASENUMB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This value identifiesthe \case number\ for the study. The case number may be specifiedas a \date + case number\ or as just an integer number.In the former case, the date is formatted as \mmddyy\.{:/} | 
| {::nomarkdown}STUDYDAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a (FileMan) date.This value represents the date on which the study took place.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}