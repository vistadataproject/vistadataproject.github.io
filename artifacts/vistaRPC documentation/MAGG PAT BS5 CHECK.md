---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG PAT BS5 CHECK 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGG PAT BS5 CHECK{:/}
 tag | {::nomarkdown}BS5CHK{:/}
 routine | [MAGGTPT1](http://code.osehra.org/dox/Routine_MAGGTPT1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC calls the GUIBS5A^DPTLK6 API.  To return a list of Patients ifany match the Last Name and Last 4 SSN of the input DFN.It is the Similiar Patient Check.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of Patient to check.{:/} | 




 Generated on January 13th 2017, 6:15:57 am