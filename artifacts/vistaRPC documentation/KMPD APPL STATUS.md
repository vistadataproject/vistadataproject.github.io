---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD APPL STATUS 

 property | value 
--- | --- 
 label | KMPD APPL STATUS
 tag | STATUS
 routine | [KMPDU6](http://code.osehra.org/dox/Routine_KMPDU6_source.html)
 return value type | GLOBAL ARRAY
 description | Returns the status for cm applications: HL7                                        RUM                                        SAGG                                        TIMING

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | APPLICATION | LITERAL | 5 | true | \H\ - hl7\R\ - rum\S\ - sagg\T\ - timing | 
| vs:Input_Parameter-8994_02 | GLOBAL | LITERAL | 30 | true | Global in which to store data.  Ex: ^TMP($J) | 