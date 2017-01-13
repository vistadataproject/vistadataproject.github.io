---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV ATTACH IRRADIATION DOSE 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV ATTACH IRRADIATION DOSE{:/}
 tag | {::nomarkdown}ATTACH{:/}
 routine | [MAGVRD01](http://code.osehra.org/dox/Routine_MAGVRD01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}  +---------------------------------------------------------------+   Property of the US Government.                                   No permission to copy or redistribute this software is given.    Use of unreleased versions of this software requires the user    to execute a written test agreement with the VistA Imaging       Development Office of the Department of Veterans Affairs,        telephone (301) 734-0100.                                                                                                         The Food and Drug Administration classifies this software as     a medical device.  As such, it may not be changed in any way.    Modifications to this software may result in an adulterated      medical device under 21CFR820, the use of which is considered    to be a violation of US Federal Statutes.                       +---------------------------------------------------------------+ This RPC allows irradiation dosage entries to be attached to a series.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the patient identifier.{:/} | 
| {::nomarkdown}PROCEDURE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the accession number of the procedure related to the irradiation dosage instance.{:/} | 
| {::nomarkdown}STUDY UID{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the study UID related to the irradiation dosage instance.{:/} | 
| {::nomarkdown}IRRADIATION INSTANCE UID{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the irradiation instance UID of a CT irradiation dosage instance.{:/} | 
| {::nomarkdown}ATTRIBUTES{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}  Input parameters are name-value pairs sent as successive integer subscripts in an array that should be passed in by reference.    The values passed in should be in the format <fname>`<value>, where <fname> is a field name and <value> is the value to which that field should be set.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the type of irradiation instance - \CT\ or \FLUORO\.{:/} | 
| {::nomarkdown}SERUID{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the series UID related to the irradiation dosage instance.{:/} | 




 Generated on January 13th 2017, 6:24:32 am