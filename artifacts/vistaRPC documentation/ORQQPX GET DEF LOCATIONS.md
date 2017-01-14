---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPX GET DEF LOCATIONS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET DEF LOCATIONS{:/}
 tag | {::nomarkdown}GETDEFOL{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the contents of the ORQQPX DEFAULT LOCATIONS parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Current Location.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDEFOL^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Return Default Outside Locations
 Code | ```  N SRV,ORERR
 S SRV=$$GET1^DIQ(200,DUZ,29,"I")
 D GETLST^XPAR(.ORDEFLOC,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX DEFAULT LOCATIONS","Q",.ORERR)```




 Generated on January 14th 2017, 7:26:35 am