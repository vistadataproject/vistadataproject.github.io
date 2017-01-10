---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGUPREFSAVE 

 property | value 
--- | --- 
 label | MAGGUPREFSAVE
 tag | SAVE
 routine | [MAGGTUP](http://code.osehra.org/dox/Routine_MAGGTUP_source.html)
 return value type | SINGLE VALUE
 description | Saves the Imaging user's window preferences to the Imaging User Preferencesfile.  ^MAG(2006.18,

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LIST |  | true | Each array node has window name as first piece followed by the windowparameters. | 