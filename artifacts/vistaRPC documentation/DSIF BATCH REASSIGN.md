---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF BATCH REASSIGN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH REASSIGN{:/}
 tag | {::nomarkdown}REASSIGN{:/}
 routine | [DSIFBAT4](http://code.osehra.org/dox/Routine_DSIFBAT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used to reassign an open batch from one user to a second user, must have the FBAASUPERVISOR key to use.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OLD USER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ of Existing user that batch is assigned to currently.{:/} | 
| {::nomarkdown}New User{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DUZ of user to reassign batch to.{:/} | 
| {::nomarkdown}Batch{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Batch IEn to reassign{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}