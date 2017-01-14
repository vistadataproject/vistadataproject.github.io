---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VAFC REMOTE AUDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}VAFC REMOTE AUDIT{:/}
 tag | {::nomarkdown}AUDIT{:/}
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call will allow users to pull an audit reportfrom a remote site.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The VALUE can come in as 'I.ICN', 'S.SSN', 'D.DFN'or 'P.NAME'{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}SDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}EDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:15:28 am