---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB GETIVPAR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB GETIVPAR{:/}
 tag | {::nomarkdown}GETPAR{:/}
 routine | [PSBPARIV](http://code.osehra.org/dox/Routine_PSBPARIV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns the IV parameters by IV type, as defined for a ward in file 53.66.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBWARD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The IEN of the ward from file 53.66 or the word 'ALL'.{:/} | 
| {::nomarkdown}PSBIVPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The IV type - 'A' for Additive              'P' for Piggyback              'H' for Hyperal              'C' for Chemo              'S' for Syringe{:/} | 
| {::nomarkdown}PSBDIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}^1=IEN of division as in the Ward Location file (File #42){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}