---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD TMG DATES 

 property | value 
--- | --- 
 label | KMPD TMG DATES
 tag | TMGDATES
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | ARRAY
 description | Return Timing dates in format:         array(0)=FMStartDate^ExtStartDate^FMEndDate^ExtEndDate        array(1)=FMDate^ExtDate        array(2)=FMDate^ExtDate        array(...)=...

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SUBSCRIPT | LITERAL | 60 | true | Timing subscript - free text         example: \ORWCV\ | 




 ###### Generated on January 11th 2017, 6:39:43 am