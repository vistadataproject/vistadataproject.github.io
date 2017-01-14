---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGQ ALL SERVER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ ALL SERVER{:/}
 tag | {::nomarkdown}ALLSERV{:/}
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of all online file servers at a site.This network location file list requires the following from eachcandidate:ONLINEtype: MAGpath does not contain: \:\NON-ROUTER {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}null{:/} |  |  |  | {::nomarkdown}No input parameter required.{:/} | 
| {::nomarkdown}GROUP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This value should be either \GROUP\ or \ALL\ to differentiatebetween a Current Write Group Update and an All share update.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}