---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG NEW SOP INSTANCE UID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG NEW SOP INSTANCE UID{:/}
 tag | {::nomarkdown}NEWUID{:/}
 routine | [MAGDRPC9](http://code.osehra.org/dox/Routine_MAGDRPC9_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC stores a new SOP Instance UID in the Image File (#2005)for corrected images that are to be exported. This RPC stores a new SOP Instance UID in the Image File (#2005)for corrected images that are to be exported.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OLD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string.This value represents the original SOP Instance UID of an imagethat is to be exported.{:/} | 
| {::nomarkdown}NEW{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string.This value represents the new SOP Instance UID that is tobe assigned to the corrected image that is to be exported.{:/} | 
| {::nomarkdown}IMAGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is anumber. This number is a pointer that identifiesan image (pointer to file # 2005). When this parameter is specified, it identifies theimage to which the new UID is intended to be added.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}