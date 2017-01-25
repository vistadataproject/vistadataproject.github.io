---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCMC ROLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCMC ROLE{:/}
 tag | {::nomarkdown}ROLE{:/}
 routine | [SCMCTSK2](http://code.osehra.org/dox/Routine_SCMCTSK2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Determine boxes based on Role{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SCPATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PatchVersion ^ ClientVersion{:/} | 
| {::nomarkdown}ROLE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}ROLE^TEAM POSITION{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}