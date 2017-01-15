---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM DIALOG ACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM DIALOG ACTIVE{:/}
 tag | {::nomarkdown}ACTIVE{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}For a list of reminders [#811.9] returns same list with status to indicateif an active dialog exists for the reminder.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINICAL REMINDER IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of clinical reminder iens [#811.9] to be checked.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ACTIVE^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Method comment | DBIA 3080
 First comment | {::nomarkdown}ORQQPXRM REMINDER EVALUATION{:/}
 Input parameters | {::nomarkdown}ORLIST{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}