---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT TITLE 

 property | value 
--- | --- 
 label | TIU GET DOCUMENT TITLE
 tag | GETTITLE
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure returns the pointer to the TIU DOCUMENT DEFINITIONFILE that corresponds to the TITLE of the document identified in the TIUDAparameter.


### Method description

 property | value 
--- | --- 
 Method comment | Get the title from a TIU Document Record

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the internal entry number (IEN) of the document in the TIUDOCUMENT FILE (#8925). | 




 ###### Generated on January 11th 2017, 6:39:42 am