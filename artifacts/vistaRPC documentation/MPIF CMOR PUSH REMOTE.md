---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF CMOR PUSH REMOTE 

 property | value 
--- | --- 
 label | {::nomarkdown}MPIF CMOR PUSH REMOTE{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [MPIFRCMP](http://code.osehra.org/dox/Routine_MPIFRCMP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call (RPC) allows the DQ team to remotely create a change of CMOR push.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ICN - not including the checksum{:/} | 
| {::nomarkdown}NCMOR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The station number of the site that is to become the CMOR.{:/} | 




 Generated on January 13th 2017, 7:11:27 am