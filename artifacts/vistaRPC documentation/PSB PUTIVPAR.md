---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB PUTIVPAR 

 property | value 
--- | --- 
 label | {::nomarkdown}PSB PUTIVPAR{:/}
 tag | {::nomarkdown}PUTPAR{:/}
 routine | [PSBPARIV](http://code.osehra.org/dox/Routine_PSBPARIV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Sets 53.66 or parameters file w/input from 53.66 if ward is not \ALL\{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBWARD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}^1=Ward name^2=IEN of ward as in file 53.66{:/} | 
| {::nomarkdown}PSBPARS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IV type - \A\ for Additive          \P\ for Piggyback          \H\ for Hyperal          \C\ for Chemo          \S\ for Syringe          \S\ for Syringe ^2-^16 Setting     1 for Warning     2 for Non-Verify     3 for Invalid{:/} | 
| {::nomarkdown}PSBDIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}^1=IEN of division as in the Ward Location file (File #42){:/} | 




 Generated on January 13th 2017, 6:55:29 am