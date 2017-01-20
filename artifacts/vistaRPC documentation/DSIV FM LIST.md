---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV FM LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV FM LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [DSIVFM05](http://code.osehra.org/dox/Routine_DSIVFM05_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}The RPC provides a wrapper around the LIST^DIC API. It exposes more of the functionality of the API than the DSIV DDR LISTER RPC. For a lookup value, return all entries starting from that lookup value and which collates after that lookup value.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown} The INPUT(n) = tag^value  where   tag = LIST^DIC input parameter name such as         FILE  IENS  FIELDS  FLAGS  NUMBER  INDEX  FROM  PART  SCREEN   value = value for that input parameter  The INDEX variable consists only of a single index name.  For those input parameters that allow an array, you can pass that array in the tag such as FROM(2)^lookup value{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}