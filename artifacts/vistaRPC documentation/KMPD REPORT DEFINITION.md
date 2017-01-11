---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD REPORT DEFINITION 

 property | value 
--- | --- 
 label | KMPD REPORT DEFINITION
 tag | REPDEF
 routine | [KMPDU4](http://code.osehra.org/dox/Routine_KMPDU4_source.html)
 return value type | WORD PROCESSING
 description | Get Report Definition from file #8973.3 (CP REPORT).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REPORT | LITERAL | 60 | true | Report Name for file #8973.3 (CP REPORT). Either field #.01 (NAME) orfield #2.01 (DISPLAY NAME) can be used. | 




 Generated on January 11th 2017, 7:15:04 am