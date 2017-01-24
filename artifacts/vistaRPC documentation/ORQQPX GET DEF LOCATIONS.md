---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX GET DEF LOCATIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX GET DEF LOCATIONS{:/}
 tag | {::nomarkdown}GETDEFOL{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the contents of the ORQQPX DEFAULT LOCATIONS parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Current Location.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDEFOL^[ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 Method comment | Return Default Outside Locations
 Code | {::nomarkdown}  N SRV,ORERR<br> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br> D GETLST^XPAR(.ORDEFLOC,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX DEFAULT LOCATIONS","Q",.ORERR){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}