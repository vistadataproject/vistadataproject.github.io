---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWD1 PARAM 

 property | value 
--- | --- 
 label | ORWD1 PARAM
 tag | PARAM
 routine | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
 return value type | SINGLE VALUE
 description | Returns the prompt and device parameters for Automated order prints


### Method description

 property | value 
--- | --- 
 Method comment | Returns in 'Y' the print parameters
 Leading comment lines | Y=Prompt for CC^Prompt for L ^Prompt for R ^Prompt for W ^CC device ^L Device ^R Device ^WC device,Device Params returned in internal;external format, the rest are internal,CC=Chart Copy,L=Label,R=Requisitions,WC=Work Copy,'Prompt for' values (internal):,0 for no prompts- chart copy is automatically generated.,1 to prompt for chart copy and ask which printer should be used.,2 to prompt for chart copy and automatically print to the,printer defined in the CHART COPY PRINT DEVICE field.,* don't print.,LOC=Ptr to location ^SC(LOC,

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOC | LITERAL | 1 | true | Pointer to the Hospital location file where the prints are generatedfrom. | 




 Generated on January 11th 2017, 7:15:04 am