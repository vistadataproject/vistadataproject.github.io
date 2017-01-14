---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF EXT PDAT REMOTE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF EXT PDAT REMOTE{:/}
 tag | {::nomarkdown}PATINFO{:/}
 routine | [MPIFEXT2](http://code.osehra.org/dox/Routine_MPIFEXT2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Extended PDAT call remote.  ICN or SSN can be passed.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}ICN for patient requesting data on.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN for patient data to be returned on.{:/} | 
| {::nomarkdown}RPC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}EXIST{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If there is no value or 0 is passed, then a new request for data should be made.  If there is a 1 passed, then if there is an existing request in the ^XTMP(\MPIF EXT PDAT\,ICN/SSN,SITE) global, then that request should be used to return the data -- request had already been made.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}