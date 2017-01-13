---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CP GET VISITS 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 CP GET VISITS{:/}
 tag | {::nomarkdown}VISITS{:/}
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown} This RPC call simply call a CP Routine that lists visits for a patient. Imaging prompts the user with this list when a Visit String is needed by CP to create a Note.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of Patient{:/} | 
| {::nomarkdown}MAGCONS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown} Consult Number, returned in the Query to get patient CP Requests.{:/} | 




 Generated on January 13th 2017, 5:52:13 am