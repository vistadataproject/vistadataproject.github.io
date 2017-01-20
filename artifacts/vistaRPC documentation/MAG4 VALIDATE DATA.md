---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 VALIDATE DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 VALIDATE DATA{:/}
 tag | {::nomarkdown}VAL{:/}
 routine | [MAGGSIV](http://code.osehra.org/dox/Routine_MAGGSIV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Validates the Image Data Array{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGARRAY{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Each item in the Array is an '^' delimited piece of information.in the format Field^Value  OR  ActionCode^value{:/} | 
| {::nomarkdown}ALL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}All = 1 and All items in MAGARRAY will be validated.All = 0 and Validation stops after first item in MAGARRAY fails.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}