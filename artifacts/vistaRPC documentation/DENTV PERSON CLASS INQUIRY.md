---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV PERSON CLASS INQUIRY 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV PERSON CLASS INQUIRY{:/}
 tag | {::nomarkdown}PROVINQ{:/}
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This is an RPC wrapper for the Kernal call $$GET^XUA4A72 to determine the active providers class information.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The provider DUZ that is to be checked.{:/} | 
| {::nomarkdown}DENTDAT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the date used to determine the providers class (in case a historical lookup is required).{:/} | 




 Generated on January 13th 2017, 6:55:29 am