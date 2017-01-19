---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC FILE SINGLE VALUE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC FILE SINGLE VALUE{:/}
 tag | {::nomarkdown}VFILE{:/}
 routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}File a single value, similar to DIE stuff.  For those instances wherea single value needs to be filed or changed, and that value is notassociated with a specific component on the client side. ie changinga flag.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LIST ARRAY{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} | {::nomarkdown}File, Ien, Field number, and value to be filed.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}