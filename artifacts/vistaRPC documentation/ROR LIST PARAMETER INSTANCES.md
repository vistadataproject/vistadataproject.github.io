---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST PARAMETER INSTANCES 

 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST PARAMETER INSTANCES{:/}
 tag | {::nomarkdown}GETPLIST{:/}
 routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} |  | {::nomarkdown}The NAME parameter defines the name of the parameter.{:/} | 
| {::nomarkdown}ENTITY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}The ENTITY parameter defines the area(s) where the parameter value issearched for. By default ($G(ENTITY)=\\), the \ALL\ value is used (see theDBIA #2263 for more details). The other values that are used most oftenare the \USR\ (user settings) and the \PKG\ (package settings).{:/} | 
| {::nomarkdown}PREFIX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} |  | {::nomarkdown}Only those instances are selected whose names begin from a value of this parameter.  By default ($G(PREFIX)=\\), all instances are selected.{:/} | 




 Generated on January 13th 2017, 6:55:29 am