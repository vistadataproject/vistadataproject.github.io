---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VAFC REMOTE PDAT 

 property | value 
--- | --- 
 label | {::nomarkdown}VAFC REMOTE PDAT{:/}
 tag | {::nomarkdown}PDAT{:/}
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call will return the text Patient MPI/PD Data Inquiry report to a remote site.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This should be the ICN without the 'V' or the checksum.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am