---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DDR DELETE ENTRY 

 property | value 
--- | --- 
 label | DDR DELETE ENTRY
 tag | DIKC
 routine | [DDR1](http://code.osehra.org/dox/Routine_DDR1_source.html)
 return value type | SINGLE VALUE
 description | This function deletes an entry in a FileMan file using ^DIK.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMETERS | LIST | 512 | true | This array contains the following parameters necessary to call ^DIK.   \ROOT\ global root of file or subfile   \IEN\  internal entry number of record to be deleted in IENS format | 