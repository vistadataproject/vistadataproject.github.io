---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGDGRPD 

 property | value 
--- | --- 
 label | MAGGDGRPD
 tag | DGRPD
 routine | [MAGGTCPR](http://code.osehra.org/dox/Routine_MAGGTCPR_source.html)
 return value type | GLOBAL ARRAY
 description | Displays the Patient Profile in a Delphi Window. The call first opens the'IMAGING WORKSTATION' device and then calls EN^DGRPD.Then calls EN^DGRPD 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | Patient's DFN. | 