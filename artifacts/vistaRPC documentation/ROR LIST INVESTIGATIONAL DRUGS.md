---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LIST INVESTIGATIONAL DRUGS 

 property | value 
--- | --- 
 label | ROR LIST INVESTIGATIONAL DRUGS
 tag | RORINV
 routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
 return value type | GLOBAL ARRAY
 description | [ROR LIST INVESTIGATIONAL DRUGS] returns a list of drugs that areclassified as investigational in file ^PS(50.605 and have a drug classof IN140 for HEPC or IN150 for HIV

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PART | LITERAL |  | true | A string that is passed in to filter the number of drugs returned.If the string is ?? then the call will return all drugs that qualify. | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL |  | true | If equal to 1 this will work with the HEPC Registry.  If equal to 2 willwork with the HIV Registry | 
| vs:Input_Parameter-8994_02 | NUMBER | LITERAL |  | true | DEPRECATED | 
| vs:Input_Parameter-8994_02 | FROM | LITERAL |  | true | DEPRECATED | 