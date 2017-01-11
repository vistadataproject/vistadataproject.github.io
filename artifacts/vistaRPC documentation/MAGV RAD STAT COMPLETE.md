---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV RAD STAT COMPLETE 

 property | value 
--- | --- 
 label | MAGV RAD STAT COMPLETE
 tag | XMCOMPLT
 routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Wrap call to code underlying RPC: RAMAG EXAM COMPLETE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| RADPT | LITERAL |  | true | IEN of the patient in the RAD/NUC MED PATIENT File (#70). | 
| RAEXAM1 | LITERAL |  | true | IEN in the REGISTERED EXAMS multiple (sub-file #70.02). | 
| RAEXAM2 | LITERAL |  | true | IEN in the EXAMINATIONS multiple (sub-file #70.03). | 
| MAGVUSR | LITERAL |  |  | DUZ of the person logged into the Importer II application. | 
| MAGVUSRDV | LITERAL |  | true | User Logon Division of the person logged into the Importer II application. | 
| RAIMTYP | LITERAL |  | true | This is the radiology image type. | 
| RASTDRPT | LITERAL |  | true | IEN of an entry in the STANDARD REPORTS file (#74.1). | 
| RADXPRIM | LITERAL |  | true | IEN of an entry in the DIAGNOSTIC CODES file (#78.3). This will be theexam's Primary Diagnostic Code via the RAMISC parameter 'PRIMDXCODE'. | 
| RADXSCND | LIST |  | true | One or more IENs of entries in the DIAGNOSTIC CODES file (#78.3). Thesewill be the exam's Secondary Diagnostic Codes via the RAMISC parameter'SECDXCODE'. | 




 ###### Generated on January 11th 2017, 6:39:43 am