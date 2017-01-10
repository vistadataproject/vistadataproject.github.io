---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV SERIES UID CHECK 

 property | value 
--- | --- 
 label | MAGV SERIES UID CHECK
 tag | SERIES
 routine | [MAGVUID](http://code.osehra.org/dox/Routine_MAGVUID_source.html)
 return value type | SINGLE VALUE
 description | SERIES UID CHECKING

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 10 | true | IEN of the patient's record in the NEW PERSON File (#200).The IEN is obtained from the image's DICOM header. | 
| vs:Input_Parameter-8994_02 | ACNUMB | LITERAL | 20 | true | ACCESSION NUMBER (LONG FORM)  DATE-SITE LOCATION  The date is in VA format, and the site location code is the site number.  The two components are concatenated with a hyphen (-).  This component comes from image's DICOM header by way of the  Modality Worklist entry for the associated study. | 
| vs:Input_Parameter-8994_02 | SITE | LITERAL | 5 | true | SITE CODE | 
| vs:Input_Parameter-8994_02 | INSTR | LITERAL | 30 | true | INSTRUMENT NAME | 
| vs:Input_Parameter-8994_02 | STUDYUID | LITERAL | 64 | true | STUDY UID | 
| vs:Input_Parameter-8994_02 | SERIESUID | LITERAL | 64 | true | SERIES UID | 