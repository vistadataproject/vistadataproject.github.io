---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN SET ACT MENUS 

 property | value 
--- | --- 
 label | ORQQCN SET ACT MENUS
 tag | SETACTM
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | SINGLE VALUE
 description | Based on the IEN of the consult passed in, returns a string representingvarious facets of the user's access level for that consult and service.This allows dynamic enabling/disabling of GUI menus based on the user'sability to act on that particular consult.  


### Method description

 property | value 
--- | --- 
 Method comment | set action menus in GUI based on service of selected consult

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CONSULT ID | LITERAL | 16 | true | Internal file number of the selected consult. | 




 ###### Generated on January 11th 2017, 6:39:42 am