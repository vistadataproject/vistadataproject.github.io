---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTVX2 GETWP 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTVX2 GETWP{:/}
 tag | {::nomarkdown}GETWP{:/}
 routine | [DENTVX2](http://code.osehra.org/dox/Routine_DENTVX2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC takes in an entity, parameter name, and instance number and returns the word processing information for the given instance of the parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Entity Name   SYS = System{:/} | 
| {::nomarkdown}PAR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The name of the stored parameter from which you wish to obtain word processing fields.{:/} | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the instance of the parameter you wish to return. If no value is passed, it will default to 1.{:/} | 




 Generated on January 13th 2017, 6:24:33 am