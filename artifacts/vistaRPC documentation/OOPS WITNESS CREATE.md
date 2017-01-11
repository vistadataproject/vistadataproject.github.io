---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS WITNESS CREATE 

 property | value 
--- | --- 
 label | OOPS WITNESS CREATE
 tag | ADDWITN
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This broker call will add a new Witness record for a case in the ASISTS Accident Reporting File (#2260).  It is called by the CA1 form in Delphi. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL |  | true | This is the IEN for the case in file 2260 that is having the witness info created. | 
| INFO | LITERAL |  | true | This is the Name, Street, City, State, Zip, and Date of Witness Signature. Itmust be in format... NAME^STREET^CITY^STATE^ZIP^DATESIGNED | 
| CMNT |  |  |  |  | 
| COMMENT | LITERAL | 256 | true | The input will be a string containing the comment to be added/associated withthe witness record created.  | 