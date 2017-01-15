---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV PERSON CLASS INQUIRY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV PERSON CLASS INQUIRY{:/}
 tag | {::nomarkdown}PROVINQ{:/}
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is an RPC wrapper for the Kernal call $$GET^XUA4A72 to determine the active providers class information.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The provider DUZ that is to be checked.{:/} | 
| {::nomarkdown}DENTDAT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the date used to determine the providers class (in case a historical lookup is required).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}