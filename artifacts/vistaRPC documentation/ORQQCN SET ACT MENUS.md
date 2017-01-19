---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SET ACT MENUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SET ACT MENUS{:/}
 tag | {::nomarkdown}SETACTM{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Based on the IEN of the consult passed in, returns a string representingvarious facets of the user's access level for that consult and service.This allows dynamic enabling/disabling of GUI menus based on the user'sability to act on that particular consult.  {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of the selected consult.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | SETACTM^[ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 Method comment | set action menus in GUI based on service of selected consult
 Input parameters | {::nomarkdown}GMRCO{:/}
 Code | {::nomarkdown}  Q:+$G(GMRCO)=0<br> N ORFLG<br> S Y=0<br> D CPRS^GMRCACTM(GMRCO,1)<br> Q:'$D(ORFLG(GMRCO))<br> S Y=ORFLG(GMRCO){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}