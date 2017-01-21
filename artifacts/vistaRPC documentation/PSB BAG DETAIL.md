---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB BAG DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB BAG DETAIL{:/}
 tag | {::nomarkdown}BAGDTL{:/}
 routine | [PSBRPC2](http://code.osehra.org/dox/Routine_PSBRPC2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a chronological detailed history on each specific IV bag that isselected.  [0] = -1^No History On File              [0] = Number of Nodes[1] = Action Date/Time^User ID^Action Status^Comments{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBUID{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IV unique ID number.{:/} | 
| {::nomarkdown}PSBORD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}IPM order number{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}