---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWORR GETTXT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR GETTXT{:/}
 tag | {::nomarkdown}GETTXT{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the text of an existing order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTXT^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | get text of an order
 Input parameters | {::nomarkdown}IFN{:/}
 Code | ```  I $L(IFN,";")=1 S IFN=IFN_";1"<br/> D TEXT^ORQ12(.LST,IFN,255)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}