---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV FM FIND 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV FM FIND{:/}
 tag | {::nomarkdown}FIND{:/}
 routine | [DSIVFM05](http://code.osehra.org/dox/Routine_DSIVFM05_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown} This provides a wrapper around the FIND^DIC API.  It exposes more of the functionality of the API to the RPC than the old DSIC DDR FINDER RPC.  For a lookup value, this RPC will return all matches.  It allows for input a multiple screening logic which would be ANDed together.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown} The INPUT(n) = tag^value   where   tag = LIST^DIC input parameter name such as         FILE  IENS  FIELDS  FLAGS  NUMBER  INDEX  VAL  SCREEN   value = value for that input parameter  For those input parameters that allow an array, you can pass that array in the tag such as SCREEN()^lookup value{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}