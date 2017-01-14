---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR EXPIRED 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR EXPIRED{:/}
 tag | {::nomarkdown}EXPIRED{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the Fileman Date/Time to begin searching for expired orders.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return FM date/time to begin search for expired orders
 Lines | {::nomarkdown} N HRS<br/> S HRS=$$GET^XPAR("ALL","ORWOR EXPIRED ORDERS",1,"I")<br/> S ORY=$$FMADD^XLFDT($$NOW^XLFDT,"","-"_HRS,"","")<br/>{:/}




 Generated on January 13th 2017, 7:15:28 am