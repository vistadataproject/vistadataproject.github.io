---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS WITNESS EDIT 

 property | value 
--- | --- 
 label | OOPS WITNESS EDIT
 tag | EDTWITN
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This broker call files any changes entered on an existing Witness.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL | 256 | true | This input parameter contains the IEN and Witness Number for the Witnessbeing entered.  It is in the format: IEN^WIT. | 
| INFO | LITERAL | 256 |  | This input parameter contains the address information for the witness. It isin the format: NAME^STREET^CITY^STATE^ZIP^DATE SIGNED. | 
| CMNT | LITERAL | 256 |  | This input parameter contains the text for the Witness Comment. | 




 ###### Generated on January 11th 2017, 6:39:43 am