---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MD TMDOUTPUT 

 property | value 
--- | --- 
 label | {::nomarkdown}MD TMDOUTPUT{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [MDRPCOO](http://code.osehra.org/dox/Routine_MDRPCOO_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Manages the output of VistA data to the client via the default HFS device.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OPTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Currently set to EXECUTE as the only option.{:/} | 
| {::nomarkdown}RTN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the routine to produce the output.  Currently to client producesthis parameter in the form of TAG^ROUTINE(needed parameters) to simplifythe calling process.{:/} | 




 Generated on January 13th 2017, 7:15:28 am