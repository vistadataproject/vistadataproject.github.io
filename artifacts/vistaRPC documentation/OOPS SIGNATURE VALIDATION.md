---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS SIGNATURE VALIDATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS SIGNATURE VALIDATION{:/}
 tag | {::nomarkdown}DECODE{:/}
 routine | [OOPSGUIS](http://code.osehra.org/dox/Routine_OOPSGUIS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call will return the SIGNATURE BLOCK PRINTED NAME from the NewPerson File (#200) if the validation logic for signing the case passes.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the internal record number for the case.{:/} | 
| {::nomarkdown}CALL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the letter that cooresponds to the menu that wasused to access the option passing in the data.{:/} | 
| {::nomarkdown}FORM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This paramter contains the type of form that is being accessed.  As of ASISTS version 2, patch 5, the only value expected is CA7.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}