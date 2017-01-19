---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 SAVLKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 SAVLKUP{:/}
 tag | {::nomarkdown}SAVLKUP{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This saves the last Adhoc Health Summary lookup used by a user in CPRS.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the value passed to the parameter ORWRP ADHOC LOOKUP  0: Name  1: Abbreviation  2: Display Header{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVLKUP^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | save Adhoc lookup selection
 Input parameters | {::nomarkdown}VAL{:/}
 Code | {::nomarkdown}  N ORERR<br> S OK=""<br> D EN^XPAR(DUZ_";VA(200,","ORWRP ADHOC LOOKUP",1,VAL,.ORERR)<br> I ORERR S OK=VAL_":"_ORERR{:/}


### CPRS

[rReports.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}