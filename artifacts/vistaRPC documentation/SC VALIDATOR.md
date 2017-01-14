---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC VALIDATOR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC VALIDATOR{:/}
 tag | {::nomarkdown}VALC{:/}
 routine | [SCUTBK](http://code.osehra.org/dox/Routine_SCUTBK_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This function allows the application to validate user input toa field before filing data. The call uses the database server VAL^DIEcall.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This array contains the following parameters necessary to call VAL^DIE:    - \FILE\  - file number    - \IENS\  - internal entry numbers    - \IENS\  - internal entry numbers    - \VALUE\ - user input value{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}