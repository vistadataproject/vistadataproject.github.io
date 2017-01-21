---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV FIND ENTRIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV FIND ENTRIES{:/}
 tag | {::nomarkdown}FIND{:/}
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns unprocessed INSURANCE BUFFER file entries for a given patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient internal entry number (in FILE #2).{:/} | 
| {::nomarkdown}FLDS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the requested buffer entry fields that can be retrieved using Fileman (i.e. not an API call).  For example: \@;.01I;.02;.03;.04I;20.01;40.02;40.03;40.09;60.04\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}