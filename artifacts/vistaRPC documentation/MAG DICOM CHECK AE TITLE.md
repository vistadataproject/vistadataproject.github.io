---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM CHECK AE TITLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM CHECK AE TITLE{:/}
 tag | {::nomarkdown}AETITLE{:/}
 routine | [MAGVRS52](http://code.osehra.org/dox/Routine_MAGVRS52_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ This Remote Procedure checks whether an Application Entityis specified on a DICOM Gateway that has the specified name.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TITLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This string isconstrained by the definition in the DICOM Standardfor the \title\ of an Application Entity, that is: non-emptyand at most 16 characters in length.{:/} | 
| {::nomarkdown}SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This stringidentifies a DICOM DIMSE Service.The procedure will validate that the specified ApplicationEntity is permitted to perform the service specified inthis parameter.{:/} | 
| {::nomarkdown}ROLE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string. This string shouldbe equal to either \SCU\ (Service Class User) or\SCP\ (Service Class Provider).The procedure will validate that the specified ApplicationEntity is permitted to operate in the specified role.{:/} | 
| {::nomarkdown}LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The value of this parameter is a string.  This string should be equal to a value from the INSTITUTION File (#4).  This is needed to return the appropriate AETitle.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}