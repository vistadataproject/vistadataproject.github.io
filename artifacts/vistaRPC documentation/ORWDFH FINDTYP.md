---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH FINDTYP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH FINDTYP{:/}
 tag | {::nomarkdown}FINDTYP{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return type of dietetics order based on display group.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FINDTYP^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return type of dietetics order based on display group
 Input parameters | {::nomarkdown}DGRP{:/}
 Code | {::nomarkdown}  S VAL=$P($G(^ORD(100.98,DGRP,0)),U,3)<br> S:VAL="D AO" VAL="A" S VAL=$E(VAL){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}