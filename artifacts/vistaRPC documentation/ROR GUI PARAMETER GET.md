---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR GUI PARAMETER GET 

 property | value 
--- | --- 
 label | ROR GUI PARAMETER GET
 tag | GETPARM
 routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
 return value type | ARRAY
 description | The ROR GUI PARAMETER GET remote procedure retrieves the value of the GUIparameter.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INSTANCE | LITERAL | 91 | true | The INSTANCE parameter defines the instance name of the GUI parameter. It can also contain the parameter name as the second \^\-piece (by default, the \ROR GUI PARAMETER\ is used). | 
| vs:Input_Parameter-8994_02 | ENTITY | LITERAL | 30 |  | The ENTITY parameter defines the area(s) where the parameter value issearched for. By default ($G(ENTITY)=\\), the \ALL\ value is used (see theDBIA #2263 for more details). The other values that are used most oftenare the \USR\ (user settings) and the \PKG\ (package settings). | 