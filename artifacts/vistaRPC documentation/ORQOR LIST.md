---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQOR LIST 

 property | value 
--- | --- 
 label | ORQOR LIST
 tag | LIST
 routine | [ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
 return value type | ARRAY
 description | Returns a list of patient orders.


### Method description

 property | value 
--- | --- 
 Method comment | return list of patient orders
 Leading comment lines | return PATIENT's orders for a display GROUP of type FLAG,between start (ORSDT) and end dates (OREDT),dates can be in Fileman or T, T-14 formats

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL | 16 | true | Patient DFN from Patient file [#2]. | 
| GROUP | LITERAL | 16 | true | Entry number of the desired display group from the Display Group File [#100.98]. | 
| FLAG | LITERAL | 16 | true | Flag identifying the context of the orders to be retreived. | 
| STARTDATE | LITERAL | 16 | true | The startdate for the order search in 'T' or Fileman format.Startdate is only considered when FLAG is '1' (return all orders). | 
| STOPDATE | LITERAL | 16 | true | The stopdate for the order search in 'T' or Fileman format.Stopdate is only considered when FLAG is '1' (return all orders). | 




Generated on January 11th 2017, 6:34:23 am