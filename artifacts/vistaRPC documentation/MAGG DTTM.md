---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG DTTM 

 property | value 
--- | --- 
 label | MAGG DTTM
 tag | DTTM
 routine | [MAGGTU5](http://code.osehra.org/dox/Routine_MAGGTU5_source.html)
 return value type | SINGLE VALUE
 description | Does a FileMan conversion using %DT=\T\ D ^%DT,$$FMTE^XLFDT(Y,\8\)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
|   X | LITERAL | 30 | true | User input to date/time field  | 
| INDT | LITERAL | 30 | true | This is the Date to be converted in External or Internal Format. | 
| NOFDT | LITERAL | 1 | true | This is a Flag to tell if Future Dates are allowed.The defaults is 0, so Future Dates Are Allowed.If 1, then NOFDT is true and NO Future Dates are Allowed. | 