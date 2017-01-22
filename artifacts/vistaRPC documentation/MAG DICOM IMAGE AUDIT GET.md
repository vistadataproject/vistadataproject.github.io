---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM IMAGE AUDIT GET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM IMAGE AUDIT GET{:/}
 tag | {::nomarkdown}GET2{:/}
 routine | [MAGDRPC7](http://code.osehra.org/dox/Routine_MAGDRPC7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC call fetches the statistical informationthat is collected about the acquisition of images.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a (FileMan) date.This date, if specified, indicates the first day for which statisticsare to be returned.{:/} | 
| {::nomarkdown}STOP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a (FileMan) date.This date, if specified, indicates the last day for which statisticsare to be returned.{:/} | 
| {::nomarkdown}MAX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is an integer number. This numberindicates the maximum number of audit-data records that isto be returned in each call to this RPC. When this parameter is not specified, a default value of 100will be assumed.{:/} | 
| {::nomarkdown}OFFSET{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a positive integer number.This number indicates the point in the retrieval sequence wherea previous call to this RPC \left off\. On the initial call of a series to obtain audit information,the value of this parameter should be equal to 0. On each subsequent call, the value that should be specified forthe OFFSET should be equal to the value that was returned inthe previous call as the second (comma-separated) piece ofthe value in the first element of the OUT array.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}