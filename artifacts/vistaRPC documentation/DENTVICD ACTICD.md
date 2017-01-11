---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTVICD ACTICD 

 property | value 
--- | --- 
 label | DENTVICD ACTICD
 tag | ACTICD
 routine | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
 return value type | SINGLE VALUE
 description | Verify that an ICD code is active as of a certain date

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VICD | LITERAL | 7 | true | This is the IEN or .01 field value from the DIAGNOSIS file (#80 - ^ICD9) | 
| CDT | LITERAL | 14 | true | This date will be sued to check if the code was active as of that date. Default is today. | 
| FUN | LITERAL | 1 | true | This flag will allow for the RPC to be used as an intrensic function. This value is not needed for GUI calls. | 
| SYS | LITERAL | 2 | true | This is the ICD coding system you wish to use. 1  = ICD-9 Diagnosis2  = ICD-9 Procedure30 = ICD-10 Diagnosis (Default)31 = ICD-10 Procedure | 




 Generated on January 11th 2017, 7:15:04 am