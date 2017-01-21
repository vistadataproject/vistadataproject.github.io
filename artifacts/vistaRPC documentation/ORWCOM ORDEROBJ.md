---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCOM ORDEROBJ 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCOM ORDEROBJ{:/}
 tag | {::nomarkdown}ORDEROBJ{:/}
 routine | [ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns COM Objects for order accept{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORGRP{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Display Group IEN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ORDEROBJ^[ORWCOM](http://code.osehra.org/dox/Routine_ORWCOM_source.html)
 Method comment | Returns Accept Order COM Object
 Input parameters | {::nomarkdown}ORGRP{:/}
 Code | {::nomarkdown}  D GETOBJ(.ORY,"ORWCOM ORDER ACCEPTED",ORGRP){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rEventHooks.pas">rEventHooks.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}