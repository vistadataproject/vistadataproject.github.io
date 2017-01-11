---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS UPDATE LAST MRAR TIU IEN 

 property | value 
--- | --- 
 label | VPS UPDATE LAST MRAR TIU IEN
 tag | UPDATE
 routine | [VPSMRARU](http://code.osehra.org/dox/Routine_VPSMRARU_source.html)
 return value type | SINGLE VALUE
 description | This RPC will update the last Allergy and Modication review (MRAR) fora patient with TIU Document IEN.The last MRAR is defined as the last transaction date for a patient infile 853.5 (VPS MRAR PDO)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSNUM | LITERAL | 10 | true | This input parameter is the patient ID of the last MRAR record to be updated. Patient ID could be value of DFN, ICN, SSN, or VIC/CAC. | 
| VPSTIEN | LITERAL | 10 | true | This input parameter is the TIU Document IEN which is the value to store in the TIU NOTE IEN field of the last MRAR record for the patient in VPSMRAR PDO File (#853.5). | 
| VPSTYP | LITERAL | 7 | true | This input parameter is the Patient Type. Valid Value is DFN, SSN, VIC/CAC, or ICN | 




 Generated on January 11th 2017, 7:15:04 am