---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDER DETAIL{:/}
 tag | {::nomarkdown}REMDET{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a clinical reminder{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from Patient file [#2]{:/} | 
| {::nomarkdown}CLINICAL REMINDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9]{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | REMDET^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Method comment | DBIA 3078
 First comment | {::nomarkdown}<br/>ORQQPXRM REMINDER INQUIRY{:/}
 Input parameters | {::nomarkdown}ORPT<br>ORIEN{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}