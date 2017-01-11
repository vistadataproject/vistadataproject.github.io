---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR GUI PARAMETER RENAME 

 property | value 
--- | --- 
 label | ROR GUI PARAMETER RENAME
 tag | RENPARM
 routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
 return value type | ARRAY
 description | The ROR GUI PARAMETER RENAME remote procedure renames the instance of the parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENTITY | LITERAL | 30 | true | The ENTITY parameter defines the context that the parameter value isassociated with.  The values that are used most often are the \USR\ (user settings) and \PKG\ (package settings).  See the DBIA #2263 for more details. | 
| NAME | LITERAL | 30 | true | The NAME parameter defines the name of the GUI parameter. | 
| OLDINST | LITERAL | 60 | true | Current instance name of the GUI parameter. | 
| NEWINST | LITERAL | 60 | true | New instance name for the GUI parameter. | 




 Generated on January 11th 2017, 7:15:04 am