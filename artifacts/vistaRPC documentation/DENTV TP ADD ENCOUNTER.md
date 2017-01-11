---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP ADD ENCOUNTER 

 property | value 
--- | --- 
 label | DENTV TP ADD ENCOUNTER
 tag | ADD
 routine | [DENTVTP2](http://code.osehra.org/dox/Routine_DENTVTP2_source.html)
 return value type | SINGLE VALUE
 description | This will add a new record to the dental encounter file, 228.1

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST | 255 | true | DATA(sub) = value  where    sub     Req  Description ---------  ---  ------------------------------------------------- \PAT\       x   DFN - pointer to patient file \VISIT\         pointer to visit file (#9000010) \APPT\          scheduled appointment Fileman date.time \NEWAPPT\       create visit, no scheduled appt or existing visit                 NOTE: VISIT supercedes APPT which supercedes NEWAPPT \LOC\       x   pointer to HOSPITAL LOCATION file (#44) \PROV\          primary provider - pointer to NEW PERSON file                 if not passed then use DUZ of existing user \PATTYPE\       I:inpatient; O:outpatient                    if not passed, then determine from MAS records \DAS CAT\   x   POINTER TO DENTAL CLASSIFICATION FILE (#220.2) \DAS BED\       POINTER TO DENTAL BED SECTION FILE (#220.4)                    required if patient an inpatient \DAS DIV\   x   station number \DAS DIS\   x   1:In progress; 2:Completed; 3:Terminated; \FLAGS\         3 bytes - each byte 0 or 1 - <das><des><pce> | 




 Generated on January 11th 2017, 7:15:04 am