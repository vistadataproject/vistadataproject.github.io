---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE1 NONCOUNT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE1 NONCOUNT{:/}
 tag | {::nomarkdown}NONCOUNT{:/}
 routine | [ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Is a given HOSPITAL LOCATION (file 44) a non-count clinic?  (DBIA #964){:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Is the location a non-count clinic? (DBIA #964)
 Input Parameters | {::nomarkdown}ORLOC{:/}
 Lines | ```{::nomarkdown} Q:'ORLOC<br/> S ORY=$S($P($G(^SC(ORLOC,0)),U,17)="Y":1,1:0)<br/>```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Pointer to file 44.{:/} | 




 Generated on January 13th 2017, 7:11:27 am