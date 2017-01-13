---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM PACS MINIMUM SPACE 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM PACS MINIMUM SPACE{:/}
 tag | {::nomarkdown}MINSPACE{:/}
 routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ On occasion the software on the DICOM Gateway needs to knowthe minimum percentage of disk space that needs to remain onthe Magnetic Disk Storage that is used for files that arecopied to a PACS.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}D0{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to the ImagingSite Parameter Table (#2006.1). For non-consolidated sites, this value is always equal to 1 . For consolidated sites, this pointer identifies the \place\for which information is to be retrieved.{:/} | 




 Generated on January 13th 2017, 6:44:47 am