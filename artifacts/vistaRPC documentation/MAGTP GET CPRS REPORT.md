---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGTP GET CPRS REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGTP GET CPRS REPORT{:/}
 tag | {::nomarkdown}GETREP{:/}
 routine | [MAGTP007](http://code.osehra.org/dox/Routine_MAGTP007_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get lab info for a case (ex.: SP 12 2). The layout is similar to the one in CPRS.The original code has been used by RPC call ORWRP REPORT TEXT.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LRSS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}AP Section{:/} | 
| {::nomarkdown}YEAR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Year{:/} | 
| {::nomarkdown}LRAN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Accession Number{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}