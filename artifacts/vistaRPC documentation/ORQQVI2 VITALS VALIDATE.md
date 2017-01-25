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
 Input parameters | {::nomarkdown}ORQDATA{:/}
 First comment | {::nomarkdown}<pre> Given the array ORQDATA passed in by PCE Device Interface whose<br/> format is described in the PCE Device Interface documentation, this<br/> procedure will validate the Vitals data.  If the data is invalid,<br/> the procedure will return the errors in the form given above.<br/></pre>{:/}
 Code | {::nomarkdown}  N ORVITALS,ORQVIT<br> K ORRETURN<br> S ORRETURN(0)=1<br> D PREVITAL(.ORRETURN,.ORVITALS,.ORQVIT,.ORQDATA)<br> D VALIDATE^GMRVPCE0(.ORVITALS)<br> D POSTVIT(.ORRETURN,.ORQVIT,.ORVITALS){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}