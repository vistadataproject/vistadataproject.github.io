---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTVX2 FILEWP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTVX2 FILEWP{:/}
 tag | {::nomarkdown}FILEWP{:/}
 routine | [DENTVX2](http://code.osehra.org/dox/Routine_DENTVX2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC takes in an entity, parameter name, instance number, and the data to be filed.  {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Entity you wish to assign this Word Processing parameter to.{:/} | 
| {::nomarkdown}PAR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The word processing parameter you wish to file.{:/} | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Instance value of the filed parameter.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array which contains the data to be stored in the parameter.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}