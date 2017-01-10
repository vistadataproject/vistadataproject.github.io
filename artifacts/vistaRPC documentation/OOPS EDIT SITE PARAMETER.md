---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS EDIT SITE PARAMETER 

 property | value 
--- | --- 
 label | OOPS EDIT SITE PARAMETER
 tag | PARMEDT
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | SINGLE VALUE
 description | This broker call files changes to the Site Parameter File (#2262) name and District Office, if made.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 256 | true | This input parameter contains the IEN of the Site Parameter File (#2262), theSite Parameter Name, and the District Office.  The format is:IEN^SITE NAME^DISTRICT OFFICE NAME. | 