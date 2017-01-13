---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD TMG DATES 

 property | value 
--- | --- 
 label | {::nomarkdown}KMPD TMG DATES{:/}
 tag | {::nomarkdown}TMGDATES{:/}
 routine | [KMPDU7](http://code.osehra.org/dox/Routine_KMPDU7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return Timing dates in format:         array(0)=FMStartDate^ExtStartDate^FMEndDate^ExtEndDate        array(1)=FMDate^ExtDate        array(2)=FMDate^ExtDate        array(...)=...{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SUBSCRIPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Timing subscript - free text         example: \ORWCV\{:/} | 




 Generated on January 13th 2017, 7:11:27 am