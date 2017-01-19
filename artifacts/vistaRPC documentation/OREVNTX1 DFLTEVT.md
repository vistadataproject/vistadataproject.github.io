---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 DFLTEVT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 DFLTEVT{:/}
 tag | {::nomarkdown}DFLTEVT{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DFLTEVT^[OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 Method comment | Return default release event based on provider IFN
 Input parameters | {::nomarkdown}PVIFN{:/}
 Code | {::nomarkdown}  N CMEVTLST,IDX<br> S CMEVTLST="",IDX=0<br> D GETLST^OREV3(.CMEVTLST)<br> F  S IDX=$O(CMEVTLST(IDX)) Q:'IDX  D<br> . I $P($G(CMEVTLST(IDX)),U,2) S ORY=$P($G(CMEVTLST(IDX)),U) Q{:/}


### CPRS

[Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}