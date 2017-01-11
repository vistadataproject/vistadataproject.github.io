---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG FIELD VALIDATE 

 property | value 
--- | --- 
 label | MAG FIELD VALIDATE
 tag | DVAL
 routine | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
 return value type | SINGLE VALUE
 description | This provides an interface with the VA Fileman Database Server (DBS)API for the single field validator: VAL^DIE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILE | LITERAL | 99 | true | This is the file number that contains the attribute to be validated. | 
| IENS | LITERAL | 99 | true | This is the record number or place holder of the entry being validated. | 
| FIELD | LITERAL | 99 | true | This is the number of the file attribute to be validated. | 
| FLAGS | LITERAL | 99 | true | This is the option set of parameters defined for the VAL^DIEE External value is returned in RESULT(0). F FDA node is set for valid data in array identified by FDA_ROOT. H Help (single ?) is returned if VALUE is not valid. R Record identified by IENS is verified to exist and to be editable. Donot  include \R\ if there are placeholders in the IENS. U Don't perform key validation. Without this flag, the data in VALUE ischecked to ensure that no duplicate keys are created and that key field values are not deleted. | 
| VALUE | LITERAL | 99 | true | This is the value to be validated. | 




Generated on January 11th 2017, 6:34:23 am