---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS LAST5 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS LAST5{:/}
 tag | {::nomarkdown}LAST5{:/}
 routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} Returns a list of patients matching LastNameInitial_Last4SSN based onRestricted Patient List.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}String literal containing patient's last name initial and last 4-digits ofthe SSN i.e., \T9999\.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}