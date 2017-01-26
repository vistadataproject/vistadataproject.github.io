---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET IRRADIATION DOSE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET IRRADIATION DOSE{:/}
 tag | {::nomarkdown}REFRESH{:/}
 routine | [MAGVRD03](http://code.osehra.org/dox/Routine_MAGVRD03_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}  +---------------------------------------------------------------+   Property of the US Government.                                   No permission to copy or redistribute this software is given.    Use of unreleased versions of this software requires the user    to execute a written test agreement with the VistA Imaging       Development Office of the Department of Veterans Affairs,        telephone (301) 734-0100.                                                                                                         The Food and Drug Administration classifies this software as     a medical device.  As such, it may not be changed in any way.    Modifications to this software may result in an adulterated      medical device under 21CFR820, the use of which is considered    to be a violation of US Federal Statutes.                       +---------------------------------------------------------------+ This RPC returns attributes for irradiation instance related to patientand procedure.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the identifier to determine which patient to return data from.{:/} | 
| {::nomarkdown}PROCEDURE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the accession number used to determine which irradiation instancesto return.{:/} | 
| {::nomarkdown}PROCTYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the type of irradiation instance to fetch data from - \CT\ or \FLUORO\.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}