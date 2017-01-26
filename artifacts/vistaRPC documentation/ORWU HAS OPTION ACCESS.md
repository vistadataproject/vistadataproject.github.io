---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU HAS OPTION ACCESS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU HAS OPTION ACCESS{:/}
 tag | {::nomarkdown}HASOPTN{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if the user has access to the specified menu option.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Either the Option Name or Option IEN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HASOPTN^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | returns TRUE if the user has access to a menu option
 Input parameters | {::nomarkdown}OPTION{:/}
 Code | {::nomarkdown}  S VAL=+$$ACCESS^XQCHK(DUZ,OPTION)<br> I VAL'>0 S VAL=0<br> E  S VAL=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}