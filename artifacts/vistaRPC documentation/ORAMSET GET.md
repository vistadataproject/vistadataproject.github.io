---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAMSET GET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORAMSET GET{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [ORAMSET](http://code.osehra.org/dox/Routine_ORAMSET_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the Anticoagulation Manager parameters for the division which theuser is logged into.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINICLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the entry of the clinic in the HOSPITAL LOCATION FILE (#44), expressed in variable pointer format (e.g., \32;SC(\).{:/} | 
| {::nomarkdown}VISITDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the date/time of the visit in Intenal VA FileMan format (e.g., 3140929.1400).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}