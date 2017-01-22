---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB SEND MSG TWO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB SEND MSG TWO{:/}
 tag | {::nomarkdown}MSG2{:/}
 routine | [DVBAB1A](http://code.osehra.org/dox/Routine_DVBAB1A_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}THIS RPC IS THE SECOND FOR THE CAPRI MSG 2507 EXAMTHIS ONE PRODUCES A MESSAGE FOR EACH EXAM THAT IS COMPLETED{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}PERSON FILE DFN{:/} | 
| {::nomarkdown}RIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}2507 REQUEST IEN #396.3{:/} | 
| {::nomarkdown}ELIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}2507 EXAM LIST #396.4{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}