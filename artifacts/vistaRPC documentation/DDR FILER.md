---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR FILER 

 property | value 
--- | --- 
 label | DDR FILER
 tag | FILEC
 routine | [DDR3](http://code.osehra.org/dox/Routine_DDR3_source.html)
 return value type | ARRAY
 description | Generic call to file edits into FM file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | EDIT RESULTS | LIST | 512 | true | Results of editing to be placed in FDA array by broker. | 
| vs:Input_Parameter-8994_02 | EDIT MODE | LITERAL | 3 | true | Is processing in edit or add data mode. | 