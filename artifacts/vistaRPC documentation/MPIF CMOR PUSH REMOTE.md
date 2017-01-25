---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF CMOR PUSH REMOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF CMOR PUSH REMOTE{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [MPIFRCMP](http://code.osehra.org/dox/Routine_MPIFRCMP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call (RPC) allows the DQ team to remotely create a change of CMOR push.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ICN - not including the checksum{:/} | 
| {::nomarkdown}NCMOR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The station number of the site that is to become the CMOR.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}