---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC FM VERIFY FILE 

 property | value 
--- | --- 
 label | DSIC FM VERIFY FILE
 tag | VFILE
 routine | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
 return value type | SINGLE VALUE
 description | This will verify whether or not a file exists.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILE | LITERAL | 30 | true | This is number of the file (or subfile) or the full name of the file that you wish to verify. | 