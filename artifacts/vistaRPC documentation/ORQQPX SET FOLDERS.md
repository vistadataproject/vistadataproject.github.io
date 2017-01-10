---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPX SET FOLDERS 

 property | value 
--- | --- 
 label | ORQQPX SET FOLDERS
 tag | SETFLDRS
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | SINGLE VALUE
 description | Sets the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ORFLDRS | LITERAL |  | true | String containing a one character code for each folder visible in thereminder tree structure of the CPRS GUI.Visible Folder Codes are:  D=Due  A=Applicable  N=Not Applicable  E=Evaluated  O=Other | 