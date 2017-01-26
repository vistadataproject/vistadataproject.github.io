---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM UPDATE SCU LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM UPDATE SCU LIST{:/}
 tag | {::nomarkdown}UPDTAPP{:/}
 routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC updates the information that is stored in VistAas the list of accessible C-Store providers for the currentDICOM Gateway.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}APP{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}10000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is an array. Each element of thisarray must contain 7 non-empty values, separated by carets (\^\):  1: Service Application Name  2: Service Provider Application Entity Title  3: IP Address  4: Port Number  5: Gateway System Title  6: Gateway Application Entity Title  7: Gateway Location Pointer (#4){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}