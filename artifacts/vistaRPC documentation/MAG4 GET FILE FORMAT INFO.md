---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 GET FILE FORMAT INFO 

 property | value 
--- | --- 
 label | MAG4 GET FILE FORMAT INFO
 tag | INFO
 routine | [MAGGSFT](http://code.osehra.org/dox/Routine_MAGGSFT_source.html)
 return value type | ARRAY
 description | Returns information given a file extension. (Format)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGEXT | LITERAL | 10 | true | This is the file Format. (The file extension)examples: JPG, TGA, DOC, HTM | 