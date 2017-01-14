---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAG DICOM GET IMAGE GROUP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET IMAGE GROUP{:/}
 tag | {::nomarkdown}GRPIMG{:/}
 routine | [MAGDRPC2](http://code.osehra.org/dox/Routine_MAGDRPC2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC returns the list of images in a group (if any).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}D0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^MAG(2005).This pointer identifies the image for which informationis being requested.{:/} | 




 Generated on January 14th 2017, 7:26:36 am