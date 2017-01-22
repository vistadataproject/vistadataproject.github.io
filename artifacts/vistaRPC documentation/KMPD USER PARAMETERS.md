---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD USER PARAMETERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD USER PARAMETERS{:/}
 tag | {::nomarkdown}USRPARAM{:/}
 routine | [KMPDU6](http://code.osehra.org/dox/Routine_KMPDU6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Set/Get gui option info.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}35{:/} | {::nomarkdown}true{:/} | {::nomarkdown}User's DUZ.{:/} | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Type of call: 1 - get option info              2 - set option info{:/} | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}