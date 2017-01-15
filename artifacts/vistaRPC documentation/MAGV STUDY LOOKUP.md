---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV STUDY LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV STUDY LOOKUP{:/}
 tag | {::nomarkdown}LOOKUP{:/}
 routine | [MAGVSTDY](http://code.osehra.org/dox/Routine_MAGVSTDY_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ Looks up the imaging case using the accession number provided by thecalling application.   Obtains patient demographic data, and checksthe data for accuracy. (MAG*3.0*118){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CASENUMB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CASENUMB = ACCESSION NUMBER PASSED FROM THE CLIENT.{:/} | 
| {::nomarkdown}IMGSVC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}RAD OR CON.  No other entries are allowed.{:/} | 
| {::nomarkdown}PNAMEDCM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient's Name from the DICOM header (0010,0010).{:/} | 
| {::nomarkdown}PIDDCM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID from DICOM header (0010,0020).{:/} | 
| {::nomarkdown}PDOBDCM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient's Birth Date from DICOM header (0010,0030).{:/} | 
| {::nomarkdown}PSEXDCM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient's Sex from DICOM header (0010,0040).{:/} | 
| {::nomarkdown}PICNDCM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient's VA Integration Control Number.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}