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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILEIEN | LITERAL |  |  | This is the IEN of the instance file entry to be inactivated. | 
| vs:Input_Parameter-8994_02 | SOPIEN | LITERAL |  |  | This is the IEN of the related SOP entry. | 
| vs:Input_Parameter-8994_02 | OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation. | 