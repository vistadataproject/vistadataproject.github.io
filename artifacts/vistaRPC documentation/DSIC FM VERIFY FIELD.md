---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC FM VERIFY FIELD 

 property | value 
--- | --- 
 label | DSIC FM VERIFY FIELD
 tag | VFIELD
 routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
 return value type | SINGLE VALUE
 description | This will verify whether or not a field exists in a file (or subfile).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL | 30 | true | This is the number of the file (or subfile) or the full file name which contains the field to be verified. | 
| vs:Input_Parameter-8994_02 | FIELD | LITERAL | 30 | true | This the the number of the field or its full field name. | 