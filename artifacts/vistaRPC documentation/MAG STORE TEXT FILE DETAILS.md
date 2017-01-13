---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG STORE TEXT FILE DETAILS 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG STORE TEXT FILE DETAILS{:/}
 tag | {::nomarkdown}STOREUID{:/}
 routine | [MAGDOD01](http://code.osehra.org/dox/Routine_MAGDOD01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This Remote Procedure updates the information about an image.Specifically, the fields for SERIES UID, SERIES NUMBER andIMAGE NUMBER (sequence within series) may be updated.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IMAGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to the IMAGE file (#2005).This pointer identifies the image for which information is to beupdated.{:/} | 
| {::nomarkdown}SERIES{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This string, if non-empty,is the SERIES UID for the image specified. The format and meaning of a SERIES UID is specified in the DICOMstandard.{:/} | 
| {::nomarkdown}SNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is either 0 (zero) or a positive integer number.This number identifies the sequence of a series within a study.{:/} | 
| {::nomarkdown}INUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is either 0 (zero) or a positive integer number.This number identifies the sequence of the image within its series.{:/} | 
| {::nomarkdown}IMGUID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This string meets theconstraints of a DICOM Unique Identifier. This identifier uniquely identifies an image.{:/} | 
| {::nomarkdown}STUID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This string meets theconstraints of a DICOM Unique Identifier. This identifier uniquely identifies a study.{:/} | 




 Generated on January 13th 2017, 7:11:27 am