---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORRHCQ QRYITR 

 property | value 
--- | --- 
 label | ORRHCQ QRYITR
 tag | QRYITR
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | SINGLE VALUE
 description | Executes the query for a patient.  An iterator is passed in, in the format:   ListSource Subscript ^ DFN ^ Item# The value returned includes the records found and the next iterator:   PtSearched ^ RecordCount ^ ListSource Subscript ^ NextDFN ^ Next Item#


### Method description

 property | value 
--- | --- 
 Method comment | Do query for the current iterator
 Leading comment lines | VAL=PtSearched^RecordsFound^Iterator

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORRITR | LITERAL |  | true | Iterator used to get the next patient in the query. | 




 ###### Generated on January 11th 2017, 6:39:43 am