---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG PAT INFO 

 property | value 
--- | --- 
 label | MAGG PAT INFO
 tag | INFO
 routine | [MAGGTPT1](http://code.osehra.org/dox/Routine_MAGGTPT1_source.html)
 return value type | SINGLE VALUE
 description | Returns a string of '^' delimited pieces of patient information.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 90 | true |     DATA:  MAGDFN ^ NOLOG ^ ISICN       MAGDFN -- Patient DFN       NOLOG  -- 0/1; if 1, then do NOT update the Session log       ISICN  -- 0/1  if 1, then this is an ICN,       FLAGS  -- \D\ Include Deleted images    if 0 (default) this is a DFN ; Patch 41 | 