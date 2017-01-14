---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD CPT MOD 

 property | value 
--- | --- 
 label | {::nomarkdown}MAG DICOM GET RAD CPT MOD{:/}
 tag | {::nomarkdown}CPTMOD{:/}
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to return a valid entry in the CPT MODIFIER file (#81.3).{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CPTMOD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the CPT modifier.{:/} | 
| {::nomarkdown}MAGDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the date used during the lookup process for screening'active' CPT modifiers.{:/} | 




 Generated on January 13th 2017, 7:15:28 am