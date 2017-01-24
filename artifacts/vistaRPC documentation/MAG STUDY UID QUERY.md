---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG STUDY UID QUERY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG STUDY UID QUERY{:/}
 tag | {::nomarkdown}STUDY{:/}
 routine | [MAGDQR04](http://code.osehra.org/dox/Routine_MAGDQR04_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC returns information about the images that wereacquired for a specific study.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string.This string is a DICOM UID (unique identifier) that specifiesthe study for which the image information is to be retrieved. A DICOM UID is a string consisting of only digits and periods,and may be up to 64 characters long.{:/} | 
| {::nomarkdown}PRMUID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The primary UID flag determines what type of error checks will beperformed on the UID provided. There are two UID checks that may be performed depending on the valueof the primary UID flag. A duplicate UID check can be performed which will check to see if the PACS UID is associated with multiple patients. If duplicateUIDs are found a \-13\ error message will be returned. A multiple UID check can be performed which will check to see ifthe PACS UID is associated with multiple entries in the IMAGE(#2005) file. If multiple UIDs are found a \-14\ error willbe returned. A PRMUID value of 0 will perform a duplicate and multipleUID check. A PRMUID value of 1 will perform neither a duplicate nor multipleUID check. A PRMUID value of 2 will perform a duplicate UID check, butwill not perform a multiple UID check.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}