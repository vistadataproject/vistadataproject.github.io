---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV SOP UID CHECK 

 property | value 
--- | --- 
 label | MAGV SOP UID CHECK
 tag | SOP
 routine | [MAGVUID](http://code.osehra.org/dox/Routine_MAGVUID_source.html)
 return value type | SINGLE VALUE
 description | SOP UID CHECK

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 10 | true |  IEN of the patient's record in the NEW PERSON File (#200). It is obtained from the image's DICOM header. | 
| ACNUMB | LITERAL | 20 | true | ACCESSION NUMBER (LONG FORM) DATE-SITE LOCATION The date is in VA format, and the site location code is the site number. The two components are concatenated with a hyphen (-). This component comes from image's DICOM header by way of the Modality Worklist entry for the associated study. | 
| SITE | LITERAL | 5 | true | SITE CODE (660) | 
| INSTR | LITERAL | 30 | true | INSTRUMENT NAME | 
| STUDYUID | LITERAL | 64 | true | STUDY UID | 
| SERIESUID | LITERAL | 64 | true | SERIES UID | 
| SOPUID | LITERAL | 64 | true | SOP UID | 




 Generated on January 11th 2017, 7:15:04 am