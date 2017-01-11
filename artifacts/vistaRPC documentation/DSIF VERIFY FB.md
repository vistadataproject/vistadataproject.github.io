---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF VERIFY FB 

 property | value 
--- | --- 
 label | DSIF VERIFY FB
 tag | VER
 routine | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
 return value type | SINGLE VALUE
 description | Used ot verify a Fee Basis patient is eligible.Pass in DFN, Output1 OR {0 = not verified} OR {-1 - error}^DishonorableDischarge^Agent orange only 1st piece codes: '1' VERIFIED PROCEED                 '0' NOT VERIFED                 '-1' ERROR^MESSAGE

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 50 | true | Pass in IEN of the Patient File (DFN) | 




 Generated on January 11th 2017, 7:15:04 am