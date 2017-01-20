---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGG PAT INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGG PAT INFO{:/}
 tag | {::nomarkdown}INFO{:/}
 routine | [MAGGTPT1](http://code.osehra.org/dox/Routine_MAGGTPT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns a string of '^' delimited pieces of patient information.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}90{:/} | {::nomarkdown}true{:/} | {::nomarkdown}    DATA:  MAGDFN ^ NOLOG ^ ISICN       MAGDFN -- Patient DFN       NOLOG  -- 0/1; if 1, then do NOT update the Session log       ISICN  -- 0/1  if 1, then this is an ICN,       FLAGS  -- \D\ Include Deleted images    if 0 (default) this is a DFN ; Patch 41{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}