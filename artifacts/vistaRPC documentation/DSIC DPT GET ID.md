---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DPT GET ID 

 property | value 
--- | --- 
 label | DSIC DPT GET ID
 tag | ID
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | SINGLE VALUE
 description | This returns the patient's identifier based upon their eligibility code.  For the VA, this will be the SSN (dashed) ^ last 4 of SSN.  For non-VA systems this will be that systems ID.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PAT | LITERAL | 35 | true | This is the patient's name, IFN, or any other acceptable lookup value. | 
| ISSSN | LITERAL | 1 | true | This is a Boolean flag (1 or 0).  If 1 then the lookup value in the PAT input parameter is the patient's SSN. | 
| VAPTYP | LITERAL | 5 | true | This is a pointer value to the Eligibility file (#8). | 