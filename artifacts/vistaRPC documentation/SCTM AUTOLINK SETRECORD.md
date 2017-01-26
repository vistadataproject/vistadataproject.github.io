---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCTM AUTOLINK SETRECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCTM AUTOLINK SETRECORD{:/}
 tag | {::nomarkdown}SETREC{:/}
 routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This API sets the list of autolinks for a team.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LIST OF AUTOLINKS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}List of entities autolinked to the team.Each subscript in the array will have the following structure:Piece--------1- AutoLink Display Text2- Autolink Type3- AutoLink Entity IENNormally, the display text value is the .01 field but when more identifyinginformation is needed, then this string could contain more.{:/} | 
| {::nomarkdown}TEAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to entry in Team file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}