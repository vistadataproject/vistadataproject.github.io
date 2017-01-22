---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV NO INSURANCE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV NO INSURANCE{:/}
 tag | {::nomarkdown}NOI{:/}
 routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Allows ICB to set the NO COVERAGE VERIFICATION DATE in the Billing Patient (#354) file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the patient ien.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the field and value to update for ICB file 354.  The format is DATA(field)=value.  Example is DATA(60)=3060328.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}