---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQBP UPDATE 

 property | value 
--- | --- 
 label | MAGQBP UPDATE
 tag | PGEUD
 routine | [MAGQBPG2](http://code.osehra.org/dox/Routine_MAGQBPG2_source.html)
 return value type | SINGLE VALUE
 description | Nulls the appropriate magnetic network location reference.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILENAME | LITERAL |  | true | The Image file name to be updated. | 
| vs:Input_Parameter-8994_02 | EXT | LITERAL |  | true | The image file extension to be updated. | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | Image file internal entry number to be updated. | 
| vs:Input_Parameter-8994_02 | Device | LITERAL |  | true | 'NET' or 'JB' to specify which Image system reference to update. | 