---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST PARAMETER INSTANCES 

 property | value 
--- | --- 
 label | ROR LIST PARAMETER INSTANCES
 tag | GETPLIST
 routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
 return value type | ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NAME | LITERAL | 60 |  | The NAME parameter defines the name of the parameter. | 
| vs:Input_Parameter-8994_02 | ENTITY | LITERAL | 30 |  | The ENTITY parameter defines the area(s) where the parameter value issearched for. By default ($G(ENTITY)=\\), the \ALL\ value is used (see theDBIA #2263 for more details). The other values that are used most oftenare the \USR\ (user settings) and the \PKG\ (package settings). | 
| vs:Input_Parameter-8994_02 | PREFIX | LITERAL | 30 |  | Only those instances are selected whose names begin from a value of this parameter.  By default ($G(PREFIX)=\\), all instances are selected. | 