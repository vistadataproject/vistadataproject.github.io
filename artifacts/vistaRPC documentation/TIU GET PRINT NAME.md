---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET PRINT NAME 

 property | value 
--- | --- 
 label | TIU GET PRINT NAME
 tag | GETPNAME
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | SINGLE VALUE
 description | This Remote Procedure receives a pointer to the TIU DOCUMENT DEFINITIONFILE (#8925.1) and returns a string containing the Print Name of thecorresponding Document Definition.


### Method description

 property | value 
--- | --- 
 Method comment | Get Print Name of a Document

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUTYPE | LITERAL |  | true | This is a pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1). | 




 Generated on January 11th 2017, 7:15:04 am