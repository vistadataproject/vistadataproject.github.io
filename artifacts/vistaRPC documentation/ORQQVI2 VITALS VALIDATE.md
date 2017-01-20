---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI2 VITALS VALIDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI2 VITALS VALIDATE{:/}
 tag | {::nomarkdown}VALIDATE{:/}
 routine | [ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALIDATE^[ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
 First comment | {::nomarkdown}<pre> Given the array ORQDATA passed in by PCE Device Interface whose<br/> format is described in the PCE Device Interface documentation, this<br/> procedure will validate the Vitals data.  If the data is invalid,<br/> the procedure will return the errors in the form given above.<br/></pre>{:/}
 Input parameters | {::nomarkdown}ORQDATA{:/}
 Code | {::nomarkdown}  N ORVITALS,ORQVIT<br> K ORRETURN<br> S ORRETURN(0)=1<br> D PREVITAL(.ORRETURN,.ORVITALS,.ORQVIT,.ORQDATA)<br> D VALIDATE^GMRVPCE0(.ORVITALS)<br> D POSTVIT(.ORRETURN,.ORQVIT,.ORVITALS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}