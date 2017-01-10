---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV RAD STAT EXAMINED 

 property | value 
--- | --- 
 label | MAGV RAD STAT EXAMINED
 tag | XMEXAMIN
 routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
 return value type | ARRAY
 description | Wraps calls to RAMAG EXAMINED RPC and re-formats output.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RADPT | LITERAL |  | true | IEN of the Patient in the RAD/NUC MED PATIENT file (#70). | 
| vs:Input_Parameter-8994_02 | RAEXAM1 | LITERAL |  | true | IEN of the REGISTERED EXAMS multiple (sub file #70.02). | 
| vs:Input_Parameter-8994_02 | RAEXAM2 | LITERAL |  | true | IEN in the EXAMINATIONS multiple (sub-file #70.03). | 
| vs:Input_Parameter-8994_02 | MAGVUSRDV | LITERAL |  | true | User Logon Division of the person logged into the Importer II application. | 
| vs:Input_Parameter-8994_02 | RAIMGTYP | LITERAL |  | true | This is the radiology imaging type parameter | 
| vs:Input_Parameter-8994_02 | MAGVUSR | LITERAL |  | true | DUZ of the person logged into the Importer II application. | 