---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM REMINDER WEB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM REMINDER WEB{:/}
 tag | {::nomarkdown}WEB{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Web addresses for selected reminder{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINICAL REMINDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9]{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | WEB^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 Method comment | DBIA 3078
 First comment | {::nomarkdown}<pre><br/>PXRM REMINDER DIALOG (TIU)</pre>{:/}
 Input parameters | {::nomarkdown}ORREM{:/}


### CPRS

[rReminders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}