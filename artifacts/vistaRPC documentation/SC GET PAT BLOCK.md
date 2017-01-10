---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SC GET PAT BLOCK 

 property | value 
--- | --- 
 label | SC GET PAT BLOCK
 tag | PTGET
 routine | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
 return value type | ARRAY
 description | Retrieve a block of patients available to be assigned from the ^TMPholding global built by the SC BLD PAT.... remote procedure call.Input $J, the starting number in the block, the ending number in theblock, and the last entry in the global.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAMETER LIST | LIST | 512 | true |  | 