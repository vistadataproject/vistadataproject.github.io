---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR GET ALL FOR ENT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR GET ALL FOR ENT{:/}
 tag | {::nomarkdown}GETALL{:/}
 routine | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns values for all instances and values for an entity/parameter.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}240{:/} | {::nomarkdown}true{:/} | {::nomarkdown} DATA = \ARR(1)~ARR(2)~ARR(3)~ARR(4)~ARR(5)~ARR(6)\     e.g. \SYS~DSIV PAGE SETUP~~~~\  ARR(1) = entity     ARR(2) = param name    ARR(3) = instance  ARR(4) = value      ARR(5) = new instance value  ARR(6) = format for GETLST, Default = \Q\{:/} | 




 Generated on January 13th 2017, 5:52:13 am