---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ONC VACCR RPC 

 property | value 
--- | --- 
 label | ONC VACCR RPC
 tag | EN1
 routine | [ONCRPC](http://code.osehra.org/dox/Routine_ONCRPC_source.html)
 return value type | GLOBAL ARRAY
 description | This REMOTE PROCEDURE outputs OncoTrax data in the VACCR record layoutformat.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATEUSED | LITERAL | 1 | true | DATEUSED specifies the date field which will be searched for casesto be extracted: 1 = DATE CASE COMPLETED2 = DATE CASE LAST CHANGED | 
| START | LITERAL | 7 | true | This parameter specifies the start date of DATE parameter. | 
| END | LITERAL | 7 | true | This parameter specifies the end date of DATE parameter. | 




 ###### Generated on January 11th 2017, 6:39:43 am