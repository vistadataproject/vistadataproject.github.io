---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV SOP UID CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV SOP UID CHECK{:/}
 tag | {::nomarkdown}SOP{:/}
 routine | [MAGVUID](http://code.osehra.org/dox/Routine_MAGVUID_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}SOP UID CHECK{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} IEN of the patient's record in the NEW PERSON File (#200). It is obtained from the image's DICOM header.{:/} | 
| {::nomarkdown}ACNUMB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ACCESSION NUMBER (LONG FORM) DATE-SITE LOCATION The date is in VA format, and the site location code is the site number. The two components are concatenated with a hyphen (-). This component comes from image's DICOM header by way of the Modality Worklist entry for the associated study.{:/} | 
| {::nomarkdown}SITE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SITE CODE (660){:/} | 
| {::nomarkdown}INSTR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INSTRUMENT NAME{:/} | 
| {::nomarkdown}STUDYUID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}STUDY UID{:/} | 
| {::nomarkdown}SERIESUID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SERIES UID{:/} | 
| {::nomarkdown}SOPUID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}64{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SOP UID{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}