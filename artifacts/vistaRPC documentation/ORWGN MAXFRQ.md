---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWGN MAXFRQ 

 property | value 
--- | --- 
 label | ORWGN MAXFRQ
 tag | MAXFRQ
 routine | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
 return value type | SINGLE VALUE
 description | This RPC checks if the frequency of an ICD-10 search term is than the maximum allowed ICD-10 return values.


### Method description

 property | value 
--- | --- 
 Method comment | Checks if frequency of search term is greater than
 Leading comment lines | max ICD-10 setting,Input Value: ORTRM = Search term to look up,Return Value: 2 pieces (first piece is 0 or 1, second piece is,occurrance frequency of search term),First piece:,0 - Search term frequency is less than,maximum return,1 - Search term frequency is greater,than maximum return

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORTRM | LITERAL | 99 | true | This is the search term to be looked up. | 




 ###### Generated on January 11th 2017, 6:39:43 am