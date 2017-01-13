---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCN32 PROCEDURES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCN32 PROCEDURES{:/}
 tag | {::nomarkdown}PROC{:/}
 routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of orderable procedures.  Same as ORDITM^ORWDX except: 1.  Checks inactive date in file 101.43 against NOW instead of DT.2.  Checks for at least one service that can perform the procedure.3.  Returns variable pointer to procedure in 4th piece of each item.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a subset of orderable procedures
 Leading comment lines | {::nomarkdown}.Return Array, Starting Text, Direction<br/>^ORD(101.43,"S.PROC",UpperCase,DA)=Mne^MixedCase^InactvDt^.01IfMne<br/>Y(n)=IEN^.01 Name^.01 Name  -or-  IEN^Synonym <.01 Name>^.01 Name{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}start{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 
| {::nomarkdown}direction{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  |  | 




 Generated on January 13th 2017, 6:44:47 am