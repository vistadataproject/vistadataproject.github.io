---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV XPAR REPLACE INST 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV XPAR REPLACE INST{:/}
 tag | {::nomarkdown}REPL{:/}
 routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}For an existing entity/parameter/instance, this will change the value ofthat instance{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA = p1~p2~p3~~p5  where  p1 - entity - optional - defaults to \USR\  p2 - parameter - required  p3 - instance - required - current instance value  p5 - required - replacement value for current instance{:/} | 




 Generated on January 13th 2017, 6:44:48 am