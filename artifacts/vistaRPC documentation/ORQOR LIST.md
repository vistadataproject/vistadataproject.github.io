---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQOR LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQOR LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patient orders.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return list of patient orders
 Leading comment lines | return PATIENT's orders for a display GROUP of type FLAG
between start (ORSDT) and end dates (OREDT)
dates can be in Fileman or T, T-14 formats

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN from Patient file [#2].{:/} | 
| {::nomarkdown}GROUP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Entry number of the desired display group from the Display Group File [#100.98].{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag identifying the context of the orders to be retreived.{:/} | 
| {::nomarkdown}STARTDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The startdate for the order search in 'T' or Fileman format.Startdate is only considered when FLAG is '1' (return all orders).{:/} | 
| {::nomarkdown}STOPDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The stopdate for the order search in 'T' or Fileman format.Stopdate is only considered when FLAG is '1' (return all orders).{:/} | 




 Generated on January 13th 2017, 5:52:13 am