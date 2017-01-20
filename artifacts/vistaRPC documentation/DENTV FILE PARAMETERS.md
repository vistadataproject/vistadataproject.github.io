---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV FILE PARAMETERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV FILE PARAMETERS{:/}
 tag | {::nomarkdown}PAR{:/}
 routine | [DENTVTP0](http://code.osehra.org/dox/Routine_DENTVTP0_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows the Dental software to file word processing type parameters.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Entity is the level where the parameter is stored (USR, PKG, SYS), etc.{:/} | 
| {::nomarkdown}PAR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Parameter is the name of the parameter that values are stored under.{:/} | 
| {::nomarkdown}INST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Instance is defaulted to 1 if not defined, otherwise it represents the next level where parameters are stored within the entity/parameter combination.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA is the value of the parameter, passed as a list to allow setting of word processing parameter data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}