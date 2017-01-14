---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAG DICOM QUEUE IMAGE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM QUEUE IMAGE{:/}
 tag | {::nomarkdown}QUEUE{:/}
 routine | [MAGDRPC3](http://code.osehra.org/dox/Routine_MAGDRPC3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC enters a study into the DICOM Transmission queue.In the simplest case, a study contains only one image.More normally, a study consists of several images.For object types 3 (X-RAY) and 100 (DICOM image), a single image is enteredinto the transmission queue.For object type 11 (X-RAY group) , all images for the study areentered into the transmission queue.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IMAGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^MAG(2005).This pointer identifies the image that is to be transmitted.{:/} | 
| {::nomarkdown}DESTINAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this field is the name of the DICOM SOP Class Providerto which the images are to be transmitted. This name mustoccur in the User Application List file (#2006.585).{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired.{:/} | 
| {::nomarkdown}ACCESSIO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this optional parameter is the accession numberfor the study.{:/} | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this optional parameter is a string that representsthe reason for the transmission of the image.This reason will be stored in ^MAG(2006.95) (IMAGE ACCESS LOG).{:/} | 
| {::nomarkdown}EMAIL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}100{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this optional parameter is a string that representsan e-mail address. This e-mail address is used to transmit amessage when there are images that cannot be enqueued.{:/} | 
| {::nomarkdown}PRIORITY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a positive integer number.This value indicates the relative priority of an entry in thetransmission queue. A higher number indicates a higher priority.The default value of this optional parameter is 500.{:/} | 
| {::nomarkdown}JBTOHD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a boolean switch that indicateswhether or not a copy of the image file(s) is to be made onRAID. A true value indicates that a copy on magnetic storageis to be made, a false value indicates that no such copy isto be made.{:/} | 




 Generated on January 14th 2017, 7:26:36 am