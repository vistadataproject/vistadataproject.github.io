---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SET ACT MENUS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SET ACT MENUS{:/}
 tag | {::nomarkdown}SETACTM{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Based on the IEN of the consult passed in, returns a string representingvarious facets of the user's access level for that consult and service.This allows dynamic enabling/disabling of GUI menus based on the user'sability to act on that particular consult.  {:/}


### Method description

 property | value 
 --- | --- 
 Method comment | set action menus in GUI based on service of selected consult
 Input Parameters | {::nomarkdown}GMRCO{:/}
 Lines | {::nomarkdown} Q:+$G(GMRCO)=0<br/> N ORFLG<br/> S Y=0<br/> D CPRS^GMRCACTM(GMRCO,1)<br/> Q:'$D(ORFLG(GMRCO))<br/> S Y=ORFLG(GMRCO){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CONSULT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of the selected consult.{:/} | 




 Generated on January 13th 2017, 7:15:27 am