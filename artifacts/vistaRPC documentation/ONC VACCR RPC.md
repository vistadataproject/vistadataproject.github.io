---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ONC VACCR RPC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ONC VACCR RPC{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [ONCRPC](http://code.osehra.org/dox/Routine_ONCRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This REMOTE PROCEDURE outputs OncoTrax data in the VACCR record layoutformat.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATEUSED{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATEUSED specifies the date field which will be searched for casesto be extracted: 1 = DATE CASE COMPLETED2 = DATE CASE LAST CHANGED{:/} | 
| {::nomarkdown}START{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter specifies the start date of DATE parameter.{:/} | 
| {::nomarkdown}END{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter specifies the end date of DATE parameter.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}