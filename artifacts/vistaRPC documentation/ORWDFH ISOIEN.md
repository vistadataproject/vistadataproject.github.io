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

 property | value 
 --- | --- 
 Method | ISOIEN^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return IEN for the Isolation/Precaution orderable item
 Code | {::nomarkdown}  S VAL=$O(^ORD(101.43,"S.PREC","ISOLATION PROCEDURES",0)){:/}


### CPRS

[Orders/rODDiet.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODDiet.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}