---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV IMPORT MEDIA LOG STORE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV IMPORT MEDIA LOG STORE{:/}
 tag | {::nomarkdown}IMPMEDIA{:/}
 routine | [MAGVIM03](http://code.osehra.org/dox/Routine_MAGVIM03_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} +---------------------------------------------------------------+  Property of the US Government.                                  No permission to copy or redistribute this software is given.   Use of unreleased versions of this software requires the user   to execute a written test agreement with the VistA Imaging      Development Office of the Department of Veterans Affairs,       telephone (301) 734-0100.                                                                                                       The Food and Drug Administration classifies this software as    a medical device.  As such, it may not be changed in any way.   Modifications to this software may result in an adulterated     medical device under 21CFR820, the use of which is considered   to be a violation of US Federal Statutes.                      +---------------------------------------------------------------+ Files data from an Importer II media import event to the MAGV IMPORT MEDIA LOG file (#2006.9422){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGVDUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ of the user importing the media.{:/} | 
| {::nomarkdown}MAGVWKST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Computer name of the workstation used for the media import event.{:/} | 
| {::nomarkdown}MEDTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Media Type used to transport the objects:  Direct Import,  Network Import, Staged Media, DICOM Correct.{:/} | 
| {::nomarkdown}MEDVALID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Validation status of the media import event:    0 = VALID MEDIA -1 = DICOMDIR MISSING -2 = DICOMDIR INVALID{:/} | 
| {::nomarkdown}MEDVMSG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}220{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Description of the validation status of the media import event.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}