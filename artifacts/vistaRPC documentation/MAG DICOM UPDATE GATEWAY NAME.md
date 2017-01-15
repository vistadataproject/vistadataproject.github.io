---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM UPDATE GATEWAY NAME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM UPDATE GATEWAY NAME{:/}
 tag | {::nomarkdown}UPDTGW{:/}
 routine | [MAGDRPC8](http://code.osehra.org/dox/Routine_MAGDRPC8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This RPC updates the name and location of a DICOM Gateway in thedatabase on the VistA system (table # 2006.587 in ^MAG(2006.587)).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OLDNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string that identifiesthe current DICOM Gateway.This value corresponds to the one that is expectedto be the one currently stored in the VistA database.{:/} | 
| {::nomarkdown}NEWNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string that identifiesthe current DICOM Gateway.This value corresponds to the one that is to be enteredin the VistA database.{:/} | 
| {::nomarkdown}OLDLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location for which images are beingtransmitted.This value corresponds to the one that is expectedto be the one currently stored in the VistA database.{:/} | 
| {::nomarkdown}NEWLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location for which images are beingtransmitted.This value corresponds to the one that is to be enteredin the VistA database.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}