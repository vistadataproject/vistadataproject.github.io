---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER CATEGORIES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDER CATEGORIES{:/}
 tag | {::nomarkdown}CATEGORY{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of all CPRS lookup categories and associated reminders{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}ORPT<br/>ORLOC{:/}
 Lines | ```
 D CATEGORY^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient Identifier from Patient file [#2]{:/} | 
| {::nomarkdown}HOSPITAL LOCATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient's HOSPITAL LOCATION [#44]. May be null.{:/} | 




 Generated on January 13th 2017, 6:55:29 am