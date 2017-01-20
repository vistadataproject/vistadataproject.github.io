---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS GET SUPERVISOR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET SUPERVISOR{:/}
 tag | {::nomarkdown}SUPER{:/}
 routine | [OOPSGUI4](http://code.osehra.org/dox/Routine_OOPSGUI4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call looks up the Supervisor from the new person file.  The IEN of theclaim is passed in to make sure that the person involved is not the supervisor.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name or the partial name of the individual being looked up.{:/} | 
| {::nomarkdown}CASESSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the SSN for the Person Involved in the case.  It will be used to assurethat the Supervisor for the case is not the same as the Person Involved.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}