---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ FS UPDATE 

 property | value 
--- | --- 
 label | MAGQ FS UPDATE
 tag | FSUPDT
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | SINGLE VALUE
 description | Updates the online file server entries in the Network location filewith the disk size and the space available.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL |  | true | The network location file (#2005.2) internal entry number of the recordto be updated.  | 
| vs:Input_Parameter-8994_02 | SPACE | LITERAL |  | true | The amount of space available for copying images. | 
| vs:Input_Parameter-8994_02 | SIZE | LITERAL |  | true | The disk capacity of the network share. | 