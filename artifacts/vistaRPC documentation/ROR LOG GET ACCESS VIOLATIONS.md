---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LOG GET ACCESS VIOLATIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LOG GET ACCESS VIOLATIONS{:/}
 tag | {::nomarkdown}AVLIST{:/}
 routine | [RORRP013](http://code.osehra.org/dox/Routine_RORRP013_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The ROR LOG GET ACCESS VIOLATIONS remote procedure returns the list ofaccess violation events recorded in the provided time frame.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The STDT parameter defines the start date for the search of the events. Bydefault (if $G(STDT)'>0), the search starts from the earliest record ofthe ROR LOG file.{:/} | 
| {::nomarkdown}ENDT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The ENDT parameter defines the end date for the search of the events. Bydefault (if $G(ENDT)'>0), the search continues to the last record of theROR LOG file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}