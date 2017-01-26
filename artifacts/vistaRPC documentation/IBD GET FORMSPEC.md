---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBD GET FORMSPEC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}IBD GET FORMSPEC{:/}
 tag | {::nomarkdown}GETFS{:/}
 routine | [IBDFBK1](http://code.osehra.org/dox/Routine_IBDFBK1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will return the Form Specification file (as an array) that isused by the scanning software to recognize a form.  Lines longer than255 characters are truncated on the server and flagged with \~~~\indicating the need to concatenate on the client.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FORMTYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input the form type number from the top of the form, (the left mostnumber){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}