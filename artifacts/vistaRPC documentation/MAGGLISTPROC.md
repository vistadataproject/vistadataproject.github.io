---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGGLISTPROC 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGGLISTPROC{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [MAGGTMC](http://code.osehra.org/dox/Routine_MAGGTMC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return a list of Medicine procedures/subspecialities.List can be subset of whole if site uses Imaging Capture Security Keys to limit the users access to only Medicine Procedures that they have a MAGCAP ... Key for.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGGZY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} |  | {::nomarkdown}Not using this input for any processing in Version 2.5It might be used for a future version.Kept in the parameter list, for backward compatibility.---If MAGGZY=1, then add procedure PRINT NAME (full name) in output.{:/} | 




 Generated on January 13th 2017, 7:11:27 am