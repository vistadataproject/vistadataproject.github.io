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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ENTITY | LITERAL | 30 | true | The ENTITY parameter defines the context that the parameter value isassociated with.  The values that are used most often are the \USR\ (user settings) and \PKG\ (package settings).  See the DBIA #2263 for more details. | 
| vs:Input_Parameter-8994_02 | NAME | LITERAL | 30 | true | The NAME parameter defines the name of the GUI parameter. | 
| vs:Input_Parameter-8994_02 | OLDINST | LITERAL | 60 | true | Current instance name of the GUI parameter. | 
| vs:Input_Parameter-8994_02 | NEWINST | LITERAL | 60 | true | New instance name for the GUI parameter. | 