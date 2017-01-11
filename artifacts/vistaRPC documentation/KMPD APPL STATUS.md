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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| APPLICATION | LITERAL | 5 | true | \H\ - hl7\R\ - rum\S\ - sagg\T\ - timing | 
| GLOBAL | LITERAL | 30 | true | Global in which to store data.  Ex: ^TMP($J) | 




 Generated on January 11th 2017, 7:15:04 am