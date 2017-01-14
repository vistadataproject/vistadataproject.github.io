---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX GET DEF LOCATIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET DEF LOCATIONS{:/}
 tag | {::nomarkdown}GETDEFOL{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the contents of the ORQQPX DEFAULT LOCATIONS parameter.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return Default Outside Locations
 Lines | {::nomarkdown} N SRV,ORERR<br/> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> D GETLST^XPAR(.ORDEFLOC,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX DEFAULT LOCATIONS","Q",.ORERR){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Current Location.{:/} | 




 Generated on January 13th 2017, 7:15:28 am