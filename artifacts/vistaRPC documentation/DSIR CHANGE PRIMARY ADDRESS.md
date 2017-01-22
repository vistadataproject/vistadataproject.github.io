---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR CHANGE PRIMARY ADDRESS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR CHANGE PRIMARY ADDRESS{:/}
 tag | {::nomarkdown}CHPRIADD{:/}
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC updates the pointer to the primary address for a givenrequestor.  The addresS is stored in the 5 node of 19620.12.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RQSTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}RQSTR - Pointer to the requestor file (19620.12){:/} | 
| {::nomarkdown}ADDRPTR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}ADDRPTR - Pointer to the address file (19620.92){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}