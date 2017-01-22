---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS ALLKEYS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS ALLKEYS{:/}
 tag | {::nomarkdown}ALLKEYS{:/}
 routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return all the KEYS that a user holds.If the FLAG is set to some value the list of KEYS will be screened to only be those for J2EE use.This may need refinement as we get some experience.For FATKAAT and KAAJEE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN or DUZ of the user in question.If not passed in the RPC will user the current DUZ.{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Not in use at this time.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}