---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG CPRS RAD EXAM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG CPRS RAD EXAM{:/}
 tag | {::nomarkdown}IMAGEC{:/}
 routine | [MAGGTRAI](http://code.osehra.org/dox/Routine_MAGGTRAI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of Images for the Radiology Exam selected in CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Data that CPRS sends Imaging, in the windows messaging format.i.e. VISTA Messaging between applications.example : 'RPT^CPRS^29027^RA^i79029185.9998-1'{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}