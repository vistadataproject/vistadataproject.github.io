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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 10 | true |  IEN of the patient's record in the NEW PERSON File (#200). It is obtained from the image's DICOM header. | 
| vs:Input_Parameter-8994_02 | ACNUMB | LITERAL | 20 | true | ACCESSION NUMBER (LONG FORM) DATE-SITE LOCATION The date is in VA format, and the site location code is the site number. The two components are concatenated with a hyphen (-). This component comes from image's DICOM header by way of the Modality Worklist entry for the associated study. | 
| vs:Input_Parameter-8994_02 | SITE | LITERAL | 5 | true | SITE CODE (660) | 
| vs:Input_Parameter-8994_02 | INSTR | LITERAL | 30 | true | INSTRUMENT NAME | 
| vs:Input_Parameter-8994_02 | STUDYUID | LITERAL | 64 | true | STUDY UID | 
| vs:Input_Parameter-8994_02 | SERIESUID | LITERAL | 64 | true | SERIES UID | 
| vs:Input_Parameter-8994_02 | SOPUID | LITERAL | 64 | true | SOP UID | 