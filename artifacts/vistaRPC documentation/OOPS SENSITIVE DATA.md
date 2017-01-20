---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS SENSITIVE DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SENSITIVE DATA{:/}
 tag | {::nomarkdown}SENSDATA{:/}
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Broker call is used to pass data to the bulletin routine for supervisorsaccessing sensitive data and not creating an ASISTS case. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SDUZ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the DUZ of the supervisor accessing the Employee's data.{:/} | 
| {::nomarkdown}EMP{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Employee's name for which the sensitive date has been viewed.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}