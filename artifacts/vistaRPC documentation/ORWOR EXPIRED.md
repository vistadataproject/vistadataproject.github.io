---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWOR EXPIRED 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR EXPIRED{:/}
 tag | {::nomarkdown}EXPIRED{:/}
 routine | [ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the Fileman Date/Time to begin searching for expired orders.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EXPIRED^[ORWOR](http://code.osehra.org/dox/Routine_ORWOR_source.html)
 Method comment | return FM date/time to begin search for expired orders
 Code | ```  N HRS
 S HRS=$$GET^XPAR("ALL","ORWOR EXPIRED ORDERS",1,"I")
 S ORY=$$FMADD^XLFDT($$NOW^XLFDT,"","-"_HRS,"","")
```




 Generated on January 14th 2017, 7:26:36 am