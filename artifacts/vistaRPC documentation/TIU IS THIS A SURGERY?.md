---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU IS THIS A SURGERY? 

 property | value 
--- | --- 
 label | TIU IS THIS A SURGERY?
 tag | ISSURG
 routine | [TIUSROI](http://code.osehra.org/dox/Routine_TIUSROI_source.html)
 return value type | SINGLE VALUE
 description | BOOLEAN RPC which evaluates whether the title indicated is that of aSURGICAL REPORT or PROCEDURE REPORT (NON-O.R.).


### Method description

 property | value 
--- | --- 
 Method comment | Boolean RPC to evaluate whether TITLE is a SURGERY REPORT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TITLE | LITERAL |  |  | This is the record number in file 8925.1 for the title selected. | 