---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPXRM MENTAL HEALTH RESULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPXRM MENTAL HEALTH RESULTS{:/}
 tag | {::nomarkdown}MHR{:/}
 routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns progress note text based on the results of the test.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RESULT GROUP/ELEMENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to the result group for the test.{:/} | 
| {::nomarkdown}TEST RESULTS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Field to pass contents of the YS array (R1,R2,DFN,DUZ,ADATE etc).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | MHR^[ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
 First comment | {::nomarkdown}<pre> DBIA 3080</pre>{:/}
 Input parameters | {::nomarkdown}RESULT<br>ORES{:/}
 Code | {::nomarkdown}  D MHR^PXRMRPCC(.ORY,RESULT,.ORES){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rReminders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}