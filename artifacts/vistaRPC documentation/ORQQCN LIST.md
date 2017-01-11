---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN LIST 

 property | value 
--- | --- 
 label | ORQQCN LIST
 tag | LIST
 routine | [ORQQCN](http://code.osehra.org/dox/Routine_ORQQCN_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list of consult requests for a patient within optional date rangeand optional service.


### Method description

 property | value 
--- | --- 
 Method comment | return patient's consult requests between start date and stop date for the service and status indicated:

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL | 16 | true | Patient DFN from File #2 (Patient File.) | 
| START DATE | LITERAL | 16 |  | Optional start date to begin the search. | 
| STOP DATE | LITERAL | 16 |  | Optional stop date to end the search. | 
| SERVICE | LITERAL | 16 |  | Optional consulting service from the Request Service file (#123.5). | 




 ###### Generated on January 11th 2017, 6:39:42 am