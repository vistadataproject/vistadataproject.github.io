---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV V_M ALLDATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}GMV V_M ALLDATA{:/}
 tag | {::nomarkdown}VMDATA{:/}
 routine | [GMVGGR1](http://code.osehra.org/dox/Routine_GMVGGR1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call lists all vitals/measurements data for a givendate/time span. This remote procedure call is documented in Integration Agreement 4654.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}GMVDATA consists of 4 pieces of data:  piece1^piece2^piece3^piece4  where piece1 = File 2 IEN (i.e., DFN)       piece2 = Start date/time for search (FileMan internal format)       piece3 = End date/time for search (FileMan internal format)       piece4 = 0 (zero){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}