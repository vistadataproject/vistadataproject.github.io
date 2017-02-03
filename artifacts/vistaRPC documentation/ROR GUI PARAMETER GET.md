---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR GUI PARAMETER GET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR GUI PARAMETER GET{:/}
 tag | {::nomarkdown}GETPARM{:/}
 routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR GUI PARAMETER GET remote procedure retrieves the value of the GUIparameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INSTANCE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}91{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The INSTANCE parameter defines the instance name of the GUI parameter. It can also contain the parameter name as the second \^\-piece (by default, the \ROR GUI PARAMETER\ is used).{:/} | 
| {::nomarkdown}ENTITY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The ENTITY parameter defines the area(s) where the parameter value issearched for. By default ($G(ENTITY)=\\), the \ALL\ value is used (see theDBIA #2263 for more details). The other values that are used most oftenare the \USR\ (user settings) and the \PKG\ (package settings).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}