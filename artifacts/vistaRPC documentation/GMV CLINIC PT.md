---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV CLINIC PT 

 property | value 
--- | --- 
 label | GMV CLINIC PT
 tag | CLINPTS
 routine | [GMVCLIN](http://code.osehra.org/dox/Routine_GMVCLIN_source.html)
 return value type | ARRAY
 description | This procedure lists patients who have an appointment for a selectedclinic and a given period of time.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CLIN | LITERAL | 30 | true | CLIN contains the name of the selected clinic from the Hospital Locationfile (#44). | 
| BDATE | LITERAL | 30 | true | BDATE contains TODAY, TOMORROW, YESTERDAY, PAST WEEK or PAST MONTH. | 




 ###### Generated on January 11th 2017, 6:39:43 am