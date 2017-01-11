---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE INSTANCE FILE 

 property | value 
--- | --- 
 label | MAGV INACTIVATE INSTANCE FILE
 tag | INFILE
 routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
 return value type | ARRAY
 description | This RPC inactivates an instance file entry.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILEIEN | LITERAL |  |  | This is the IEN of the instance file entry to be inactivated. | 
| SOPIEN | LITERAL |  |  | This is the IEN of the related SOP entry. | 
| OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 




Generated on January 11th 2017, 6:34:23 am