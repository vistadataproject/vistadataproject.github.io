---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR GETTXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR GETTXT{:/}
 tag | {::nomarkdown}GETTXT{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the text of an existing order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get text of an order
 Input Parameters | {::nomarkdown}IFN{:/}
 Lines | {::nomarkdown} I $L(IFN,";")=1 S IFN=IFN_";1"<br/> D TEXT^ORQ12(.LST,IFN,255){:/}




 Generated on January 13th 2017, 7:15:27 am