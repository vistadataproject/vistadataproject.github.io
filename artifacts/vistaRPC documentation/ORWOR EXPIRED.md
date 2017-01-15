---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR EXPIRED 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR EXPIRED{:/}
 tag | {::nomarkdown}EXPIRED{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the Fileman Date/Time to begin searching for expired orders.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | EXPIRED^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | return FM date/time to begin search for expired orders
 Code | {::nomarkdown}  N HRS<br> S HRS=$$GET^XPAR("ALL","ORWOR EXPIRED ORDERS",1,"I")<br> S ORY=$$FMADD^XLFDT($$NOW^XLFDT,"","-"_HRS,"","")<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}