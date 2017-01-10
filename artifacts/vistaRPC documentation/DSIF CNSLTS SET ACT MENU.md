---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SET ACT MENU 

 property | value 
--- | --- 
 label | DSIF CNSLTS SET ACT MENU
 tag | SETACTM
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC returns the permissions a user has for the Consult selected, and what actions they are allowed to take. Cloned from ORQQCN SET ACT MENU

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCNS | LITERAL |  | true | This is the Consult IEN you wish to check the user's access for. | 