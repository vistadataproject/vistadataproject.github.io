---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAM ORDER 

 property | value 
--- | --- 
 label | ORAM ORDER
 tag | ORDER
 routine | [ORAM](http://code.osehra.org/dox/Routine_ORAM_source.html)
 return value type | SINGLE VALUE
 description | This RPC supports placing INR and CBC orders from the Anticoagulator application.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | This is the patient id (i.e., the entry number of the patient in file 2). | 
| ORDOC | LITERAL |  | true | This is the ID of the ordering provider in file 200 (i.e., his \DUZ\). | 
| ORQO | LITERAL |  | true | This is the internal entry number of the Quick Order to be placed (for either INR or CBC) in the Order Dialog file #101.41. | 
| ORLOC | LITERAL |  | true | This is the internal entry number of the ordering location in the Hospital Location file (#42). | 
| ORCDT | LITERAL |  | true | This is the expected Collection Date/Time of the lab test being ordered, in external date/time format. | 




Generated on January 11th 2017, 6:34:23 am