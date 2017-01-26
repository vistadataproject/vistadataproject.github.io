---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF VERIFY FB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF VERIFY FB{:/}
 tag | {::nomarkdown}VER{:/}
 routine | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Used ot verify a Fee Basis patient is eligible.Pass in DFN, Output1 OR {0 = not verified} OR {-1 - error}^DishonorableDischarge^Agent orange only 1st piece codes: '1' VERIFIED PROCEED                 '0' NOT VERIFED                 '-1' ERROR^MESSAGE{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass in IEN of the Patient File (DFN){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}