---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPL ADD SAVE 

 property | value 
--- | --- 
 label | ORQQPL ADD SAVE
 tag | ADDSAVE
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | SINGLE VALUE
 description | Add new problem record


### Method description

 property | value 
--- | --- 
 Method comment | SAVE NEW RECORD
 Leading comment lines | RETURN - Problem IFN if success, 0 otherwise,ADDARRAY - array used for indirect sets of  GMPFLDS()

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMPDFN | LITERAL |  |  |  | 
| GMPROV |  |  |  |  | 
| GMPVAMC | LITERAL |  |  |  | 
| ADDARRAY | LIST |  |  | ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET | 




 Generated on January 11th 2017, 7:15:03 am