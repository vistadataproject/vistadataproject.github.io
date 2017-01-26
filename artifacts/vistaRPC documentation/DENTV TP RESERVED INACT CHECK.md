---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP RESERVED INACT CHECK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP RESERVED INACT CHECK{:/}
 tag | {::nomarkdown}CHKINA{:/}
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will perform a check on the IEN inputted and return whether or not the transaction found has been inactivated (for view only) or left alone. The check will inactivate a reserved transaction if it is more than 8 days old.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DENTIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This input value must be the IEN for the record contained in the DENTAL TP RESERVE (#228.7) file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:15 am</p>{:/}