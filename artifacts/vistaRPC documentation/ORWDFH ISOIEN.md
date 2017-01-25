---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH ISOIEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH ISOIEN{:/}
 tag | {::nomarkdown}ISOIEN{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the IEN for the Isolation/Precaution orderable item.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISOIEN^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return IEN for the Isolation/Precaution orderable item
 Code | {::nomarkdown}  S VAL=$O(^ORD(101.43,"S.PREC","ISOLATION PROCEDURES",0)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas">Orders/rODDiet.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}