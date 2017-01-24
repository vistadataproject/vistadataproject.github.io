---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH NFSLOC READY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH NFSLOC READY{:/}
 tag | {::nomarkdown}OPLOCOK{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Return '1' if hospital location has been entered in NUTRITION LOCATION file for outpatient meal ordering.Return '0' if not yet entered.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | OPLOCOK^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | OK to order OP Meals from this location
 Input parameters | {::nomarkdown}ORLOC{:/}
 Code | {::nomarkdown}  I 'ORLOC S ORY=0 Q<br> S ORY=$S($L($$NFSLOC^FHOMAPI(ORLOC))>0:1,1:0)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}