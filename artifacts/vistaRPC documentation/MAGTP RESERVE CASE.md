---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGTP RESERVE CASE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGTP RESERVE CASE{:/}
 tag | {::nomarkdown}LOCKR{:/}
 routine | [MAGTP003](http://code.osehra.org/dox/Routine_MAGTP003_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Set/Unset a logical lock on a case for reservation{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Lock/Unlock Flag{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Lock/Unlock Flag{:/} | 
| {::nomarkdown}AP Section{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}AP Section{:/} | 
| {::nomarkdown}Year{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Year{:/} | 
| {::nomarkdown}Access Number{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Access Number{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}