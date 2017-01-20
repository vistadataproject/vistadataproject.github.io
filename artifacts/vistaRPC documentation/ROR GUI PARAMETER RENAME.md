---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR GUI PARAMETER RENAME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR GUI PARAMETER RENAME{:/}
 tag | {::nomarkdown}RENPARM{:/}
 routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR GUI PARAMETER RENAME remote procedure renames the instance of the parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENTITY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The ENTITY parameter defines the context that the parameter value isassociated with.  The values that are used most often are the \USR\ (user settings) and \PKG\ (package settings).  See the DBIA #2263 for more details.{:/} | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The NAME parameter defines the name of the GUI parameter.{:/} | 
| {::nomarkdown}OLDINST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Current instance name of the GUI parameter.{:/} | 
| {::nomarkdown}NEWINST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}New instance name for the GUI parameter.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}