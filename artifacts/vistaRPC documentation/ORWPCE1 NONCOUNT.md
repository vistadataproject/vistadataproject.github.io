---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE1 NONCOUNT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE1 NONCOUNT{:/}
 tag | {::nomarkdown}NONCOUNT{:/}
 routine | [ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Is a given HOSPITAL LOCATION (file 44) a non-count clinic?  (DBIA #964){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Pointer to file 44.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NONCOUNT^[ORWPCE1](http://code.osehra.org/dox/Routine_ORWPCE1_source.html)
 Method comment | Is the location a non-count clinic? (DBIA #964)
 Input parameters | {::nomarkdown}ORLOC{:/}
 Code | {::nomarkdown}  Q:'ORLOC<br> S ORY=$S($P($G(^SC(ORLOC,0)),U,17)="Y":1,1:0)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}