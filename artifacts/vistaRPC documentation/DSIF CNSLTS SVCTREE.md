---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SVCTREE 

 property | value 
--- | --- 
 label | DSIF CNSLTS SVCTREE
 tag | SVCTREE
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | ARRAY
 description | This RPC returns a list of Consult Services. Cloned from ORQQCN SVCTREE.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFPUR | LITERAL | 1 | true | This is the purpose for the service list: 0 - Display only1 - Forward or Order | 