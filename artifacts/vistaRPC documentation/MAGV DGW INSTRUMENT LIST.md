---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV DGW INSTRUMENT LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV DGW INSTRUMENT LIST{:/}
 tag | {::nomarkdown}INSTRMNT{:/}
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ Return list of Instruments in DGWfrom DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}HOSTNAME{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The HOSTNAME is the corresponding DICOM Gateway.  If HOSTNAME is blank all settings will be returned{:/} | 




 Generated on January 13th 2017, 7:11:27 am