---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV GET CANNED COMMENTS 

 property | value 
--- | --- 
 label | DENTV GET CANNED COMMENTS
 tag | GET
 routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
 return value type | ARRAY
 description | Returns the canned comments by provider, system, or both. The maximum number returned is 12. This limit is set by the GUI.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PROV | LITERAL | 32 | true | Provider IEN. | 
| vs:Input_Parameter-8994_02 | TYP | LITERAL | 1 | true | Type returns either S-system,U-user/provider,A-Both. | 
| vs:Input_Parameter-8994_02 | CAT | LITERAL | 1 | true | Category of the canned statements.1-Radiographic Findings2-Summary Assessment3-Treatment Plan4-Patient Education5-Disposition | 