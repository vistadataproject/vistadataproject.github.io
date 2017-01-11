---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTRP INSTRUMENT REPORT 

 property | value 
--- | --- 
 label | YTRP INSTRUMENT REPORT
 tag | INTRMNT
 routine | [YTRPWRP](http://code.osehra.org/dox/Routine_YTRPWRP_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure allows staff to print out psychological tests andinterview reports.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| YSDFN | LITERAL | 30 | true | YSDFN is a pointer to the Patient file #2. | 
| YSXT | LITERAL | 60 | true | This varible contains \Test Completion Date,Name of the test\, for example3000721,223.The Name of the test and Completion Date are field 0.1 and field 1 of thePsych Instrument Patient file #601.2. | 




 Generated on January 11th 2017, 7:15:04 am