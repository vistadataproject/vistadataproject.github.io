---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUPS PERSONQUERY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUPS PERSONQUERY{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [XUPSQRY](http://code.osehra.org/dox/Routine_XUPSQRY_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}XUPSLNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Required if lookup by name.{:/} | 
| {::nomarkdown}XUPSFNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}XUPSSSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}XUPSPROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}XUPSSTN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}XUPSMNM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}XUPSDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}XUPSVPID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Required if lookup by VPID.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}